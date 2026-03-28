import React from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaChalkboardTeacher,
  FaBook,
  FaQuoteRight,
  FaBlog,
  FaEnvelope,
  FaSignOutAlt,
  FaTimes,
  FaBullhorn,
  FaUserPlus,
  FaList,
  FaUserGraduate,
  FaImages
} from "react-icons/fa";

import logo from "../../assets/Tezz-Logo.webp";

/* ✅ ROUTES CONFIG */
const menuItems = [
  {
    path: "/admin",
    name: "Dashboard",
    icon: FaTachometerAlt,
  },
  {
    path: "/teacher-posting",
    name: "Teacher Posting",
    icon: FaChalkboardTeacher,
  },
  {
    path: "/courses-posting",
    name: "Courses Posting",
    icon: FaBook,
  },
  {
    path: "/testimonial",
    name: "Testimonial",
    icon: FaQuoteRight,
  },
  {
    path: "/blog-posting",
    name: "Blog Posting",
    icon: FaBlog,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: FaEnvelope,
  },

  /* ✅ ADMIN */
  {
    path: "/admin/advertisement",
    name: "Advertisement",
    icon: FaBullhorn,
  },
  {
    path: "/admin/coldlead",
    name: "Cold Leads",
    icon: FaUserPlus,
  },
  {
    path: "/admin/admission-list",
    name: "Admission List",
    icon: FaList,
  },
  {
    path: "/admin/gallery",
    name: "Gallery",
    icon: FaImages,
  },
  {
    path: "/admin/student",
    name: "StudentInfo",
    icon: FaUserGraduate,
  },
  {
    path: "/admin/studentdetails",
    name: "StudentDetails",
    icon: FaUserGraduate,
  },
];

const Sidebar = ({ kgSidebarOpen, setKgSidebarOpen }) => {
  const location = useLocation();

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
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <li
              key={index}
              className={isActive ? "active-menu" : ""}
            >
              <Link to={item.path}>
                <Icon />
                {kgSidebarOpen && <span>{item.name}</span>}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* LOGOUT */}
      <div className="kgSidebar-logout">
        <FaSignOutAlt />
        {kgSidebarOpen && <span>Logout</span>}
      </div>
    </div>
  );
};

export default Sidebar;