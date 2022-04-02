import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(window.document.querySelector('#root'));
setInterval(()=>{root.render(<App />);},1000)