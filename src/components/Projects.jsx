import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import efforder from "../assets/projects/efforder.webp";
import querysphere from "../assets/projects/querysphere.webp";
import yaariverse from "../assets/projects/yaariverse.webp";
import redux from "../assets/skill-icons/redux-svgrepo-com.svg";
import socketio from "../assets/skill-icons/socket-svgrepo-com.svg";

const projects = [
  {
    id: 1,
    name: "Efforder",
    image: efforder,
    description: "A digital menu ordering & table management system built using MERN.",
    url: "https://efforder.onrender.com",
    tech: ["MERN", "Redux"],
    icons: [redux],
  },
  {
    id: 2,
    name: "QuerySphere",
    image: querysphere,
    description: "A real-time discussion platform with chat rooms and live updates.",
    url: "https://query-sphere.onrender.com",
    tech: ["MERN", "Redux", "Socket.IO"],
    icons: [redux, socketio],
  },
  {
    id: 3,
    name: "Yaariverse",
    image: yaariverse,
    description: "A social media platform with posts, chat, likes, and real-time messaging.",
    url: "https://yaariverse.onrender.com",
    tech: ["MERN", "Redux", "Socket.IO"],
    icons: [redux, socketio],
  },
];

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full px-4 sm:px-6 md:px-8 lg:px-[10%] mx-auto mt-12 sm:mt-16 md:mt-20 mb-8 sm:mb-10 overflow-hidden"
      id="projects"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl bebas-neue-regular tracking-wide text-primary mb-8 sm:mb-10 md:mb-12"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 place-items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card w-full max-w-sm cursor-pointer relative group card-3d"
            onClick={() => window.open(project.url, "_blank")}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden h-full border border-base-300 hover:border-primary/50 transition-all duration-300 animated-border">
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 sm:h-52 md:h-56 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold text-sm sm:text-base">View Project →</span>
                </div>
              </div>

              <div className="card-body p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 py-2">
                  <div className="font-semibold text-primary text-xl sm:text-2xl">
                    {project.name}
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="font-semibold text-sm sm:text-lg">
                      <span className="text-green-600">M</span>
                      <span className="text-gray-600">E</span>
                      <span className="text-blue-400">R</span>
                      <span className="text-green-400">N</span>
                    </div>
                    {project.icons.map((icon, idx) => (
                      <img
                        key={idx}
                        src={icon}
                        alt="Tech"
                        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform hover:scale-125"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
