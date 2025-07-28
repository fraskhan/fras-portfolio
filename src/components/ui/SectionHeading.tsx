import React from 'react';
import { SectionHeadingProps } from '../../types';
import { cn } from '../../utils/cn';

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  const containerStyles = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={cn('mb-16', containerStyles, className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white-100 mb-4 relative">
        {title}
        <span className="absolute -bottom-2 left-0 w-20 h-1 bg-accent rounded-full" 
              style={centered ? { left: '50%', transform: 'translateX(-50%)' } : {}} 
        />
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-white-100/70 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading; 