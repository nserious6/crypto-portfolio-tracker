// src/main.tsx or index.tsx (if using TypeScript)
// or index.jsx for JS

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Optional: use a wrapper component to handle things like themes, error boundaries, context providers, etc.
const Root = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Create and render the root
const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container not found. Make sure there's a div with id='root' in your HTML.");
}
const root = createRoot(container);
root.render(<Root />);

// Measure performance
reportWebVitals(console.log); // Optional: change to your analytics function
