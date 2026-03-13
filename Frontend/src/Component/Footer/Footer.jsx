import React from "react";
import "./Footer.css";
import logo from "../../assets/TezzDimag_Bhubaneswar_logo.png";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";

import { IoSend } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="kgFooter">

      <div className="kgFooter-container">

        {/* ABOUT */}
        <div className="kgFooter-about">

          <img src={logo} alt="logo" className="kgFooter-logo" />

          <p>
            Through a combination of lectures, readings and discussions,
            students will gain solid foundation in education.
          </p>

          <div className="kgFooter-social">

            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>

          </div>

        </div>


        {/* INFORMATION */}
        <div className="kgFooter-info">

          <h3>Information</h3>

          <div className="kgFooter-info-links">

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#teacher">Teachers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#course">Classes</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#test">Testimonials</a></li>
            </ul>

          </div>

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

          <label className="kgFooter-checkbox">
            <input type="checkbox" />
            <span>I agree to the terms of use and privacy policy.</span>
          </label>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="kgFooter-bottom">

        <p>
          © 2025 Tezz Dimag Bubaneswar. All Rights Reserved.
          <span> | Powered by Tezz Dimag | Developed by PR WEBSTOCK</span>
        </p>

      </div>

    </footer>
  );
};

export default Footer;