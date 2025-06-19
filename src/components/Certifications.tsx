import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaTrophy, FaMedal, FaScroll } from 'react-icons/fa';

interface Certificate {
  title: string;
  organizer: string;
  date: string;
  icon: JSX.Element;
  color: string;
}

interface Achievement {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

const Certifications = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const certificates: Certificate[] = [
    {
      title: "Real-Time Web Chat Application with User Registration",
      organizer: "Pilar College of Zamboanga City, Inc.",
      date: "April 6, 2024",
      icon: <FaScroll />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Introduction to Node.js: A Backend Development Framework",
      organizer: "Pilar College of Zamboanga City, Inc.",
      date: "March 16, 2024",
      icon: <FaScroll />,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Cyber Security SOC Level 2",
      organizer: "Pilar College of Zamboanga City, Inc.",
      date: "January 26, 2024",
      icon: <FaScroll />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Operating System Basics",
      organizer: "Pilar College of Zamboanga City, Inc.",
      date: "January 22, 2024",
      icon: <FaScroll />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "ATOMIC DESIGN with FIGMA",
      organizer: "Pilar College of Zamboanga City, Inc.",
      date: "April 29, 2023",
      icon: <FaScroll />,
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Creating User Interface with Adobe Xd",
      organizer: "Pilar College of Zamboanga City, Inc.",
      date: "April 29, 2023",
      icon: <FaScroll />,
      color: "from-indigo-500 to-violet-500"
    },
    {
      title: "Deep Learning with Python",
      organizer: "Pilar College of Zamboanga City, Inc.",
      date: "April 9, 2022",
      icon: <FaScroll />,
      color: "from-blue-600 to-blue-400"
    },
    {
      title: "Web Development Seminar",
      organizer: "Pilar College of Zamboanga City, Inc.",
      date: "April 23, 2022",
      icon: <FaScroll />,
      color: "from-green-600 to-green-400"
    }
  ];

  const achievements: Achievement[] = [
    {
      title: "Chess Champion",
      description: "Palaro SY 2023–2024",
      icon: <FaTrophy />,
      color: "from-yellow-500 to-yellow-300"
    },
    {
      title: "Executive Director",
      description: "Zamboanga Youth Movement Association",
      icon: <FaAward />,
      color: "from-blue-500 to-blue-300"
    },
    {
      title: "Full Stack Developer",
      description: "ALTSOLUTIONS",
      icon: <FaMedal />,
      color: "from-purple-500 to-purple-300"
    }
  ];

  // Handle horizontal scroll with buttons
  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="certifications" className="py-20 bg-black-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Certifications & Achievements</h2>
          <div className="w-12 h-1 bg-blue-500 rounded mx-auto"></div>
          <p className="mt-4 text-secondary max-w-2xl mx-auto">
            My professional certifications, seminars attended, and key achievements.
          </p>
        </motion.div>

        {/* Certifications Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6">Certifications & Seminars</h3>
          
          <div className="relative">
            {/* Scroll Left Button */}
            <button 
              onClick={() => scroll(-300)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg md:flex hidden items-center justify-center"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[280px] snap-center"
                >
                  <div className="bg-tertiary rounded-xl overflow-hidden h-full">
                    {/* Certificate Header */}
                    <div className={`bg-gradient-to-r ${cert.color} p-4 flex items-center justify-center`}>
                      <div className="bg-white/20 p-3 rounded-full">
                        {React.cloneElement(cert.icon, { className: "text-white text-xl" })}
                      </div>
                    </div>
                    
                    {/* Certificate Details */}
                    <div className="p-5">
                      <h4 className="text-white font-medium text-lg mb-2">{cert.title}</h4>
                      <p className="text-secondary text-sm mb-1">{cert.organizer}</p>
                      <p className="text-blue-400 text-xs">{cert.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll Right Button */}
            <button 
              onClick={() => scroll(300)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg md:flex hidden items-center justify-center"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Achievements</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-tertiary rounded-xl p-6 flex items-center"
              >
                <div className={`bg-gradient-to-r ${achievement.color} p-4 rounded-xl mr-4 flex-shrink-0`}>
                  {React.cloneElement(achievement.icon, { className: "text-white text-2xl" })}
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">{achievement.title}</h4>
                  <p className="text-secondary text-sm">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 