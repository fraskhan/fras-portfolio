import React from 'react';
import { cn } from '../../utils/cn';
import { useAppContext } from '../../context/AppContext';

interface SocialIconProps {
  href: string;
  icon: 'github' | 'linkedin' | 'email' | 'twitter' | 'instagram';
  label: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SocialIcon: React.FC<SocialIconProps> = ({ 
  href, 
  icon, 
  label, 
  className,
  size = 'md' 
}) => {
  const { isDarkMode } = useAppContext();
  
  const sizeStyles = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const iconMap = {
    github: '⚡', // You can replace with actual SVG icons or icon library
    linkedin: '💼',
    email: '✉️',
    twitter: '🐦',
    instagram: '📷'
  };

  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? '_self' : '_blank'}
      rel={href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all duration-300',
        isDarkMode 
          ? 'bg-white-100/10 backdrop-blur-sm border border-white-100/20 hover:bg-accent hover:border-accent focus:ring-accent/50'
          : 'bg-gray-100 backdrop-blur-sm border border-gray-300 hover:bg-accent-light hover:border-accent-light focus:ring-accent-light/50',
        'hover:scale-110 hover:shadow-lg',
        isDarkMode ? 'hover:shadow-accent/25' : 'hover:shadow-accent-light/25',
        'focus:outline-none focus:ring-2',
        sizeStyles[size],
        className
      )}
    >
      <span className="sr-only">{label}</span>
      <span role="img" aria-hidden="true">
        {iconMap[icon]}
      </span>
    </a>
  );
};

export default SocialIcon; 