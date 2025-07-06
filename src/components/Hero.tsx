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

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="home" className="relative w-full h-screen mx-auto flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-[-1]">
        <motion.div 
          className="absolute w-60 h-60 rounded-full bg-accent/20 blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div 
          className="absolute w-80 h-80 rounded-full bg-secondary/20 blur-3xl"
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{ 
            x: [0, 20, 0], 
            y: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 5
          }}
          style={{ top: '40%', left: '60%' }}
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block py-1 px-3 mb-3 bg-accent/20 text-accent rounded-full text-sm font-medium"
            >
              Welcome to my portfolio
            </motion.span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white-100 mb-2"
          >
            Al-Fraskhan A. Jose
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="text-xl md:text-3xl text-secondary mb-8 h-12"
          >
            <ReactTypingEffect
              text={["Full Stack Developer", "Aspiring Software Engineer", "IT Student"]}
              speed={100}
              eraseSpeed={100}
              typingDelay={500}
              eraseDelay={2000}
              className="inline-block"
            />
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-white-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            A passionate IT student focused on building exceptional digital experiences
            with modern web technologies.
          </motion.p>
          
          {/* Social Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-6 mb-10"
          >
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-white-100 hover:text-accent transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <FaGithub size={30} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/alfraskhan-jose-22b6b6358" 
              target="_blank" 
              rel="noreferrer"
              className="text-white-100 hover:text-accent transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <FaLinkedin size={30} />
            </motion.a>
            <motion.a 
              href="mailto:alfraskhanj@gmail.com" 
              className="text-white-100 hover:text-accent transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <FaEnvelope size={30} />
            </motion.a>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a 
              href="/resume.pdf" 
              download
              className="bg-accent text-black-100 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(135,206,235,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-transparent hover:bg-secondary/20 text-white-100 font-bold py-3 px-8 rounded-full border-2 border-secondary transition-all duration-300 hover:border-accent cursor-pointer flex items-center justify-center"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
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
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-7 h-12 rounded-full border-2 border-secondary flex justify-center items-start p-1"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-2 h-3 bg-accent rounded-full"
            />
          </motion.div>
        </Link>
      </motion.div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-36 -right-12 w-36 h-36 md:w-48 md:h-48"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.1, rotate: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full h-full border-2 border-secondary rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 border-2 border-accent rounded-full" />
      </motion.div>
      
      <motion.div 
        className="absolute -bottom-16 -left-16 w-48 h-48 md:w-64 md:h-64"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="w-full h-full border-2 border-secondary rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 border-2 border-accent rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero; 