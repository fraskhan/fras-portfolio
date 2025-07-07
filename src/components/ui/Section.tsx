import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
}

const Section = ({ 
  id, 
  className = '', 
  children, 
  fullHeight = false 
}: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`section ${fullHeight ? 'min-h-screen' : ''} py-20 px-4 relative ${className}`}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section; 