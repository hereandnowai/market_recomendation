
import React from 'react';
import { CurrentView } from '../types';
import { LOGO_URL } from '../constants'; // APP_NAME and ORG_NAME removed

// Placeholder Icons for Sidebar - converted to React.createElement
const HomeIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" })
);

const DataIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
  React.createElement('ellipse', { cx: "12", cy: "6", rx: "8", ry: "3" }),
  React.createElement('path', { d: "M4 6v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6" }),
  React.createElement('path', { d: "M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" })
);

const RecommendIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" })
);
const CampaignIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3L21 3m0 0h-1.832M21 3v1.832m0 0A12.012 12.012 0 0012 2.873a12.012 12.012 0 00-9 4.958" })
);
const ProfileIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" })
);
const AnalyticsIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" })
);
const SettingsIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
);


const NavItem = ({ view, label, currentView, onNavigate, icon }) => {
  const isActive = currentView === view;
  return React.createElement(
    'button',
    {
      onClick: () => onNavigate(view),
      className: `flex items-center w-full px-4 py-3 text-left transition-colors duration-200 ease-in-out ${isActive ? 'bg-brandPrimary text-brandTextOnPrimary' : 'text-brandTextOnSecondary hover:bg-brandSecondary hover:bg-opacity-50'}`
    },
    React.createElement('span', { className: "mr-3" }, icon), // icon is already a React element
    label
  );
};

const Sidebar = ({ currentView, onNavigate }) => {
  return React.createElement(
    'div',
    { className: "w-64 bg-brandSecondary text-brandTextOnSecondary flex flex-col min-h-screen" },
    // Only logo at the top, centered
    React.createElement(
      'div',
      { className: "p-4 border-b border-brandTextOnSecondary border-opacity-20 flex justify-center items-center" }, // Centering the logo
      React.createElement('img', { src: LOGO_URL, alt: "HERE AND NOW AI Logo", className: "h-12" }) // Slightly increased logo height
    ),
    React.createElement(
      'nav',
      { className: "flex-grow pt-4" }, 
      React.createElement(NavItem, { view: CurrentView.HOME, label: "Home", currentView: currentView, onNavigate: onNavigate, icon: React.createElement(HomeIcon, null) }),
      React.createElement(NavItem, { view: CurrentView.DASHBOARD, label: "Client Dashboard", currentView: currentView, onNavigate: onNavigate, icon: React.createElement(DataIcon, null) }),
      React.createElement(NavItem, { view: CurrentView.RECOMMENDATIONS, label: "Recommendation Engine", currentView: currentView, onNavigate: onNavigate, icon: React.createElement(RecommendIcon, null) }),
      React.createElement(NavItem, { view: CurrentView.CAMPAIGNS, label: "Campaign Builder", currentView: currentView, onNavigate: onNavigate, icon: React.createElement(CampaignIcon, null) }),
      React.createElement(NavItem, { view: CurrentView.PROFILES, label: "Client Profiles", currentView: currentView, onNavigate: onNavigate, icon: React.createElement(ProfileIcon, null) }),
      React.createElement(NavItem, { view: CurrentView.ANALYTICS, label: "Analytics", currentView: currentView, onNavigate: onNavigate, icon: React.createElement(AnalyticsIcon, null) }),
      React.createElement(NavItem, { view: CurrentView.SETTINGS, label: "Settings", currentView: currentView, onNavigate: onNavigate, icon: React.createElement(SettingsIcon, null) })
    ),
    React.createElement(
      'div',
      { className: "p-4 mt-auto text-xs text-center text-brandTextOnSecondary opacity-70" },
      React.createElement('p', null, "HERE AND NOW AI Platform")
    )
  );
};

export default Sidebar;