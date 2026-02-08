import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import type {
  Agent,
  AgentType,
  Message,
  SessionContext,
  MemoryEntry,
  ExtensionSettings,
  Permission
} from '../types'

// Core Store State
export interface AppState {
  // Agent Management
  availableAgents: Agent[]
  activeAgent: AgentType | null
  agentLoading: boolean

  // Session Management
  currentSession: SessionContext | null
  sessions: Map<string, SessionContext>
  sessionId: string | null

  // Chat & Messages
  messages: Message[]
  isTyping: boolean

  // Memory System
  memoryEntries: MemoryEntry[]
  shortTermMemory: string[]

  // Settings & Permissions
  settings: ExtensionSettings
  permissions: Permission[]

  // UI State
  sidebarOpen: boolean
  showAgentLauncher: boolean
  confirmationPending: {
    action: string
    message: string
    onConfirm: () => void
    onCancel: () => void
  } | null

  // Actions - Agent Management
  initializeAgents: () => void
  setActiveAgent: (agent: AgentType | null) => void
  setAgentLoading: (loading: boolean) => void

  // Actions - Sessions
  createSession: (tabId: number, pageUrl: string, pageTitle: string) => void
  setCurrentSession: (sessionId: string) => void
  addMessage: (message: Message) => void
  clearMessages: () => void
  updateSessionSummary: (summary: string) => void

  // Actions - Memory
  addMemoryEntry: (entry: MemoryEntry) => void
  removeMemoryEntry: (id: string) => void
  addShortTermMemory: (item: string) => void
  clearShortTermMemory: () => void

  // Actions - Settings
  updateSettings: (settings: Partial<ExtensionSettings>) => void
  togglePermission: (permissionId: string) => void

  // Actions - UI
  setSidebarOpen: (open: boolean) => void
  setShowAgentLauncher: (show: boolean) => void
  requestConfirmation: (action: string, message: string, onConfirm: () => void) => void
  cancelConfirmation: () => void
}

const defaultSettings: ExtensionSettings = {
  theme: 'light',
  voiceEnabled: false,
  automationEnabled: false,
  memoryEnabled: true,
  fontSize: 14
}

const defaultAgents: Agent[] = [
  {
    id: 'web-copilot',
    name: 'Web Copilot',
    description: 'Analyze and interact with web pages',
    icon: '🌐',
    enabled: true
  },
  {
    id: 'chat',
    name: 'Chat',
    description: 'Conversational AI assistant',
    icon: '💬',
    enabled: true
  },
  {
    id: 'automation',
    name: 'Automation',
    description: 'Automate repetitive tasks',
    icon: '⚙️',
    enabled: false
  },
  {
    id: 'voice',
    name: 'Voice',
    description: 'Voice-powered interactions',
    icon: '🎙️',
    enabled: false
  },
  {
    id: 'memory',
    name: 'Memory',
    description: 'Remember facts and preferences',
    icon: '💾',
    enabled: true
  },
  {
    id: 'research',
    name: 'Research',
    description: 'Deep research and analysis',
    icon: '🔍',
    enabled: false
  }
]

const defaultPermissions: Permission[] = [
  {
    id: 'email',
    name: 'Email Access',
    description: 'Send and manage emails',
    enabled: false,
    riskLevel: 'high'
  },
  {
    id: 'calendar',
    name: 'Calendar Access',
    description: 'Access and modify calendar events',
    enabled: false,
    riskLevel: 'high'
  },
  {
    id: 'drive',
    name: 'Drive Access',
    description: 'Create and modify documents',
    enabled: false,
    riskLevel: 'high'
  },
  {
    id: 'tab_control',
    name: 'Tab Control',
    description: 'Open and close browser tabs',
    enabled: true,
    riskLevel: 'medium'
  },
  {
    id: 'page_interaction',
    name: 'Page Interaction',
    description: 'Interact with page elements',
    enabled: true,
    riskLevel: 'medium'
  }
]

export const useAppStore = create<AppState>()(
  subscribeWithSelector((set, get) => ({
    // Initial State
    availableAgents: defaultAgents,
    activeAgent: null,
    agentLoading: false,
    currentSession: null,
    sessions: new Map(),
    sessionId: null,
    messages: [],
    isTyping: false,
    memoryEntries: [],
    shortTermMemory: [],
    settings: defaultSettings,
    permissions: defaultPermissions,
    sidebarOpen: false,
    showAgentLauncher: false,
    confirmationPending: null,

    // Agent Management
    initializeAgents: () => {
      set({ availableAgents: defaultAgents })
    },

    setActiveAgent: (agent) => {
      set({ activeAgent: agent })
      if (agent) {
        set({ showAgentLauncher: false })
      }
    },

    setAgentLoading: (loading) => {
      set({ agentLoading: loading })
    },

    // Session Management
    createSession: (tabId, pageUrl, pageTitle) => {
      const sessionId = `session_${Date.now()}`
      const newSession: SessionContext = {
        sessionId,
        tabId,
        pageUrl,
        pageTitle,
        messages: [],
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
      const sessions = new Map(get().sessions)
      sessions.set(sessionId, newSession)
      set({
        sessionId,
        currentSession: newSession,
        sessions,
        messages: []
      })
    },

    setCurrentSession: (sessionId) => {
      const session = get().sessions.get(sessionId)
      if (session) {
        set({
          sessionId,
          currentSession: session,
          messages: session.messages
        })
      }
    },

    addMessage: (message) => {
      const messages = [...get().messages, message]
      set({ messages })

      // Update current session
      const { sessionId, sessions } = get()
      if (sessionId) {
        const session = sessions.get(sessionId)
        if (session) {
          const updatedSession = {
            ...session,
            messages,
            updatedAt: Date.now()
          }
          const newSessions = new Map(sessions)
          newSessions.set(sessionId, updatedSession)
          set({
            currentSession: updatedSession,
            sessions: newSessions
          })
        }
      }
    },

    clearMessages: () => {
      set({ messages: [] })
    },

    updateSessionSummary: (summary) => {
      const { sessionId, sessions } = get()
      if (sessionId) {
        const session = sessions.get(sessionId)
        if (session) {
          const updatedSession = { ...session, summary, updatedAt: Date.now() }
          const newSessions = new Map(sessions)
          newSessions.set(sessionId, updatedSession)
          set({
            currentSession: updatedSession,
            sessions: newSessions
          })
        }
      }
    },

    // Memory
    addMemoryEntry: (entry) => {
      set((state) => ({
        memoryEntries: [...state.memoryEntries, entry]
      }))
    },

    removeMemoryEntry: (id) => {
      set((state) => ({
        memoryEntries: state.memoryEntries.filter((e) => e.id !== id)
      }))
    },

    addShortTermMemory: (item) => {
      set((state) => ({
        shortTermMemory: [item, ...state.shortTermMemory].slice(0, 50) // Limit to 50 items
      }))
    },

    clearShortTermMemory: () => {
      set({ shortTermMemory: [] })
    },

    // Settings
    updateSettings: (newSettings) => {
      set((state) => ({
        settings: { ...state.settings, ...newSettings }
      }))
    },

    togglePermission: (permissionId) => {
      set((state) => ({
        permissions: state.permissions.map((p) =>
          p.id === permissionId ? { ...p, enabled: !p.enabled } : p
        )
      }))
    },

    // UI
    setSidebarOpen: (open) => {
      set({ sidebarOpen: open })
    },

    setShowAgentLauncher: (show) => {
      set({ showAgentLauncher: show })
    },

    requestConfirmation: (action, message, onConfirm) => {
      set({
        confirmationPending: {
          action,
          message,
          onConfirm,
          onCancel: () => set({ confirmationPending: null })
        }
      })
    },

    cancelConfirmation: () => {
      set({ confirmationPending: null })
    }
  }))
)

// Selectors for optimized subscriptions
export const useActiveAgent = () =>
  useAppStore((state) => state.activeAgent)
export const useMessages = () =>
  useAppStore((state) => state.messages)
export const useCurrentSession = () =>
  useAppStore((state) => state.currentSession)
export const useSidebarOpen = () =>
  useAppStore((state) => state.sidebarOpen)
export const useAgentLoading = () =>
  useAppStore((state) => state.agentLoading)
export const useShowAgentLauncher = () =>
  useAppStore((state) => state.showAgentLauncher)
export const useConfirmation = () =>
  useAppStore((state) => state.confirmationPending)
export const useSettings = () =>
  useAppStore((state) => state.settings)
export const usePermissions = () =>
  useAppStore((state) => state.permissions)
export const useMemoryEntries = () =>
  useAppStore((state) => state.memoryEntries)
