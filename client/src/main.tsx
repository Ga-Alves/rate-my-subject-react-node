import React from 'react'
import ReactDOM from 'react-dom/client'

// style
import './index.css'

// pages
import App from './App'
import Dashboard
  from './pages/Dashboard/Dashboard';
import Login
  from './pages/Auth/Login/Login';
import Signup from './pages/Auth/Signup/Signup';
import List
 from './pages/Dashboard/SubjectGrid/SubjectGrid';
import Subject from './pages/Subject';
import Evaluate from './pages/Evaluate';

import {BrowserRouter, Routes, Route}from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='dashboard' element={<Dashboard />}>
            <Route path='list' element={<List />}/>
            <Route path='subject/:id' element={<Subject/>}/>
            <Route path='subject/evaluate/:id' element={<Evaluate/>}/>
          </Route>
            <Route path='login' element={<Login />}/>
            <Route path='signup' element={<Signup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
