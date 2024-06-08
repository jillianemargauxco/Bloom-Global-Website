import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="images/logo.JPG" style={{width: '200px', height: '200px'}}/>
        </Link>
        
      </div>
      <div className="navbar-container">
      <ul className="navbar-menu">
          <li className="navbar-item" >
            <Link to="/" className="navbar-link" style={{fontSize: '24px'}}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about-us" className="navbar-link" style={{fontSize: '24px'}}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link" style={{fontSize: '24px'}}>
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/properties" className="navbar-link" style={{fontSize: '24px'}}>
              Properties
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" style={{fontSize: '24px'}}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
