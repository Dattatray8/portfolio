import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import html from "../assets/skill-icons/html-5-svgrepo-com.svg";
import css from "../assets/skill-icons/css-3-svgrepo-com.svg";
import js from "../assets/skill-icons/js-svgrepo-com.svg";
import tailwind from "../assets/skill-icons/tailwind-svgrepo-com.svg";
import reactLogo from "../assets/skill-icons/react-svgrepo-com.svg";
import nodejs from "../assets/skill-icons/node-js-svgrepo-com.svg";
import express from "../assets/skill-icons/express-svgrepo-com.svg";
import mongodb from "../assets/skill-icons/mongo-svgrepo-com.svg";
import git from "../assets/skill-icons/git-svgrepo-com.svg";
import github from "../assets/skill-icons/github-142-svgrepo-com.svg";
import postman from "../assets/skill-icons/postman-icon-svgrepo-com.svg";
import "../index.css";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    html,
    css,
    js,
    tailwind,
    reactLogo,
    nodejs,
    express,
    mongodb,
    git,
    github,
    postman,
  ];

  return (
    <motion.div
      ref={ref}
      className="w-full px-4 sm:px-6 md:px-8 lg:px-[10%] mx-auto overflow-hidden py-6 sm:py-8"
      id="skills"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl bebas-neue-regular tracking-wide my-8 sm:my-10 md:my-12 text-primary"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="scroll-wrapper">
        <motion.div
          className="scroll-content flex items-center gap-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skills.map((icon, i) => (
            <motion.img
              key={`a-${i}`}
              src={icon}
              className="skill-icon"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.2 }}
            />
          ))}
          {skills.map((icon, i) => (
            <motion.img
              key={`b-${i}`}
              src={icon}
              className="skill-icon"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
