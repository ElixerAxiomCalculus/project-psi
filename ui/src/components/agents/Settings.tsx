import React from 'react'
import { useAppStore, useSettings, usePermissions } from '../../store/appStore'
import type { Permission as PermissionType } from '../../types'
import './Settings.css'

/**
 * Settings View
 * Manage extension settings and permissions
 */
export const SettingsView: React.FC = () => {
  const settings = useSettings()
  const permissions = usePermissions()
  const { updateSettings, togglePermission } = useAppStore()

  const getRiskBadge = (level: PermissionType['riskLevel']) => {
    switch (level) {
      case 'low':
        return '🟢'
      case 'medium':
        return '🟡'
      case 'high':
        return '🔴'
      default:
        return '⚪'
    }
  }

  return (
    <div className="psi-settings">
      <h3>Settings & Permissions</h3>

      {/* Core Settings */}
      <section className="psi-settings-section">
        <h4>Core Settings</h4>

        <div className="psi-settings-group">
          <label>
            <span>Voice Enabled</span>
            <input
              type="checkbox"
              checked={settings.voiceEnabled}
              onChange={(e) => updateSettings({ voiceEnabled: e.target.checked })}
            />
          </label>
        </div>

        <div className="psi-settings-group">
          <label>
            <span>Automation Enabled</span>
            <input
              type="checkbox"
              checked={settings.automationEnabled}
              onChange={(e) => updateSettings({ automationEnabled: e.target.checked })}
            />
          </label>
        </div>

        <div className="psi-settings-group">
          <label>
            <span>Memory Enabled</span>
            <input
              type="checkbox"
              checked={settings.memoryEnabled}
              onChange={(e) => updateSettings({ memoryEnabled: e.target.checked })}
            />
          </label>
        </div>

        <div className="psi-settings-group">
          <label>
            Font Size: {settings.fontSize}px
            <input
              type="range"
              min="12"
              max="16"
              value={settings.fontSize}
              onChange={(e) => updateSettings({ fontSize: parseInt(e.target.value) })}
            />
          </label>
        </div>
      </section>

      {/* Permissions */}
      <section className="psi-settings-section">
        <h4>Integrations & Permissions</h4>
        <p className="psi-settings-hint">
          Grant access only to services you trust. High-risk operations require confirmation.
        </p>

        <div className="psi-permissions-list">
          {permissions.map((perm) => (
            <div key={perm.id} className="psi-permission-item">
              <div className="psi-permission-info">
                <div className="psi-permission-header">
                  <span className="psi-permission-risk">{getRiskBadge(perm.riskLevel)}</span>
                  <span className="psi-permission-name">{perm.name}</span>
                </div>
                <p className="psi-permission-desc">{perm.description}</p>
              </div>
              <input
                type="checkbox"
                checked={perm.enabled}
                onChange={() => togglePermission(perm.id)}
                title={`${perm.riskLevel} risk operation`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Info */}
      <section className="psi-settings-section">
        <h4>About</h4>
        <div className="psi-settings-info">
          <p>Project Psi v3.0 (Alpha)</p>
          <p>Local AI Browser Copilot</p>
          <p style={{ fontSize: '12px', marginTop: '8px', opacity: 0.7 }}>
            Powered by Qwen 3 8B via Ollama
          </p>
        </div>
      </section>
    </div>
  )
}

export default SettingsView
