
import React from 'react';
import Card from './common/Card';
import Button from './common/Button';
import { APP_NAME, ORG_SLOGAN, LOGO_URL, CARAMEL_AI_FACE_URL } from '../constants';
import { CurrentView } from '../types';

// Re-using icons from Sidebar or creating simple ones for feature cards
const HomeIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-brandSecondary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" })
);
const DataIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-brandSecondary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
  React.createElement('ellipse', { cx: "12", cy: "6", rx: "8", ry: "3" }),
  React.createElement('path', { d: "M4 6v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6" }),
  React.createElement('path', { d: "M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" })
);
const RecommendIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-brandSecondary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" })
);
const CampaignIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-brandSecondary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3L21 3m0 0h-1.832M21 3v1.832m0 0A12.012 12.012 0 0012 2.873a12.012 12.012 0 00-9 4.958" })
);
const ProfileIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-brandSecondary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" })
);
const AnalyticsIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-brandSecondary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" })
);
const SettingsIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-brandSecondary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
  React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
);

const ChatIcon = () => React.createElement('img', { src: CARAMEL_AI_FACE_URL, alt: "Caramel AI", className: "h-8 w-8 rounded-full border-2 border-brandSecondary" });


const FeatureCard = ({ icon, title, description, learnMoreView, onNavigate, gist }) => {
  return React.createElement(Card, {
    className: "flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300",
    children: [
      React.createElement('div', { className: "p-3 mb-3" }, icon),
      React.createElement('h3', { className: "text-lg font-semibold text-brandSecondary mb-2" }, title),
      React.createElement('p', { className: "text-sm text-gray-600 mb-4 flex-grow" }, description),
      React.createElement(Button, {
        variant: "outline",
        size: "sm",
        onClick: () => {
          alert(`${title}: ${gist} (Navigating...)`);
          if (onNavigate && learnMoreView) {
             onNavigate(learnMoreView);
          }
        },
        children: "Learn More"
      })
    ]
  });
};

const HomeView = ({ onNavigate }) => {
  const features = [
    { 
      icon: React.createElement(DataIcon, null), 
      title: "Client Dashboard", 
      description: "Upload client data, select formats, and choose recommendation models to kickstart your analysis and insights.",
      view: CurrentView.DASHBOARD,
      gist: "Upload data, configure models, and get ready for insights!"
    },
    { 
      icon: React.createElement(RecommendIcon, null), 
      title: "Recommendation Engine", 
      description: "Generate personalized product/content recommendations using advanced AI and visualize shopping pattern trends.",
      view: CurrentView.RECOMMENDATIONS,
      gist: "Get AI-powered product/content suggestions & see shopping trends."
    },
    { 
      icon: React.createElement(CampaignIcon, null), 
      title: "Campaign Builder", 
      description: "Craft compelling marketing campaigns with AI-generated content and manage promotional offers effectively.",
      view: CurrentView.CAMPAIGNS,
      gist: "Create marketing campaigns with AI content & manage offers."
    },
    { 
      icon: React.createElement(ProfileIcon, null), 
      title: "Client Profiles & Workspaces", 
      description: "Manage dedicated client workspaces, customize branding, and foster team collaboration (mock UI).",
      view: CurrentView.PROFILES,
      gist: "Manage workspaces, branding, and team collaboration (mock)."
    },
    { 
      icon: React.createElement(AnalyticsIcon, null), 
      title: "Analytics & Performance", 
      description: "Visualize key metrics with interactive dashboards and download comprehensive reports in CSV/PDF formats.",
      view: CurrentView.ANALYTICS,
      gist: "View performance dashboards & download reports (CSV/PDF)."
    },
    { 
      icon: React.createElement(SettingsIcon, null), 
      title: "Settings", 
      description: "Customize your account details, application appearance, themes, and review legal information.",
      view: CurrentView.SETTINGS,
      gist: "Manage your account, appearance, and legal info."
    },
     { 
      icon: React.createElement(ChatIcon, null), 
      title: "Caramel AI Assistant", 
      description: "Get instant marketing advice, platform guidance, and strategic insights from your intelligent AI assistant.",
      // No specific view for this, it's a global component. The alert will serve as its action.
      // learnMoreView is undefined for this feature.
      gist: "Your smart assistant for marketing advice and platform help."
    },
  ];

  return React.createElement('div', { className: "space-y-8 p-4" },
    // Hero Section
    React.createElement('div', { className: "text-center p-6 md:p-10 bg-white shadow-lg rounded-lg" },
      React.createElement('img', { src: LOGO_URL, alt: `${APP_NAME} Logo`, className: "w-48 h-auto mx-auto mb-6" }),
      React.createElement('h1', { className: "text-4xl font-bold text-brandSecondary mb-3" }, `Welcome to ${APP_NAME}`),
      React.createElement('p', { className: "text-xl text-darkGray mb-2 italic" }, ORG_SLOGAN),
      React.createElement('p', { className: "text-md text-gray-600 max-w-2xl mx-auto" }, 
        "Unlock the power of AI to understand your clients, generate personalized recommendations, build effective marketing campaigns, and track performance with actionable analytics. Our platform is designed to elevate your marketing strategy."
      )
    ),

    // Features Section
    React.createElement('div', null,
      React.createElement('h2', { className: "text-3xl font-bold text-brandSecondary text-center mb-8" }, "Explore Our Core Features"),
      React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" },
        features.map(feature => React.createElement(FeatureCard, {
          key: feature.title,
          icon: feature.icon,
          title: feature.title,
          description: feature.description,
          learnMoreView: feature.view,
          onNavigate: onNavigate,
          gist: feature.gist
        }))
      )
    )
  );
};

export default HomeView;
