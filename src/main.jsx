import React from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <GoogleOAuthProvider clientId="">
        
        <App />
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
