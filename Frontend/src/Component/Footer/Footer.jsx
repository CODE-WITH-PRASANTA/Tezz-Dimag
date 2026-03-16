import React from "react";
import "./Footer.css";
import logo from "../../assets/TezzDimag_Bhubaneswar_logo.png";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";

import { IoSend } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="Footer">

      <div className="Footer-container">

        {/* ABOUT */}
        <div className="Footer-about">

          <img
            src={logo}
            alt="Tezz Dimag Logo"
            className="Footer-logo"
          />

          <p className="Footer-about-text">
            Through a combination of lectures, readings and discussions,
            students gain a strong educational foundation and build
            creativity, confidence and values for the future.
          </p>

          <div className="Footer-social">

            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>

          </div>

        </div>


        {/* INFORMATION */}
        <div className="Footer-info">

          <h3 className="Footer-title">Information</h3>

          <div className="Footer-links">

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/teachers">Teachers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/classes">Classes</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
            </ul>

          </div>

        </div>


        {/* NEWSLETTER */}
        <div className="Footer-newsletter">

          <h3 className="Footer-title">Newsletter</h3>

          <p className="Footer-news-text">
            Subscribe to our newsletter and stay updated with our
            latest courses and educational programs.
          </p>

          <div className="Footer-inputBox">

            <input
              type="email"
              placeholder="Enter Your Email"
            />

            <button>
              <IoSend />
            </button>

          </div>

          <label className="Footer-checkbox">

            <input type="checkbox" />

            <span>
              I agree to the terms and privacy policy
            </span>

          </label>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="Footer-bottom">

        <p>
          © 2025 Tezz Dimag Bhubaneswar. All Rights Reserved.
        </p>

        <p>
          Powered by Tezz Dimag | Developed by PR WEBSTOCK
        </p>

      </div>

    </footer>
  );
};

export default Footer;