import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App';

const container = document.getElementById('app-root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
