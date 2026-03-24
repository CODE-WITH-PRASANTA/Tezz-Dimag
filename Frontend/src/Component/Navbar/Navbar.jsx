import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/TezzDimag_Bhubaneswar_logo.png";

import { IoClose } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt } from "react-icons/fa";

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

           <a href="#home" onClick={() => scrollToSection("home")}>Home</a>

<button onClick={() => scrollToSection("about")}>
About
</button>

<button onClick={() => scrollToSection("programs")}>
What is Tezz Dimag
</button>

<button onClick={() => scrollToSection("courses")}>
Our Programs
</button>

<button onClick={() => scrollToSection("courses")}>
Course
</button>

<button onClick={() => scrollToSection("teacher")}>
Teacher
</button>

<button onClick={() => scrollToSection("admission")}>
Pricing
</button>

<button onClick={() => scrollToSection("testimonial")}>
Testimonial
</button>

<button onClick={() => scrollToSection("fransice")}>
Fransice
</button>


<button onClick={() => scrollToSection("contact")}>
Contact
</button>
             


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

    <div className="Navbar-ctaIcon">
      <FaPhoneAlt />
    </div>

    <div className="Navbar-ctaText">
      <span>Get Consultant</span>
      <strong>+91 9876543210</strong>
    </div>

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