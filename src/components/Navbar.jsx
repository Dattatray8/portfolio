import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import ThemeController from "./ui/ThemeController";
import ModeSwitcher from "./ui/ModeSwitcher";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <motion.div
      className={`w-full px-4 sm:px-6 md:px-8 lg:px-[10%] mx-auto navbar py-3 fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-100/80 backdrop-blur-md shadow-lg glass"
          : "bg-base-100 shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        onClick={() => setOpen(!open)}
        className="mr-6 md:hidden"
        whileTap={{ scale: 0.9 }}
      >
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
      </motion.button>
      <motion.div
        className="navbar-start text-3xl bebas-neue-regular tracking-wider text-gradient cursor-pointer"
        onClick={() => scrollToSection("home")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        DM
      </motion.div>

      <div className="navbar-end hidden md:flex space-x-4 lg:space-x-6 text-base lg:text-lg font-medium items-center">
        <ModeSwitcher />
        <ThemeController />
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            className="hover:text-primary duration-300 cursor-pointer relative magnetic-btn"
            onClick={() => scrollToSection(item.id)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        ))}
      </div>

      <div className="navbar-end md:hidden flex items-center gap-2">
        <ModeSwitcher />
        <ThemeController />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-[70px] left-0 w-full bg-base-100/95 backdrop-blur-md shadow-md py-4 flex flex-col space-y-4 text-base sm:text-lg font-medium px-4 sm:px-6 md:hidden glass"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className="hover:text-primary duration-300 text-left cursor-pointer"
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;
