import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Logo.webp";
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&display=swap" rel="stylesheet"></link>

const Navbar = () => {
  const [kgNavOpen, setKgNavOpen] = useState(false);

  const toggleMenu = () => {
    setKgNavOpen(!kgNavOpen);
  };

  const closeMenu = () => {
    setKgNavOpen(false);
  };

  return (
    <header className="kgNavbar-wrapper">
      <div className="kgNavbar-container">

        {/* Logo */}
        <div className="kgNavbar-logoSection">
          <img src={logo} alt="logo" className="kgNavbar-logoImg" />
        
        </div>

        {/* Navigation */}
        <nav className={`kgNavbar-menu ${kgNavOpen ? "kgNavbar-active" : ""}`}>

          <NavLink to="/" onClick={closeMenu} className="kgNavbar-link">
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu} className="kgNavbar-link">
            About Us
          </NavLink>

          <NavLink to="/event" onClick={closeMenu} className="kgNavbar-link">
            Event
          </NavLink>

          <NavLink to="/course" onClick={closeMenu} className="kgNavbar-link">
            Course
          </NavLink>

          <NavLink to="/blog" onClick={closeMenu} className="kgNavbar-link">
            Blog Page
          </NavLink>

          <NavLink to="/teacher" onClick={closeMenu} className="kgNavbar-link">
            Teacher
          </NavLink>

          <NavLink to="/schedule" onClick={closeMenu} className="kgNavbar-link">
            Schedule
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu} className="kgNavbar-link">
            Contact
          </NavLink>

        </nav>

        {/* Mobile Menu Button */}
        <div className="kgNavbar-toggleBtn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;