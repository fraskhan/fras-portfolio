import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = "font-bold rounded-full transition-all duration-300 hover:transform hover:-translate-y-1";
  
  const variantStyles = {
    primary: "bg-[var(--accent-color)] text-[var(--black-100)] hover:shadow-[0_0_20px_rgba(135,206,235,0.5)]",
    secondary: "bg-transparent text-[var(--white-100)] border-2 border-[var(--secondary-color)] hover:bg-[rgba(139,90,43,0.2)] hover:border-[var(--accent-color)]",
    outline: "bg-transparent text-[var(--white-100)] border-2 border-[var(--white-100)] hover:bg-[rgba(243,243,243,0.1)]",
  };

  const sizeStyles = {
    sm: "py-1 px-4 text-sm",
    md: "py-2 px-6 text-base",
    lg: "py-3 px-8 text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 