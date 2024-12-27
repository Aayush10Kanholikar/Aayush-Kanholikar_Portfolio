"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: -100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className=" flex justify-end px-6 py-2 md:justify-center items-center fixed top-3 w-full z-10 "
    >
      <nav className="hidden md:flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur  ">
        <motion.a href="#home" className="nav-item">
          Home
        </motion.a>
        <motion.a href="#about" className="nav-item">
          About
        </motion.a>
        <motion.a href="#education" className="nav-item">
          Education
        </motion.a>
        <motion.a href="#projects" className="nav-item">
          Projects
        </motion.a>
        <motion.a href="#contact" className="nav-item  ">
          Contact
        </motion.a>
      </nav>

      <div className="md:hidden flex items-center ">
        <button onClick={toggleMenu} className="text-2xl z-30 border border-white/15 p-2 rounded-full bg-white/10 backdrop-blur-lg">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, x: "100%" }}
          className="md:hidden fixed top-0 right-0 w-2/3 h-full rounded-l-3xl border border-white/15 bg-white/10 backdrop-blur-lg flex flex-col gap-5 items-center justify-center z-20"
        >
          <a
            href="#home"
            className="text-white text-lg hover:bg-white/10 transition duration-300 hover:text-white px-2.5 py-1 rounded-xl"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-lg hover:bg-white/10 transition duration-300 hover:text-white px-2.5 py-1 rounded-xl"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#education"
            className="text-white text-lg hover:bg-white/10 transition duration-300 hover:text-white px-2.5 py-1 rounded-xl"
            onClick={toggleMenu}
          >
            Education
          </a>
          <a
            href="#projects"
            className="text-white text-lg hover:bg-white/10 transition duration-300 hover:text-white px-2.5 py-1 rounded-xl"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white text-lg hover:bg-white/10 transition duration-300 hover:text-white px-2.5 py-1 rounded-xl"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};
