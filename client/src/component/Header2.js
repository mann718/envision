
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './E (3).png'; // Adjust the path to your logo file

const Headers = () => {
  return (
    <nav className="navbar">
      <div className="container">
       
          <img src={logo} alt="Logo" className="logo" />
        
        {/* <div className="nav">
          <Link to="/register" className="nav-link">Sign up</Link>
          <span className='seperator'>/</span>
          <Link to="/login" className="nav-link">Sign in</Link>
        </div> */}
      </div>
    </nav>
  );
}

export default Headers;
