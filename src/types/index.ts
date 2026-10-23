export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  tech: string[];
  live: string;
  github?: string;
  category: 'professional' | 'earlier';
  preview: 'food' | 'resort' | 'medera' | 'survey' | 'movers' | 'mobile' | 'gemini' | 'shop' | 'weather' | 'stay';
  context?: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
  type?: string;
  location?: string;
  icon: 'work' | 'education';
  projects?: { title: string; href: string }[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
