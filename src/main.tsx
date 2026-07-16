import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log('Main.tsx: Entry point reached');

try {
  const rootElement = document.getElementById('root');
  console.log('Main.tsx: Root element found:', !!rootElement);
  
  if (!rootElement) {
    console.error('Main.tsx: CRITICAL - Root element #root not found in DOM');
    throw new Error('No root element');
  }
  
  const root = ReactDOM.createRoot(rootElement);
  console.log('Main.tsx: React root created, starting render...');
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('Main.tsx: Render call dispatched successfully');
} catch (err) {
  console.error('Main.tsx: CRITICAL RENDER ERROR', err);
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `<div style="padding: 20px; color: white; background: red;"><h1>Critical Render Error</h1><pre>${err instanceof Error ? err.stack : String(err)}</pre></div>`;
  }
}
