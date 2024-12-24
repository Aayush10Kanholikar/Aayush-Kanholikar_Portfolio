"use client";

import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: -100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay:1.5 }}
      className="flex  justify-center items-center fixed top-3 w-full z-10"
    >
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur  ">
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
    </motion.div>
  );
};
