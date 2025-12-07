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
    <div className="w-[80%] mx-auto overflow-hidden py-6" id="skills">
      <h2 className="text-4xl bebas-neue-regular tracking-wide my-10 sm:mt-2  text-primary">
        Skills
      </h2>
      <div className="scroll-wrapper">
        <div className="scroll-content flex items-center gap-10">
          {skills.map((icon, i) => (
            <img key={`a-${i}`} src={icon} className="skill-icon" />
          ))}
          {skills.map((icon, i) => (
            <img key={`b-${i}`} src={icon} className="skill-icon" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
