// src/types.ts

export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  address?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string; // or 'Present'
  description: string[];
}

export interface Education {
  degree: string;
  major: string;
  university: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Resume {
  name: string;
  title: string;
  contact: ContactInfo;
  summary: string[];
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
}
