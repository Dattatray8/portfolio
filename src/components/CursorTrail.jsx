import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only show on desktop (non-touch devices)
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia("(pointer: fine)").matches && window.innerWidth > 768);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    if (!isDesktop) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Check for interactive elements
    const checkHover = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".project-card") ||
        target.closest(".btn");
      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousemove", checkHover);

    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousemove", checkHover);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Cursor Trail */}
      <motion.div
        className="fixed pointer-events-none z-[10000] mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.6,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div
          className={`w-4 h-4 rounded-full bg-primary transition-all ${
            isHovering ? "scale-150" : ""
          }`}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>

      {/* Cursor Ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] border-2 border-primary rounded-full"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.4 : 0.2,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      >
        <div
          className="w-8 h-8"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>
    </>
  );
}

export default CursorTrail;

