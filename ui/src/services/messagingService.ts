import type { ToolAction, AgentResponse } from '../types'

export class MessagingService {
  /**
   * Send a message to the background script
   */
  static async sendMessage(
    type: string,
    payload?: Record<string, unknown>
  ): Promise<unknown> {
    return new Promise((resolve, reject) => {
      try {
        chrome.runtime.sendMessage(
          { type, payload },
          (response) => {
            if (chrome.runtime.lastError) {
              reject(new Error(chrome.runtime.lastError.message))
            } else {
              resolve(response)
            }
          }
        )
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Execute a tool via the background script
   */
  static async executeTool(
    sessionId: string,
    tool: ToolAction,
    input: Record<string, unknown>
  ): Promise<AgentResponse> {
    return this.sendMessage('EXECUTE_TOOL', {
      sessionId,
      tool,
      input
    }) as Promise<AgentResponse>
  }

  /**
   * Get page content
   */
  static async getPageContent(): Promise<{
    title: string
    url: string
    content: string
  }> {
    return this.sendMessage('SCRAPE_PAGE') as Promise<{
      title: string
      url: string
      content: string
    }>
  }

  /**
   * Summarize the current page
   */
  static async summarizePage(sessionId: string): Promise<string> {
    const response = (await this.executeTool(sessionId, 'summarize_page', {})) as AgentResponse
    return response.data as string
  }

  /**
   * Ask a question about the current page
   */
  static async askAboutPage(
    sessionId: string,
    question: string
  ): Promise<string> {
    const response = (await this.executeTool(sessionId, 'answer_question', {
      question
    })) as AgentResponse
    return response.data as string
  }

  /**
   * Create a new session
   */
  static async createSession(tabId: number, pageUrl: string, pageTitle: string): Promise<string> {
    const response = (await this.sendMessage('CREATE_SESSION', {
      tabId,
      pageUrl,
      pageTitle
    })) as { sessionId: string }
    return response.sessionId
  }

  /**
   * Save memory entry
   */
  static async saveMemory(sessionId: string, content: string, type: 'fact' | 'preference' | 'task'): Promise<void> {
    await this.executeTool(sessionId, 'remember_fact', {
      content,
      type
    })
  }

  /**
   * Send automation action (requires confirmation)
   */
  static async executeAutomation(
    sessionId: string,
    tool: ToolAction,
    params: Record<string, unknown>,
    requiresConfirmation: boolean = true
  ): Promise<AgentResponse> {
    if (requiresConfirmation) {
      return this.sendMessage('CONFIRM_AUTOMATION', {
        sessionId,
        tool,
        params
      }) as Promise<AgentResponse>
    }
    return this.executeTool(sessionId, tool, params)
  }
}

/**
 * Hook for messaging with error handling
 */
export const useMessaging = () => {
  const executeTool = async (
    sessionId: string,
    tool: ToolAction,
    input: Record<string, unknown>
  ) => {
    try {
      return await MessagingService.executeTool(sessionId, tool, input)
    } catch (error) {
      console.error(`Tool execution failed: ${tool}`, error)
      throw error
    }
  }

  const ask = async (sessionId: string, question: string) => {
    try {
      return await MessagingService.askAboutPage(sessionId, question)
    } catch (error) {
      console.error('Failed to ask question', error)
      throw error
    }
  }

  const summarize = async (sessionId: string) => {
    try {
      return await MessagingService.summarizePage(sessionId)
    } catch (error) {
      console.error('Failed to summarize page', error)
      throw error
    }
  }

  return {
    executeTool,
    ask,
    summarize
  }
}
