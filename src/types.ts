export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'Graphic Design' | 'Social Media' | 'Poster' | 'Logo' | 'Presentation' | 'Video Editing';
  image: string;
  technologies: string[];
  year: string;
  role: string;
  previewUrl?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string[];
  location: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  category: 'Design' | 'Technical' | 'Language' | 'Other';
  iconName: string; // Lucide icon name
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
