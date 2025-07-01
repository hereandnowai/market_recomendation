
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// Replaced JSX with React.createElement to avoid syntax errors
// when TSX is not being transpiled.
root.render(
  React.createElement(
    React.StrictMode,
    null, // No props for StrictMode
    React.createElement(App, null) // No props for App in this usage
  )
);