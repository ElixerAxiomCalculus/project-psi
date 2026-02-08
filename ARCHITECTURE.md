# Project Psi - Production-Grade Multi-Agent Architecture

## Overview

Project Psi is a production-ready Chrome Extension that implements a **multi-agent AI browser copilot platform** using:

- **Frontend**: React 19 + Zustand (global state)
- **Backend**: FastAPI (agent runtime + tool-calling system)
- **LLM**: Ollama (qwen3:8b local)
- **Architecture**: Clean separation of concerns with agent-based routing

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    CHROME EXTENSION                         │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐                 ┌──────────────────┐  │
│  │   CONTENT.JS     │                 │ BACKGROUND.JS    │  │
│  │ (Page Bridge)    │◄──────────────► │ (Orchestrator)   │  │
│  └──────────────────┘                 └─────────┬────────┘  │
│         △                                        │            │
│         │                                        │            │
│         └────────────────────┬────────────────────┘            │
│                              │ chrome.runtime.                │
│  ┌──────────────────────────▼────────────────────────┐       │
│  │      REACT SIDEBAR (Components + Zustand)        │       │
│  │                                                  │       │
│  │  ├─ SidebarLayout                               │       │
│  │  ├─ AgentLauncher (Radial UI)                  │       │
│  │  ├─ WebCopilot Agent                           │       │
│  │  ├─ Memory Agent                               │       │
│  │  ├─ Automation Agent (Future)                  │       │
│  │  └─ Settings View                              │       │
│  │                                                  │       │
│  │  Global State (Zustand):                        │       │
│  │  ├─ activeAgent                                │       │
│  │  ├─ messages (chat history)                    │       │
│  │  ├─ memoryEntries                              │       │
│  │  ├─ permissions                                │       │
│  │  └─ settings                                   │       │
│  └──────────────────────────┬──────────────────────┘       │
└─────────────────────────────┼──────────────────────────────┘
                              │ HTTP + WebSocket (Future)
          ┌───────────────────▼───────────────────┐
          │    FastAPI BACKEND (Port 8000)        │
          │                                        │
          │  ┌────────────────────────────────┐  │
          │  │  Multi-Agent Router            │  │
          │  │  ├─ Agent Manager              │  │
          │  │  ├─ Tool Registry              │  │
          │  │  └─ Session Manager            │  │
          │  └────────────────────────────────┘  │
          │                                        │
          │  ┌────────────────────────────────┐  │
          │  │  Specialized Agents (Tools)    │  │
          │  ├─ Web Copilot (summarize/qa)   │  │
          │  ├─ Research Agent (future)      │  │
          │  ├─ Automation Agent (future)    │  │
          │  └─ Memory Agent                 │  │
          │  └────────────────────────────────┘  │
          │                                        │
          │  ┌────────────────────────────────┐  │
          │  │  LLM Integration               │  │
          │  │  └─ Ollama (qwen3:8b)          │  │
          │  └────────────────────────────────┘  │
          │                                        │
          │  ┌────────────────────────────────┐  │
          │  │  Memory Systems                │  │
          │  │  ├─ Short-term (RAM)           │  │
          │  │  └─ Long-term (SQLite)        │  │
          │  └────────────────────────────────┘  │
          └────────────────────────────────────┘
                               △
                               │
                      ┌─────────┴─────────┐
                      │                   │
                 ┌────▼──┐           ┌───▼───┐
                 │ Ollama│           │SQLite │
                 │(LLM)  │           │(Memory)
                 └───────┘           └───────┘
```

## Key Files Structure

```
ui/src/
├── types/
│   └── index.ts                  # Core type definitions
├── store/
│   └── appStore.ts               # Zustand global state
├── services/
│   └── messagingService.ts        # Background communication
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx           # Main layout container
│   │   ├── Sidebar.css
│   │   ├── AgentLauncher.tsx     # Radial agent selector
│   │   └── AgentLauncher.css
│   └── agents/
│       ├── HomeView.tsx          # Agent home/intro
│       ├── HomeView.css
│       ├── WebCopilot.tsx        # Web copilot agent
│       ├── WebCopilot.css
│       ├── Memory.tsx            # Memory management
│       ├── Memory.css
│       ├── Settings.tsx          # Settings & permissions
│       └── Settings.css
├── hooks/                        # Custom React hooks (reserved)
├── agents/                       # Agent logic (reserved for expansion)
├── App.tsx                       # Main router
├── App.css                       # Global styles
├── main.tsx                      # Entry point
└── index.css                     # Global base styles

extension/
├── manifest.json                 # Extension config
├── background.js                 # Background service worker
├── content.js                    # Content script bridge
└── react/
    ├── sidebar.js               # Built React bundle
    └── sidebar.css              # Built styles

backend/
├── server.py                     # FastAPI app
├── agents/                       # Agent implementations
├── tools/                        # Tool registry
├── memory/                       # Memory systems
└── models/                       # LLM wrappers
```

## 7-Phase Implementation Status

### ✅ PHASE 1: React Agent Hub (COMPLETE)
- [x] Sidebar layout with persistent state
- [x] Radial/circular agent launcher
- [x] Component-based view switching (no remounting)
- [x] Multi-agent layout

### ✅ PHASE 2: Global State (COMPLETE)
- [x] Zustand store implementation
- [x] Selectors for optimized subscriptions
- [x] Session management
- [x] Multi-agent ready

### ⏳ PHASE 3: Tool-Calling Backend (IN PROGRESS)
- [x] Background.js tool orchestration
- [ ] FastAPI tool router endpoint
- [ ] Tool registry system
- [ ] Structured tool definitions

### ⏳ PHASE 4: Memory System (IN PROGRESS)
- [x] Short-term memory in Zustand
- [ ] Long-term memory (SQLite)
- [ ] Memory persistence
- [ ] Future: Vector search ready

### 🎯 PHASE 5: Personal Automation (PLANNED)
- Intent detection layer
- Confirmation workflow
- OAuth2 Gmail integration
- Task queue system

### 🎯 PHASE 6: Voice Agent (PLANNED)
- Web Speech API integration
- Transcription pipeline
- Whisper.js compatibility layer
- Voice output synthesis

### 🎯 PHASE 7: Multi-Agent Router (PLANNED  )
- Specialized agent dispatch
- Agent capability matching
- Dynamic agent loading
- Intent-based routing

## API Contract: Frontend → Backend

### 1. Tool Execution (New Standard)

**Request:**
```typescript
POST http://127.0.0.1:8000/execute-tool
Content-Type: application/json

{
  "session_id": string,
  "tool": "summarize_page" | "answer_question" | "remember_fact",
  "input": {
    "content": string,
    "title": string,
    "url": string,
    // + tool-specific params
  }
}
```

**Response:**
```json
{
  "status": "success" | "error",
  "data": {
    "summary" | "answer" | "fact_id": ...
  },
  "tools_called": [
    {
      "tool": "string",
      "status": "completed",
      "output": {}
    }
  ]
}
```

### 2. Tool Registry (Backend)

The backend must implement:

```python
@app.get("/tools")
async def list_tools() -> ToolRegistry:
    """Return available tools and their schemas"""
    return {
        "tools": [
            {
                "name": "summarize_page",
                "description": "Summarize the current page",
                "schema": {
                    "type": "object",
                    "properties": {
                        "content": {"type": "string"},
                        "title": {"type": "string"},
                        "url": {"type": "string"}
                    },
                    "required": ["content"]
                }
            },
            # ... more tools
        ]
    }
```

### 3. Legacy Support (Backward Compatibility)

- `/summarize` - Still works
- `/ask` - Still works
- New: `/execute-tool` - Universal dispatcher

## Backend Extension Guide

### 1. Create Tool Definitions

```python
# backend/tools/__init__.py

from typing import Any, Dict
from enum import Enum

class ToolAction(str, Enum):
    SUMMARIZE_PAGE = "summarize_page"
    ANSWER_QUESTION = "answer_question"
    REMEMBER_FACT = "remember_fact"
    OPEN_TAB = "open_tab"
    SEND_EMAIL = "send_email"
    CREATE_NOTE = "create_note"

class ToolDefinition:
    def __init__(
        self,
        name: ToolAction,
        description: str,
        schema: Dict[str, Any]
    ):
        self.name = name
        self.description = description
        self.schema = schema
```

### 2. Implement Tool Executor

```python
# backend/tools/executor.py

class ToolExecutor:
    async def execute(
        self,
        tool: str,
        session_id: str,
        input_data: Dict[str, Any]
    ) -> Dict[str, Any]:
        """Execute a tool and return result"""
        
        if tool == "summarize_page":
            return await self._summarize(input_data)
        elif tool == "answer_question":
            return await self._answer(input_data)
        elif tool == "remember_fact":
            return await self._remember(input_data)
        else:
            raise ValueError(f"Unknown tool: {tool}")
    
    async def _summarize(self, data: Dict) -> Dict:
        # LLM-based summarization
        pass
    
    async def _answer(self, data: Dict) -> Dict:
        # Q&A with context
        pass
    
    async def _remember(self, data: Dict) -> Dict:
        # Store in memory
        pass
```

### 3. Add Tool Router Endpoint

```python
# backend/server.py

from fastapi import FastAPI, HTTPException
from tools.executor import ToolExecutor

app = FastAPI()
executor = ToolExecutor()

@app.post("/execute-tool")
async def execute_tool(request: dict):
    """
    Universal tool execution endpoint
    
    Expects:
    - session_id: str
    - tool: str (tool name)
    - input: dict (tool inputs)
    """
    try:
        session_id = request["session_id"]
        tool = request["tool"]
        input_data = request["input"]
        
        result = await executor.execute(tool, session_id, input_data)
        
        return {
            "status": "success",
            "result": result,
            "tool": tool
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# Keep legacy endpoints for backward compatibility
@app.post("/summarize")
async def summarize_legacy(request: dict):
    return await execute_tool({
        "session_id": request.get("session_id"),
        "tool": "summarize_page",
        "input": request
    })
```

### 4. Session Management

```python
# backend/memory/sessions.py

from dataclasses import dataclass
from datetime import datetime
import json

@dataclass
class SessionContext:
    session_id: str
    tab_id: int
    page_url: str
    page_title: str
    created_at: datetime
    updated_at: datetime
    messages: list = None
    metadata: dict = None
    
    def to_dict(self):
        return {
            "session_id": self.session_id,
            "tab_id": self.tab_id,
            "page_url": self.page_url,
            "page_title": self.page_title,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
            "messages": self.messages or [],
            "metadata": self.metadata or {}
        }

class SessionManager:
    def __init__(self):
        self.sessions = {}
    
    def create_session(self, tab_id: int, page_url: str, page_title: str):
        session_id = f"session_{int(time.time())}_{tab_id}"
        session = SessionContext(
            session_id=session_id,
            tab_id=tab_id,
            page_url=page_url,
            page_title=page_title,
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        self.sessions[session_id] = session
        return session
    
    def get_session(self, session_id: str):
        return self.sessions.get(session_id)
    
    def add_message(self, session_id: str, role: str, content: str):
        session = self.get_session(session_id)
        if session:
            if session.messages is None:
                session.messages = []
            session.messages.append({
                "role": role,
                "content": content,
                "timestamp": datetime.now().isoformat()
            })
            session.updated_at = datetime.now()
```

## State Management (Zustand)

The global store manages:

```typescript
// Core State
activeAgent: AgentType | null
sessionId: string
messages: Message[]
memoryEntries: MemoryEntry[]

// UI State
sidebarOpen: boolean
showAgentLauncher: boolean
agentLoading: boolean

// Settings
settings: ExtensionSettings
permissions: Permission[]

// Confirmation
confirmationPending: ConfirmationRequest | null
```

**Key Features:**
- Middleware: `subscribeWithSelector` for optimized re-renders
- Selectors: `useActiveAgent()`, `useMessages()`, etc.
- Immutable updates via spread operator
- No Redux boilerplate

## Messaging Contract

### Frontend → Background

```javascript
// Tool Execution
chrome.runtime.sendMessage({
  type: "EXECUTE_TOOL",
  payload: {
    sessionId: string,
    tool: "summarize_page" | "answer_question" | ...,
    input: {}
  }
})

// Session Creation
chrome.runtime.sendMessage({
  type: "CREATE_SESSION",
  payload: {
    pageUrl: string,
    pageTitle: string,
    tabId: number
  }
})

// Automation Confirmation
chrome.runtime.sendMessage({
  type: "CONFIRM_AUTOMATION",
  payload: {
    sessionId: string,
    tool: string,
    params: {}
  }
})

// Page Content Scrape
chrome.runtime.sendMessage({
  type: "SCRAPE_PAGE"
})

// Health Check
chrome.runtime.sendMessage({
  type: "PING"
})
```

### Background → Content Script

```javascript
// Inject UI
{
  type: "INJECT_UI"
}

// Get Page Content
{
  type: "SCRAPE_PAGE"
}
```

## Development Workflow

### 1. Local Setup

```bash
# Terminal 1: Backend
cd backend
python -m uvicorn server:app --reload --port 8000

# Terminal 2: Frontend
cd ui
npm run dev

# Terminal 3: Ollama
ollama serve

# Terminal 4: Extension
# Open chrome://extensions, enable Developer Mode, Load Unpacked → extension/
```

### 2. Testing Tool Integration

```bash
# Test tool endpoint
curl -X POST http://127.0.0.1:8000/execute-tool \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "test_session",
    "tool": "summarize_page",
    "input": {
      "content": "The document is about...",
      "title": "Example",
      "url": "http://example.com"
    }
  }'
```

### 3. Adding New Agents

```typescript
// 1. Create component
// ui/src/components/agents/MyAgent.tsx

export const MyAgent: React.FC = () => {
  // Your agent UI
}

// 2. Update App.tsx routing
case 'my-agent':
  return <MyAgent />

// 3. Update types
export type AgentType = ... | 'my-agent'

//  4. Add to store
{
  id: 'my-agent',
  name: 'My Agent',
  description: '...',
  icon: '🤖',
  enabled: true
}
```

## Performance Considerations

1. **Zustand Selectors**: Use exact selectors to prevent unnecessary re-renders
2. **Message Batching**: Combine multiple messages when possible
3. **Long-term Memory**: Consider pagination for large datasets
4. **LLM Caching**: Cache summaries for same content
5. **Session Cleanup**: Expire old sessions to prevent memory leaks

## Security Best Practices

1. **Permissions Model**: High-risk operations require explicit user confirmation
2. **OAuth Scopes**: Minimal scopes for integrations
3. **Sensitive Data**: Never log credentials or personal info
4. **Content Scripts**: Isolated execution environment
5. **CSP Compliance**: Shadow DOM prevents style injection attacks

## Future Roadmap

### Q1 2026
- [ ] Voice input/output (Web Speech API)
- [ ] Long-term memory with SQLite
- [ ] Gmail integration (OAuth2)

### Q2 2026
- [ ] Vector search (Qdrant/Milvus)
- [ ] Autonomous browsing mode
- [ ] Multi-tab awareness

### Q3 2026
- [ ] Fine-tuned agent models
- [ ] Plugin system
- [ ] Distributed agent network

## Deployment Checklist

- [ ] Backend: Docker containerization
- [ ] Frontend: Webpack bundle optimization
- [ ] Extension: Manifest v3 compliance
- [ ] Chrome Web Store: Privacy policy
- [ ] Monitoring: Error tracking
- [ ] Documentation: User guide

---

**Last Updated**: February 2026
**Version**: 3.0 (Alpha)
**Author**: Project Psi Team
