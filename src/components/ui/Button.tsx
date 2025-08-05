import React from 'react';
import { ButtonProps } from '../../types';
import { cn } from '../../utils/cn';
import { useAppContext } from '../../context/AppContext';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  loading = false,
  icon,
  className,
  disabled,
  ...props
}) => {
  const { isDarkMode } = useAppContext();
  
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const getVariantStyles = () => {
    const focusRing = isDarkMode ? 'focus:ring-accent/50' : 'focus:ring-accent-light/50';
    
    switch (variant) {
      case 'primary':
        return isDarkMode 
          ? `bg-accent text-primary hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 active:scale-95 ${focusRing}`
          : `bg-accent-light text-white hover:bg-accent-light/90 hover:shadow-lg hover:shadow-accent-light/25 active:scale-95 ${focusRing}`;
      case 'secondary':
        return isDarkMode
          ? `bg-transparent text-white-100 border-2 border-secondary hover:bg-secondary/20 hover:border-accent active:scale-95 ${focusRing}`
          : `bg-transparent text-gray-800 border-2 border-secondary-light hover:bg-secondary-light/20 hover:border-accent-light active:scale-95 ${focusRing}`;
      case 'outline':
        return isDarkMode
          ? `bg-transparent text-white-100 border-2 border-white-100/20 hover:bg-white-100/10 hover:border-white-100/40 active:scale-95 ${focusRing}`
          : `bg-transparent text-gray-800 border-2 border-gray-400/40 hover:bg-gray-100 hover:border-gray-500 active:scale-95 ${focusRing}`;
      default:
        return '';
    }
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3",
  };

  const isDisabled = disabled || loading;

  return (
    <button
      className={cn(
        baseStyles,
        getVariantStyles(),
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
      ) : icon ? (
        <span className="flex-shrink-0">{icon}</span>
      ) : null}
      {children}
    </button>
  );
};

export default Button; 