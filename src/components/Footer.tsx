import React from 'react';
import { Link } from 'react-scroll';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

const Footer = () => {
  const { isDarkMode } = useAppContext();
  
  const navigationLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/alfraskhanj', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/alfraskhan-jose-22b6b6358', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:alfraskhanj@gmail.com', label: 'Email' }
  ];

  return (
    <footer className={`pt-10 pb-6 transition-colors duration-300 ${
      isDarkMode ? 'bg-black-200' : 'bg-gray-200'
    }`}>
      <div className="container mx-auto px-4">
        {/* Quote */}
        <div className="text-center mb-8">
          <p className={`italic max-w-xl mx-auto ${
            isDarkMode ? 'text-secondary' : 'text-gray-600'
          }`}>
            "Code is like humor. When you have to explain it, it's bad." – Cory House
          </p>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-2 mb-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`transition-colors cursor-pointer ${
                isDarkMode 
                  ? 'text-secondary hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`transition-all duration-300 transform hover:scale-110 ${
                isDarkMode 
                  ? 'text-secondary hover:text-accent'
                  : 'text-gray-600 hover:text-accent-light'
              }`}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        {/* Divider */}
        <div className={`h-px my-6 ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-400'
        }`}></div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className={`text-sm ${
            isDarkMode ? 'text-secondary' : 'text-gray-600'
          }`}>
            © {new Date().getFullYear()} Al-Fraskhan A. Jose. All rights reserved.
          </p>
          <p className={`text-xs mt-2 flex items-center justify-center ${
            isDarkMode ? 'text-secondary' : 'text-gray-600'
          }`}>
            Made with <FaHeart className="text-red-500 mx-1" size={12} /> as a BSIT student at Pilar College
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 