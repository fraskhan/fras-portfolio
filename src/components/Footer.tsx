import React from 'react';
import { Link } from 'react-scroll';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
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
    <footer className="bg-black-200 pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* Quote */}
        <div className="text-center mb-8">
          <p className="text-secondary italic max-w-xl mx-auto">
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
              className="text-secondary hover:text-white transition-colors cursor-pointer"
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
              className="text-secondary hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gray-800 my-6"></div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} Al-Fraskhan A. Jose. All rights reserved.
          </p>
          <p className="text-xs text-secondary mt-2 flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" size={12} /> as a BSIT student at Pilar College
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 