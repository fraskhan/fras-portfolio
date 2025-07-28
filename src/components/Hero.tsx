import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from './ui/Button';
import SocialIcon from './ui/SocialIcon';
import TypedText from './ui/TypedText';
import { HeroData } from '../types';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const heroData: HeroData = {
    name: "Fras Khan",
    titles: [
      "Full Stack Developer",
      "React Specialist", 
      "Node.js Developer",
      "TypeScript Expert"
    ],
    description: "Passionate about creating exceptional digital experiences with modern technologies.",
    socialLinks: {
      github: "https://github.com/fraskhan",
      linkedin: "https://linkedin.com/in/fraskhan",
      email: "mailto:fras@example.com"
    },
    resumeUrl: "/resume.pdf"
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.timeline()
        .from(textRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out"
        })
        .from(buttonsRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.5");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-black-100 to-primary opacity-90" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={textRef}>
          {/* Greeting */}
          <p className="text-lg md:text-xl text-accent mb-4 font-medium">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white-100 mb-6 leading-tight">
            {heroData.name}
          </h1>
          
          {/* Animated Titles */}
          <div className="text-xl md:text-3xl text-secondary mb-8 h-12 flex items-center justify-center">
            <TypedText texts={heroData.titles} />
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white-100/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            {heroData.description}
          </p>
        </div>
        
        {/* Action Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="primary" 
            size="lg"
            className="w-full sm:w-auto"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto"
          >
            Download CV
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          {heroData.socialLinks.github && (
            <SocialIcon 
              href={heroData.socialLinks.github}
              icon="github"
              label="GitHub"
            />
          )}
          {heroData.socialLinks.linkedin && (
            <SocialIcon 
              href={heroData.socialLinks.linkedin}
              icon="linkedin"
              label="LinkedIn"
            />
          )}
          {heroData.socialLinks.email && (
            <SocialIcon 
              href={heroData.socialLinks.email}
              icon="email"
              label="Email"
            />
          )}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-soft">
          <div className="w-6 h-10 border-2 border-white-100/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 