import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Dairy from './Dairy.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />} />
      <Route path="/dairy" element={<Dairy />} />
    </Routes>
  </BrowserRouter>
)
