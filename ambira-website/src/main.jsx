import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importing global CSS (if any)
import './assets/css/bulma.min.css';
import './assets/css/styles.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
