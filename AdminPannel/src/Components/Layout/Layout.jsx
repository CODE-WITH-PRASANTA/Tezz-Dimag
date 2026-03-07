import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import "./Layout.css";

const Layout = () => {

  const [kgSidebarOpen, setKgSidebarOpen] = useState(true);
  const [kgDarkMode, setKgDarkMode] = useState(false);

  const toggleSidebar = () => {
    setKgSidebarOpen(!kgSidebarOpen);
  };

  const toggleTheme = () => {
    setKgDarkMode(!kgDarkMode);
  };

  return (
    <div className={`kgLayout-wrapper ${kgDarkMode ? "kgLayout-dark" : ""}`}>

      {/* Sidebar */}
      <Sidebar
        kgSidebarOpen={kgSidebarOpen}
        setKgSidebarOpen={setKgSidebarOpen}
      />

      {/* Main */}
      <div className={`kgLayout-main ${kgSidebarOpen ? "sidebar-open" : "sidebar-close"}`}>

        <Topbar
          toggleSidebar={toggleSidebar}
          toggleTheme={toggleTheme}
          kgDarkMode={kgDarkMode}
        />

        {/* Page Content */}
        <div className="kgLayout-contentScroll">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default Layout;