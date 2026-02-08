import React, { type ReactNode } from 'react'
import { useAppStore, useSidebarOpen } from '../../store/appStore'
import './Sidebar.css'

interface SidebarLayoutProps {
  children: ReactNode
}

/**
 * Main sidebar container with header and content area
 * Manages sidebar open/close state
 */
export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const sidebarOpen = useSidebarOpen()
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen)
  const { setShowAgentLauncher, setActiveAgent } = useAppStore()

  const handleToggleLauncher = () => {
    setShowAgentLauncher(true)
    setActiveAgent(null)
  }

  const handleClose = () => {
    setSidebarOpen(false)
  }

  return (
    <>
      {!sidebarOpen && (
        <button
          className="psi-launcher"
          onClick={() => setSidebarOpen(true)}
          title="Open Project Psi"
        >
          Ψ
        </button>
      )}

      <div className={`psi-sidebar ${sidebarOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="psi-header">
          <div className="psi-title-alpha">
            <button
              className="psi-home-btn"
              onClick={handleToggleLauncher}
              title="Back to agent launcher"
            >
              ⌂
            </button>
            <span>Project Psi</span>
            <span className="psi-alpha-badge" title="Alpha Development Phase">
              α
            </span>
          </div>
          <button
            className="psi-close-btn"
            onClick={handleClose}
            title="Close sidebar"
          >
            ✕
          </button>
        </div>

        {/* Content Area */}
        <div className="psi-content">{children}</div>
      </div>

      {/* Overlay for better UX */}
      {sidebarOpen && <div className="psi-overlay" onClick={handleClose} />}
    </>
  )
}

export default SidebarLayout
