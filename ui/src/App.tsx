import { useEffect } from 'react'
import { useAppStore, useActiveAgent, useShowAgentLauncher } from './store/appStore'
import { SidebarLayout } from './components/layout/Sidebar'
import { AgentLauncher } from './components/layout/AgentLauncher'
import { HomeView } from './components/agents/HomeView'
import { WebCopilotAgent } from './components/agents/WebCopilot'
import { MemoryAgent } from './components/agents/Memory'
import './App.css'

/**
 * Main App Component
 * Manages agent routing and renders appropriate views
 */
export default function App() {
  const activeAgent = useActiveAgent()
  const showLauncher = useShowAgentLauncher()
  const { initializeAgents, setSidebarOpen, createSession } = useAppStore()

  // Initialize on mount
  useEffect(() => {
    initializeAgents()

    // Create initial session from page context
    chrome.runtime.sendMessage(
      { type: 'GET_CURRENT_TAB' },
      (response: any) => {
        if (response?.tab) {
          createSession(response.tab.id, response.tab.url, response.tab.title)
          setSidebarOpen(true)
        }
      }
    )
  }, [])

  // Render agent content based on active agent
  const renderAgentContent = () => {
    // Show launcher if explicitly enabled
    if (showLauncher) {
      return <HomeView />
    }

    // Route to active agent
    switch (activeAgent) {
      case 'web-copilot':
        return <WebCopilotAgent />
      case 'chat':
        return <WebCopilotAgent /> // Use same copilot for now
      case 'memory':
        return <MemoryAgent />
      case 'automation':
        return (
          <div className="psi-coming-soon">
            <h3>Automation</h3>
            <p>Automation workflows coming soon...</p>
          </div>
        )
      case 'voice':
        return (
          <div className="psi-coming-soon">
            <h3>Voice Agent</h3>
            <p>Voice interaction coming soon...</p>
          </div>
        )
      case 'research':
        return (
          <div className="psi-coming-soon">
            <h3>Research Agent</h3>
            <p>Deep research capabilities coming soon...</p>
          </div>
        )
      default:
        return <HomeView />
    }
  }

  return (
    <>
      <SidebarLayout>
        {renderAgentContent()}
      </SidebarLayout>

      <AgentLauncher />
    </>
  )
}
