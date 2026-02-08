const PSI_HOST_ID = "psi-root-host";
const PSI_MOUNT_ID = "psi-root";
const PSI_GLOBAL_KEY = "__project_psi_content_state__";

const state = globalThis[PSI_GLOBAL_KEY] || (globalThis[PSI_GLOBAL_KEY] = {
  mountNode: null,
  loadingPromise: null,
  listenerAttached: false
});

function ensureProcessEnvShim() {
  if (typeof globalThis.process === "undefined") {
    globalThis.process = { env: { NODE_ENV: "production" } };
    return;
  }

  if (!globalThis.process.env) {
    globalThis.process.env = {};
  }

  if (typeof globalThis.process.env.NODE_ENV === "undefined") {
    globalThis.process.env.NODE_ENV = "production";
  }
}

function getPageContent() {
  const article = document.querySelector("article");
  const main = document.querySelector("main");

  let text = "";
  if (article) text = article.innerText;
  else if (main) text = main.innerText;
  else text = document.body ? document.body.innerText : "";

  return {
    title: document.title,
    url: window.location.href,
    content: text.substring(0, 12000)
  };
}

function ensureShadowMountNode() {
  if (state.mountNode?.isConnected) return state.mountNode;

  let host = document.getElementById(PSI_HOST_ID);
  if (!host) {
    host = document.createElement("div");
    host.id = PSI_HOST_ID;
    document.documentElement.appendChild(host);
  }

  const shadow = host.shadowRoot || host.attachShadow({ mode: "open" });

  let styleLink = shadow.querySelector('link[data-psi-style="1"]');
  if (!styleLink) {
    styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = chrome.runtime.getURL("react/sidebar.css");
    styleLink.setAttribute("data-psi-style", "1");
    shadow.appendChild(styleLink);
  }

  let mountNode = shadow.getElementById(PSI_MOUNT_ID);
  if (!mountNode) {
    mountNode = document.createElement("div");
    mountNode.id = PSI_MOUNT_ID;
    shadow.appendChild(mountNode);
  }

  state.mountNode = mountNode;
  return mountNode;
}

async function injectReactSidebar() {
  if (state.loadingPromise) return state.loadingPromise;

  state.loadingPromise = (async () => {
    try {
      const mountNode = ensureShadowMountNode();
      if (mountNode.dataset.psiMounted === "1") return true;

      const moduleUrl = chrome.runtime.getURL("react/sidebar.js");
      ensureProcessEnvShim();
      const sidebarModule = await import(moduleUrl);

      if (typeof sidebarModule.mountSidebar !== "function") {
        throw new Error("mountSidebar export missing in react/sidebar.js");
      }

      sidebarModule.mountSidebar(mountNode);
      mountNode.dataset.psiMounted = "1";
      return true;
    } catch (error) {
      console.error("Project Psi injection failed:", error);
      return false;
    } finally {
      state.loadingPromise = null;
    }
  })();

  return state.loadingPromise;
}

if (!state.listenerAttached) {
  chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.type === "PING") {
      sendResponse({ ok: true });
      return;
    }

    if (req.type === "INJECT_UI" || req.type === "SHOW_SIDEBAR") {
      injectReactSidebar()
        .then((ok) => sendResponse({ ok }))
        .catch(() => sendResponse({ ok: false }));
      return true;
    }

    if (req.type === "SCRAPE_PAGE") {
      sendResponse(getPageContent());
    }
  });

  state.listenerAttached = true;
}

// Create floating black trigger button with PSI symbol
function createFloatingTrigger() {
  const triggerId = "psi-floating-trigger";
  
  // Don't create if already exists
  if (document.getElementById(triggerId)) return;

  // Ensure body exists
  if (!document.body) {
    setTimeout(createFloatingTrigger, 50);
    return;
  }

  const button = document.createElement("button");
  button.id = triggerId;
  button.innerHTML = "Ψ";
  button.title = "Open Project Psi";
  
  button.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #1f2937;
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 999999;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
    font-family: system-ui, -apple-system, sans-serif;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  `;

  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#111827";
    button.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.4)";
    button.style.transform = "scale(1.1)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#1f2937";
    button.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
    button.style.transform = "scale(1)";
  });

  button.addEventListener("click", () => {
    injectReactSidebar();
    // Remove the button after clicking
    button.remove();
  });

  document.body.appendChild(button);
}

// Create floating trigger button on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createFloatingTrigger);
} else {
  createFloatingTrigger();
}
