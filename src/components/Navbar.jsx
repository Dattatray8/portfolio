import React from "react";
import "../index.css";
import ThemeController from "./ui/ThemeController";

function Navbar() {
  return (
    <div className="w-[80%] mx-auto navbar bg-base-100 shadow-sm py-3">
      <div className="navbar-start text-3xl bebas-neue-regular tracking-wide">
        DM
      </div>

      <div className="navbar-end space-x-6 text-lg font-medium">
        <ThemeController />
        <button className="hover:text-primary duration-300">Home</button>
        <button className="hover:text-primary duration-300">About</button>
        <button className="hover:text-primary duration-300">Skills</button>
        <button className="hover:text-primary duration-300">Projects</button>
      </div>
    </div>
  );
}

export default Navbar;
