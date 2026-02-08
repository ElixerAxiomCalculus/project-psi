import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { useAppStore, useMessages, useAgentLoading } from '../../store/appStore'
import { useMessaging } from '../../services/messagingService'
import type { Message } from '../../types'
import './WebCopilot.css'

/**
 * Web Copilot Agent
 * Analyzes and interacts with the current page
 */
export const WebCopilotAgent: React.FC = () => {
  const [view, setView] = useState<'summary' | 'chat'>('summary')
  const [summary, setSummary] = useState('Click "Analyze Page" to generate a summary.')
  const [input, setInput] = useState('')
  const [localLoading, setLocalLoading] = useState(false)

  const messages = useMessages()
  const agentLoading = useAgentLoading()
  const sessionId = useAppStore((s) => s.sessionId)
  const { setAgentLoading, addMessage } = useAppStore()
  const { summarize, ask } = useMessaging()

  // Auto-focus input in chat view
  useEffect(() => {
    if (view === 'chat') {
      const input = document.querySelector('.psi-copilot-input input') as HTMLInputElement
      input?.focus()
    }
  }, [view])

  const handleSummarize = async () => {
    if (!sessionId) return

    setLocalLoading(true)
    setAgentLoading(true)
    setSummary('Analyzing page...')

    try {
      const result = await summarize(sessionId)
      setSummary(result || 'No summary generated.')

      // Record in short-term memory
      useAppStore.setState((state) => ({
        shortTermMemory: [`Summarized: ${result?.substring(0, 100)}...`, ...state.shortTermMemory].slice(0, 50)
      }))
    } catch (error) {
      setSummary(
        `Error: ${error instanceof Error ? error.message : 'Failed to summarize page'}`
      )
    } finally {
      setLocalLoading(false)
      setAgentLoading(false)
    }
  }

  const handleSendMessage = async () => {
    if (!input.trim() || !sessionId) return

    const userQuestion = input
    setInput('')
    setLocalLoading(true)
    setAgentLoading(true)

    // Add user message to store
    const userMessage: Message = {
      id: `msg_${Date.now()}`,
      role: 'user',
      content: userQuestion,
      timestamp: Date.now()
    }
    addMessage(userMessage)

    try {
      const result = await ask(sessionId, userQuestion)

      // Add assistant message
      const assistantMessage: Message = {
        id: `msg_${Date.now()}_response`,
        role: 'assistant',
        content: result || 'No response generated.',
        timestamp: Date.now()
      }
      addMessage(assistantMessage)
    } catch (error) {
      const errorMessage: Message = {
        id: `msg_${Date.now()}_error`,
        role: 'assistant',
        content: `Error: ${error instanceof Error ? error.message : 'Failed to get response'}`,
        timestamp: Date.now()
      }
      addMessage(errorMessage)
    } finally {
      setLocalLoading(false)
      setAgentLoading(false)
    }
  }

  return (
    <div className="psi-copilot">
      {/* Tabs */}
      <div className="psi-copilot-tabs">
        <button
          className={`psi-copilot-tab ${view === 'summary' ? 'active' : ''}`}
          onClick={() => setView('summary')}
        >
          📋 Summary
        </button>
        <button
          className={`psi-copilot-tab ${view === 'chat' ? 'active' : ''}`}
          onClick={() => setView('chat')}
        >
          💬 Chat
        </button>
      </div>

      {/* Summary View */}
      {view === 'summary' && (
        <div className="psi-copilot-view">
          <div className="psi-copilot-body psi-markdown">
            <ReactMarkdown>{summary}</ReactMarkdown>
          </div>
          <button
            className="psi-copilot-action-btn"
            onClick={handleSummarize}
            disabled={localLoading || agentLoading}
          >
            {localLoading || agentLoading ? '⏳ Analyzing...' : '📖 Analyze Page'}
          </button>
        </div>
      )}

      {/* Chat View */}
      {view === 'chat' && (
        <div className="psi-copilot-view psi-copilot-chat">
          <div className="psi-copilot-messages">
            {messages.length === 0 ? (
              <div className="psi-copilot-empty">
                <p>Start a conversation about this page</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className={`psi-copilot-msg ${msg.role}`}>
                  <div className="psi-msg-content psi-markdown">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="psi-copilot-input">
            <input
              type="text"
              placeholder="Ask about this page..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey && !localLoading && !agentLoading) {
                  handleSendMessage()
                }
              }}
              disabled={localLoading || agentLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!input.trim() || localLoading || agentLoading}
            >
              {localLoading || agentLoading ? '⏳' : '→'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WebCopilotAgent
