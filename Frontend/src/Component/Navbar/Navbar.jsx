import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/TezzDimag_Bhubaneswar_logo.png";

import { IoClose } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {

  const [NavbarMenuOpen, setNavbarMenuOpen] = useState(false);

  const toggleMenu = () => {
    setNavbarMenuOpen(!NavbarMenuOpen);
  };

  const closeMenu = () => {
    setNavbarMenuOpen(false);
  };

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    closeMenu();
  };

  return (
    <>
      <header className="Navbar">

        <div className="Navbar-container">

          {/* LOGO */}
          <div className="Navbar-logo">
            <img src={logo} alt="TezzDimag Logo" />
          </div>


          {/* MENU */}
          <nav className={`Navbar-menu ${NavbarMenuOpen ? "active" : ""}`}>

            {/* CLOSE BUTTON */}
            <div className="Navbar-close" onClick={closeMenu}>
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
            <div className="Navbar-mobileFooter">

              <a href="tel:+919876543210" className="Navbar-mobileCall">
                Get Consultant <br />
                +91 9876543210
              </a>

              <div className="Navbar-mobileSocial">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
              </div>

            </div>

          </nav>


          {/* CTA BUTTON */}
          <div className="Navbar-cta">

            <a href="tel:+919876543210" className="Navbar-ctaBtn">
              <span>Get Consultant</span>
              <strong>+91 9876543210</strong>
            </a>

          </div>


          {/* HAMBURGER */}
          <div
            className={`Navbar-hamburger ${NavbarMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

      </header>

      {/* OVERLAY */}
      {NavbarMenuOpen && (
        <div className="Navbar-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Navbar;