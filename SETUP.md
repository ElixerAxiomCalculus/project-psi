# Project Psi - Developer Setup & Local Development Guide

## Prerequisites

- **Python 3.9+** (Backend)
- **Node.js 18+** (Frontend)
- **Chrome Browser** (For extension)
- **Ollama** (For local LLM)
- **Git** (Optional, for version control)

## Quick Start (5 Minutes)

### 1. Install Ollama

**Option A: Standalone Installer**
- Download from [ollama.ai](https://ollama.ai)
- Install and run: `ollama serve`
- In another terminal: `ollama pull qwen:3b`

**Option B: Docker**
```bash
docker run -d --name ollama -p 11434:11434 ollama/ollama
docker exec ollama ollama pull qwen:3b
```

### 2. Start Backend

```bash
# Terminal 1: Backend
cd backend
python -m venv venv
source venv/Scripts/activate  # Windows: venv\Scripts\activate

pip install -r requirements.txt
python server.py

# Output should show: INFO:     Uvicorn running on http://127.0.0.1:8000
```

**requirements.txt:**
```
fastapi==0.104.1
uvicorn==0.24.0
httpx==0.25.2
pydantic==2.5.0
python-multipart==0.0.6
```

### 3. Build Frontend

```bash
# Terminal 2: Frontend
cd ui
npm install
npm run build

# Output: dist/sidebar.js + dist/sidebar.css built successfully
```

### 4. Load Extension

1. Open `chrome://extensions/`
2. Enable **Developer Mode** (toggle top-right)
3. Click **Load Unpacked**
4. Select `extension/` folder
5. Extension should appear in toolbar

### 5. Test Integration

1. Open any website (e.g., news article)
2. Click extension icon → Sidebar loads
3. Click **Web Copilot** agent
4. Click **Summarize** button
5. LLM processes page and returns summary in chat

**Success indicators:**
- Sidebar appears in shadow DOM
- Agent launcher shows 2 agents (Web Copilot + Memory)
- Messages appear in chat on button click
- No console errors in DevTools

## Detailed Setup

### Backend Setup

#### 1. Create Virtual Environment

```bash
cd backend

# macOS / Linux
python3 -m venv venv
source venv/bin/activate

# Windows
python -m venv venv
venv\Scripts\activate
```

#### 2. Install Dependencies

```bash
pip install --upgrade pip
pip install fastapi uvicorn httpx pydantic sqlite3

# Optional: Development tools
pip install pytest pytest-asyncio black flake8
```

#### 3. Database Setup (SQLite)

```bash
# Automatic on first run - creates psi_memory.db
# Manual setup:
python -c "
import sqlite3
conn = sqlite3.connect('psi_memory.db')
c = conn.cursor()
# Tables created by MemoryStore.init_db()
conn.close()
"
```

#### 4. Environment Configuration

Create `.env` (optional):
```
OLLAMA_BASE_URL=http://127.0.0.1:11434
LLM_MODEL=qwen:3b
LLM_TEMPERATURE=0.7
BACKEND_PORT=8000
BACKEND_HOST=127.0.0.1
```

#### 5. Start Server

```bash
# Development (with auto-reload)
python -m uvicorn server:app --reload --host 127.0.0.1 --port 8000

# Production
uvicorn server:app --host 0.0.0.0 --port 8000 --workers 4
```

**Verification:**
```bash
curl http://127.0.0.1:8000/health
# Response: {"status": "ok"}
```

### Frontend Setup

#### 1. Install Dependencies

```bash
cd ui
npm install

# Verify:
npm -v  # Should be 9+ (use nvm if needed)
node -v  # Should be 18+
```

#### 2. Development Mode (Optional - for debugging)

```bash
# Terminal: Watch mode rebuilds on file changes
npm run build

# Runs Vite dev server (if configured)
npm run dev
```

#### 3. Build Library

```bash
# Creates dist/sidebar.js + dist/sidebar.css
npm run build

# Check output size
ls -lh dist/
# sidebar.js should be ~500 KB
# sidebar.css should be ~18 KB
```

#### 4. Directory Structure

```
ui/
├── src/
│   ├── types/
│   │   └── index.ts              # Type definitions
│   ├── store/
│   │   └── appStore.ts           # Zustand state
│   ├── services/
│   │   └── messagingService.ts   # Chrome messaging
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Sidebar.css
│   │   │   ├── AgentLauncher.tsx
│   │   │   └── AgentLauncher.css
│   │   └── agents/
│   │       ├── HomeView.tsx
│   │       ├── WebCopilot.tsx
│   │       ├── Memory.tsx
│   │       ├── Settings.tsx
│   │       └── *.css
│   ├── App.tsx                  # Main router
│   ├── App.css                  # Global styles
│   ├── main.tsx                 # Entry point
│   └── index.css
├── dist/                        # Built output
│   ├── sidebar.js
│   └── sidebar.css
├── public/
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

### Extension Setup

#### 1. Manifest Configuration

The extension uses **Manifest v3**:

```json
{
  "manifest_version": 3,
  "name": "Project Psi",
  "version": "0.1.0",
  "description": "AI Browser Copilot",
  "permissions": [
    "activeTab",
    "scripting",
    "tabs"
  ],
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icon.png"
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ]
}
```

#### 2. File Structure

```
extension/
├── manifest.json              # Manifest v3
├── background.js              # Service worker
├── content.js                 # Content script
├── popup.html                 # (Optional) Popup UI
├── react/
│   ├── sidebar.js             # Built React bundle
│   └── sidebar.css            # Built styles
└── icons/
    ├── icon-16.png
    ├── icon-48.png
    └── icon-128.png
```

#### 3. Load in Chrome

1. **Developer Mode**: `chrome://extensions/` → Toggle top-right
2. **Load Unpacked**: Click button, select `extension/` folder
3. **Pin Extension**: Icon appears in toolbar
4. **Test**: Click icon on any webpage

#### 4. DevTools Debugging

**View console logs:**
```
Right-click extension icon → Inspect popup
or
Right-click page → Inspect → Console
```

**Inspect element:**
```
In devtools: Ctrl+Shift+C (select element)
Look for <div id="psi-sidebar"> in shadow DOM
```

**Network monitoring:**
```
DevTools → Network tab
Filter: "execute-tool" to see API calls
```

## Running All Services

### Unified Startup (Recommended)

Create `run_psi.sh`:

```bash
#!/bin/bash

echo "Starting Project Psi..."

# Terminal 1: Ollama
echo "Starting Ollama..."
ollama serve &
OLLAMA_PID=$!
sleep 2

# Terminal 2: Backend
echo "Starting Backend..."
cd backend
python server.py &
BACKEND_PID=$!
sleep 3

# Terminal 3: Frontend (optional - for development)
echo "Building Frontend..."
cd ../ui
npm run build

echo ""
echo "Project Psi is running!"
echo ""
echo "Services:"
echo "  - Ollama:  http://127.0.0.1:11434"
echo "  - Backend: http://127.0.0.1:8000"
echo "  - Docs:    http://127.0.0.1:8000/docs"
echo ""
echo "Next steps:"
echo "  1. Open chrome://extensions/"
echo "  2. Enable Developer Mode"
echo "  3. Load Unpacked -> extension/"
echo "  4. Visit any website and click extension icon"
echo ""

# Cleanup on exit
trap "kill $OLLAMA_PID $BACKEND_PID" EXIT
wait
```

Run it:
```bash
chmod +x run_psi.sh
./run_psi.sh
```

### Windows Batch Script

Create `run_psi.bat`:

```batch
@echo off
echo Starting Project Psi...

REM Terminal 1: Ollama
echo Starting Ollama...
start "Ollama" cmd /k "ollama serve"
timeout /t 2

REM Terminal 2: Backend
echo Starting Backend...
cd backend
start "Backend" cmd /k "python server.py"
cd ..
timeout /t 3

REM Terminal 3: Frontend
echo Building Frontend...
cd ui
call npm run build
cd ..

echo.
echo Project Psi is running!
echo - Ollama:  http://127.0.0.1:11434
echo - Backend: http://127.0.0.1:8000
echo - Extension: chrome://extensions
```

Run it:
```
run_psi.bat
```

## Development Workflow

### Making UI Changes

1. **Edit component** (e.g., `ui/src/components/agents/WebCopilot.tsx`)
2. **Rebuild**: `npm run build`
3. **Reload extension**: `chrome://extensions` → Reload button (or Ctrl+R)
4. **Test**: New changes visible in sidebar

### Adding a New Agent

1. **Create component**: `ui/src/components/agents/MyAgent.tsx`
2. **Add CSS**: `ui/src/components/agents/MyAgent.css`
3. **Update App.tsx routing**:
   ```typescript
   case 'my-agent':
     return <MyAgent />
   ```
4. **Add to types**: `ui/src/types/index.ts`
5. **Initialize in store**: `ui/src/store/appStore.ts`
6. **Rebuild**:
   ```bash
   cd ui && npm run build
   ```

### Adding a New Backend Tool

1. **Add to TOOL_REGISTRY** in `backend/server.py`
2. **Implement tool method** in `ToolExecutor` class
3. **Add routing** in `/execute-tool` endpoint
4. **Test with curl**:
   ```bash
   curl -X POST http://127.0.0.1:8000/execute-tool \
     -H "Content-Type: application/json" \
     -d '{"session_id": "test", "tool": "my_tool", "input": {}}'
   ```

### Debugging Tips

**Backend Debugging:**
```python
# Add logging
import logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

logger.debug(f"Tool called: {tool_name}")
logger.info(f"Result: {result}")
```

**Frontend Debugging:**
```typescript
// Use store directly in console
import { useAppStore } from '@/store/appStore'
// Then: useAppStore.getState().sessions
```

**Chrome Extension Debugging:**
1. Right-click sidebar → Inspect
2. Check Console for errors
3. Check Network tab for API calls
4. View service worker logs: `chrome://extensions` → Details → Service Worker log

## Testing

### Unit Tests (Backend)

```bash
cd backend
pip install pytest pytest-asyncio
pytest tests/ -v
```

**Example test:**
```python
# tests/test_tools.py
import pytest
from server import ToolExecutor

@pytest.mark.asyncio
async def test_remember_fact():
    result = await ToolExecutor.remember_fact("Test fact")
    assert result["status"] == "completed"
    assert "fact_id" in result
```

### Integration Tests

```bash
# Test full flow
bash test_integration.sh

# Or manually:
curl -X POST http://127.0.0.1:8000/execute-tool \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "test_1",
    "tool": "summarize_page",
    "input": {
      "title": "Test",
      "url": "https://example.com",
      "content": "Test content..."
    }
  }'
```

### Browser Testing

1. Open DevTools (F12)
2. Go to Console tab
3. Test messaging:
   ```javascript
   chrome.runtime.sendMessage({
     type: "EXECUTE_TOOL",
     payload: {
       sessionId: "test",
       tool: "summarize_page",
       input: { content: "Test..." }
     }
   }, response => console.log(response))
   ```

## Common Issues

### Issue: Sidebar doesn't appear

**Solutions:**
1. Check Console (F12) for errors
2. Verify extension loads: `chrome://extensions`
3. Check background.js logs: Service Worker log
4. Rebuild frontend: `npm run build`
5. Reload extension button

### Issue: "Cannot find module" errors

**Solutions:**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Backend returns 500 error

**Solutions:**
1. Check backend console for error message
2. Verify Ollama is running: `curl http://127.0.0.1:11434/api/tags`
3. Test LLM directly:
   ```bash
   curl http://127.0.0.1:11434/api/generate \
     -d '{"model": "qwen:3b", "prompt": "Hello"}'
   ```
4. Increase timeout in MessagingService

### Issue: LLM timeout

**Solutions:**
1. Use smaller model: `ollama pull qwen:1.8b`
2. Increase timeout: Edit `messagingService.ts`
3. Check system resources: `ollama ps`

### Issue: Extension permissions denied

**Solutions:**
1. Check manifest.json permissions
2. Re-add extension to Chrome
3. Grant new permissions when prompted

## Performance Tuning

### Frontend Optimization

```typescript
// Use selectors to prevent re-renders
const messages = useAppStore(state => state.messages)

// Not:
// const state = useAppStore()
// Then use state.messages
```

### Backend Optimization

```python
# Batch tool calls
tasks = [
    executor.summarize(...),
    executor.answer(...),
    executor.remember(...)
]
results = await asyncio.gather(*tasks)

# Cache LLM responses
@functools.lru_cache(maxsize=100)
async def get_summary(content_hash):
    ...
```

### Memory Management

```python
# Limit in-memory sessions
MAX_SESSIONS = 50
if len(sessions.sessions) > MAX_SESSIONS:
    oldest = min(sessions.sessions.values(), 
                 key=lambda s: s.created_at)
    del sessions.sessions[oldest.session_id]
```

## Production Deployment

### Pre-deployment Checklist

- [ ] All tests passing
- [ ] No console errors
- [ ] TypeScript compilation clean
- [ ] Environment variables set
- [ ] Database backups
- [ ] Error logging configured
- [ ] API rate limiting enabled
- [ ] CORS configured for prod domain

### Deployment Steps

1. **Backend (Docker)**:
   ```dockerfile
   FROM python:3.11
   WORKDIR /app
   COPY requirements.txt .
   RUN pip install -r requirements.txt
   COPY backend/ .
   CMD ["uvicorn", "server:app", "--host", "0.0.0.0"]
   ```

2. **Extension (Chrome Web Store)**:
   - Create account at [dev.chrome.com](https://dev.chrome.com)
   - Upload manifest + build
   - Submit for review

3. **Frontend (CDN)**:
   ```bash
   npm run build
   aws s3 sync dist/ s3://psi-cdn-bucket/
   ```

---

**Documentation**: Local development and deployment guide  
**Last Updated**: February 2026  
**Status**: Production-ready
