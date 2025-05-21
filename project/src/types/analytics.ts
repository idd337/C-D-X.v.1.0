export interface BotMetrics {
  messageCount: number;
  responseTime: number;
  userSatisfaction: number;
  activeUsers: number;
}

export interface ConversationStats {
  totalConversations: number;
  avgDuration: number;
  completionRate: number;
  dropOffPoints: { step: string; count: number }[];
}