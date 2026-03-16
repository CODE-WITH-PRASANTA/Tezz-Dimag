import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/TezzDimag_Bhubaneswar_logo.png";

import { IoClose } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    closeMenu();
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">

          {/* LOGO */}
          <div className="navbar-logo">
            <img src={logo} alt="TezzDimag Logo" />
          </div>

          {/* MENU */}
          <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>

            {/* CLOSE BUTTON */}
            <div className="menu-close" onClick={closeMenu}>
              <IoClose />
            </div>

            <a href="/" onClick={closeMenu}>Home</a>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("event")}>Event</button>
            <button onClick={() => scrollToSection("course")}>Course</button>
            <button onClick={() => scrollToSection("blog")}>Blog</button>
            <button onClick={() => scrollToSection("teacher")}>Teacher</button>
            <button onClick={() => scrollToSection("schedule")}>Schedule</button>
            <button onClick={() => scrollToSection("test")}>Testimonial</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>

            {/* MOBILE FOOTER */}
            <div className="menu-footer">

              <a href="tel:+919876543210" className="mobile-call">
                Get Consultant <br />
                +91 9876543210
              </a>

              <div className="mobile-social">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
              </div>

            </div>

          </nav>

          {/* CTA BUTTON */}
          <div className="navbar-cta">
            <a href="tel:+919876543210" className="cta-btn">
              <span>Get Consultant</span>
              <strong>+91 9876543210</strong>
            </a>
          </div>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </header>

      {/* OVERLAY */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;