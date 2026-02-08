import React, { useState } from 'react'
import { useAppStore } from '../../store/appStore'
import type { MemoryEntry, MemoryEntry as MemoryEntryType } from '../../types'
import './Memory.css'

/**
 * Memory Agent
 * Manages short-term and long-term memory
 */
export const MemoryAgent: React.FC = () => {
  const [view, setView] = useState<'short' | 'long'>('short')
  const [newEntry, setNewEntry] = useState('')
  const [entryType, setEntryType] = useState<'fact' | 'preference' | 'task'>('fact')

  const memoryEntries = useAppStore((s) => s.memoryEntries)
  const shortTermMemory = useAppStore((s) => s.shortTermMemory)
  const { addMemoryEntry, removeMemoryEntry } = useAppStore()

  const handleAddEntry = () => {
    if (!newEntry.trim()) return

    const entry: MemoryEntryType = {
      id: `mem_${Date.now()}`,
      type: entryType,
      content: newEntry,
      relatedEntities: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
      importance: 'medium'
    }

    addMemoryEntry(entry)
    setNewEntry('')
  }

  const getTypeIcon = (type: MemoryEntry['type']) => {
    switch (type) {
      case 'fact':
        return '[INSIGHT]'
      case 'preference':
        return '[STARRED]'
      case 'task':
        return '✓'
      default:
        return '[NOTE]'
    }
  }

  return (
    <div className="psi-memory">
      <div className="psi-memory-tabs">
        <button
          className={`psi-memory-tab ${view === 'short' ? 'active' : ''}`}
          onClick={() => setView('short')}
        >
          Short-term
        </button>
        <button
          className={`psi-memory-tab ${view === 'long' ? 'active' : ''}`}
          onClick={() => setView('long')}
        >
          Long-term
        </button>
      </div>

      {/* Short-term Memory */}
      {view === 'short' && (
        <div className="psi-memory-view">
          <div className="psi-memory-info">
            <p>Recent interactions and context ({shortTermMemory.length} items)</p>
          </div>
          <div className="psi-memory-list">
            {shortTermMemory.length === 0 ? (
              <p className="psi-memory-empty">No recent memory yet</p>
            ) : (
              shortTermMemory.map((item, index) => (
                <div key={index} className="psi-memory-item">
                  <span title={item}>{item.substring(0, 60)}...</span>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Long-term Memory */}
      {view === 'long' && (
        <div className="psi-memory-view">
          <div className="psi-memory-input-area">
            <div className="psi-memory-input-group">
              <input
                type="text"
                placeholder="Add a fact, preference, or task..."
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleAddEntry()
                }}
              />
              <select
                value={entryType}
                onChange={(e) => setEntryType(e.target.value as any)}
              >
                <option value="fact">Fact</option>
                <option value="preference">Preference</option>
                <option value="task">Task</option>
              </select>
            </div>
            <button onClick={handleAddEntry} disabled={!newEntry.trim()}>
              Save
            </button>
          </div>

          <div className="psi-memory-list">
            {memoryEntries.length === 0 ? (
              <p className="psi-memory-empty">No saved memories yet</p>
            ) : (
              memoryEntries.map((entry) => (
                <div key={entry.id} className="psi-memory-item">
                  <div className="psi-memory-item-header">
                    <span className="psi-memory-item-icon">{getTypeIcon(entry.type)}</span>
                    <span className="psi-memory-item-type">{entry.type}</span>
                  </div>
                  <div className="psi-memory-item-content">{entry.content}</div>
                  <button
                    className="psi-memory-delete-btn"
                    onClick={() => removeMemoryEntry(entry.id)}
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MemoryAgent
