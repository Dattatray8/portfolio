import { useState } from "react";
import "../index.css";
import ThemeController from "./ui/ThemeController";

function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth", top: 0 });
    setOpen(false);
  };

  return (
    <div className="w-full px-[10%] mx-auto navbar bg-base-100 shadow-sm py-3 fixed top-0 left-0 z-50">
      <button onClick={() => setOpen(!open)} className="mr-6 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h10"
          />
        </svg>
      </button>
      <div className="navbar-start text-3xl bebas-neue-regular tracking-wider">
        DM
      </div>

      <div className="navbar-end hidden md:flex space-x-6 text-lg font-medium">
        <ThemeController />
        <button
          className="hover:text-primary duration-300 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Home
        </button>
        <button
          className="hover:text-primary duration-300 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          About
        </button>
        <button
          className="hover:text-primary duration-300 cursor-pointer"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </button>
        <button className="hover:text-primary duration-300 cursor-pointer">
          Projects
        </button>
      </div>

      <div className="navbar-end md:hidden">
        <ThemeController />
      </div>

      {open && (
        <div className="absolute top-[70px] left-0 w-full bg-base-100 shadow-md py-4 flex flex-col space-y-4 text-lg font-medium px-[10%] md:hidden animate-fade-down">
          <button
            className="hover:text-primary duration-300 text-left cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
          <button
            className="hover:text-primary duration-300 text-left cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="hover:text-primary duration-300 text-left cursor-pointer"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button className="hover:text-primary duration-300 text-left cursor-pointer">
            Projects
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
