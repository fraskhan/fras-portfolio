import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaPhp, FaCss3Alt, FaDatabase, FaReact, FaPython, FaTools } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiFlask, SiMysql, SiPostgresql, SiStreamlit, SiSupabase } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { useAppContext } from '../context/AppContext';

interface Skill {
  name: string;
  icon: JSX.Element;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Skill categories with their skills
const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava size={30} />, level: 80 },
      { name: "Python", icon: <FaPython size={30} />, level: 85 },
      { name: "HTML5", icon: <FaHtml5 size={30} />, level: 90 },
      { name: "CSS3", icon: <FaCss3Alt size={30} />, level: 85 },
      { name: "PHP", icon: <FaPhp size={30} />, level: 75 },
      { name: "JavaScript", icon: <SiTypescript size={30} />, level: 82 },
      { name: "TypeScript", icon: <SiTypescript size={30} />, level: 70 },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <FaReact size={30} />, level: 75 },
      { name: "Django", icon: <SiDjango size={30} />, level: 68 },
      { name: "Flask", icon: <SiFlask size={30} />, level: 72 },
      { name: "Streamlit", icon: <SiStreamlit size={30} />, level: 70 },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "MySQL", icon: <SiMysql size={30} />, level: 85 },
      { name: "PostgreSQL", icon: <SiPostgresql size={30} />, level: 75 },
      { name: "SQLite", icon: <FaDatabase size={30} />, level: 80 },
      { name: "Supabase", icon: <SiSupabase size={30} />, level: 65 },
      { name: "Basic Troubleshooting", icon: <FaTools size={30} />, level: 90 },
    ]
  }
];

// Skill Card Component  
const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const { isDarkMode } = useAppContext();
  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        boxShadow: isDarkMode ? "0 15px 30px rgba(0,0,0,0.3)" : "0 15px 30px rgba(0,0,0,0.1)",
        background: isDarkMode 
          ? "linear-gradient(145deg, rgba(19,19,19,0.8), rgba(30,30,30,0.9))"
          : "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(250,250,250,0.95))"
      }}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 12
      }}
      className={`rounded-xl p-6 flex flex-col items-center transform transition-all duration-300 backdrop-blur-sm border ${
        isDarkMode 
          ? 'bg-black-100 border-secondary/10 hover:border-accent/30'
          : 'bg-white border-gray-200 hover:border-accent-light/30'
      }`}
    >
      <motion.div 
        className={`mb-4 ${
          isDarkMode ? 'text-accent' : 'text-accent-light'
        }`}
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {skill.icon}
      </motion.div>
      <h3 className={`font-medium mb-3 ${
        isDarkMode ? 'text-white-100' : 'text-gray-800'
      }`}>{skill.name}</h3>
      <div className={`w-full rounded-full h-3 mb-2 overflow-hidden ${
        isDarkMode ? 'bg-black-200' : 'bg-gray-200'
      }`}>
        <motion.div 
          className={`h-3 rounded-full ${
            isDarkMode 
              ? 'bg-gradient-to-r from-secondary to-accent'
              : 'bg-gradient-to-r from-secondary-light to-accent-light'
          }`} 
          style={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: "easeOut" }}
        />
      </div>
      <span className={`text-xs ${
        isDarkMode ? 'text-white-100/70' : 'text-gray-600'
      }`}>{skill.level}%</span>
    </motion.div>
  );
};

const Skills = () => {
  const { isDarkMode } = useAppContext();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="skills" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      isDarkMode ? 'bg-primary' : 'bg-primary-light'
    }`}>
      {/* Background decorative elements */}
      <div className={`absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl ${
        isDarkMode ? 'bg-secondary/5' : 'bg-secondary-light/5'
      }`} />
      <div className={`absolute top-40 -left-20 w-72 h-72 rounded-full blur-3xl ${
        isDarkMode ? 'bg-accent/5' : 'bg-accent-light/5'
      }`} />
      
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full grid grid-cols-6 gap-4">
          {[...Array(7)].map((_, i) => (
            <div key={i} className={`border-r h-full ${
              isDarkMode ? 'border-secondary/30' : 'border-secondary-light/30'
            }`}></div>
          ))}
          {[...Array(7)].map((_, i) => (
            <div key={i} className={`border-b w-full ${
              isDarkMode ? 'border-secondary/30' : 'border-secondary-light/30'
            }`}></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`inline-block py-1 px-3 mb-3 rounded-full text-sm font-medium ${
              isDarkMode ? 'bg-accent/10 text-accent' : 'bg-accent-light/10 text-accent-light'
            }`}
          >
            What I Know
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white-100' : 'text-gray-900'
            }`}
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={inView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`h-1 mx-auto mb-5 rounded-full ${
              isDarkMode ? 'bg-accent' : 'bg-accent-light'
            }`}
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`mt-4 max-w-2xl mx-auto ${
              isDarkMode ? 'text-white-100/70' : 'text-gray-600'
            }`}
          >
            My technical skills and proficiencies across various technologies and tools.
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-24">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div 
                className="relative mb-12 flex justify-center items-center"
                whileInView={{ 
                  opacity: [0, 1],
                  y: [20, 0]
                }}
                transition={{ duration: 0.5 }}
              >
                <div className={`absolute h-px w-full ${
                  isDarkMode ? 'bg-secondary/20' : 'bg-secondary-light/20'
                }`}></div>
                <h3 className={`relative z-10 text-2xl font-semibold px-6 inline-block ${
                  isDarkMode 
                    ? 'text-white-100 bg-primary'
                    : 'text-gray-900 bg-primary-light'
                }`}>
                  {category.title}
                </h3>
              </motion.div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skillIndex} 
                    skill={skill} 
                    index={skillIndex + (index * 10)} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 