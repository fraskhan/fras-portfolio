import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

interface NavbarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const Navbar = ({ 
  activeSection: externalActiveSection, 
  onSectionChange 
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [internalActiveSection, setInternalActiveSection] = useState('home');
  const { isDarkMode, toggleDarkMode } = useAppContext();
  
  // Use external active section if provided, otherwise use internal state
  const activeSection = externalActiveSection || internalActiveSection;

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
            setInternalActiveSection(section);
            if (onSectionChange) {
              onSectionChange(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onSectionChange]);

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

  // Handle section change
  const handleSectionClick = (section: string) => {
    setInternalActiveSection(section);
    if (onSectionChange) {
      onSectionChange(section);
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${
        scrolled 
          ? `${isDarkMode ? 'bg-black-200/90' : 'bg-white/90'} backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2` 
          : 'bg-transparent py-4'
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
          onClick={() => handleSectionClick('home')}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-2xl font-bold">
              <span className={isDarkMode ? "text-accent" : "text-accent-light"}>AL</span>
              <span className={isDarkMode ? "text-white-100" : "text-gray-800"}>-FRASKHAN</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.div className="hidden md:flex items-center space-x-8">
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
                className={`${
                  isDarkMode ? 'text-white-100 hover:text-accent' : 'text-gray-800 hover:text-accent-light'
                } transition-colors cursor-pointer px-2 py-1 relative`}
                onClick={() => handleSectionClick(link.to)}
              >
                {link.name}
                {activeSection === link.to && (
                  <motion.div 
                    layoutId="underline"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isDarkMode ? 'bg-accent' : 'bg-accent-light'
                    }`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode 
                ? 'text-white-100 hover:text-accent hover:bg-accent/10' 
                : 'text-gray-800 hover:text-accent-light hover:bg-accent-light/10'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            aria-label="Toggle theme"
          >
            <span className="text-lg">{isDarkMode ? '☀️' : '🌙'}</span>
          </motion.button>
        </motion.div>

        {/* Mobile Navigation Button and Theme Toggle */}
        <motion.div 
          className="md:hidden flex items-center space-x-2"
          whileTap={{ scale: 0.9 }}
        >
          {/* Mobile Theme Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode 
                ? 'text-white-100 hover:text-accent hover:bg-accent/10' 
                : 'text-gray-800 hover:text-accent-light hover:bg-accent-light/10'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            aria-label="Toggle theme"
          >
            <span className="text-base">{isDarkMode ? '☀️' : '🌙'}</span>
          </motion.button>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`${isDarkMode ? 'text-white-100' : 'text-gray-800'} focus:outline-none`}
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
                <FaTimes className={`h-6 w-6 ${isDarkMode ? 'text-accent' : 'text-accent-light'}`} />
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
          className={`md:hidden ${
            isDarkMode ? 'bg-black-100/95 border-secondary/20' : 'bg-white/95 border-gray-200'
          } backdrop-blur-md overflow-hidden border-t`}
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
                      ? `${isDarkMode ? 'text-accent bg-accent/10' : 'text-accent-light bg-accent-light/10'}`
                      : `${isDarkMode ? 'text-white-100 hover:text-accent' : 'text-gray-800 hover:text-accent-light'}`
                  }`}
                  onClick={() => handleSectionClick(link.to)}
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