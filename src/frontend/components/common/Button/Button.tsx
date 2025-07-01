import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'font-semibold rounded-lg transition-colors duration-200';
  
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/30',
    secondary: 'bg-dark-300 text-white hover:bg-dark-400 shadow-lg shadow-dark-300/30',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};