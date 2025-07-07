import React from 'react';
import { IconType } from 'react-icons';

interface SocialIconProps {
  icon: IconType;
  href: string;
  ariaLabel?: string;
  className?: string;
  size?: number;
}

const SocialIcon = ({ 
  icon: Icon, 
  href, 
  ariaLabel, 
  className = '', 
  size = 30 
}: SocialIconProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`social-icon text-[var(--white-100)] transition-all duration-300 hover:text-[var(--accent-color)] hover:scale-110 hover:rotate-3 ${className}`}
    >
      <Icon size={size} />
    </a>
  );
};

export default SocialIcon; 