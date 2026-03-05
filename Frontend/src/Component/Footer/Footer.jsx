import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo.webp";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaSkype,
  FaRss
} from "react-icons/fa";

import { IoSend } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="kgFooter-wrapper">

      <div className="kgFooter-container">

        {/* LEFT SECTION */}
        <div className="kgFooter-aboutSection">

          <div className="kgFooter-logoBox">
            <img src={logo} alt="logo" className="kgFooter-logoImg" />
            
          </div>

          <p className="kgFooter-description">
            Kindergarten school is a wonderland for Kids to learn,
            play, and grow naturally and creatively.
          </p>

          <ul className="kgFooter-featureList">
            <li>Advanced Educational Programs</li>
            <li>Creativity & Thinking</li>
            <li>Yoga & Swimming</li>
          </ul>

        </div>


        {/* CENTER SECTION */}
        <div className="kgFooter-instagramSection">

          <h3 className="kgFooter-sectionTitle yellowTitle">
            Instagram
          </h3>

          <div className="kgFooter-titleUnderline yellowUnderline"></div>

        </div>


        {/* RIGHT SECTION */}
        <div className="kgFooter-newsletterSection">

          <h3 className="kgFooter-sectionTitle redTitle">
            Newsletter Signup
          </h3>

          <div className="kgFooter-titleUnderline redUnderline"></div>

          <p className="kgFooter-newsletterText">
            Get Update Our News Everytime,
            You Need Just Subscribe
          </p>

          <div className="kgFooter-inputBox">

            <input
              type="email"
              placeholder="Enter Your Email"
              className="kgFooter-emailInput"
            />

            <button className="kgFooter-submitBtn">
              <IoSend />
            </button>

          </div>


          {/* SOCIAL ICONS */}

          <div className="kgFooter-socialIcons">

            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaSkype />
            <FaRss />

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;