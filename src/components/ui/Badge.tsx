import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'subtle';
}

const Badge = ({
  children,
  className = '',
  variant = 'default',
}: BadgeProps) => {
  const variantStyles = {
    default: 'bg-[var(--accent-color)] text-[var(--primary-color)]',
    outline: 'bg-transparent border border-[var(--accent-color)] text-[var(--accent-color)]',
    subtle: 'bg-[rgba(135,206,235,0.2)] text-[var(--accent-color)]',
  };
  
  return (
    <span 
      className={`inline-block py-1 px-3 rounded-full text-sm font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge; 