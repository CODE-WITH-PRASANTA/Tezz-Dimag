import React from "react";
import "./Topbar.css";

import { FaBars, FaBell, FaMoon, FaSun } from "react-icons/fa";

const Topbar = ({ toggleSidebar, toggleTheme, kgDarkMode }) => {

  return (
    <div className="kgTopbar-wrapper">

      <div className="kgTopbar-left">

        <FaBars
          className="kgTopbar-menuIcon"
          onClick={toggleSidebar}
        />

      </div>

      <div className="kgTopbar-right">

        <FaBell className="kgTopbar-icon"/>

        <div className="kgTopbar-theme" onClick={toggleTheme}>
          {kgDarkMode ? <FaSun /> : <FaMoon />}
        </div>

      </div>

    </div>
  );
};

export default Topbar;