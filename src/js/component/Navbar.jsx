import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '/src/styles/navbar.css';


function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(prevShowDropdown => !prevShowDropdown);
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="navbar-brand">Samir</div>
            <div className="navbar-links">
                <a> <NavLink to="/">Home</NavLink></a>
                <a> <NavLink to="/about">About</NavLink></a>
                <a> <NavLink to="/service">Service</NavLink></a>
                <a> <NavLink to="/contact">Contact</NavLink></a>
            </div>
        <div className="dropdown-container">
        <button className="dropdown-toggle" onClick={handleToggleDropdown}>
        <i class="bi bi-list"></i>
        </button>
        {showDropdown && (
          <div className="dropdown">
            <a> <NavLink to="/">Home</NavLink></a>
            <a> <NavLink to="/about">About</NavLink></a>
            <a> <NavLink to="/service">Service</NavLink></a>
            <a> <NavLink to="/contact">Contact</NavLink></a>
          </div>
        )}
        </div>
      </nav>
      {showDropdown && <div className="navbar-spacer"></div>}
    </BrowserRouter>
  );
}

export default Navbar;