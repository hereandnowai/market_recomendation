
import React from 'react';
import { ORG_SLOGAN, ORG_EMAIL, ORG_PHONE, ORG_WEBSITE, ORG_NAME } from '../constants';

const Footer = () => { // Removed React.FC
  return React.createElement(
    'footer',
    { className: "bg-darkGray text-lightGray p-4 text-center text-sm" },
    React.createElement('p', { className: "font-semibold italic mb-1" }, ORG_SLOGAN),
    React.createElement(
      'p',
      null,
      "Contact: ",
      React.createElement(
        'a',
        { href: `mailto:${ORG_EMAIL}`, className: "hover:text-brandPrimary" },
        ORG_EMAIL
      ),
      ` | Phone: ${ORG_PHONE}`
    ),
    React.createElement(
      'p',
      null,
      `© ${new Date().getFullYear()} `,
      React.createElement(
        'a',
        { href: ORG_WEBSITE, target: "_blank", rel: "noopener noreferrer", className: "hover:text-brandPrimary" },
        ORG_NAME
      ),
      ". All rights reserved."
    ),
    React.createElement(
      'p',
      { className: "mt-1" },
      "Developed by Arlin Robeiksha Britto [AI Products Engineering Team ]"
    )
  );
};

export default Footer;
