export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export enum CloneMethod {
  PLUGIN = 'PLUGIN',
  MANUAL = 'MANUAL'
}

export interface Step {
  title: string;
  description: string;
  icon: string;
}