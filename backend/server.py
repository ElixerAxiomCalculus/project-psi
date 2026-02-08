from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, List, Any, Optional
from contextlib import asynccontextmanager
import ollama
import time

from sqlmodel import Session as DBSession, select
from database import init_db, engine, Session as DBSessionModel, Message


# ============================================
# STARTUP (Using Lifespan to avoid deprecation)
# ============================================

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    init_db()
    try:
        ollama.chat(
            model="qwen3:8b",
            messages=[{"role": "user", "content": "hello"}],
            options={"num_ctx": 8192}
        )
        print("✅ Ollama warmed. Model: qwen3:8b")
    except Exception as e:
        print(f"⚠️ Ollama warmup failed: {e}")
    
    yield
    # Shutdown
    print("🛑 Shutting down...")

app = FastAPI(lifespan=lifespan)

# Enable CORS for extension
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuration
OLLAMA_MODEL = "qwen3:8b"
LLM_TIMEOUT = 30.0

# In-memory session cache
sessions: Dict[str, Dict] = {}

# Tool registry
TOOL_REGISTRY = {
    "summarize_page": {
        "description": "Summarize the current page content",
        "params": {
            "content": "str",
            "title": "str",
            "url": "str"
        }
    },
    "answer_question": {
        "description": "Answer a question about the page",
        "params": {
            "content": "str",
            "question": "str"
        }
    },
    "remember_fact": {
        "description": "Store a fact in memory",
        "params": {
            "fact": "str",
            "importance": "str",
            "category": "str"
        }
    },
    "open_tab": {
        "description": "Open a new tab with URL",
        "params": {
            "url": "str"
        }
    },
    "search_web": {
        "description": "Search the web",
        "params": {
            "query": "str"
        }
    }
}


# ============================================
# REQUEST MODELS
# ============================================

class Page(BaseModel):
    session_id: str
    title: str
    url: str
    content: str


class AskRequest(BaseModel):
    session_id: str
    question: str


class ExecuteToolRequest(BaseModel):
    session_id: Optional[str] = None
    tool: str
    input: Dict[str, Any] = {}


# ============================================
# HEALTH CHECK
# ============================================

@app.get("/health")
async def health():
    """Health check endpoint"""
    try:
        ollama.chat(
            model=OLLAMA_MODEL,
            messages=[{"role": "user", "content": "ok"}],
        )
        return {"status": "ok", "model": OLLAMA_MODEL}
    except Exception as e:
        return {"status": "error", "error": str(e)}, 500


# ============================================
# TOOLS REGISTRY
# ============================================

@app.get("/tools")
async def list_tools():
    """List available tools and schemas"""
    return {
        "tools": [
            {
                "name": name,
                **config
            }
            for name, config in TOOL_REGISTRY.items()
        ]
    }


# ============================================
# HELPER FUNCTIONS
# ============================================

def build_history(messages: List[Dict]):
    history_text = ""
    for msg in messages:
        role = "User" if msg["role"] == "user" else "Assistant"
        history_text += f"{role}: {msg['content']}\n"
    return history_text


def hydrate_session(session_id: str):
    """Load session from database if not in RAM"""
    with DBSession(engine) as db:
        session_row = db.get(DBSessionModel, session_id)

        if not session_row:
            return None

        messages = db.exec(
            select(Message)
            .where(Message.session_id == session_id)
            .order_by(Message.timestamp)
        ).all()

        history = [
            {"role": m.role, "content": m.content}
            for m in messages
        ]

        sessions[session_id] = {
            "summary": session_row.summary,
            "history": history
        }

        return sessions[session_id]


# ============================================
# TOOL IMPLEMENTATIONS
# ============================================

class ToolExecutor:
    @staticmethod
    async def summarize_page(content: str, title: str, url: str, session_id: str) -> Dict[str, Any]:
        """Summarize page using LLM"""
        prompt = f"""You are an elite browser copilot.

Understand the webpage deeply and create an intelligence brief.

Return:
1. One-line description  
2. Deep summary  
3. Critical insights  
4. Risks or biases  
5. Bullet takeaways  

Title: {title}
URL: {url}

Webpage:
{content[:3000]}
"""

        response = ollama.chat(
            model=OLLAMA_MODEL,
            messages=[
                {"role": "system", "content": "You are an elite research assistant."},
                {"role": "user", "content": prompt}
            ],
            options={"num_ctx": 8192}
        )

        summary = response["message"]["content"]

        # Cache in RAM
        sessions[session_id] = {
            "summary": summary,
            "history": []
        }

        # Save to DB
        with DBSession(engine) as db:
            db.merge(DBSessionModel(
                session_id=session_id,
                url=url,
                title=title,
                summary=summary
            ))
            db.commit()

        return {
            "summary": summary,
            "tool": "summarize_page",
            "status": "completed"
        }

    @staticmethod
    async def answer_question(content: str, question: str, session_id: str) -> Dict[str, Any]:
        """Answer a question about the page"""
        # Try RAM first
        if session_id not in sessions:
            hydrated = hydrate_session(session_id)
            if not hydrated:
                return {
                    "answer": "Session expired. Please summarize again.",
                    "tool": "answer_question",
                    "status": "error"
                }

        session = sessions[session_id]
        history = session["history"][-6:]
        history_text = build_history(history)

        prompt = f"""You are a browser copilot helping a user understand a webpage.

ONLY use the intelligence brief below.
If unsure — say you don't see it.

========= PAGE INTELLIGENCE =========
{session["summary"]}

========= CONVERSATION =========
{history_text}

User: {question}
"""

        response = ollama.chat(
            model=OLLAMA_MODEL,
            messages=[
                {"role": "system", "content": "You are an elite browser copilot."},
                {"role": "user", "content": prompt}
            ],
            options={"num_ctx": 8192}
        )

        answer = response["message"]["content"]

        # Store in RAM
        session["history"].append({
            "role": "user",
            "content": question
        })

        session["history"].append({
            "role": "assistant",
            "content": answer
        })

        # Store in DB
        with DBSession(engine) as db:
            db.add(Message(
                session_id=session_id,
                role="user",
                content=question
            ))

            db.add(Message(
                session_id=session_id,
                role="assistant",
                content=answer
            ))

            db.commit()

        return {
            "answer": answer,
            "question": question,
            "tool": "answer_question",
            "status": "completed"
        }

    @staticmethod
    async def remember_fact(fact: str, importance: str = "medium", category: str = None, session_id: str = None) -> Dict[str, Any]:
        """Store a fact in memory"""
        fact_id = f"fact_{int(time.time())}"
        
        # Save to DB if session provided
        if session_id:
            with DBSession(engine) as db:
                db.add(Message(
                    session_id=session_id,
                    role="system",
                    content=f"[MEMORY] {fact}"
                ))
                db.commit()
        
        return {
            "fact_id": fact_id,
            "fact": fact,
            "importance": importance,
            "category": category or "general",
            "timestamp": time.time(),
            "tool": "remember_fact",
            "status": "completed"
        }

    @staticmethod
    async def open_tab(url: str) -> Dict[str, Any]:
        """Note: requires extension confirmation"""
        return {
            "url": url,
            "tool": "open_tab",
            "status": "requires_confirmation",
            "message": "Click OK in the extension to open tab"
        }

    @staticmethod
    async def search_web(query: str) -> Dict[str, Any]:
        """Placeholder for web search"""
        return {
            "query": query,
            "results": [],
            "tool": "search_web",
            "status": "not_implemented"
        }


# ============================================
# EXECUTE TOOL ENDPOINT (Main Blueprint)
# ============================================

@app.post("/execute-tool")
async def execute_tool(req: ExecuteToolRequest):
    """
    Execute a tool
    
    Expected:
    {
        "session_id": str,
        "tool": str (tool name),
        "input": dict (tool inputs)
    }
    """
    try:
        session_id = req.session_id or f"session_{int(time.time())}"
        tool_name = req.tool
        tool_input = req.input or {}

        if tool_name not in TOOL_REGISTRY:
            return {
                "status": "error",
                "error": f"Unknown tool: {tool_name}",
                "session_id": session_id
            }

        executor = ToolExecutor()

        # Route to tool implementation
        if tool_name == "summarize_page":
            result = await executor.summarize_page(
                content=tool_input.get("content", ""),
                title=tool_input.get("title", ""),
                url=tool_input.get("url", ""),
                session_id=session_id
            )
        elif tool_name == "answer_question":
            result = await executor.answer_question(
                content=tool_input.get("content", ""),
                question=tool_input.get("question", ""),
                session_id=session_id
            )
        elif tool_name == "remember_fact":
            result = await executor.remember_fact(
                fact=tool_input.get("fact", ""),
                importance=tool_input.get("importance", "medium"),
                category=tool_input.get("category"),
                session_id=session_id
            )
        elif tool_name == "open_tab":
            result = await executor.open_tab(
                url=tool_input.get("url", "")
            )
        elif tool_name == "search_web":
            result = await executor.search_web(
                query=tool_input.get("query", "")
            )
        else:
            return {
                "status": "error",
                "error": f"Tool not implemented: {tool_name}",
                "session_id": session_id
            }

        return {
            "status": "success",
            "session_id": session_id,
            "result": result
        }

    except Exception as e:
        print(f"EXECUTE_TOOL error: {e}")
        return {
            "status": "error",
            "error": str(e),
            "session_id": req.session_id or "unknown"
        }


# ============================================
# LEGACY ENDPOINTS (Backward Compatibility)
# ============================================

@app.post("/summarize")
async def summarize(page: Page):
    """Legacy summarize endpoint"""
    try:
        result = await ToolExecutor.summarize_page(
            content=page.content,
            title=page.title,
            url=page.url,
            session_id=page.session_id
        )
        return {"summary": result.get("summary", "")}
    except Exception as e:
        print(f"SUMMARIZE ERROR: {e}")
        return {"summary": "⚠️ Local model failed. Try again."}


@app.post("/ask")
async def ask(req: AskRequest):
    """Legacy ask endpoint"""
    try:
        # Get page content from session or default
        result = await ToolExecutor.answer_question(
            content="",
            question=req.question,
            session_id=req.session_id
        )
        return {"answer": result.get("answer", "")}
    except Exception as e:
        print(f"ASK ERROR: {e}")
        return {"answer": "⚠️ Local model failed. Try summarizing again."}
