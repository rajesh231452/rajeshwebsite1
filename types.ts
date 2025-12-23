export interface TimelineEvent {
  year: string;
  title: string;
  horcrux: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  creature: string;
  description: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  tech: string[];
  description: string;
  image: string;
}

export enum ChatSender {
  USER = 'user',
  WIZARD = 'wizard'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
}