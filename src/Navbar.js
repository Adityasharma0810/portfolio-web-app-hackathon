import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2>
        <span style={{ fontWeight: 'bold' }}>Code</span>
        <span style={{
          background: 'var(--bg-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold'
        }}>Forge</span>
      </h2>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>
        <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
          Projects
        </Link>
        <Link to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}>
          Skills
        </Link>
        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;