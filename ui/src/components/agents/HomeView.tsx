import React from 'react'
import { useAppStore } from '../../store/appStore'
import type { Agent } from '../../types'
import './HomeView.css'

/**
 * Home view showing available agents and quick actions
 */
export const HomeView: React.FC = () => {
  const availableAgents = useAppStore((s) => s.availableAgents)
  const { setActiveAgent, setShowAgentLauncher } = useAppStore()

  const enabledAgents = availableAgents.filter((a) => a.enabled)

  const handleSelectAgent = (agent: Agent) => {
    setActiveAgent(agent.id as any)
    setShowAgentLauncher(false)
  }

  return (
    <div className="psi-home-view">
      <div className="psi-home-header">
        <h2>Welcome to Project Psi</h2>
        <p>Your AI browser copilot</p>
      </div>

      <div className="psi-home-agents">
        <h3>Available Agents</h3>
        <div className="psi-agent-grid">
          {enabledAgents.map((agent) => (
            <button
              key={agent.id}
              className="psi-agent-card"
              onClick={() => handleSelectAgent(agent)}
            >
              <div className="psi-agent-card-icon">{agent.icon}</div>
              <div className="psi-agent-card-content">
                <h4>{agent.name}</h4>
                <p>{agent.description}</p>
              </div>
              <div className="psi-agent-card-arrow">→</div>
            </button>
          ))}
        </div>
      </div>

      <div className="psi-home-features">
        <h3>Features</h3>
        <ul>
          <li>🤖 Multi-agent AI system</li>
          <li>💾 Long-term memory</li>
          <li>⚙️ Automation workflow</li>
          <li>🎙️ Voice interaction (coming soon)</li>
          <li>🔧 Tool-based reasoning</li>
        </ul>
      </div>

      <div className="psi-home-footer">
        <p>Built on Qwen 3 8B via Ollama</p>
      </div>
    </div>
  )
}

export default HomeView
