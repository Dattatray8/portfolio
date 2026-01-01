import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <motion.div
      className="section-divider"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  );
}

export default SectionDivider;

