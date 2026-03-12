import React, { useState, useRef, useEffect } from "react";
import "./Topbar.css";

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

    return () => document.removeEventListener("mousedown", handleClickOutside);

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

        {/* USER PROFILE */}
        <div
          className="user-profile-wrapper"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="user-avatar-wrapper">

            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Admin User"
              className="user-avatar"
            />

          </div>
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

        {/* DROPDOWN MENU */}
        {isOpen && (

          <div className="profile-dropdown">
           {/* MENU LIST */}
        <ul className="dropdown-menu-list">

        <li className="dropdown-item profile-item">
            <div className="dropdown-icon profile-icon">
            <FaUser />
            </div>
            <span>Edit Profile</span>
        </li>

        <li className="dropdown-item settings-item">
            <div className="dropdown-icon settings-icon">
            <FaCog />
            </div>
            <span>Account Settings</span>
        </li>

        <li className="dropdown-item support-item">
            <div className="dropdown-icon support-icon">
            <FaHeadset />
            </div>
            <span>Support Center</span>
        </li>

        <div className="dropdown-divider"></div>

        <li className="dropdown-item logout-item">
            <div className="dropdown-icon logout-icon">
            <FaSignOutAlt />
            </div>
            <span>Sign Out</span>
        </li>

        </ul>
          </div>

        )}

      </div>

    </header>

  );
};

export default Topbar;