import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/anybody/standard.css';
import '@fontsource-variable/geist';
import '@fontsource/geist-mono/400.css';
import '@fontsource/geist-mono/500.css';
import './styles.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
