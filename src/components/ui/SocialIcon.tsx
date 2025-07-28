import React from 'react';
import { cn } from '../../utils/cn';

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
        'bg-white-100/10 backdrop-blur-sm border border-white-100/20',
        'hover:bg-accent hover:border-accent hover:scale-110 hover:shadow-lg hover:shadow-accent/25',
        'focus:outline-none focus:ring-2 focus:ring-accent/50',
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