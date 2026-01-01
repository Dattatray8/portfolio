import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import me from "../assets/me.webp";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="w-full px-4 sm:px-6 md:px-8 lg:px-[10%] mx-auto mb-12 sm:mb-16 md:mb-20 relative overflow-hidden"
      id="about"
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
        About Me
      </motion.h2>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[10%]">
        <motion.div
          className="w-full lg:w-1/2 text-base sm:text-lg md:text-xl leading-relaxed space-y-4 sm:space-y-5"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-700 dark:text-gray-300">
            I'm a <span className="text-primary font-semibold">Web Developer</span>. I enjoy building clean, responsive interfaces and
            understanding how data flows across the full application.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Currently, I'm strengthening my backend development skills by building
            practical, real-world projects. I'm always looking for opportunities
            to apply my skills, grow as a full-stack developer, and contribute to
            meaningful products.
          </p>
        </motion.div>

        <motion.div
          className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] shrink-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl -z-10 animate-float" />
          <motion.img
            src={me}
            alt="Me"
            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-primary/20"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
