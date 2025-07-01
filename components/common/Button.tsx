
import React from 'react';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { // Removed
//   variant?: 'primary' | 'secondary' | 'danger' | 'outline';
//   size?: 'sm' | 'md' | 'lg';
//   children: React.ReactNode;
// }

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => { // Removed React.FC<ButtonProps>
  const baseStyle = "font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded-md inline-flex items-center justify-center";
  
  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = 'bg-brandPrimary text-brandTextOnPrimary hover:bg-yellow-500 focus:ring-yellow-400';
      break;
    case 'secondary':
      variantStyle = 'bg-brandSecondary text-brandTextOnSecondary hover:bg-teal-700 focus:ring-teal-600';
      break;
    case 'danger':
      variantStyle = 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500';
      break;
    case 'outline':
      variantStyle = 'bg-transparent border border-brandSecondary text-brandSecondary hover:bg-brandSecondary hover:text-brandTextOnSecondary focus:ring-brandSecondary';
      break;
    default:
      variantStyle = 'bg-brandPrimary text-brandTextOnPrimary hover:bg-yellow-500 focus:ring-yellow-400';
  }

  let sizeStyle = '';
  switch (size) {
    case 'sm':
      sizeStyle = 'px-3 py-1.5 text-xs'; // Adjusted for better feel
      break;
    case 'md': // Default
      sizeStyle = 'px-4 py-2 text-sm'; 
      break;
    case 'lg':
      sizeStyle = 'px-6 py-3 text-base'; // Adjusted for better feel
      break;
    default:
      sizeStyle = 'px-4 py-2 text-sm';
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;