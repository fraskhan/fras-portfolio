import React from 'react';
import { SectionProps } from '../../types';
import { cn } from '../../utils/cn';
import { useAppContext } from '../../context/AppContext';

const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  fullHeight = false,
  background = 'transparent',
}) => {
  const { isDarkMode } = useAppContext();
  const baseStyles = "relative w-full";
  
  const getBackgroundStyles = () => {
    switch (background) {
      case 'primary':
        return isDarkMode ? 'bg-primary' : 'bg-primary-light';
      case 'secondary':
        return isDarkMode ? 'bg-black-100' : 'bg-gray-100';
      case 'transparent':
        return 'bg-transparent';
      default:
        return 'bg-transparent';
    }
  };
  
  const heightStyles = fullHeight ? 'min-h-screen' : 'py-16 md:py-24';
  
  return (
    <section
      id={id}
      className={cn(
        baseStyles,
        getBackgroundStyles(),
        heightStyles,
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section; 