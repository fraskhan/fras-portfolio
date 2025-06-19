import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe, FaCode } from 'react-icons/fa';

// Define types
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  category: string;
}

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '/placeholder-project.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/alfraskhanj/ecommerce',
      live: 'https://ecommerce-demo.com',
      category: 'web'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
      image: '/placeholder-project.jpg',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      github: 'https://github.com/alfraskhanj/taskmanager',
      live: 'https://taskmanager-demo.com',
      category: 'web'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with data visualization and reporting features.',
      image: '/placeholder-project.jpg',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/alfraskhanj/dashboard',
      live: 'https://dashboard-demo.com',
      category: 'data'
    },
    {
      title: 'Student Information System',
      description: 'A full-featured student information system for educational institutions to manage student data, courses, and grading.',
      image: '/placeholder-project.jpg',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/alfraskhanj/student-system',
      live: 'https://student-system-demo.com',
      category: 'full-stack'
    },
  ];

  // Filter categories
  const categories = ["all", "web", "data", "full-stack"];
  
  // Filter projects based on selected category
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Featured Projects</h2>
          <div className="w-12 h-1 bg-blue-500 rounded mx-auto"></div>
          <p className="mt-4 text-secondary max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-black-200 text-secondary hover:bg-blue-600/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black-100 rounded-xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-700 overflow-hidden">
                <div className="absolute inset-0 bg-blue-500 opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaCode className="text-white text-5xl" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-secondary text-sm mb-4 line-clamp-3">{project.description}</p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-900/50 text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Button Links */}
                <div className="flex justify-between gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-black-200 hover:bg-black-100 text-white py-2 px-3 rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    <FaGlobe className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 