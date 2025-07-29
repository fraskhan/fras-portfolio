import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TailwindTest from './components/TailwindTest';

import AOS from 'aos';
import { gsap } from 'gsap';
import './index.css'; // Explicitly import CSS

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  
  // State for section visibility (for triggering animations)
  const [activeSection, setActiveSection] = useState<string>('home');
  
  // Function to handle section changes
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };
  
  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('contact');
    }
  };
  
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

    // GSAP initial page fade-in animation
    gsap.fromTo(
      appRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 0.6,
        ease: 'power2.out'
      }
    );

    window.addEventListener('load', refreshAOS);
    window.addEventListener('resize', refreshAOS);

    return () => {
      window.removeEventListener('load', refreshAOS);
      window.removeEventListener('resize', refreshAOS);
    };
  }, []);

  // Hero section data
  const heroData = {
    name: "Al-Fraskhan A. Jose",
    titles: ["Full Stack Developer", "Aspiring Software Engineer", "IT Student"],
    description: "A passionate IT student focused on building exceptional digital experiences with modern web technologies.",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com/in/alfraskhan-jose-22b6b6358",
      email: "mailto:alfraskhanj@gmail.com"
    },
    resumeUrl: "/resume.pdf"
  };

  return (
    <div
      ref={appRef}
      className="relative z-0 bg-primary"
      style={{ opacity: 0 }} // Initial state before GSAP animation
    >

      
      {/* Temporary Tailwind Test - Remove after testing */}
      <TailwindTest />
      
      <div className="relative bg-cover bg-no-repeat bg-center">
        {/* Gradient overlay for hero section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-200 via-transparent to-primary z-[-1]"></div>
        <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />
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
    </div>
  );
}

export default App;
