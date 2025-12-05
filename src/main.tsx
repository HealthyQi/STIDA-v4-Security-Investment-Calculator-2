import React from 'react';
import ReactDOM from 'react-dom/client';
import STIDACalculator from '@/components/STIDACalculator';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <STIDACalculator />
  </React.StrictMode>
);
