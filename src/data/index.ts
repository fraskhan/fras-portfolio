/**
 * Data Layer - Centralized Exports
 * Single source of truth for all portfolio data
 */

// Import all data modules
import { personalInfo, type PersonalInfo } from './personal';
import { skillCategories, skillsById, getSkillsByCategory, getTopSkills, type Skill, type SkillCategory } from './skills';
import { 
  projects, 
  getFeaturedProjects, 
  getProjectsByCategory, 
  getProjectById, 
  getProjectBySlug,
  getRecentProjects,
  getProjectCategories,
  getProjectTechnologies,
  type Project,
  type ProjectImage,
  type ProjectLink,
  type ProjectMetric
} from './projects';
import { 
  allTimelineItems,
  educationItems,
  experienceItems,
  certificationItems,
  getItemsByType,
  getItemsByCategory,
  getFeaturedItems,
  getCurrentExperience,
  type TimelineItem,
  type SkillProgress
} from './experience';

// Re-export all data
export {
  // Personal Information
  personalInfo,
  type PersonalInfo,
  
  // Skills
  skillCategories,
  skillsById,
  getSkillsByCategory,
  getTopSkills,
  type Skill,
  type SkillCategory,
  
  // Projects
  projects,
  getFeaturedProjects,
  getProjectsByCategory,
  getProjectById,
  getProjectBySlug,
  getRecentProjects,
  getProjectCategories,
  getProjectTechnologies,
  type Project,
  type ProjectImage,
  type ProjectLink,
  type ProjectMetric,
  
  // Experience & Education
  allTimelineItems,
  educationItems,
  experienceItems,
  certificationItems,
  getItemsByType,
  getItemsByCategory,
  getFeaturedItems,
  getCurrentExperience,
  type TimelineItem,
  type SkillProgress
};

// Combined portfolio data object for easy access
export const portfolioData = {
  personal: personalInfo,
  skills: {
    categories: skillCategories,
    byId: skillsById,
    getByCategory: getSkillsByCategory,
    getTop: getTopSkills
  },
  projects: {
    all: projects,
    featured: getFeaturedProjects(),
    recent: getRecentProjects(),
    categories: getProjectCategories(),
    technologies: getProjectTechnologies(),
    getByCategory: getProjectsByCategory,
    getById: getProjectById,
    getBySlug: getProjectBySlug
  },
  experience: {
    all: allTimelineItems,
    education: educationItems,
    work: experienceItems,
    certifications: certificationItems,
    featured: getFeaturedItems(),
    current: getCurrentExperience(),
    getByType: getItemsByType,
    getByCategory: getItemsByCategory
  }
};

// Data validation helpers
export const validatePersonalInfo = (data: any): data is PersonalInfo => {
  return data && 
    typeof data.name === 'string' &&
    typeof data.email === 'string' &&
    Array.isArray(data.titles);
};

export const validateProject = (data: any): data is Project => {
  return data &&
    typeof data.id === 'string' &&
    typeof data.title === 'string' &&
    Array.isArray(data.technologies) &&
    typeof data.status === 'string';
};

export const validateSkill = (data: any): data is Skill => {
  return data &&
    typeof data.id === 'string' &&
    typeof data.name === 'string' &&
    typeof data.level === 'number' &&
    data.level >= 0 && data.level <= 100;
};

export const validateTimelineItem = (data: any): data is TimelineItem => {
  return data &&
    typeof data.id === 'string' &&
    typeof data.title === 'string' &&
    typeof data.organization === 'string' &&
    ['education', 'experience', 'certification', 'project'].includes(data.type);
};

// Data statistics and insights
export const getPortfolioStats = () => {
  const totalProjects = projects.length;
  const featuredProjects = getFeaturedProjects().length;
  const totalSkills = Object.keys(skillsById).length;
  const topSkillsAverage = getTopSkills(5).reduce((sum, skill) => sum + skill.level, 0) / 5;
  const currentExperience = getCurrentExperience().length;
  const totalExperience = experienceItems.length;
  
  return {
    projects: {
      total: totalProjects,
      featured: featuredProjects,
      completed: projects.filter(p => p.status === 'completed').length,
      inProgress: projects.filter(p => p.status === 'in-progress').length
    },
    skills: {
      total: totalSkills,
      categories: skillCategories.length,
      averageLevel: topSkillsAverage,
      expertLevel: Object.values(skillsById).filter(s => s.level >= 80).length
    },
    experience: {
      total: totalExperience,
      current: currentExperience,
      certifications: certificationItems.length,
      education: educationItems.length
    },
    lastUpdated: new Date().toISOString()
  };
};

// Search and filter utilities
export const searchPortfolio = (query: string): {
  projects: Project[];
  skills: Skill[];
  experience: TimelineItem[];
} => {
  const lowercaseQuery = query.toLowerCase();
  
  const matchingProjects = projects.filter(project =>
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery)) ||
    project.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
  
  const matchingSkills = Object.values(skillsById).filter(skill =>
    skill.name.toLowerCase().includes(lowercaseQuery) ||
    skill.description?.toLowerCase().includes(lowercaseQuery)
  );
  
  const matchingExperience = allTimelineItems.filter(item =>
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.organization.toLowerCase().includes(lowercaseQuery) ||
    (typeof item.description === 'string' && item.description.toLowerCase().includes(lowercaseQuery)) ||
    (Array.isArray(item.description) && item.description.some(desc => desc.toLowerCase().includes(lowercaseQuery))) ||
    item.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
  
  return {
    projects: matchingProjects,
    skills: matchingSkills,
    experience: matchingExperience
  };
};

// Export default portfolio data object
export default portfolioData;