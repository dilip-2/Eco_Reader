import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* 🔷 Banner Image */}
      <img
        src="/im/banner.jpg" // ✅ Replace with your actual image path
        alt="EcoReads Banner"
        className="home-banner-image"
      />

      {/* 🔷 Banner/Header */}
      <header className="home-banner">
        <h1 className="home-title">📚 EcoReads</h1>
        <p className="home-tagline">सस्टेनेबल लाइफ के लिए किताबें, ब्लॉग्स और टिप्स!</p>
        <p className='home-tagline'>Books, blogs, and tips for a sustainable life</p>
      </header>

      {/* 🔹 Navigation Buttons */}
      <div className="home-links">
        <Link to="/login" className="home-button">Login</Link>
        <Link to="/register" className="home-button">Register</Link>
      </div>

      
    </div>
  );
};

export default HomePage;
