import React from "react";
import "./Footer.css";
import logo from "../../assets/TezzDimag_Bhubaneswar_logo.png";

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

        {/* LEFT ABOUT */}
        <div className="kgFooter-about">

          <img src={logo} alt="logo" className="kgFooter-logo" />

          <p>
            Through a combination of lectures, readings and discussions,
            students will gain solid foundation in education.
          </p>

          <div className="kgFooter-social">

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* INFORMATION */}
        <div className="kgFooter-info">

          <h3>INFORMATION</h3>

          <div className="kgFooter-info-links">

            <ul>

              <li>
                <a href="/">HOME</a>
              </li>

              <li>
                <a href="#blog">BLOG</a>
              </li>

              <li>
                <a href="#teacher">TEACHERS</a>
              </li>

              <li>
                <a href="#contact">CONTACT</a>
              </li>

            </ul>

            <ul>

              <li>
                <a href="#about">ABOUT</a>
              </li>

              <li>
                <a href="#course">CLASSES</a>
              </li>

              <li>
                <a href="#events">EVENTS</a>
              </li>

              <li>
                <a href="#test">TESTIMONIALS</a>
              </li>

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

            <span>
              I agree to the terms of use and privacy policy.
            </span>

          </label>

        </div>

      </div>

      {/* FOOTER BOTTOM */}

      <div className="kgFooter-bottom">

        © 2025 Tezz Dimag Bubaneswar. All Rights Reserved.  
        <span> | Powered by Tezz Dimag | Developed by PR WEBSTOCK</span>

      </div>

    </footer>
  );
};

export default Footer;