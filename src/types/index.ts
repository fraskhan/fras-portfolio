// Common types
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Component variant types
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type BadgeVariant = 'default' | 'outline' | 'subtle';

// Animation types
export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade';
export type AnimationDuration = 'fast' | 'normal' | 'slow';

// Portfolio content types
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  email?: string;
  twitter?: string;
  instagram?: string;
}

export interface HeroData {
  name: string;
  titles: string[];
  description: string;
  socialLinks: SocialLinks;
  resumeUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
  location?: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  icon?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  imageUrl?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Navigation types
export interface NavLink {
  name: string;
  to: string;
  external?: boolean;
}

// Component Props types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

export interface BadgeProps extends BaseProps {
  variant?: BadgeVariant;
  size?: 'sm' | 'md' | 'lg';
}

export interface SectionProps extends BaseProps {
  id?: string;
  fullHeight?: boolean;
  background?: 'primary' | 'secondary' | 'transparent';
}

export interface SectionHeadingProps extends BaseProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

// Animation hooks types
export interface AnimationRefs {
  [key: string]: React.RefObject<HTMLElement>;
}

export type AnimationSequence = string[][];

// Theme types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
}

// Utility types
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
export type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Event handler types
export type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type SubmitHandler<T> = (data: T) => void | Promise<void>;

// API response types (if you have an API)
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ContactFormResponse extends ApiResponse {
  data: {
    messageId?: string;
  };
} 