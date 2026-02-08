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
