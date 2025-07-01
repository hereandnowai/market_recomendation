
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomeView from './components/HomeView'; // Import HomeView
import ClientDashboardView from './components/ClientDashboardView';
import RecommendationEngineView from './components/RecommendationEngineView';
import CampaignBuilderView from './components/CampaignBuilderView';
import ClientProfilesView from './components/ClientProfilesView';
import AnalyticsView from './components/AnalyticsView';
import SettingsView from './components/SettingsView';
import CaramelAIChatbot from './components/CaramelAIChatbot';
import { CurrentView } from './types';
// APP_NAME is no longer passed to Header from here
// import { APP_NAME } from './constants';

const App = () => {
  const [currentView, setCurrentView] = useState(CurrentView.HOME); // Default to HomeView
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleNavigate = useCallback((view) => { 
    setCurrentView(view);
  }, []);

  const toggleChatbot = useCallback(() => {
    setIsChatbotOpen(prev => !prev);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case CurrentView.HOME: // Added case for Home
        return React.createElement(HomeView, { onNavigate: handleNavigate }); // Pass onNavigate for "Learn More" buttons if needed
      case CurrentView.DASHBOARD:
        return React.createElement(ClientDashboardView, null);
      case CurrentView.RECOMMENDATIONS:
        return React.createElement(RecommendationEngineView, null);
      case CurrentView.CAMPAIGNS:
        return React.createElement(CampaignBuilderView, null);
      case CurrentView.PROFILES:
        return React.createElement(ClientProfilesView, null);
      case CurrentView.ANALYTICS:
        return React.createElement(AnalyticsView, null);
      case CurrentView.SETTINGS:
        return React.createElement(SettingsView, null);
      default:
        return React.createElement(HomeView, { onNavigate: handleNavigate }); // Default to HomeView
    }
  };

  return React.createElement(
    'div',
    { className: "flex h-screen bg-lightGray font-sans text-darkGray" },
    React.createElement(Sidebar, { currentView: currentView, onNavigate: handleNavigate }),
    React.createElement(
      'div',
      { className: "flex-1 flex flex-col overflow-hidden" },
      React.createElement(Header, null), // Removed appName prop
      React.createElement(
        'main',
        { className: "flex-1 overflow-x-hidden overflow-y-auto bg-lightGray p-6" },
        renderView()
      ),
      React.createElement(Footer, null)
    ),
    React.createElement(CaramelAIChatbot, { isOpen: isChatbotOpen, onClose: toggleChatbot }),
    React.createElement(
      'button',
      {
        onClick: toggleChatbot,
        className: "fixed bottom-6 right-6 bg-brandSecondary text-brandTextOnSecondary p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-colors z-50",
        'aria-label': "Toggle Caramel AI Chatbot" 
      },
      React.createElement('img', { 
        src: "https://raw.githubusercontent.com/hereandnowai/images/refs/heads/main/logos/caramel.jpeg", 
        alt: "Caramel AI DP", 
        className: "w-10 h-10 rounded-full" 
      })
    )
  );
};

export default App;