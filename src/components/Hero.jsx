import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const fullName = "Dattatray Mahindrakar.";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setTypedName(fullName.slice(0, index));
      index++;

      if (index > fullName.length) {
        clearInterval(typing);
      }
    }, 80);

    return () => clearInterval(typing);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      className="w-full px-4 sm:px-6 md:px-8 lg:px-[10%] mx-auto flex flex-col pt-24 sm:pt-28 md:pt-32 justify-center min-h-[85vh] sm:min-h-[80vh] gap-4 sm:gap-6 md:gap-8 relative z-10 overflow-hidden"
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <motion.div className="flex flex-col w-full gap-2 sm:gap-3" variants={itemVariants}>
        <motion.div
          className="font-semibold text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl"
          variants={itemVariants}
        >
          Hey there!, I'm-
        </motion.div>

        <motion.div
          className="bebas-neue-regular tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight break-words"
          variants={itemVariants}
        >
          <span className="text-gradient">{typedName}</span>
          {typedName.length < fullName.length && (
            <span className="animate-pulse text-primary">|</span>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-full sm:w-11/12 md:w-3/4 lg:w-2/3"
        variants={itemVariants}
      >
        <span className="text-gradient">Web Developer.</span>{" "}
        <span className="text-gray-400 dark:text-gray-300">
          Driven by a strong interest in building efficient and user-friendly
          software.
        </span>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4"
        variants={itemVariants}
      >
        <motion.div
          className="btn group hover:bg-primary/10 duration-300 border hover:border-primary flex items-center gap-2 glow hover:glow magnetic-btn text-sm sm:text-base"
          onClick={() => window.open("https://github.com/Dattatray8", "_blank")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:fill-primary fill-current transition-all"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.87 10.95c.58.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.55-3.87-1.55-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.72-1.55-2.55-.3-5.23-1.28-5.23-5.73 0-1.27.45-2.32 1.2-3.14-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.2a11.2 11.2 0 0 1 6 0c2.28-1.52 3.28-1.2 3.28-1.2.65 1.64.24 2.86.12 3.16.75.82 1.2 1.87 1.2 3.14 0 4.46-2.7 5.43-5.26 5.72.42.36.8 1.08.8 2.2v3.26c0 .3.2.65.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
          <span className="group-hover:text-primary transition-colors">Github</span>
        </motion.div>

        <motion.div
          className="btn group hover:bg-primary/10 duration-300 border hover:border-primary flex items-center gap-2 glow hover:glow magnetic-btn text-sm sm:text-base"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/dattatray-mahindrakar/",
              "_blank"
            )
          }
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:fill-primary fill-current transition-all"
          >
            <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.52-.98 1.78-2 3.66-2 3.92 0 4.64 2.48 4.64 5.7V21h-4v-5.3c0-1.26-.03-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.8V21h-4V9Z" />
          </svg>
          <span className="group-hover:text-primary transition-colors">LinkedIn</span>
        </motion.div>

        <motion.div
          className="btn group hover:bg-primary/10 duration-300 border hover:border-primary flex items-center gap-2 glow hover:glow magnetic-btn text-sm sm:text-base"
          onClick={() =>
            window.open("mailto:dattatraymahindrakar@gmail.com", "_blank")
          }
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:fill-primary fill-current transition-all"
          >
            <path d="M2 4h20v16H2V4Zm10 7L3 6v2l9 5 9-5V6l-9 5Z" />
          </svg>
          <span className="group-hover:text-primary transition-colors">Email</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
