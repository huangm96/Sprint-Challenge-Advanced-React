import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode("mode", false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Players List</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        >Mode</div>
      </div>
    </nav>
  );
};

export default Nav;
