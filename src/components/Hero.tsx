import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen mx-auto flex flex-col items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-[-1] opacity-30">
        <div className="absolute w-40 h-40 rounded-full bg-violet-500 blur-3xl top-20 left-20 animate-pulse"></div>
        <div className="absolute w-60 h-60 rounded-full bg-blue-500 blur-3xl bottom-20 right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-40 h-40 rounded-full bg-green-500 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
            Al-Fraskhan A. Jose
          </h1>
          
          <div className="text-xl md:text-3xl text-secondary mb-8 h-12">
            <ReactTypingEffect
              text={["Full Stack Developer", "Aspiring Software Engineer", "IT Student"]}
              speed={100}
              eraseSpeed={100}
              typingDelay={500}
              eraseDelay={2000}
              className="inline-block"
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            A passionate IT student focused on building exceptional digital experiences
            with modern web technologies.
          </motion.p>
          
          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex justify-center gap-6 mb-10"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <FaGithub size={30} />
            </a>
            <a 
              href="https://linkedin.com/in/alfraskhan-jose-22b6b6358" 
              target="_blank" 
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <FaLinkedin size={30} />
            </a>
            <a 
              href="mailto:alfraskhanj@gmail.com" 
              className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <FaEnvelope size={30} />
            </a>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a 
              href="/resume.pdf" 
              download
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center"
            >
              Download Resume
            </a>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full border-2 border-white transition-all duration-300 hover:shadow-lg cursor-pointer flex items-center justify-center"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-white flex justify-center items-start p-1"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-white rounded-full"
            />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero; 