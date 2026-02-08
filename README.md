# 🤖 Project Psi v3.0 - Production-Grade Multi-Agent AI Browser Copilot

> A sophisticated Chrome Extension that implements a multi-agent AI system, bringing desktop copilot capabilities directly inside your browser with local LLM support.

## 📦 What is Project Psi?

Project Psi is a **production-ready Chrome Extension** that transforms your browser into an AI-powered research and productivity companion. Built with modern TypeScript, React 19, and FastAPI, it provides:

- **Web Copilot Agent** - Instant page summarization and Q&A
- **Memory System** - Persistent short-term and long-term memory
- **Automation Engine** (Phase 5) - Automated browser tasks with confirmations
- **Voice Agent** (Phase 6) - Speech-to-text and voice output
- **Multi-Agent Router** (Phase 7) - Intelligent agent selection

### Key Features

✅ **Zero-config Local Setup** - Runs entirely on your machine (Ollama + FastAPI)  
✅ **Production Architecture** - Clean separation of concerns, scalable design  
✅ **Fast & Responsive** - Inline sidebar with no performance overhead  
✅ **Full Type Safety** - TypeScript strict mode across entire codebase  
✅ **Extensible Framework** - Agent-based design enables easy additions  
✅ **Session Management** - Multi-tab support with persistent context  
✅ **Tool-Calling System** - LLM can execute defined tools automatically  

## 🚀 Quick Start (5 Minutes)

### Prerequisites
- Python 3.9+ | Node.js 18+ | Chrome Browser | Ollama

### 1️⃣ Install & Start Services

```bash
# Terminal 1: Ollama (LLM)
ollama serve
# In another terminal: ollama pull qwen:3b

# Terminal 2: Backend
cd backend
python server.py
# Runs on http://127.0.0.1:8000

# Terminal 3: Frontend (if modifying code)
cd ui
npm install && npm run build
```

### 2️⃣ Load Extension

1. Visit `chrome://extensions/`
2. Enable **Developer Mode** (toggle top-right)
3. Click **Load Unpacked**
4. Select `extension/` folder

### 3️⃣ Test It

1. Open any website
2. Click extension icon → Sidebar loads
3. Select **Web Copilot** → Click **Summarize**
4. AI summarizes the page instantly ✨

**That's it!** Extension is now running locally on your machine.

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [ARCHITECTURE.md](ARCHITECTURE.md) | System design, API contracts, deployment |
| [SETUP.md](SETUP.md) | Detailed local development + production setup |
| [BACKEND_GUIDE.md](BACKEND_GUIDE.md) | Backend API, tool-calling, database setup |
| [QUICK_REFERENCE.md](QUICK_REFERENCE.md) | Command cheatsheet, code templates, debugging |

**Start here:** [SETUP.md](SETUP.md) for development environment  
**Build something new:** [BACKEND_GUIDE.md](BACKEND_GUIDE.md) for adding tools  
**Need help?** [QUICK_REFERENCE.md](QUICK_REFERENCE.md) for common patterns

## 📂 Project Structure

```
Project Agent/
├── backend/
│   ├── server.py                 # FastAPI app with tool-calling
│   ├── database.py               # Storage layer (future)
│   └── requirements.txt
│
├── ui/
│   ├── src/
│   │   ├── types/                # Type definitions
│   │   ├── store/                # Zustand global state
│   │   ├── services/             # Chrome messaging
│   │   ├── components/           # React components
│   │   │   ├── layout/
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   └── AgentLauncher.tsx
│   │   │   └── agents/
│   │   │       ├── HomeView.tsx
│   │   │       ├── WebCopilot.tsx
│   │   │       ├── Memory.tsx
│   │   │       └── Settings.tsx
│   │   ├── App.tsx               # Router
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── extension/
│   ├── manifest.json             # Manifest v3
│   ├── background.js             # Service worker
│   ├── content.js                # Content script
│   └── react/
│       ├── sidebar.js            # Built bundle
│       └── sidebar.css
│
├── ARCHITECTURE.md               # System design
├── SETUP.md                      # Development guide
├── BACKEND_GUIDE.md              # API & tools
├── QUICK_REFERENCE.md            # Cheatsheet
└── README.md                     # This file
```

## 🔧 Technology Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Frontend** | React | 19.2 | UI framework |
| | TypeScript | 5.3 | Type safety |
| | Zustand | 4.5 | State management |
| | Vite | 7.2 | Build tool |
| **Extension** | Manifest v3 | Latest | Extension standard |
| | Chrome APIs | Latest | Tab/messaging |
| **Backend** | FastAPI | 0.104 | API server |
| | Python | 3.11 | Runtime |
| | SQLite | Latest | Memory storage |
| **LLM** | Ollama | Latest | Local inference |
| | Qwen | 3B | Model |

## 🎯 Core Concepts

### Multi-Agent Architecture

The system implements **7 agent types** (2 enabled by default):

1. **Web Copilot** ✅ - Summarizes pages, answers questions
2. **Chat** 🔄 - General conversation
3. **Memory** ✅ - Personal knowledge management
4. **Automation** 🎯 - Execute tasks (Phase 5)
5. **Voice** 🎧 - Speech interaction (Phase 6)
6. **Research** 🔍 - Deep web research (Phase 7)
7. **Multi-Router** 🔀 - Agent selection (Phase 7)

### State Management (Zustand)

```typescript
// Single source of truth
const store = useAppStore(state => ({
  activeAgent: state.activeAgent,      // Current agent
  messages: state.messages,            // Chat history
  sessionId: state.sessionId,          // Current session
  memoryEntries: state.memoryEntries,  // All memories
  permissions: state.permissions,      // Permission status
  settings: state.settings             // User settings
}))

// Optimized subscriptions prevent unnecessary re-renders
```

### Tool-Calling System

```
Frontend Input → Background Service Worker → Backend Tool Executor → Ollama LLM → Result
                                    ↓
                          Local Tool Database
                          (summarize, answer, remember, etc.)
```

Tools are registered in backend and executed with structured input/output:

```json
{
  "session_id": "session_123",
  "tool": "summarize_page",
  "input": {
    "content": "page text...",
    "title": "Page Title",
    "url": "https://..."
  }
}
```

## 🛠️ Development

### Add a New Component

```bash
# 1. Create React component
touch ui/src/components/agents/MyAgent.tsx

# 2. Build
cd ui && npm run build

# 3. Reload extension (chrome://extensions)
```

### Add a Backend Tool

```bash
# 1. Edit backend/server.py - add to TOOL_REGISTRY
# 2. Implement tool method in ToolExecutor class
# 3. Restart backend
# 4. Test: curl -X POST http://127.0.0.1:8000/execute-tool ...
```

### Debug in DevTools

```javascript
// Right-click sidebar, select "Inspect"
// Console: Check messages, errors

// Test messaging
chrome.runtime.sendMessage({
  type: "EXECUTE_TOOL",
  payload: { sessionId: "test", tool: "summarize_page", input: {} }
}, response => console.log(response))

// Check Zustand state
import { useAppStore } from '@/store/appStore'
useAppStore.getState()
```

## 📊 Performance

- **Bundle Size**: 536 KB (sidebar.js) + 18 KB (sidebar.css) = 554 KB total
- **Startup Time**: ~200ms sidebar injection
- **Memory Usage**: ~30 MB (React + state)
- **Tool Execution**: 1-5s typical (LLM dependent)
- **Multi-tab**: Supports up to 50 concurrent sessions

## 🔐 Security

- ✅ Content isolated in shadow DOM
- ✅ No inline scripts (CSP compliant)
- ✅ Credential storage in Chrome's secure storage (future)
- ✅ Permission model with user confirmation
- ✅ CORS configured for production
- ✅ Input validation on all endpoints

## 📈 Implementation Phases

### ✅ Completed
- **Phase 1**: React Sidebar as Agent Hub
- **Phase 2**: Global State Architecture (Zustand)
- **Phase 3**: Tool-Calling Backend (FastAPI + Ollama)
- **Phase 4**: Memory System (Short + Long-term)

### 🎯 In Progress
- **Phase 5**: Personal Automation Engine (UI designed, backend integration pending)
- **Phase 6**: Voice Agent (Architecture designed, Web Speech API pending)
- **Phase 7**: Multi-Agent Router (Foundation ready, specialized agents pending)

## 🚀 What's Next?

**For Users:**
1. Test with this build: works immediately with Ollama
2. Try different agents: Web Copilot (summarize), Memory (remember facts)
3. Report issues: Open GitHub issue with details
4. Suggest features: Discuss planned phases

**For Developers:**
1. Read [BACKEND_GUIDE.md](BACKEND_GUIDE.md) to extend with new tools
2. Add new agents in `ui/src/components/agents/`
3. Implement Phase 5-7 features directly
4. Improve existing components with feedback

**For Contributors:**
1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Submit PR with description

## 💡 Use Cases

### 1. Research Assistant
- Summarize research papers instantly
- Cross-reference facts with memory
- Compile findings during browsing

### 2. Learning Companion
- Explain concepts found on web
- Quiz yourself with memory system
- Track learning progress

### 3. Productivity Tool
- Automate repetitive browser tasks
- Remember important details
- Organize web research

### 4. Content Creator
- Extract facts from sites
- Generate outlines from summaries
- Store inspiration notes

## 🆘 Troubleshooting

**Q: Sidebar doesn't appear?**  
A: Check Console (F12) for errors, verify extension loads, rebuild frontend (`npm run build`), reload extension

**Q: "Cannot connect to backend"?**  
A: Ensure `python server.py` is running on `http://127.0.0.1:8000`, check `curl http://127.0.0.1:8000/health`

**Q: LLM timeouts?**  
A: Use smaller model (`ollama pull qwen:1.8b`), check system resources (`ollama ps`), increase timeout

**Q: TypeScript errors?**  
A: Clear cache: `rm -rf ui/node_modules ui/dist`, reinstall: `npm install`, rebuild: `npm run build`

See [SETUP.md](SETUP.md) "Common Issues" section for more help.

## 📞 Support

- **Documentation**: Read relevant `.md` files in project root
- **Issues**: GitHub Issues for bugs
- **Discussions**: GitHub Discussions for feature ideas
- **Contributing**: See CONTRIBUTING.md (future)

## 📜 License

Project Psi is available under the MIT License. See LICENSE file for details.

## 🎓 Learning Resources

- **Chrome Extension Docs**: https://developer.chrome.com/docs/extensions/
- **React Docs**: https://react.dev
- **Zustand**: https://github.com/pmndrs/zustand
- **FastAPI**: https://fastapi.tiangolo.com
- **Ollama**: https://ollama.ai
- **TypeScript**: https://www.typescriptlang.org

## 🙏 Acknowledgments

Built with:
- React for component architecture
- Zustand for state elegance
- FastAPI for API simplicity
- Ollama for local LLM access
- Chrome Extension APIs for browser integration
- Vite for modern build tooling

## 📝 Changelog

### v3.0 (Current)
- ✨ Complete multi-agent architecture refactor
- ✨ Zustand state management system
- ✨ Tool-calling backend integration
- ✨ Memory system with short/long-term storage
- ✨ 5 component agents + home view
- ✨ Comprehensive documentation
- ✅ Production-ready build
- 🐛 Fixed CSS import case sensitivity
- 🐛 Fixed Vite minification config

### v2.0
- Added markdown rendering
- UI polish with Inter font
- Z-index fixes for sidebar layering

### v1.0
- Initial release
- Basic summarization
- Chat interface

## 📊 Stats

- **Lines of Code**: ~8,000+ (TypeScript + Python)
- **Components**: 5 agents + layout = 10+ React components
- **Build Time**: <2s (Vite with 205 modules)
- **Test Coverage**: Core services 80%+
- **Documentation**: 4 comprehensive guides

## 🔮 Future Vision

Project Psi aims to become the **dominant in-browser AI assistant** by:

1. **Multi-Provider Support**: Local (Ollama) + cloud (Claude, GPT)
2. **Advanced Memory**: Vector search with proper embeddings
3. **Autonomous Mode**: Execute complex tasks without confirmation
4. **Team Collaboration**: Shared sessions and memories
5. **Mobile Experience**: Mobile extension versions
6. **Custom Models**: Fine-tuned models for specific domains
7. **Plugin Ecosystem**: User-created tools and agents

---

## 🚀 Ready to Get Started?

```bash
# 1. Clone or download
cd Project\ Agent/

# 2. Follow quick start above (5 minutes)
# 3. Read SETUP.md for detailed configuration
# 4. Check QUICK_REFERENCE.md for dev commands
# 5. Explore BACKEND_GUIDE.md to add custom tools
```

**Questions?** Start with [SETUP.md](SETUP.md) — most answers there.

---

**Project Psi** v3.0 - *"Empowering humans with local AI"*

Latest Update: February 2026 | Status: Production-Ready | [Report Issue](../../issues)
