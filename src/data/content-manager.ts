/**
 * Content Management System
 * Utilities for dynamic content loading, validation, and management
 */

import { z } from 'zod';
import { portfolioData, type PersonalInfo, type Project, type Skill, type TimelineItem } from './index';

// Validation Schemas using Zod
export const PersonalInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  fullName: z.string().min(1, "Full name is required"),
  title: z.string().min(1, "Title is required"),
  titles: z.array(z.string()).min(1, "At least one title is required"),
  tagline: z.string().min(10, "Tagline should be descriptive"),
  description: z.string().min(50, "Description should be comprehensive"),
  location: z.object({
    city: z.string(),
    country: z.string(),
    full: z.string()
  }),
  contact: z.object({
    email: z.string().email("Valid email required"),
    phone: z.string().min(10, "Valid phone number required"),
    linkedin: z.string(),
    github: z.string()
  }),
  about: z.object({
    summary: z.string().min(100, "Summary should be detailed"),
    achievements: z.array(z.string()),
    funFacts: z.array(z.object({
      icon: z.string(),
      text: z.string()
    }))
  }),
  socialLinks: z.object({
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    email: z.string().email().optional(),
    twitter: z.string().url().optional(),
    instagram: z.string().url().optional()
  }),
  resumeUrl: z.string().optional()
});

export const ProjectSchema = z.object({
  id: z.string().min(1, "Project ID is required"),
  title: z.string().min(1, "Project title is required"),
  slug: z.string().min(1, "Project slug is required"),
  description: z.string().min(20, "Description should be descriptive"),
  longDescription: z.string().optional(),
  technologies: z.array(z.string()).min(1, "At least one technology required"),
  category: z.string().min(1, "Category is required"),
  subcategory: z.string().optional(),
  status: z.enum(['completed', 'in-progress', 'concept', 'archived']),
  featured: z.boolean(),
  priority: z.number().min(1).max(10),
  primaryImage: z.string().url(),
  startDate: z.string(),
  endDate: z.string().optional(),
  keywords: z.array(z.string()),
  tags: z.array(z.string())
});

export const SkillSchema = z.object({
  id: z.string().min(1, "Skill ID is required"),
  name: z.string().min(1, "Skill name is required"),
  level: z.number().min(0).max(100, "Skill level must be 0-100"),
  icon: z.string(),
  category: z.enum(['technical', 'soft', 'tool']),
  subcategory: z.string().optional(),
  description: z.string().optional(),
  yearsOfExperience: z.number().min(0).optional()
});

export const TimelineItemSchema = z.object({
  id: z.string().min(1, "Timeline item ID is required"),
  type: z.enum(['education', 'experience', 'certification', 'project']),
  title: z.string().min(1, "Title is required"),
  organization: z.string().min(1, "Organization is required"),
  location: z.string().optional(),
  date: z.string(),
  endDate: z.string().optional(),
  isOngoing: z.boolean().optional(),
  description: z.union([z.string(), z.array(z.string())]),
  importance: z.enum(['high', 'medium', 'low']),
  category: z.string()
});

// Content Management Class
export class ContentManager {
  private static instance: ContentManager;
  private cache: Map<string, any> = new Map();
  private lastUpdate: Date = new Date();

  static getInstance(): ContentManager {
    if (!ContentManager.instance) {
      ContentManager.instance = new ContentManager();
    }
    return ContentManager.instance;
  }

  // Validate content against schemas
  validatePersonalInfo(data: any): { success: boolean; errors?: string[] } {
    try {
      PersonalInfoSchema.parse(data);
      return { success: true };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { 
          success: false, 
          errors: error.errors.map(e => `${e.path.join('.')}: ${e.message}`)
        };
      }
      return { success: false, errors: ['Unknown validation error'] };
    }
  }

  validateProject(data: any): { success: boolean; errors?: string[] } {
    try {
      ProjectSchema.parse(data);
      return { success: true };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { 
          success: false, 
          errors: error.errors.map(e => `${e.path.join('.')}: ${e.message}`)
        };
      }
      return { success: false, errors: ['Unknown validation error'] };
    }
  }

  validateSkill(data: any): { success: boolean; errors?: string[] } {
    try {
      SkillSchema.parse(data);
      return { success: true };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { 
          success: false, 
          errors: error.errors.map(e => `${e.path.join('.')}: ${e.message}`)
        };
      }
      return { success: false, errors: ['Unknown validation error'] };
    }
  }

  validateTimelineItem(data: any): { success: boolean; errors?: string[] } {
    try {
      TimelineItemSchema.parse(data);
      return { success: true };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { 
          success: false, 
          errors: error.errors.map(e => `${e.path.join('.')}: ${e.message}`)
        };
      }
      return { success: false, errors: ['Unknown validation error'] };
    }
  }

  // Content loading and caching
  getContent<T>(key: string, loader: () => T): T {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    const content = loader();
    this.cache.set(key, content);
    return content;
  }

  // Invalidate cache
  invalidateCache(key?: string): void {
    if (key) {
      this.cache.delete(key);
    } else {
      this.cache.clear();
    }
    this.lastUpdate = new Date();
  }

  // Get cached content info
  getCacheInfo(): { size: number; lastUpdate: Date; keys: string[] } {
    return {
      size: this.cache.size,
      lastUpdate: this.lastUpdate,
      keys: Array.from(this.cache.keys())
    };
  }

  // Content transformation utilities
  transformProjectForDisplay(project: Project): Project & { 
    displayTechnologies: string[];
    formattedDate: string;
    isRecent: boolean;
  } {
    return {
      ...project,
      displayTechnologies: project.technologies.slice(0, 5), // Limit for UI
      formattedDate: this.formatDateRange(project.startDate, project.endDate),
      isRecent: this.isRecentDate(project.startDate)
    };
  }

  transformSkillForDisplay(skill: Skill): Skill & {
    levelDescription: string;
    experienceDescription: string;
  } {
    return {
      ...skill,
      levelDescription: this.getLevelDescription(skill.level),
      experienceDescription: skill.yearsOfExperience 
        ? `${skill.yearsOfExperience} year${skill.yearsOfExperience > 1 ? 's' : ''} experience`
        : 'Learning'
    };
  }

  // Utility methods
  private formatDateRange(start: string, end?: string): string {
    const startDate = new Date(start);
    const startYear = startDate.getFullYear();
    
    if (!end) {
      return `${startYear} - Present`;
    }
    
    const endDate = new Date(end);
    const endYear = endDate.getFullYear();
    
    return startYear === endYear ? `${startYear}` : `${startYear} - ${endYear}`;
  }

  private isRecentDate(dateString: string): boolean {
    const date = new Date(dateString);
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
    return date >= twoYearsAgo;
  }

  private getLevelDescription(level: number): string {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Proficient';
    if (level >= 60) return 'Intermediate';
    if (level >= 40) return 'Beginner';
    return 'Learning';
  }
}

// Export singleton instance
export const contentManager = ContentManager.getInstance();

// Content loading hooks for React components
export const usePortfolioContent = () => {
  return {
    personal: portfolioData.personal,
    projects: portfolioData.projects,
    skills: portfolioData.skills,
    experience: portfolioData.experience,
    stats: portfolioData
  };
};

// Content validation utilities
export const validateAllContent = (): {
  personal: { success: boolean; errors?: string[] };
  projects: Array<{ id: string; success: boolean; errors?: string[] }>;
  skills: Array<{ id: string; success: boolean; errors?: string[] }>;
  experience: Array<{ id: string; success: boolean; errors?: string[] }>;
} => {
  const manager = ContentManager.getInstance();
  
  return {
    personal: manager.validatePersonalInfo(portfolioData.personal),
    projects: portfolioData.projects.all.map(project => ({
      id: project.id,
      ...manager.validateProject(project)
    })),
    skills: Object.values(portfolioData.skills.byId).map(skill => ({
      id: skill.id,
      ...manager.validateSkill(skill)
    })),
    experience: portfolioData.experience.all.map(item => ({
      id: item.id,
      ...manager.validateTimelineItem(item)
    }))
  };
};

export default contentManager;