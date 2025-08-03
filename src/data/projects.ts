/**
 * Projects Portfolio Data
 * Centralized storage for all portfolio projects, case studies, and work samples
 */

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  type: 'thumbnail' | 'screenshot' | 'demo' | 'diagram';
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'live' | 'github' | 'documentation' | 'case-study' | 'video';
  primary?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string | number;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: string;
  subcategory?: string;
  status: 'completed' | 'in-progress' | 'concept' | 'archived';
  featured: boolean;
  priority: number; // 1-10, higher = more important
  
  // Visual assets
  images: ProjectImage[];
  primaryImage: string; // URL to main project image
  
  // External links
  links: ProjectLink[];
  
  // Project details
  features: string[];
  challenges?: string[];
  solutions?: string[];
  learnings?: string[];
  
  // Metrics and impact
  metrics?: ProjectMetric[];
  
  // Timeline
  startDate: string;
  endDate?: string;
  duration?: string;
  
  // Team and role
  teamSize?: number;
  myRole?: string;
  responsibilities?: string[];
  
  // Technical details
  architecture?: string;
  deployment?: string;
  apiDocumentation?: string;
  
  // SEO and metadata
  keywords: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    longDescription: "A comprehensive e-commerce solution designed to provide seamless shopping experiences. Built with modern web technologies and featuring advanced user management, real-time inventory tracking, and secure payment processing.",
    
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
    category: "Full Stack",
    subcategory: "E-commerce",
    status: "completed",
    featured: true,
    priority: 9,
    
    images: [
      {
        url: "/images/projects/ecommerce/thumbnail.jpg",
        alt: "E-commerce platform homepage",
        type: "thumbnail"
      },
      {
        url: "/images/projects/ecommerce/dashboard.jpg",
        alt: "Admin dashboard interface",
        type: "screenshot"
      },
      {
        url: "/images/projects/ecommerce/mobile.jpg",
        alt: "Mobile responsive design",
        type: "screenshot"
      }
    ],
    primaryImage: "/images/projects/ecommerce/thumbnail.jpg",
    
    links: [
      {
        label: "Live Demo",
        url: "https://ecommerce-demo.fraskhan.dev",
        type: "live",
        primary: true
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/alfraskhanj/ecommerce-platform",
        type: "github"
      },
      {
        label: "API Documentation",
        url: "https://docs.fraskhan.dev/ecommerce-api",
        type: "documentation"
      }
    ],
    
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order management and tracking",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
      "Real-time notifications"
    ],
    
    challenges: [
      "Implementing secure payment processing",
      "Managing complex state across multiple components",
      "Optimizing database queries for large product catalogs",
      "Ensuring mobile responsiveness across all features"
    ],
    
    solutions: [
      "Integrated Stripe for PCI-compliant payment processing",
      "Used Redux Toolkit for predictable state management",
      "Implemented database indexing and pagination",
      "Applied mobile-first design principles with Tailwind CSS"
    ],
    
    learnings: [
      "Advanced React patterns and performance optimization",
      "E-commerce business logic and user experience design",
      "Payment gateway integration and security best practices",
      "Database design for scalable applications"
    ],
    
    metrics: [
      {
        label: "Page Load Time",
        value: "< 2s",
        description: "Optimized for fast loading"
      },
      {
        label: "Test Coverage",
        value: "85%",
        description: "Comprehensive unit and integration tests"
      },
      {
        label: "Mobile Performance",
        value: "95/100",
        description: "Lighthouse mobile score"
      }
    ],
    
    startDate: "2024-01",
    endDate: "2024-06",
    duration: "6 months",
    
    teamSize: 1,
    myRole: "Full Stack Developer",
    responsibilities: [
      "Frontend development with React and TypeScript",
      "Backend API development with Node.js",
      "Database design and optimization",
      "Payment integration and security implementation",
      "Deployment and DevOps setup"
    ],
    
    architecture: "MERN Stack with microservices architecture",
    deployment: "Vercel (Frontend) + Railway (Backend) + MongoDB Atlas",
    
    keywords: ["ecommerce", "react", "nodejs", "mongodb", "stripe", "full-stack"],
    tags: ["React", "Node.js", "E-commerce", "Stripe", "MongoDB", "Full Stack"]
  },
  
  {
    id: "task-management-app",
    title: "Task Management App",
    slug: "task-management-app", 
    description: "A collaborative task management application with real-time updates, team features, and progress tracking.",
    longDescription: "A comprehensive project management solution designed for teams. Features real-time collaboration, advanced project tracking, and intuitive user interface for enhanced productivity.",
    
    technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
    category: "Frontend",
    subcategory: "Productivity",
    status: "completed",
    featured: true,
    priority: 8,
    
    images: [
      {
        url: "/images/projects/taskmanager/thumbnail.jpg",
        alt: "Task management dashboard",
        type: "thumbnail"
      },
      {
        url: "/images/projects/taskmanager/kanban.jpg",
        alt: "Kanban board interface",
        type: "screenshot"
      }
    ],
    primaryImage: "/images/projects/taskmanager/thumbnail.jpg",
    
    links: [
      {
        label: "Live Demo",
        url: "https://taskmanager-demo.fraskhan.dev",
        type: "live",
        primary: true
      },
      {
        label: "GitHub Repository", 
        url: "https://github.com/alfraskhanj/task-manager",
        type: "github"
      }
    ],
    
    features: [
      "Real-time collaborative editing",
      "Kanban board with drag-and-drop",
      "Team member management",
      "Progress tracking and analytics",
      "File attachment support",
      "Notification system",
      "Mobile-responsive design"
    ],
    
    challenges: [
      "Implementing real-time synchronization across multiple users",
      "Complex state management for collaborative features",
      "Optimizing performance with large datasets"
    ],
    
    solutions: [
      "Used Firebase Firestore for real-time data synchronization",
      "Implemented optimistic updates for better user experience",
      "Applied virtualization for large task lists"
    ],
    
    startDate: "2024-03",
    endDate: "2024-05",
    duration: "3 months",
    
    myRole: "Frontend Developer",
    teamSize: 2,
    
    keywords: ["task-management", "react", "firebase", "collaboration", "real-time"],
    tags: ["React", "Firebase", "Real-time", "Collaboration", "Material-UI"]
  },
  
  {
    id: "social-media-dashboard",
    title: "Social Media Dashboard",
    slug: "social-media-dashboard",
    description: "A comprehensive social media analytics dashboard with data visualization and reporting features.",
    longDescription: "An advanced analytics platform that aggregates social media data from multiple platforms, providing insights through interactive visualizations and comprehensive reporting tools.",
    
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Chart.js"],
    category: "Data Visualization",
    subcategory: "Analytics",
    status: "completed",
    featured: false,
    priority: 7,
    
    images: [
      {
        url: "/images/projects/dashboard/thumbnail.jpg",
        alt: "Social media analytics dashboard",
        type: "thumbnail"
      }
    ],
    primaryImage: "/images/projects/dashboard/thumbnail.jpg",
    
    links: [
      {
        label: "Live Demo",
        url: "https://dashboard-demo.fraskhan.dev",
        type: "live",
        primary: true
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/alfraskhanj/social-dashboard",
        type: "github"
      }
    ],
    
    features: [
      "Multi-platform data aggregation",
      "Interactive data visualizations",
      "Custom reporting tools", 
      "Real-time metrics tracking",
      "Export functionality",
      "Responsive dashboard layout"
    ],
    
    startDate: "2024-02",
    endDate: "2024-04", 
    duration: "2 months",
    
    myRole: "Full Stack Developer",
    teamSize: 1,
    
    keywords: ["dashboard", "analytics", "data-visualization", "d3js", "postgresql"],
    tags: ["React", "D3.js", "Analytics", "PostgreSQL", "Data Visualization"]
  },
  
  {
    id: "student-information-system",
    title: "Student Information System",
    slug: "student-information-system",
    description: "A full-featured student information system for educational institutions to manage student data, courses, and grading.",
    longDescription: "A comprehensive academic management system designed for educational institutions. Handles student enrollment, course management, grading systems, and administrative tasks with role-based access control.",
    
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery"],
    category: "Web Application",
    subcategory: "Educational",
    status: "completed",
    featured: false,
    priority: 6,
    
    images: [
      {
        url: "/images/projects/student-system/thumbnail.jpg",
        alt: "Student information system interface",
        type: "thumbnail"
      }
    ],
    primaryImage: "/images/projects/student-system/thumbnail.jpg",
    
    links: [
      {
        label: "Live Demo",
        url: "https://student-system-demo.fraskhan.dev",
        type: "live",
        primary: true
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/alfraskhanj/student-information-system",
        type: "github"
      }
    ],
    
    features: [
      "Student enrollment and management",
      "Course and curriculum management",
      "Grading and assessment system",
      "Attendance tracking",
      "Report generation",
      "Role-based access control",
      "Parent/guardian portal"
    ],
    
    startDate: "2023-09",
    endDate: "2023-12",
    duration: "4 months",
    
    myRole: "Full Stack Developer",
    teamSize: 3,
    
    keywords: ["student-management", "php", "mysql", "education", "academic"],
    tags: ["PHP", "MySQL", "Education", "Bootstrap", "Academic Management"]
  }
];

// Utility functions for project data
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured)
    .sort((a, b) => b.priority - a.priority);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getRecentProjects = (limit: number = 3): Project[] => {
  return projects
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
    .slice(0, limit);
};

export const getProjectCategories = (): string[] => {
  return Array.from(new Set(projects.map(project => project.category)));
};

export const getProjectTechnologies = (): string[] => {
  const allTechs = projects.flatMap(project => project.technologies);
  return Array.from(new Set(allTechs));
};

export default projects;