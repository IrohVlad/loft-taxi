import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './AuthContext';

const root = ReactDOM.createRoot(document.getElementById('_wrapper'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
