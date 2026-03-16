import React, { useState, useRef, useEffect } from "react";
import "./Topbar.css";
import {Link} from "react-router-dom"


import {
  FaBars,
  FaChevronDown,
  FaUser,
  FaCog,
  FaHeadset,
  FaSignOutAlt
} from "react-icons/fa";

const Topbar = ({ toggleSidebar }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

<<<<<<< HEAD
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="kgTopbar-wrapper">
      {/* LEFT MENU */}

      <div className="kgTopbar-left">
        <FaBars className="kgTopbar-menuIcon" onClick={toggleSidebar} />
      </div>

      {/* RIGHT PROFILE */}

      <div className="kgTopbar-right" ref={dropdownRef}>
        <div className="kgTopbar-profile" onClick={() => setOpen(!open)}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user"
            className="kgTopbar-avatar"
          />

          <span className="kgTopbar-username">Musharof</span>

          <FaChevronDown className="kgTopbar-arrow" />
        </div>

        {/* DROPDOWN */}

        {open && (
          <div className="kgTopbar-dropdown">
            <div className="kgTopbar-userInfo">
              <h4>Musharof Chowdhury</h4>

              <p>randomuser@pimjo.com</p>
            </div>

            <ul>
              <Link to="/profile" className="topbar-li">
                <li>Editprofile</li>
              </Link>

              <li>Account Settings</li>

              <li>Support</li>

              <hr />

              <li className="logout">Sign Out</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
=======
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
>>>>>>> 51d15f92ea6eee3db751eb57886da985142f3643
