import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Your Logo
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about-us" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/properties" className="navbar-link">
              Properties
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
