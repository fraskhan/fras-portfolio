import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase, FaCode, FaCertificate } from 'react-icons/fa';

// Types
interface TimelineItem {
  title: string;
  organization: string;
  date: string;
  description: string | string[];
  icon: JSX.Element;
  iconBackground: string;
  tags?: string[];
}

const Experience = () => {
  // Education timeline items
  const educationItems: TimelineItem[] = [
    {
      title: "Bachelor of Science in Information Technology",
      organization: "Pilar College of Zamboanga City Inc.",
      date: "2021 - Present (Expected Graduation: 2025)",
      description: "Currently in Fourth Year",
      icon: <FaGraduationCap />,
      iconBackground: "#3b82f6" // blue-500
    },
    {
      title: "Secondary Education - General Academic Strand (GAS)",
      organization: "Islamic Institute of the Philippines (IIP)",
      date: "2020 - 2021",
      description: "Completed General Academic Strand",
      icon: <FaGraduationCap />,
      iconBackground: "#8b5cf6" // violet-500
    },
    {
      title: "Primary Education",
      organization: "Rio Hondo Elementary School",
      date: "Graduated 2014 - 2015",
      description: "Completed Primary Education",
      icon: <FaGraduationCap />,
      iconBackground: "#10b981" // emerald-500
    }
  ];

  // Professional experience timeline items
  const experienceItems: TimelineItem[] = [
    {
      title: "Full Stack Developer",
      organization: "ALTSOLUTIONS",
      date: "Current Position",
      description: [
        "Building responsive web applications",
        "Working with React, HTML, CSS, and backend technologies",
        "Collaborating with team members to deliver high-quality products"
      ],
      icon: <FaBriefcase />,
      iconBackground: "#ef4444", // red-500
      tags: ["React", "JavaScript", "HTML/CSS", "Backend Development"]
    },
    {
      title: "Executive Director",
      organization: "Zamboanga Youth Movement Association (SPORTS)",
      date: "Current Position",
      description: "Leading sports initiatives in Brgy. Sta. Catalina",
      icon: <FaBriefcase />,
      iconBackground: "#f59e0b" // amber-500
    }
  ];

  // Seminars/Webinars/Trainings
  const seminarItems: TimelineItem[] = [
    {
      title: "Real-Time Web Chat Application with User Registration and Authentication",
      organization: "Pilar College of Zamboanga City, Inc. – IT Seminar",
      date: "April 6, 2024",
      description: "Learned about building real-time chat applications with user management systems",
      icon: <FaCode />,
      iconBackground: "#8b5cf6" // violet-500
    },
    {
      title: "Introduction to Node.js: A Backend Development Framework",
      organization: "Pilar College of Zamboanga City, Inc. – IT Seminar",
      date: "March 16, 2024",
      description: "Theme: Harnessing Innovation - Explored Node.js fundamentals for backend development",
      icon: <FaCode />,
      iconBackground: "#8b5cf6" // violet-500
    },
    {
      title: "Cyber Security SOC Level 2",
      organization: "Pilar College of Zamboanga City, Inc. – IT Seminar",
      date: "January 26, 2024",
      description: "Advanced cybersecurity training focused on security operations center practices",
      icon: <FaCertificate />,
      iconBackground: "#064e3b" // emerald-900
    },
    {
      title: "Operating System Basics",
      organization: "Pilar College of Zamboanga City, Inc. – IT Seminar",
      date: "January 22, 2024",
      description: "Comprehensive overview of operating system principles and functionality",
      icon: <FaCode />,
      iconBackground: "#8b5cf6" // violet-500
    },
    {
      title: "ATOMIC DESIGN: Breaking off that Designer to Developer Gap through Design System - FIGMA",
      organization: "Pilar College of Zamboanga City, Inc. – IT Seminar",
      date: "April 29, 2023",
      description: "Workshop on implementing atomic design principles using Figma",
      icon: <FaCode />,
      iconBackground: "#8b5cf6" // violet-500
    },
    {
      title: "Creating User Interface with Adobe Xd: An Introduction to Front End Design",
      organization: "Pilar College of Zamboanga City, Inc. – IT Seminar",
      date: "April 29, 2023",
      description: "Training on UI design fundamentals using Adobe XD",
      icon: <FaCode />,
      iconBackground: "#8b5cf6" // violet-500
    },
    {
      title: "Deep Learning with Python",
      organization: "Pilar College of Zamboanga City, Inc. – IT Seminar",
      date: "April 9, 2022",
      description: "Introduction to deep learning concepts and implementation using Python",
      icon: <FaCode />,
      iconBackground: "#8b5cf6" // violet-500
    },
    {
      title: "Web Development Seminar",
      organization: "Pilar College of Zamboanga City, Inc. – IT Seminar",
      date: "April 23, 2022",
      description: "Comprehensive overview of modern web development practices",
      icon: <FaCode />,
      iconBackground: "#8b5cf6" // violet-500
    }
  ];

  // Combine all timeline items - education first, then experience, then seminars
  const allTimelineItems = [...educationItems, ...experienceItems, ...seminarItems];

  return (
    <section id="experience" className="py-20 bg-black-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Experience & Education</h2>
          <div className="w-12 h-1 bg-blue-500 rounded mx-auto"></div>
          <p className="mt-4 text-secondary max-w-2xl mx-auto">
            My academic journey, professional experience, and ongoing learning path.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <VerticalTimeline animate={true} lineColor="rgba(138, 75, 175, 0.2)">
          {allTimelineItems.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{ 
                background: 'rgba(23, 12, 61, 0.8)', 
                color: '#fff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px'
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(23, 12, 61, 0.8)' }}
              date={item.date}
              iconStyle={{ background: item.iconBackground, color: '#fff' }}
              icon={item.icon}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">
                {item.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-blue-400 mt-1">
                {item.organization}
              </h4>
              
              <div className="mt-4">
                {Array.isArray(item.description) ? (
                  <ul className="list-disc list-inside text-secondary">
                    {item.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-secondary">{item.description}</p>
                )}
              </div>

              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-900/50 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience; 