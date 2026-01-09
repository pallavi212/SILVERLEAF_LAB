import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SupportAccount from './pages/SupportAccount'
import HomePage from './pages/homepage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SupportAccount />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
