"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 z-[999] h-1 w-full origin-left bg-gradient-to-r from-[#7a0f1d] via-[#99182b] to-[#c0263d] shadow-[0_0_20px_rgba(154,16,36,0.7)]"
    />
  );
}