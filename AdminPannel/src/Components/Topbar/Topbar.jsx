import React, { useState, useRef, useEffect } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaChevronDown,
  FaUser,
  FaCog,
  FaHeadset,
  FaSignOutAlt
} from "react-icons/fa";

const Topbar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="topbar-container">
      
      {/* LEFT SECTION */}
      <div className="topbar-left-section">
        <button
          className="sidebar-toggle-btn"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="topbar-right-section" ref={dropdownRef}>

        {/* PROFILE */}
        <div
          className="user-profile-wrapper"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Admin"
            className="user-avatar"
          />

          <div className="user-details">
            <span className="user-name">
              Musharof Chowdhury
            </span>
            <span className="user-role">
              Super Admin
            </span>
          </div>

          <FaChevronDown
            className={`dropdown-arrow ${isOpen ? "active" : ""}`}
          />
        </div>

        {/* DROPDOWN */}
        {isOpen && (
          <div className="profile-dropdown">
            <ul className="dropdown-menu-list">

              <Link to="/profile">
                <li className="dropdown-item">
                  <FaUser /> Edit Profile
                </li>
              </Link>

              <li className="dropdown-item">
                <FaCog /> Account Settings
              </li>

              <li className="dropdown-item">
                <FaHeadset /> Support Center
              </li>

              <div className="dropdown-divider"></div>

              <li className="dropdown-item logout-item">
                <FaSignOutAlt /> Sign Out
              </li>

            </ul>
          </div>
        )}

      </div>

    </header>
  );
};

export default Topbar;