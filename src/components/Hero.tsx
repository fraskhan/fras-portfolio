import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from './ui/Section';
import TypedText from './ui/TypedText';
import Button from './ui/Button';
import SocialIcon from './ui/SocialIcon';
import Badge from './ui/Badge';
import ScrollIndicator from './ui/ScrollIndicator';
import { useFadeInAnimationSequence } from '../utils/animation';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// Props for Hero component
interface HeroProps {
  name: string;
  titles: string[];
  description: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  resumeUrl?: string;
  onContactClick?: () => void;
}

const Hero = ({
  name = "Al-Fraskhan A. Jose",
  titles = ["Full Stack Developer", "Aspiring Software Engineer", "IT Student"],
  description = "A passionate IT student focused on building exceptional digital experiences with modern web technologies.",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com/in/alfraskhan-jose-22b6b6358",
    email: "mailto:alfraskhanj@gmail.com"
  },
  resumeUrl = "/resume.pdf",
  onContactClick
}: HeroProps) => {
  // Refs for animation
  const refs = {
    heading: useRef<HTMLHeadingElement>(null),
    description: useRef<HTMLParagraphElement>(null),
    social: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null),
    badge: useRef<HTMLDivElement>(null),
    scrollIndicator: useRef<HTMLDivElement>(null)
  };
  
  // Animation sequence
  const animationSequence = [
    ['badge'],
    ['heading'],
    ['description'],
    ['social'],
    ['cta'],
    ['scrollIndicator']
  ];
  
  // Use animation hook
  useFadeInAnimationSequence(refs, animationSequence);
  
  // Handle contact button click
  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    }
  };
  
  return (
    <Section id="home" fullHeight className="flex flex-col items-center justify-center overflow-hidden">
      {/* Background Animation using Lottie */}
      <div className="absolute inset-0 z-[-1] opacity-40">
        <Player
          src={require('../assets/animations/hero-animation.json')}
          background="transparent"
          speed={0.6}
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      <div className="text-center">
        <div ref={refs.badge} className="mb-4">
          <Badge>Welcome to my portfolio</Badge>
        </div>
        
        <h1 ref={refs.heading} className="text-5xl md:text-7xl font-bold mb-2">
          {name}
        </h1>
        
        <div className="text-xl md:text-3xl text-[var(--secondary-color)] mb-8 h-12">
          <TypedText texts={titles} />
        </div>
        
        <p ref={refs.description} className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-80">
          {description}
        </p>
        
        {/* Social Icons */}
        <div ref={refs.social} className="flex justify-center gap-6 mb-10">
          {socialLinks.github && (
            <SocialIcon 
              icon={FaGithub} 
              href={socialLinks.github} 
              ariaLabel="GitHub Profile" 
            />
          )}
          
          {socialLinks.linkedin && (
            <SocialIcon 
              icon={FaLinkedin} 
              href={socialLinks.linkedin} 
              ariaLabel="LinkedIn Profile" 
            />
          )}
          
          {socialLinks.email && (
            <SocialIcon 
              icon={FaEnvelope} 
              href={socialLinks.email} 
              ariaLabel="Email Contact" 
            />
          )}
        </div>
        
        {/* CTA Buttons */}
        <div ref={refs.cta} className="flex flex-col sm:flex-row justify-center gap-4">
          {resumeUrl && (
            <a href={resumeUrl} download>
              <Button variant="primary">Download Resume</Button>
            </a>
          )}
          
          <Button 
            variant="secondary" 
            onClick={handleContactClick || (() => {})}
          >
            Contact Me
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div ref={refs.scrollIndicator} className="absolute bottom-10 left-0 right-0">
        <ScrollIndicator targetId="about" />
      </div>
    </Section>
  );
};

export default Hero; 