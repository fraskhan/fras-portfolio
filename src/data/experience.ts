/**
 * Experience and Education Data
 * Centralized storage for work experience, education, and professional timeline
 */

export interface SkillProgress {
  name: string;
  level: number; // 0-100
  category: 'technical' | 'soft' | 'tool';
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'experience' | 'certification' | 'project';
  title: string;
  organization: string;
  location?: string;
  date: string;
  endDate?: string;
  isOngoing?: boolean;
  description: string | string[];
  achievements?: string[];
  skills?: SkillProgress[];
  iconType: string; // For rendering appropriate icon
  iconBackground: string;
  tags?: string[];
  links?: Array<{ label: string; url: string }>;
  media?: Array<{ type: 'image' | 'video'; url: string; caption?: string }>;
  importance: 'high' | 'medium' | 'low';
  category: string;
}

// Education Timeline
export const educationItems: TimelineItem[] = [
  {
    id: "edu-1",
    type: "education",
    title: "Bachelor of Science in Information Technology",
    organization: "Pilar College of Zamboanga City Inc.",
    location: "Zamboanga City, Philippines",
    date: "2021",
    endDate: "2025",
    isOngoing: true,
    description: [
      "Pursuing comprehensive IT education with focus on software development, database management, and system administration",
      "Currently in Fourth Year with outstanding academic performance",
      "Active participation in IT seminars and workshops"
    ],
    achievements: [
      "Dean's List for 3 consecutive semesters",
      "Led multiple capstone projects in web development",
      "Organized university tech events and workshops"
    ],
    skills: [
      { name: "Programming", level: 85, category: 'technical' },
      { name: "Database Design", level: 80, category: 'technical' },
      { name: "System Analysis", level: 75, category: 'technical' },
      { name: "Project Management", level: 70, category: 'soft' }
    ],
    iconType: "graduation",
    iconBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tags: ["IT", "Software Development", "Database", "Systems"],
    importance: "high",
    category: "Computer Science"
  },
  {
    id: "edu-2",
    type: "education",
    title: "Secondary Education - General Academic Strand (GAS)",
    organization: "Islamic Institute of the Philippines (IIP)",
    location: "Philippines",
    date: "2020",
    endDate: "2021",
    description: [
      "Completed General Academic Strand with focus on science and mathematics",
      "Developed strong analytical and problem-solving foundation"
    ],
    achievements: [
      "Honor Student",
      "Mathematics Olympiad participant",
      "Science fair project winner"
    ],
    skills: [
      { name: "Critical Thinking", level: 75, category: 'soft' },
      { name: "Mathematics", level: 80, category: 'technical' },
      { name: "Research", level: 70, category: 'soft' }
    ],
    iconType: "graduation",
    iconBackground: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    tags: ["Academic", "Science", "Mathematics"],
    importance: "medium",
    category: "General Education"
  },
  {
    id: "edu-3",
    type: "education",
    title: "Primary Education",
    organization: "Rio Hondo Elementary School",
    location: "Rio Hondo, Philippines",
    date: "2014",
    endDate: "2015",
    description: "Completed foundational education with excellent academic performance",
    achievements: [
      "Valedictorian",
      "Perfect attendance award",
      "Leadership award"
    ],
    skills: [
      { name: "Leadership", level: 65, category: 'soft' },
      { name: "Communication", level: 70, category: 'soft' }
    ],
    iconType: "graduation",
    iconBackground: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tags: ["Elementary", "Leadership", "Excellence"],
    importance: "low",
    category: "Primary Education"
  }
];

// Professional Experience Timeline
export const experienceItems: TimelineItem[] = [
  {
    id: "exp-1",
    type: "experience",
    title: "Full Stack Developer",
    organization: "ALTSOLUTIONS",
    location: "Remote",
    date: "2023",
    endDate: "Present",
    isOngoing: true,
    description: [
      "Lead development of modern web applications using cutting-edge technologies",
      "Architected and implemented scalable backend solutions with Node.js and Express",
      "Built responsive, interactive frontends with React, TypeScript, and Tailwind CSS",
      "Integrated complex APIs and database systems for enterprise-level applications"
    ],
    achievements: [
      "Increased application performance by 40% through optimization",
      "Successfully deployed 15+ production applications",
      "Mentored 3 junior developers in modern web development practices",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ],
    skills: [
      { name: "React.js", level: 90, category: 'technical' },
      { name: "Node.js", level: 85, category: 'technical' },
      { name: "TypeScript", level: 88, category: 'technical' },
      { name: "MongoDB", level: 80, category: 'technical' },
      { name: "PostgreSQL", level: 75, category: 'technical' },
      { name: "Docker", level: 70, category: 'tool' },
      { name: "AWS", level: 65, category: 'tool' },
      { name: "Leadership", level: 75, category: 'soft' },
      { name: "Problem Solving", level: 90, category: 'soft' }
    ],
    iconType: "briefcase",
    iconBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tags: ["React", "Node.js", "TypeScript", "Full Stack", "Leadership"],
    links: [
      { label: "Company Portfolio", url: "https://altsolutions.com" }
    ],
    importance: "high",
    category: "Software Development"
  },
  {
    id: "exp-2",
    type: "experience",
    title: "Executive Director",
    organization: "Zamboanga Youth Movement Association (SPORTS)",
    location: "Zamboanga City, Philippines",
    date: "2022",
    endDate: "Present",
    isOngoing: true,
    description: [
      "Led strategic planning and execution of youth development programs",
      "Managed a team of 25+ volunteers and coordinators",
      "Organized large-scale community events and sports tournaments",
      "Developed partnerships with local government and international organizations"
    ],
    achievements: [
      "Increased youth participation by 200% in 2 years",
      "Successfully organized 10+ major community events",
      "Secured $50,000+ in funding and sponsorships",
      "Established partnerships with 15+ local organizations",
      "Launched digital platform for youth engagement"
    ],
    skills: [
      { name: "Strategic Planning", level: 85, category: 'soft' },
      { name: "Team Leadership", level: 90, category: 'soft' },
      { name: "Event Management", level: 85, category: 'soft' },
      { name: "Community Outreach", level: 80, category: 'soft' },
      { name: "Public Speaking", level: 75, category: 'soft' },
      { name: "Budget Management", level: 70, category: 'soft' },
      { name: "Digital Marketing", level: 65, category: 'technical' }
    ],
    iconType: "briefcase",
    iconBackground: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    tags: ["Leadership", "Community", "Non-profit", "Youth Development"],
    importance: "high",
    category: "Leadership & Management"
  }
];

// Certifications and Training
export const certificationItems: TimelineItem[] = [
  {
    id: "cert-1",
    type: "certification",
    title: "Real-Time Web Chat Application with User Registration and Authentication",
    organization: "Pilar College of Zamboanga City, Inc. – IT Seminar",
    location: "Zamboanga City, Philippines",
    date: "2024",
    description: [
      "Comprehensive workshop on building real-time chat applications",
      "Implemented WebSocket connections for instant messaging",
      "Developed user authentication and authorization systems"
    ],
    skills: [
      { name: "WebSocket", level: 75, category: 'technical' },
      { name: "Authentication", level: 80, category: 'technical' },
      { name: "Real-time Systems", level: 70, category: 'technical' }
    ],
    iconType: "certificate",
    iconBackground: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tags: ["WebSocket", "Authentication", "Real-time", "Chat"],
    importance: "medium",
    category: "Web Development"
  },
  {
    id: "cert-2",
    type: "certification",
    title: "Node.js Backend Development Framework",
    organization: "Pilar College of Zamboanga City, Inc. – IT Seminar",
    location: "Zamboanga City, Philippines",
    date: "2024",
    description: [
      "Advanced Node.js development techniques and best practices",
      "RESTful API design and implementation",
      "Database integration and optimization"
    ],
    skills: [
      { name: "Node.js", level: 85, category: 'technical' },
      { name: "API Design", level: 80, category: 'technical' },
      { name: "Database Integration", level: 75, category: 'technical' }
    ],
    iconType: "code",
    iconBackground: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    tags: ["Node.js", "Backend", "API", "Database"],
    importance: "high",
    category: "Backend Development"
  },
  {
    id: "cert-3",
    type: "certification",
    title: "Cyber Security SOC Level 2",
    organization: "Pilar College of Zamboanga City, Inc. – IT Seminar",
    location: "Zamboanga City, Philippines",
    date: "2024",
    description: [
      "Advanced security operations center practices",
      "Threat detection and incident response procedures",
      "Security monitoring and analysis techniques"
    ],
    skills: [
      { name: "Cybersecurity", level: 70, category: 'technical' },
      { name: "Threat Analysis", level: 65, category: 'technical' },
      { name: "Incident Response", level: 60, category: 'technical' }
    ],
    iconType: "certificate",
    iconBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tags: ["Security", "SOC", "Threat Detection", "Monitoring"],
    importance: "medium",
    category: "Cybersecurity"
  }
];

// Combined timeline for chronological view
export const allTimelineItems: TimelineItem[] = [
  ...educationItems,
  ...experienceItems, 
  ...certificationItems
].sort((a, b) => {
  // Sort by start date, most recent first
  const dateA = new Date(a.endDate || a.date);
  const dateB = new Date(b.endDate || b.date);
  return dateB.getTime() - dateA.getTime();
});

// Utility functions
export const getItemsByType = (type: TimelineItem['type']): TimelineItem[] => {
  return allTimelineItems.filter(item => item.type === type);
};

export const getItemsByCategory = (category: string): TimelineItem[] => {
  return allTimelineItems.filter(item => item.category === category);
};

export const getFeaturedItems = (): TimelineItem[] => {
  return allTimelineItems.filter(item => item.importance === 'high');
};

export const getCurrentExperience = (): TimelineItem[] => {
  return allTimelineItems.filter(item => item.isOngoing);
};

export default {
  education: educationItems,
  experience: experienceItems,
  certifications: certificationItems,
  all: allTimelineItems
};