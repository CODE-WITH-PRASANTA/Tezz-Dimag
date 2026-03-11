import React from "react";
import "./Footer.css";
import logo from "../../assets/Tezz-Logo.webp";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { IoSend } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="kgFooter">

      <div className="kgFooter-container">

        {/* LEFT SECTION */}
        <div className="kgFooter-about">
          <img src={logo} alt="logo" className="kgFooter-logo" />

          <p>
            Through a combination of lectures, readings and discussions,
            students will gain solid foundation in education.
          </p>

          <div className="kgFooter-social">
            <FaTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        {/* USEFUL LINKS */}
        <div className="kgFooter-links">
          <h3>Useful Link</h3>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Event</li>
            <li>Course</li>
            <li>Blog Page</li>
            <li>Teacher</li>
            <li>Schedule</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="kgFooter-category">
          <h3>Categories</h3>

          <ul>
            <li>Art Design</li>
            <li>Graphic Design</li>
            <li>Web Design</li>
            <li>UX/UI Design</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="kgFooter-newsletter">
          <h3>Newsletter</h3>

          <p>
            Sign up for our newsletter and get 34% off your next course.
          </p>

          <div className="kgFooter-inputBox">
            <input type="email" placeholder="Enter Your Email*" />
            <button>
              <IoSend />
            </button>
          </div>

          <div className="kgFooter-checkbox">
            <input type="checkbox" />
            <span>I agree to the terms of use and privacy policy.</span>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="kgFooter-bottom">
        Copyright © 2026 All Rights Reserved by Eduan
      </div>

    </footer>
  );
};

export default Footer;