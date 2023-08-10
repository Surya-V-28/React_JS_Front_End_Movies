import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={ <App />}>

      </Route>
    </Routes>
    
    </BrowserRouter>
   
  </React.StrictMode>
);




