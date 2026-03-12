import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/TezzDimag_Bhubaneswar_logo.png";
import { IoClose } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

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

        {/* LOGO */}
        <div className="kgNavbar-logoSection">
          <img src={logo} alt="logo" className="kgNavbar-logoImg" />
        </div>

        {/* NAVIGATION */}
        <nav className={`kgNavbar-menu ${kgNavOpen ? "kgNavbar-active" : ""}`}>

          {/* CLOSE BUTTON */}
          <div className="kgNavbar-closeBtn" onClick={closeMenu}>
            <IoClose />
          </div>

          <NavLink to="#home" onClick={closeMenu} className="kgNavbar-link">
            Home
          </NavLink>

          <NavLink to="#about" onClick={closeMenu} className="kgNavbar-link">
            About Us
          </NavLink>

          <NavLink to="#event" onClick={closeMenu} className="kgNavbar-link">
            Event
          </NavLink>

          <NavLink to="#course" onClick={closeMenu} className="kgNavbar-link">
            Course
          </NavLink>

          <NavLink to="#blog" onClick={closeMenu} className="kgNavbar-link">
            Blog Page
          </NavLink>

          <NavLink to="#teacher" onClick={closeMenu} className="kgNavbar-link">
            Teacher
          </NavLink>

          <NavLink to="#schedule" onClick={closeMenu} className="kgNavbar-link">
            Schedule
          </NavLink>

          <NavLink to="#contact" onClick={closeMenu} className="kgNavbar-link">
            Contact
          </NavLink>

          {/* MOBILE FOOTER */}
          <div className="kgNavbar-mobileFooter">

            <a href="tel:+919876543210" className="kgNavbar-mobileCall">
              Get Consultant<br />+91 9876543210
            </a>

            <div className="kgNavbar-mobileSocial">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>

          </div>

        </nav>

        {/* RIGHT BUTTON */}
        <div className="kgNavbar-right">
          <a href="tel:+919876543210" className="kgNavbar-contactBtn">

            <span className="kgNavbar-contactText">
              Get Consultant
            </span>

            <span className="kgNavbar-phone">
              +91 9876543210
            </span>

          </a>
        </div>

        {/* HAMBURGER */}
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