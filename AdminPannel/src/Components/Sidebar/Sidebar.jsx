import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaChalkboardTeacher,
  FaBook,
  FaQuoteRight,
  FaBlog,
  FaEnvelope,
  FaSignOutAlt,
  FaTimes
} from "react-icons/fa";

import logo from "../../assets/Tezz-Logo.webp";

const Sidebar = ({ kgSidebarOpen, setKgSidebarOpen }) => {
  return (
    <div
      className={`kgSidebar-wrapper ${
        kgSidebarOpen ? "kgSidebar-open" : "kgSidebar-close"
      }`}
    >
      {/* Mobile Close */}
      <div className="kgSidebar-mobileClose">
        <FaTimes onClick={() => setKgSidebarOpen(false)} />
      </div>

      {/* Logo */}
      <div className="kgSidebar-logoArea">
        <img
          src={logo}
          alt="logo"
          className={`kgSidebar-logo ${
            kgSidebarOpen ? "logo-open" : "logo-close"
          }`}
        />
      </div>

      {/* MENU */}
      <ul className="kgSidebar-menu">

        <li>
          <Link to="/">
            <FaTachometerAlt />
            {kgSidebarOpen && <span>Dashboard</span>}
          </Link>
        </li>

        <li>
          <Link to="/teacher-posting">
            <FaChalkboardTeacher />
            {kgSidebarOpen && <span>Teacher Posting</span>}
          </Link>
        </li>

        <li>
          <Link to="/courses-posting">
            <FaBook />
            {kgSidebarOpen && <span>Courses Posting</span>}
          </Link>
        </li>

        <li>
          <Link to="/testimonial">
            <FaQuoteRight />
            {kgSidebarOpen && <span>Testimonial</span>}
          </Link>
        </li>

        <li>
          <Link to="/blog-posting">
            <FaBlog />
            {kgSidebarOpen && <span>Blog Posting</span>}
          </Link>
        </li>

        <li>
          <Link to="/contact">
            <FaEnvelope />
            {kgSidebarOpen && <span>Contact</span>}
          </Link>
        </li>

      </ul>

      {/* LOGOUT BUTTON */}
      <div className="kgSidebar-logout">
        <FaSignOutAlt />
        {kgSidebarOpen && <span>Logout</span>}
      </div>
    </div>
  );
};

export default Sidebar;