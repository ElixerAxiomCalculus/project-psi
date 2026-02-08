const SUMMARIZE_URL = "http://127.0.0.1:8000/summarize";
const ASK_URL = "http://127.0.0.1:8000/ask";
const EXECUTE_TOOL_URL = "http://127.0.0.1:8000/execute-tool";

const INJECT_DELAY_MS = 120;
const BLOCKED_PREFIXES = [
  "chrome://",
  "chrome-extension://",
  "edge://",
  "about:",
  "devtools://",
  "view-source:"
];

// Session management
const sessions = new Map(); // sessionId -> { tabId, pageUrl, pageTitle, ... }

function isInjectableUrl(url) {
  if (!url) return false;
  if (BLOCKED_PREFIXES.some((prefix) => url.startsWith(prefix))) return false;
  if (url.startsWith("https://chrome.google.com/webstore")) return false;
  return true;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ensureContentScript(tabId, tabUrlHint) {
  const url = tabUrlHint || (await chrome.tabs.get(tabId)).url;
  if (!isInjectableUrl(url)) return false;

  try {
    await chrome.tabs.sendMessage(tabId, { type: "PING" });
    return true;
  } catch {
    try {
      await chrome.scripting.executeScript({
        target: { tabId },
        files: ["content.js"]
      });

      await delay(40);
      await chrome.tabs.sendMessage(tabId, { type: "PING" });
      return true;
    } catch (error) {
      console.warn("Failed to ensure content script:", error);
      return false;
    }
  }
}

async function injectSidebar(tabId, tabUrlHint) {
  const ready = await ensureContentScript(tabId, tabUrlHint);
  if (!ready) return;

  try {
    await chrome.tabs.sendMessage(tabId, { type: "INJECT_UI" });
  } catch (error) {
    console.warn("Failed to inject sidebar:", error);
  }
}

// Auto-open removed: Sidebar only opens via extension icon click
// User can manually trigger sidebar via floating button state

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  const tabId = sender.tab?.id;

  // Handle GET_CURRENT_TAB
  if (req.type === "GET_CURRENT_TAB") {
    sendResponse({
      tab: {
        id: tabId,
        url: sender.tab?.url,
        title: sender.tab?.title
      }
    });
    return true;
  }

  if (!tabId) {
    sendResponse({ error: "Missing tab context." });
    return false;
  }

  // Handle EXECUTE_TOOL (new agent-based system)
  if (req.type === "EXECUTE_TOOL") {
    (async () => {
      try {
        const { sessionId, tool, input } = req.payload || req;

        // Get page content if needed
        let pageData = {};
        if (
          tool === "summarize_page" ||
          tool === "answer_question" ||
          tool === "get_page_content"
        ) {
          const ready = await ensureContentScript(tabId, sender.tab?.url);
          if (ready) {
            pageData = await chrome.tabs.sendMessage(tabId, {
              type: "SCRAPE_PAGE"
            });
          }
        }

        // Forward to backend
        const response = await fetch(EXECUTE_TOOL_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_id: sessionId || tabId.toString(),
            tool,
            input: { ...input, ...pageData }
          })
        });

        const data = await response.json();
        sendResponse({
          status: "success",
          data: data.result || data
        });
      } catch (error) {
        console.error("EXECUTE_TOOL failed:", error);
        sendResponse({
          status: "error",
          message: error.message || "Tool execution failed"
        });
      }
    })();

    return true;
  }

  // Handle CREATE_SESSION
  if (req.type === "CREATE_SESSION") {
    const { pageUrl, pageTitle } = req.payload || req;
    const sessionId = `session_${Date.now()}_${tabId}`;

    sessions.set(sessionId, {
      sessionId,
      tabId,
      pageUrl,
      pageTitle,
      createdAt: Date.now()
    });

    sendResponse({ sessionId });
    return true;
  }

  // Legacy: SUMMARIZE_PAGE (backward compatibility)
  if (req.type === "SUMMARIZE_PAGE") {
    (async () => {
      try {
        const ready = await ensureContentScript(tabId, sender.tab?.url);
        if (!ready) {
          sendResponse({ summary: "Failed to access page content." });
          return;
        }

        const pageData = await chrome.tabs.sendMessage(tabId, {
          type: "SCRAPE_PAGE"
        });

        const ai = await fetch(SUMMARIZE_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_id: tabId.toString(),
            ...pageData
          })
        });

        const data = await ai.json();
        sendResponse({
          summary: data.summary || "No summary returned."
        });
      } catch (error) {
        console.error("SUMMARIZE_PAGE failed:", error);
        sendResponse({
          summary: "Failed to analyze page."
        });
      }
    })();

    return true;
  }

  // Legacy: ASK_PAGE (backward compatibility)
  if (req.type === "ASK_PAGE") {
    (async () => {
      try {
        const ai = await fetch(ASK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_id: tabId.toString(),
            question: req.question
          })
        });

        const data = await ai.json();
        sendResponse({
          answer: data.answer || "No response."
        });
      } catch (error) {
        console.error("ASK_PAGE failed:", error);
        sendResponse({
          answer: "Agent error."
        });
      }
    })();

    return true;
  }

  // Handle CONFIRM_AUTOMATION
  if (req.type === "CONFIRM_AUTOMATION") {
    (async () => {
      try {
        // In production, this would show a confirmation UI
        // For now, we execute directly but with logging
        console.log("Automation action pending confirmation:", req.payload);

        const { sessionId, tool, params } = req.payload || req;

        const response = await fetch(EXECUTE_TOOL_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_id: sessionId || tabId.toString(),
            tool,
            input: params
          })
        });

        const data = await response.json();
        sendResponse({
          status: "success",
          data: data.result || data
        });
      } catch (error) {
        console.error("CONFIRM_AUTOMATION failed:", error);
        sendResponse({
          status: "error",
          message: error.message || "Automation failed"
        });
      }
    })();

    return true;
  }

  return false;
});

// Extension icon click handler - user manually opens sidebar
chrome.action.onClicked.addListener((tab) => {
  if (!tab?.id) return;
  injectSidebar(tab.id, tab.url);
});
