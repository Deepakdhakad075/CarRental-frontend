import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
// In App.jsx or index.js
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MOUNT_NODE = document.getElementById('app');

const root = ReactDOM.createRoot(MOUNT_NODE);

root.render(<App />);
