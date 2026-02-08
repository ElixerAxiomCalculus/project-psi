import React from 'react'
import { useAppStore, useShowAgentLauncher } from '../../store/appStore'
import type { AgentType } from '../../types'
import './AgentLauncher.css'

/**
 * Radial/circular agent launcher
 * Shows available agents in a circular menu
 * Click to activate an agent
 */
export const AgentLauncher: React.FC = () => {
  const showLauncher = useShowAgentLauncher()
  const availableAgents = useAppStore((s) => s.availableAgents)
  const { setActiveAgent, setShowAgentLauncher } = useAppStore()

  if (!showLauncher) {
    return null
  }

  const handleAgentClick = (agentId: AgentType) => {
    setActiveAgent(agentId)
    setShowAgentLauncher(false)
  }

  const handleCloseLauncher = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowAgentLauncher(false)
    }
  }

  return (
    <div className="psi-launcher-overlay" onClick={handleCloseLauncher}>
      <div className="psi-launcher-container">
        {/* Center circle */}
        <div className="psi-launcher-center">
          <div className="psi-launcher-icon">Ψ</div>
          <div className="psi-launcher-text">Select Agent</div>
        </div>

        {/* Radial agent buttons */}
        <div className="psi-launcher-agents">
          {availableAgents.map((agent, index) => {
            const totalAgents = availableAgents.length
            const angle = (index / totalAgents) * Math.PI * 2 - Math.PI / 2
            const distance = 120
            const x = Math.cos(angle) * distance
            const y = Math.sin(angle) * distance

            return (
              <button
                key={agent.id}
                className={`psi-launcher-agent ${agent.enabled ? 'enabled' : 'disabled'}`}
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
                onClick={() => agent.enabled && handleAgentClick(agent.id as AgentType)}
                title={agent.description}
                disabled={!agent.enabled}
              >
                <div className="psi-agent-btn-icon">{agent.icon}</div>
                <div className="psi-agent-btn-name">{agent.name}</div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AgentLauncher
