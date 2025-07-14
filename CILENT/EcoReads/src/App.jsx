import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import AddPost from './pages/AddPost';
import TipsPage from './pages/TipsPage';
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* ✅ Navbar */}
      <header className="navbar">
        <h2 className="logo">🌿 EcoReads</h2>

        {/* ✅ Hamburger icon */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* ✅ Nav links */}
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/tips" onClick={() => setMenuOpen(false)}>Tips</Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/add-post" onClick={() => setMenuOpen(false)}>Add Post</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
        </nav>
      </header>

      {/* ✅ Routes */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/tips" element={<TipsPage />} />
        </Routes>
      </main>

      {/* ✅ Footer */}
      <footer className="footer">
        <p>© 2025 EcoReads. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
