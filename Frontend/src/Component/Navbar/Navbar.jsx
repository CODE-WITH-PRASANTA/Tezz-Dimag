import React, { useState } from "react";
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

  // Smooth Scroll Function
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

          <button onClick={() => scrollToSection("home")} className="kgNavbar-link">Home</button>

          <button onClick={() => scrollToSection("about")} className="kgNavbar-link">About</button>

          <button onClick={() => scrollToSection("event")} className="kgNavbar-link">Event</button>

          <button onClick={() => scrollToSection("course")} className="kgNavbar-link">Course</button>

          <button onClick={() => scrollToSection("blog")} className="kgNavbar-link">Blog</button>

          <button onClick={() => scrollToSection("teacher")} className="kgNavbar-link">Teacher</button>

          <button onClick={() => scrollToSection("schedule")} className="kgNavbar-link">Schedule</button>

          <button onClick={() => scrollToSection("test")} className="kgNavbar-link">Testimonial</button>

          <button onClick={() => scrollToSection("contact")} className="kgNavbar-link">Contact</button>

          {/* MOBILE FOOTER */}
          <div className="kgNavbar-mobileFooter">
            <a href="tel:+919876543210" className="kgNavbar-mobileCall">
              Get Consultant
              <br />
              +91 9876543210
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
            <span className="kgNavbar-contactText">Get Consultant</span>
            <span className="kgNavbar-phone">+91 9876543210</span>
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