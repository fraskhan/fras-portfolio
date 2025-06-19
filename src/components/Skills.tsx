import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaPhp, FaCss3Alt, FaDatabase, FaReact, FaPython, FaTools } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiFlask, SiMysql, SiPostgresql, SiStreamlit, SiSupabase } from 'react-icons/si';

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
      { name: "JavaScript", icon: <SiTypescript size={30} color="#f0db4f" />, level: 82 },
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
const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
      className="bg-tertiary rounded-xl p-6 flex flex-col items-center"
    >
      <div className="text-blue-400 mb-3">
        {skill.icon}
      </div>
      <h3 className="text-white font-medium mb-2">{skill.name}</h3>
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
        <div 
          className="bg-blue-500 h-2.5 rounded-full" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-400">{skill.level}%</span>
    </motion.div>
  );
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Skills</h2>
          <div className="w-12 h-1 bg-blue-500 rounded mx-auto"></div>
          <p className="mt-4 text-secondary max-w-2xl mx-auto">
            My technical skills and proficiencies across various technologies and tools.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={itemVariants}>
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 