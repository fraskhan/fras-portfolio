import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.to);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.1, color: "#87CEEB" }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeInOut" } }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${
        scrolled ? 'bg-black-200/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-2xl font-bold">
              <span className="text-accent">AL</span>
              <span className="text-white-100">-FRASKHAN</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              variants={linkVariants}
              whileHover="hover"
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`text-white-100 hover:text-accent transition-colors cursor-pointer px-2 py-1 relative`}
              >
                {link.name}
                {activeSection === link.to && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" 
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Navigation Button */}
        <motion.div 
          className="md:hidden flex items-center"
          whileTap={{ scale: 0.9 }}
        >
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white-100 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            aria-label="menu"
          >
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes className="h-6 w-6 text-accent" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars className="h-6 w-6" />
              </motion.div>
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          className="md:hidden bg-black-100/95 backdrop-blur-md overflow-hidden border-t border-secondary/20"
        >
          <motion.div 
            className="container mx-auto px-4 py-4 flex flex-col space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`block text-lg py-2 px-3 rounded-md transition-colors cursor-pointer ${
                    activeSection === link.to
                      ? 'text-accent bg-accent/10'
                      : 'text-white-100 hover:text-accent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar; 