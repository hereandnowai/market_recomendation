
import React from 'react';
import { SOCIAL_LINKS, APP_NAME, ORG_NAME } from '../constants.tsx'; // Import APP_NAME and ORG_NAME

const Header = () => {
  return React.createElement(
    'header',
    // Use justify-between to push app name/org name to left and social/user to right
    { className: "bg-brandSecondary text-brandTextOnSecondary p-4 shadow-md flex items-center justify-between" },
    // App Name and Org Name on the left
    React.createElement(
      'div',
      { className: "flex flex-col" }, 
      React.createElement('h1', { className: "text-xl font-semibold text-brandTextOnSecondary" }, APP_NAME),
      React.createElement('p', { className: "text-xs text-brandPrimary" }, ORG_NAME)
    ),
    // Social links and User Icon on the right
    React.createElement(
      'div',
      { className: "flex items-center space-x-4" },
      SOCIAL_LINKS.map(link =>
        React.createElement(
          'a',
          {
            key: link.name,
            href: link.url,
            target: "_blank",
            rel: "noopener noreferrer",
            title: link.name,
            className: "text-brandTextOnSecondary hover:text-brandPrimary transition-colors"
          },
          link.icon 
        )
      ),
      React.createElement(
        'div',
        {
          className: "w-8 h-8 bg-brandPrimary rounded-full flex items-center justify-center text-brandTextOnPrimary font-semibold cursor-pointer",
          title: "User Profile (Mock)"
        },
        'U'
      )
    )
  );
};

export default Header;
