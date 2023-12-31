import React from 'react';
import ReactDOM from 'react-dom/client';   // method
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './HelloWorld'; // Import HelloWorld component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld /> {/* Use HelloWorld component here */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
