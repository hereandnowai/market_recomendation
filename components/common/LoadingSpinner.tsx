
import React from 'react';

// interface LoadingSpinnerProps { // Removed
//   size?: 'sm' | 'md' | 'lg';
//   color?: string; 
// }

const LoadingSpinner = ({ size = 'md', color = 'text-brandPrimary' }) => { // Removed React.FC<LoadingSpinnerProps>
  let sizeClasses = '';
  switch (size) {
    case 'sm':
      sizeClasses = 'w-6 h-6 border-2';
      break;
    case 'md':
      sizeClasses = 'w-8 h-8 border-4';
      break;
    case 'lg':
      sizeClasses = 'w-12 h-12 border-4';
      break;
  }

  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full ${sizeClasses} ${color} border-t-transparent`}
        style={{ borderTopColor: 'transparent' }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;