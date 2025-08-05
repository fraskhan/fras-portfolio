import React from 'react';
import { BadgeProps } from '../../types';
import { cn } from '../../utils/cn';
import { useAppContext } from '../../context/AppContext';

const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
}) => {
  const { isDarkMode } = useAppContext();
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200";
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'default':
        return isDarkMode 
          ? 'bg-accent text-primary'
          : 'bg-accent-light text-white';
      case 'outline':
        return isDarkMode
          ? 'bg-transparent border border-accent text-accent'
          : 'bg-transparent border border-accent-light text-accent-light';
      case 'subtle':
        return isDarkMode
          ? 'bg-accent/20 text-accent'
          : 'bg-accent-light/20 text-accent-light';
      default:
        return '';
    }
  };
  
  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };
  
  return (
    <span 
      className={cn(
        baseStyles,
        getVariantStyles(),
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge; 