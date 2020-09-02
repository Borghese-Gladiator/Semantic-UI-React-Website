
import React from 'react';
import HomePage from './pages/HomePage.js';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js';

export default function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}