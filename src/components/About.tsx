import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaTrophy } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-black-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full border border-secondary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute bottom-10 -left-20 w-40 h-40 rounded-full border border-accent/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block py-1 px-3 mb-3 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
          >
            Get To Know Me
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-white-100 mb-4"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-accent rounded-full mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 30 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -50, rotateY: 30 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex justify-center"
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Background Elements */}
              <motion.div 
                className="absolute inset-0 bg-secondary/30 rounded-xl transform rotate-6"
                animate={{ rotate: [6, 3, 6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="absolute inset-0 bg-accent/20 rounded-xl transform -rotate-6 translate-x-3 -translate-y-3"
                animate={{ rotate: [-6, -3, -6], translateX: [3, 5, 3], translateY: [-3, -5, -3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Profile Image */}
              <div className="absolute inset-0 overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-black-100 to-black-200">
                <div className="w-full h-full flex items-center justify-center p-2">
                  {/* Replace with actual image when available */}
                  <div className="w-full h-full rounded-lg bg-black-200/50 flex flex-col items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="text-5xl text-accent mb-3 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-2xl">👤</span>
                      </div>
                    </motion.div>
                    <span className="text-white-100 text-lg text-center px-4">Profile Photo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="text-left"
          >
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-semibold text-accent mb-4"
            >
              Al-Fraskhan A. Jose
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white-100/80 mb-6"
            >
              As a committed IT student, I can't wait to use my abilities and expertise in a stimulating workplace. 
              I have a strong desire to learn, am flexible enough to take on new challenges, and promise to keep going 
              until my objectives are met. I look for chances to develop and make a significant contribution to the team's success.
            </motion.p>

            {/* Personal Information */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8 space-y-4"
            >
              <motion.div 
                className="flex items-center p-3 bg-black-200/50 rounded-lg hover:bg-black-200 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-secondary/20 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-secondary" />
                </div>
                <span className="text-white-100/80">Kasanyangan, Zamboanga City</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center p-3 bg-black-200/50 rounded-lg hover:bg-black-200 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-secondary/20 rounded-full mr-4">
                  <FaPhone className="text-secondary" />
                </div>
                <span className="text-white-100/80">09650348702</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center p-3 bg-black-200/50 rounded-lg hover:bg-black-200 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-secondary/20 rounded-full mr-4">
                  <FaEnvelope className="text-secondary" />
                </div>
                <span className="text-white-100/80">alfraskhanj@gmail.com</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center p-3 bg-black-200/50 rounded-lg hover:bg-black-200 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-secondary/20 rounded-full mr-4">
                  <FaLinkedin className="text-secondary" />
                </div>
                <span className="text-white-100/80">alfraskhan-jose-22b6b6358</span>
              </motion.div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <h4 className="text-xl font-semibold text-accent mb-4">Fun Facts</h4>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-center p-3 bg-black-200/30 rounded-lg hover:bg-accent/10 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-accent/20 rounded-full mr-4">
                    <FaTrophy className="text-accent" />
                  </div>
                  <span className="text-white-100/80">Champion – Chess Competition, Palaro SY 2023–2024</span>
                </motion.li>
                <motion.li 
                  className="flex items-center p-3 bg-black-200/30 rounded-lg hover:bg-secondary/10 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-secondary/20 rounded-full mr-4">
                    <span className="font-bold text-secondary">ED</span>
                  </div>
                  <span className="text-white-100/80">Executive Director of Zamboanga Youth Movement Association (SPORTS)</span>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 