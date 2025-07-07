import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  className = '',
  align = 'center' 
}: SectionHeadingProps) => {
  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  
  return (
    <div className={`mb-12 ${alignment[align]} ${className}`} data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-[var(--white-100)] opacity-80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 bg-[var(--accent-color)] mt-4 mb-2 mx-auto"></div>
    </div>
  );
};

export default SectionHeading; 