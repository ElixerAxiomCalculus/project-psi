from sqlmodel import SQLModel, Field, create_engine
from typing import Optional
from datetime import datetime


class Session(SQLModel, table=True):
    """Represents a browser session associated with a tab"""
    session_id: str = Field(primary_key=True)
    url: str
    title: str
    summary: str
    created_at: datetime = Field(default_factory=datetime.utcnow)


class Message(SQLModel, table=True):
    """Represents a message in a session (user, assistant, or system)"""
    id: Optional[int] = Field(default=None, primary_key=True)
    session_id: str
    role: str  # "user", "assistant", "system"
    content: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class MemoryEntry(SQLModel, table=True):
    """Represents a persistent memory entry (fact, preference, task)"""
    id: Optional[int] = Field(default=None, primary_key=True)
    session_id: Optional[str] = None  # Optional: source session
    entry_type: str  # "fact", "preference", "task"
    content: str
    importance: str = "medium"  # "low", "medium", "high"
    category: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)


engine = create_engine("sqlite:///psi.db")


def init_db():
    """Initialize database and create all tables"""
    SQLModel.metadata.create_all(engine)
