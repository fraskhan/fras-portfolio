import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode, 
  FaCertificate, 
  FaMapMarkerAlt
} from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

// Enhanced types for the advanced experience component
interface SkillProgress {
  name: string;
  level: number; // 0-100
  category: 'technical' | 'soft' | 'tool';
}

interface TimelineItem {
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
  icon: JSX.Element;
  iconBackground: string;
  tags?: string[];
  links?: { label: string; url: string }[];
  media?: { type: 'image' | 'video'; url: string; caption?: string }[];
  importance: 'high' | 'medium' | 'low';
  category: string;
}

interface FilterState {
  type: 'all' | 'education' | 'experience' | 'certification' | 'project';
  category: string;
  timeRange: 'all' | 'recent' | 'past';
}

type ViewMode = 'timeline' | 'grid' | 'compact';

const Experience = () => {
  const { isDarkMode } = useAppContext();
  
  // State management for the advanced experience component
  const [activeFilter, setActiveFilter] = useState<FilterState>({
    type: 'all',
    category: 'all',
    timeRange: 'all'
  });
  const [viewMode, setViewMode] = useState<ViewMode>('timeline');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  
  // Refs for scroll animations
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Enhanced education timeline items
  const educationItems: TimelineItem[] = [
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
      icon: <FaGraduationCap />,
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
      icon: <FaGraduationCap />,
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
      icon: <FaGraduationCap />,
      iconBackground: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      tags: ["Elementary", "Leadership", "Excellence"],
      importance: "low",
      category: "Primary Education"
    }
  ];

  // Enhanced professional experience timeline items
  const experienceItems: TimelineItem[] = [
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
      icon: <FaBriefcase />,
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
      icon: <FaBriefcase />,
      iconBackground: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      tags: ["Leadership", "Community", "Non-profit", "Youth Development"],
      importance: "high",
      category: "Leadership & Management"
    }
  ];

  // Enhanced certifications and seminars
  const certificationItems: TimelineItem[] = [
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
      icon: <FaCertificate />,
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
      icon: <FaCode />,
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
      icon: <FaCertificate />,
      iconBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      tags: ["Security", "SOC", "Threat Detection", "Monitoring"],
      importance: "medium",
      category: "Cybersecurity"
    }
  ];

  // Combine all timeline items
  const allItems = [...educationItems, ...experienceItems, ...certificationItems];
  
  // Debug log to check if we have items
  console.log('All items:', allItems.length, allItems);

  // Filter items based on active filters
  const filteredItems = allItems.filter(item => {
    if (activeFilter.type !== 'all' && item.type !== activeFilter.type) return false;
    if (activeFilter.category !== 'all' && item.category !== activeFilter.category) return false;
    
    if (activeFilter.timeRange === 'recent') {
      const itemYear = new Date(item.endDate || item.date).getFullYear();
      return itemYear >= 2022;
    }
    if (activeFilter.timeRange === 'past') {
      const itemYear = new Date(item.endDate || item.date).getFullYear();
      return itemYear < 2022;
    }
    
    return true;
  });

  // Get unique categories for filter options
  const categories = ['all', ...Array.from(new Set(allItems.map(item => item.category)))];
  
  // Pagination logic
  const itemsPerPage = viewMode === 'compact' ? 6 : 4;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleFilterChange = (key: 'type' | 'category' | 'timeRange', value: string) => {
    setActiveFilter(prev => ({ ...prev, [key]: value }));
    setCurrentPage(0); // Reset to first page when filter changes
  };

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    setCurrentPage(0); // Reset to first page when view changes
  };

  return (
    <section 
      ref={containerRef}
      id="experience" 
      className={`relative min-h-screen py-20 overflow-hidden transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-primary via-black-100 to-primary'
          : 'bg-gradient-to-br from-primary-light via-gray-100 to-primary-light'
      }`}
      style={{ position: 'relative' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
            isDarkMode ? 'bg-accent/10' : 'bg-accent-light/10'
          }`}
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
            isDarkMode ? 'bg-secondary/10' : 'bg-secondary-light/10'
          }`}
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Advanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
              isDarkMode 
                ? 'bg-accent/20 border-accent/30' 
                : 'bg-accent-light/20 border-accent-light/30'
            }`}
            style={{ transformOrigin: 'center' }}
          >
            <FaGraduationCap className={isDarkMode ? 'text-accent' : 'text-accent-light'} />
            <span className={`font-medium text-sm ${
              isDarkMode ? 'text-accent' : 'text-accent-light'
            }`}>My Journey</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-4xl md:text-6xl font-bold leading-tight mb-6 ${
              isDarkMode ? 'text-white-100' : 'text-gray-900'
            }`}
          >
            Experience & 
            <span className={`text-transparent bg-clip-text ${
              isDarkMode 
                ? 'bg-gradient-to-r from-accent to-secondary'
                : 'bg-gradient-to-r from-accent-light to-secondary-light'
            }`}> Education</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={`text-lg max-w-2xl mb-8 ${
              isDarkMode ? 'text-white-100/80' : 'text-gray-700'
            }`}
          >
            A comprehensive journey through professional development, academic achievements, 
            and continuous learning in technology and leadership.
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={`h-1 rounded mx-auto mb-6 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-accent to-secondary'
                : 'bg-gradient-to-r from-accent-light to-secondary-light'
            }`}
          />
        </motion.div>

        {/* Advanced Filter & View Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-12"
        >
          <div className={`backdrop-blur-xl rounded-2xl border p-6 ${
            isDarkMode 
              ? 'bg-black-100/50 border-white-100/10'
              : 'bg-white/50 border-gray-200'
          }`}>
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              
              {/* Filter Controls */}
              <div className="flex flex-wrap gap-4 items-center">
                {/* Type Filter */}
                <div className="flex items-center gap-2">
                  <select
                    value={activeFilter.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                    className={`rounded-lg px-3 py-2 text-sm focus:outline-none transition-colors ${
                      isDarkMode 
                        ? 'bg-primary/50 border border-white-100/20 text-white focus:border-accent'
                        : 'bg-white/80 border border-gray-300 text-gray-800 focus:border-accent-light'
                    }`}
                  >
                    <option value="all">All Types</option>
                    <option value="experience">Experience</option>
                    <option value="education">Education</option>
                    <option value="certification">Certifications</option>
                  </select>
                </div>

                {/* Category Filter */}
                <select
                  value={activeFilter.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className={`rounded-lg px-3 py-2 text-sm focus:outline-none transition-colors ${
                    isDarkMode 
                      ? 'bg-primary/50 border border-white-100/20 text-white focus:border-accent'
                      : 'bg-white/80 border border-gray-300 text-gray-800 focus:border-accent-light'
                  }`}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

                {/* Time Range Filter */}
                <select
                  value={activeFilter.timeRange}
                  onChange={(e) => handleFilterChange('timeRange', e.target.value)}
                  className={`rounded-lg px-3 py-2 text-sm focus:outline-none transition-colors ${
                    isDarkMode 
                      ? 'bg-primary/50 border border-white-100/20 text-white focus:border-accent'
                      : 'bg-white/80 border border-gray-300 text-gray-800 focus:border-accent-light'
                  }`}
                >
                  <option value="all">All Time</option>
                  <option value="recent">Recent (2022+)</option>
                  <option value="past">Past (Before 2022)</option>
                </select>
              </div>

              {/* View Mode Controls */}
              <div className={`flex items-center gap-2 rounded-lg p-1 ${
                isDarkMode ? 'bg-primary/30' : 'bg-gray-200/50'
              }`}>
                {(['timeline', 'grid', 'compact'] as const).map(mode => (
                  <motion.button
                    key={mode}
                    onClick={() => handleViewModeChange(mode)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      viewMode === mode 
                        ? isDarkMode 
                          ? 'bg-accent text-primary shadow-lg' 
                          : 'bg-accent-light text-white shadow-lg'
                        : isDarkMode
                          ? 'bg-white-100/10 text-white-100 hover:bg-white-100/20'
                          : 'bg-gray-300/50 text-gray-700 hover:bg-gray-300/80'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 1, scale: 1 }}
                    style={{ 
                      boxShadow: viewMode === mode 
                        ? '0 4px 12px rgba(135, 206, 235, 0.3)' 
                        : '0 0px 0px rgba(0, 0, 0, 0)',
                      transformOrigin: 'center'
                    }}
                  >
                    {mode === 'timeline' && <FaGraduationCap />}
                    {mode === 'grid' && <FaBriefcase />}
                    {mode === 'compact' && <FaCode />}
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Results Summary */}
            <div className={`mt-4 flex items-center justify-between text-sm ${
              isDarkMode ? 'text-white-100/60' : 'text-gray-600'
            }`}>
              <span>
                Showing {paginatedItems.length} of {filteredItems.length} items
              </span>
              {/* Pagination */}
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                  disabled={currentPage === 0}
                  className="p-1 rounded hover:bg-white-100/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: currentPage === 0 ? 1 : 1.1 }}
                  whileTap={{ scale: currentPage === 0 ? 1 : 0.9 }}
                  initial={{ opacity: 1, scale: 1 }}
                  style={{ transformOrigin: 'center' }}
                >
                  <FaMapMarkerAlt />
                </motion.button>
                <span>{currentPage + 1} / {totalPages}</span>
                <motion.button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                  disabled={currentPage === totalPages - 1}
                  className="p-1 rounded hover:bg-white-100/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: currentPage === totalPages - 1 ? 1 : 1.1 }}
                  whileTap={{ scale: currentPage === totalPages - 1 ? 1 : 0.9 }}
                  initial={{ opacity: 1, scale: 1 }}
                  style={{ transformOrigin: 'center' }}
                >
                  <FaMapMarkerAlt />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="container mx-auto px-6" style={{ position: 'relative' }}>
          {/* Timeline View */}
          {viewMode === 'timeline' && (
            <div className="space-y-8">
              {paginatedItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 backdrop-blur-lg border rounded-xl p-6 transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white-100/5 border-white-100/10 hover:bg-white-100/10'
                      : 'bg-white/80 border-gray-200 hover:bg-white/90'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div 
                        className="p-3 rounded-full flex-shrink-0"
                        style={{ background: item.iconBackground }}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-2 ${
                          isDarkMode ? 'text-white-100' : 'text-gray-900'
                        }`}>{item.title}</h3>
                        <p className={`font-medium mb-2 ${
                          isDarkMode ? 'text-accent' : 'text-accent-light'
                        }`}>{item.organization}</p>
                        <div className={`flex items-center gap-4 text-sm mb-4 ${
                          isDarkMode ? 'text-white-100/70' : 'text-gray-600'
                        }`}>
                          <span>{item.date}{item.endDate && ` - ${item.endDate}`}</span>
                          <span>📍 {item.location}</span>
                        </div>
                        <div className="space-y-2 mb-4">
                          {Array.isArray(item.description) 
                            ? item.description.map((desc: string, i: number) => (
                                <p key={i} className={`text-sm leading-relaxed ${
                                  isDarkMode ? 'text-white-100/80' : 'text-gray-700'
                                }`}>• {desc}</p>
                              ))
                            : <p className={`text-sm leading-relaxed ${
                              isDarkMode ? 'text-white-100/80' : 'text-gray-700'
                            }`}>• {item.description}</p>
                          }
                        </div>
                        {item.achievements && (
                          <div className="mb-4">
                            <h4 className={`font-semibold mb-2 ${
                              isDarkMode ? 'text-white-100' : 'text-gray-900'
                            }`}>Key Achievements:</h4>
                            {item.achievements.map((achievement: string, i: number) => (
                              <p key={i} className={`text-sm ${
                                isDarkMode ? 'text-accent' : 'text-accent-light'
                              }`}>🏆 {achievement}</p>
                            ))}
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {item.tags?.map((tag: string, i: number) => (
                            <span key={i} className={`px-3 py-1 text-xs rounded-full ${
                              isDarkMode 
                                ? 'bg-accent/20 text-accent'
                                : 'bg-accent-light/20 text-accent-light'
                            }`}>
                              {tag}
                            </span>
                          )) || []}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Line */}
                  <div className={`w-1 h-full rounded-full min-h-[100px] ${
                    isDarkMode 
                      ? 'bg-gradient-to-b from-accent to-secondary'
                      : 'bg-gradient-to-b from-accent-light to-secondary-light'
                  }`}></div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`backdrop-blur-lg border rounded-xl p-6 hover:scale-105 transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white-100/5 border-white-100/10 hover:bg-white-100/10'
                      : 'bg-white/80 border-gray-200 hover:bg-white/90'
                  }`}
                >
                  <div 
                    className="p-3 rounded-full w-fit mb-4"
                    style={{ background: item.iconBackground }}
                  >
                    {item.icon}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${
                    isDarkMode ? 'text-white-100' : 'text-gray-900'
                  }`}>{item.title}</h3>
                  <p className={`font-medium mb-2 ${
                    isDarkMode ? 'text-accent' : 'text-accent-light'
                  }`}>{item.organization}</p>
                  <div className={`text-sm mb-4 ${
                    isDarkMode ? 'text-white-100/70' : 'text-gray-600'
                  }`}>
                    <p>{item.date}{item.endDate && ` - ${item.endDate}`}</p>
                    <p>📍 {item.location}</p>
                  </div>
                  <div className="space-y-1 mb-4">
                    {Array.isArray(item.description) 
                      ? item.description.slice(0, 2).map((desc: string, i: number) => (
                          <p key={i} className={`text-sm ${
                            isDarkMode ? 'text-white-100/80' : 'text-gray-700'
                          }`}>• {desc}</p>
                        ))
                      : <p className={`text-sm ${
                        isDarkMode ? 'text-white-100/80' : 'text-gray-700'
                      }`}>• {item.description}</p>
                    }
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.tags?.slice(0, 3).map((tag: string, i: number) => (
                      <span key={i} className={`px-2 py-1 text-xs rounded-full ${
                        isDarkMode 
                          ? 'bg-accent/20 text-accent'
                          : 'bg-accent-light/20 text-accent-light'
                      }`}>
                        {tag}
                      </span>
                    )) || []}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Compact View */}
          {viewMode === 'compact' && (
            <div className="space-y-4">
              {paginatedItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className={`backdrop-blur-lg border rounded-lg p-4 transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white-100/5 border-white-100/10 hover:bg-white-100/10'
                      : 'bg-white/80 border-gray-200 hover:bg-white/90'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="p-2 rounded-full flex-shrink-0"
                      style={{ background: item.iconBackground }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold ${
                        isDarkMode ? 'text-white-100' : 'text-gray-900'
                      }`}>{item.title}</h3>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-accent' : 'text-accent-light'
                      }`}>{item.organization}</p>
                    </div>
                    <div className={`text-right text-sm ${
                      isDarkMode ? 'text-white-100/70' : 'text-gray-600'
                    }`}>
                      <p>{item.date}{item.endDate && ` - ${item.endDate}`}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
      </section>
    );
  };

export default Experience; 