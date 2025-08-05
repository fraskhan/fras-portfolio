import React from 'react';
import { SectionHeadingProps } from '../../types';
import { cn } from '../../utils/cn';
import { useAppContext } from '../../context/AppContext';

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  const { isDarkMode } = useAppContext();
  const containerStyles = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={cn('mb-16', containerStyles, className)}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative ${
        isDarkMode ? 'text-white-100' : 'text-gray-900'
      }`}>
        {title}
        <span className={`absolute -bottom-2 left-0 w-20 h-1 rounded-full ${
          isDarkMode ? 'bg-accent' : 'bg-accent-light'
        }`} 
              style={centered ? { left: '50%', transform: 'translateX(-50%)' } : {}} 
        />
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
          isDarkMode ? 'text-white-100/70' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading; 