import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './assets/styles/index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);
