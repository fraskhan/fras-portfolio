/**
 * Skills and Technologies Data
 * Centralized storage for all technical skills, proficiency levels, and categories
 */

export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
  icon: string; // Icon component name or path
  category: 'technical' | 'soft' | 'tool';
  subcategory?: string;
  description?: string;
  yearsOfExperience?: number;
  projects?: string[]; // Project IDs where this skill was used
}

export interface SkillCategory {
  id: string;
  title: string;
  description?: string;
  skills: Skill[];
  color?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    description: "Core programming languages and technologies",
    color: "#667eea",
    skills: [
      {
        id: "java",
        name: "Java",
        level: 80,
        icon: "FaJava",
        category: "technical",
        subcategory: "Backend",
        description: "Object-oriented programming, Spring framework",
        yearsOfExperience: 3
      },
      {
        id: "python",
        name: "Python",
        level: 85,
        icon: "FaPython",
        category: "technical",
        subcategory: "Backend",
        description: "Django, Flask, data analysis, automation",
        yearsOfExperience: 4
      },
      {
        id: "html5",
        name: "HTML5",
        level: 90,
        icon: "FaHtml5",
        category: "technical",
        subcategory: "Frontend",
        description: "Semantic markup, accessibility best practices",
        yearsOfExperience: 5
      },
      {
        id: "css3",
        name: "CSS3",
        level: 85,
        icon: "FaCss3Alt",
        category: "technical",
        subcategory: "Frontend",
        description: "Modern CSS, Flexbox, Grid, animations",
        yearsOfExperience: 5
      },
      {
        id: "php",
        name: "PHP",
        level: 75,
        icon: "FaPhp",
        category: "technical",
        subcategory: "Backend",
        description: "Server-side scripting, Laravel basics",
        yearsOfExperience: 2
      },
      {
        id: "javascript",
        name: "JavaScript",
        level: 82,
        icon: "SiJavascript",
        category: "technical",
        subcategory: "Frontend",
        description: "ES6+, DOM manipulation, async programming",
        yearsOfExperience: 4
      },
      {
        id: "typescript",
        name: "TypeScript",
        level: 70,
        icon: "SiTypescript",
        category: "technical",
        subcategory: "Frontend",
        description: "Type safety, interface design, React integration",
        yearsOfExperience: 2
      }
    ]
  },
  {
    id: "frameworks-libraries",
    title: "Frameworks & Libraries",
    description: "Modern development frameworks and libraries",
    color: "#f093fb",
    skills: [
      {
        id: "react",
        name: "React",
        level: 75,
        icon: "FaReact",
        category: "technical",
        subcategory: "Frontend",
        description: "Hooks, Context API, performance optimization",
        yearsOfExperience: 2
      },
      {
        id: "django",
        name: "Django",
        level: 68,
        icon: "SiDjango",
        category: "technical",
        subcategory: "Backend",
        description: "REST APIs, ORM, authentication systems",
        yearsOfExperience: 2
      },
      {
        id: "flask",
        name: "Flask",
        level: 72,
        icon: "SiFlask",
        category: "technical",
        subcategory: "Backend",
        description: "Lightweight web applications, API development",
        yearsOfExperience: 2
      },
      {
        id: "streamlit",
        name: "Streamlit",
        level: 70,
        icon: "SiStreamlit",
        category: "technical",
        subcategory: "Data",
        description: "Data visualization, rapid prototyping",
        yearsOfExperience: 1
      },
      {
        id: "nodejs",
        name: "Node.js",
        level: 85,
        icon: "FaNodeJs",
        category: "technical",
        subcategory: "Backend",
        description: "Express.js, RESTful APIs, real-time applications",
        yearsOfExperience: 3
      },
      {
        id: "tailwindcss",
        name: "Tailwind CSS",
        level: 88,
        icon: "SiTailwindcss",
        category: "technical",
        subcategory: "Frontend",
        description: "Utility-first CSS, responsive design",
        yearsOfExperience: 2
      }
    ]
  },
  {
    id: "tools-platforms",
    title: "Tools & Platforms",
    description: "Development tools, databases, and platforms",
    color: "#4facfe",
    skills: [
      {
        id: "mysql",
        name: "MySQL",
        level: 85,
        icon: "SiMysql",
        category: "technical",
        subcategory: "Database",
        description: "Complex queries, optimization, database design",
        yearsOfExperience: 4
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        level: 75,
        icon: "SiPostgresql",
        category: "technical",
        subcategory: "Database",
        description: "Advanced SQL, JSON operations, performance tuning",
        yearsOfExperience: 2
      },
      {
        id: "sqlite",
        name: "SQLite",
        level: 80,
        icon: "FaDatabase",
        category: "technical",
        subcategory: "Database",
        description: "Embedded databases, mobile applications",
        yearsOfExperience: 3
      },
      {
        id: "supabase",
        name: "Supabase",
        level: 65,
        icon: "SiSupabase",
        category: "tool",
        subcategory: "Backend",
        description: "Backend-as-a-service, real-time features",
        yearsOfExperience: 1
      },
      {
        id: "git",
        name: "Git",
        level: 80,
        icon: "FaGit",
        category: "tool",
        subcategory: "Version Control",
        description: "Version control, branching strategies, collaboration",
        yearsOfExperience: 4
      },
      {
        id: "github",
        name: "GitHub",
        level: 85,
        icon: "FaGithub",
        category: "tool",
        subcategory: "Platform",
        description: "Repository management, CI/CD, collaboration",
        yearsOfExperience: 4
      },
      {
        id: "troubleshooting",
        name: "Basic Troubleshooting",
        level: 90,
        icon: "FaTools",
        category: "soft",
        subcategory: "Problem Solving",
        description: "System diagnostics, debugging, problem resolution",
        yearsOfExperience: 5
      }
    ]
  },
  {
    id: "soft-skills",
    title: "Professional Skills",
    description: "Leadership, communication, and management abilities",
    color: "#a8edea",
    skills: [
      {
        id: "leadership",
        name: "Team Leadership",
        level: 90,
        icon: "FaUsers",
        category: "soft",
        subcategory: "Management",
        description: "Managing teams of 25+ members, strategic planning",
        yearsOfExperience: 3
      },
      {
        id: "project-management",
        name: "Project Management",
        level: 75,
        icon: "FaTasks",
        category: "soft",
        subcategory: "Management",
        description: "Agile methodologies, timeline management, coordination",
        yearsOfExperience: 3
      },
      {
        id: "problem-solving",
        name: "Problem Solving",
        level: 90,
        icon: "FaLightbulb",
        category: "soft",
        subcategory: "Analytical",
        description: "Critical thinking, analytical approach, innovation",
        yearsOfExperience: 5
      },
      {
        id: "communication",
        name: "Communication",
        level: 85,
        icon: "FaComments",
        category: "soft",
        subcategory: "Interpersonal",
        description: "Public speaking, technical writing, stakeholder management",
        yearsOfExperience: 4
      },
      {
        id: "event-management",
        name: "Event Management",
        level: 85,
        icon: "FaCalendarAlt",
        category: "soft",
        subcategory: "Management",
        description: "Large-scale event organization, logistics coordination",
        yearsOfExperience: 3
      }
    ]
  }
];

// Export individual skill for easy access
export const skillsById = skillCategories.reduce((acc, category) => {
  category.skills.forEach(skill => {
    acc[skill.id] = skill;
  });
  return acc;
}, {} as Record<string, Skill>);

// Get skills by category
export const getSkillsByCategory = (categoryId: string): Skill[] => {
  const category = skillCategories.find(cat => cat.id === categoryId);
  return category ? category.skills : [];
};

// Get top skills (highest level)
export const getTopSkills = (limit: number = 10): Skill[] => {
  const allSkills = skillCategories.flatMap(category => category.skills);
  return allSkills
    .sort((a, b) => b.level - a.level)
    .slice(0, limit);
};

export default skillCategories;