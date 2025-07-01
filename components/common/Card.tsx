
import React from 'react';

// Removed inline TypeScript prop type: { title?: string; children: React.ReactNode; className?: string; }
// Default title to null to make it explicitly optional.
const Card = ({ title = null, children, className = '' }) => {
  return React.createElement(
    'div',
    { className: `bg-white shadow-lg rounded-lg p-6 ${className}` },
    title && React.createElement(
      'h2',
      { className: "text-xl font-semibold text-brandSecondary mb-4 pb-2 border-b border-mediumGray" },
      title
    ),
    children
  );
};

export default Card;