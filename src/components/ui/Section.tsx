import React from 'react';
import { SectionProps } from '../../types';
import { cn } from '../../utils/cn';

const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  fullHeight = false,
  background = 'transparent',
}) => {
  const baseStyles = "relative w-full";
  
  const backgroundStyles = {
    primary: 'bg-primary',
    secondary: 'bg-black-100',
    transparent: 'bg-transparent',
  };
  
  const heightStyles = fullHeight ? 'min-h-screen' : 'py-16 md:py-24';
  
  return (
    <section
      id={id}
      className={cn(
        baseStyles,
        backgroundStyles[background],
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