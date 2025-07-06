import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
// CSS imports are now in index.css

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
      delay: 100,
      anchorPlacement: 'top-bottom',
    });

    // Refresh AOS when components are mounted
    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener('load', refreshAOS);
    window.addEventListener('resize', refreshAOS);

    return () => {
      window.removeEventListener('load', refreshAOS);
      window.removeEventListener('resize', refreshAOS);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative z-0 bg-primary"
    >
      <div className="relative bg-cover bg-no-repeat bg-center">
        {/* Gradient overlay for hero section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-200 via-transparent to-primary z-[-1]"></div>
        <Navbar />
        <Hero />
      </div>
      
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      
      {/* Global decorative elements */}
      <div className="fixed top-[10%] left-[-10%] w-72 h-72 rounded-full bg-secondary/5 blur-3xl z-[-1]"></div>
      <div className="fixed bottom-[20%] right-[-5%] w-80 h-80 rounded-full bg-accent/5 blur-3xl z-[-1]"></div>
    </motion.div>
  );
}

export default App;
