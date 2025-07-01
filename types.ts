
export enum CurrentView {
  HOME = 'HOME', // Added new view
  DASHBOARD = 'DASHBOARD',
  RECOMMENDATIONS = 'RECOMMENDATIONS',
  CAMPAIGNS = 'CAMPAIGNS',
  PROFILES = 'PROFILES',
  ANALYTICS = 'ANALYTICS',
  SETTINGS = 'SETTINGS',
}

export enum ClientDataFormat {
  CSV = 'csv',
  JSON = 'json',
}

export enum RecommendationModelType {
  COLLABORATIVE = 'Collaborative Filtering',
  CONTENT_BASED = 'Content-Based Filtering',
  HYBRID = 'Hybrid Model',
  DEEP_LEARNING = 'Deep Learning (Transformers/Autoencoders)',
}

export enum CampaignExportFormat {
  HTML = 'html',
  PDF = 'pdf',
  CSV = 'csv',
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: any; // Changed from React.ReactNode to any to avoid issues
}

// export interface ChartData { // Removed as components will use inferred types for sample data
//   name: string;
//   value: number;
// }