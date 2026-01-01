import { useContext } from "react";
import { context } from "../../context/AppContext";
import { motion } from "framer-motion";

function ModeSwitcher() {
  const { mode, setMode } = useContext(context);

  return (
    <div className="flex items-center gap-2 bg-base-200 rounded-full p-1">
      <motion.button
        className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
          mode === "human"
            ? "bg-primary text-primary-content shadow-md"
            : "text-base-content/60 hover:text-base-content"
        }`}
        onClick={() => setMode("human")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        👤 Human
      </motion.button>
      <motion.button
        className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
          mode === "ai"
            ? "bg-primary text-primary-content shadow-md"
            : "text-base-content/60 hover:text-base-content"
        }`}
        onClick={() => setMode("ai")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🤖 AI
      </motion.button>
    </div>
  );
}

export default ModeSwitcher;

