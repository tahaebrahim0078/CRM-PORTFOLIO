// // User and Role types
// export type UserRole = "owner" | "admin" | "agent";

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   avatar?: string;
//   role: UserRole;
//   createdAt: Date;
// }

// // Agent types
// export interface Agent {
//   id: string;
//   name: string;
//   email: string;
//   avatar: string;
//   status: "online" | "offline" | "away";
//   responseTime: string;
//   conversationCount: number;
//   satisfactionRate: number;
//   lastActive: string;
// }

// // Conversation types
// export interface Conversation {
//   id: string;
//   agentId: string;
//   agentName: string;
//   agentAvatar: string;
//   customerName: string;
//   timestamp: string;
//   preview: string;
//   unread: boolean;
// }

// // Analytics types
// export interface AnalyticsMetrics {
//   totalChats: number;
//   totalInquiries: number;
//   agents: number;
//   averageResponseTime: string;
// }

// export interface ChatTrend {
//   date: string;
//   volume: number;
// }

// export interface SatisfactionData {
//   name: string;
//   value: number;
// }

// export interface ResponseTimeData {
//   name: string;
//   value: number;
//   percentage?: number;
// }

// export interface TopIssue {
//   name: string;
//   percentage: number;
// }

// export interface KeyMetric {
//   label: string;
//   value: string;
//   change: string;
//   trend: "up" | "down";
// }

// // Pricing types
// export interface PricingPlan {
//   name: string;
//   price: number;
//   period: string;
//   features: string[];
//   highlighted: boolean;
//   buttonText: string;
//   buttonVariant: "primary" | "secondary" | "dark";
// }

// // Feature types
// export interface Feature {
//   icon: string;
//   title: string;
//   description: string;
// }
