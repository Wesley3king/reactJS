import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Retornar from './Retornar';
import RetornarFuncional from './RetornarFuncional';
import Fetch from './Fetch';
import Keyatribute from './Keyatribute';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
          <Route path='/' element={<App />} />
          <Route path='/Fetch' element={<Fetch />}/>
          <Route path='/Retornar' element={<Retornar />}/>
          <Route path='/RetornarFuncional' element={<RetornarFuncional />}/>
          <Route path='/Lista' element={<Keyatribute />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
