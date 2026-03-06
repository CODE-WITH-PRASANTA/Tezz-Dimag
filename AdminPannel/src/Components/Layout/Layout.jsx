import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import "./Layout.css";

const Layout = ({ children }) => {

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

      {/* SIDEBAR */}

      <Sidebar
        kgSidebarOpen={kgSidebarOpen}
        setKgSidebarOpen={setKgSidebarOpen}
      />

      {/* MAIN AREA */}

      <div className={`kgLayout-main ${kgSidebarOpen ? "sidebar-open" : "sidebar-close"}`}>

        {/* TOPBAR */}

        <Topbar
          toggleSidebar={toggleSidebar}
          toggleTheme={toggleTheme}
          kgDarkMode={kgDarkMode}
        />

        {/* CONTENT */}

        <div className="kgLayout-contentScroll">

          {children || (
            <>
              <h2>Admin Dashboard</h2>
              <p>Add your tables, charts or forms here.</p>
              <div style={{ height: "1200px" }}></div>
            </>
          )}

        </div>

      </div>

    </div>
  );
};

export default Layout;