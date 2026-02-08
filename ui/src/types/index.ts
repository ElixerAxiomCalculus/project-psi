// Core Agent Types
export type AgentType =
  | 'web-copilot'
  | 'chat'
  | 'automation'
  | 'voice'
  | 'memory'
  | 'research'

export type ToolAction =
  | 'summarize_page'
  | 'answer_question'
  | 'open_tab'
  | 'search_web'
  | 'send_email'
  | 'create_note'
  | 'remember_fact'
  | 'get_page_content'

// Agent System
export interface Agent {
  id: AgentType
  name: string
  description: string
  icon: string
  enabled: boolean
}

export interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: number
  metadata?: {
    thinking?: string
    toolsUsed?: ToolCall[]
  }
}

export interface ToolCall {
  tool: ToolAction
  status: 'pending' | 'executing' | 'completed' | 'failed'
  input?: Record<string, unknown>
  output?: Record<string, unknown>
  error?: string
}

export interface ToolDefinition {
  name: ToolAction
  description: string
  schema: {
    type: 'object'
    properties: Record<string, unknown>
    required: string[]
  }
}

// Sessions and Memory
export interface SessionContext {
  sessionId: string
  tabId: number
  pageUrl: string
  pageTitle: string
  summary?: string
  messages: Message[]
  createdAt: number
  updatedAt: number
}

export interface MemoryEntry {
  id: string
  type: 'fact' | 'preference' | 'task'
  content: string
  relatedEntities: string[]
  createdAt: number
  updatedAt: number
  importance: 'low' | 'medium' | 'high'
}

// Automation
export interface AutomationTask {
  id: string
  name: string
  trigger: AutomationTrigger
  actions: AutomationAction[]
  enabled: boolean
  requiresConfirmation: boolean
}

export interface AutomationTrigger {
  type: 'time' | 'event' | 'pattern'
  config: Record<string, unknown>
}

export interface AutomationAction {
  tool: ToolAction
  params: Record<string, unknown>
}

// Settings & Permissions
export interface ExtensionSettings {
  theme: 'light' | 'dark'
  voiceEnabled: boolean
  automationEnabled: boolean
  memoryEnabled: boolean
  fontSize: number
}

export interface Permission {
  id: string
  name: string
  description: string
  enabled: boolean
  riskLevel: 'low' | 'medium' | 'high'
}

export interface OAuthConfig {
  provider: string
  clientId: string
  redirectUri: string
  scopes: string[]
}

// API Response Types
export interface AgentResponse {
  status: 'success' | 'error'
  message: string
  toolsCalled?: ToolCall[]
  data?: unknown
}

export interface BackendToolRequest {
  sessionId: string
  tool: ToolAction
  input: Record<string, unknown>
}
