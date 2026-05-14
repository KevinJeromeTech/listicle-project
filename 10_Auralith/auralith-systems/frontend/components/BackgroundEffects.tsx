"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "12%", top: "22%", delay: 0 },
  { left: "28%", top: "68%", delay: 1.2 },
  { left: "48%", top: "32%", delay: 0.6 },
  { left: "68%", top: "74%", delay: 1.6 },
  { left: "84%", top: "24%", delay: 0.9 },
  { left: "92%", top: "58%", delay: 2.1 },
];

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#111111]">
      {/* Animated glow orbs */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-[#780F1E]/25 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] top-[35%] h-96 w-96 rounded-full bg-[#9A1024]/15 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[8%] left-[38%] h-80 w-80 rounded-full bg-[#780F1E]/10 blur-3xl"
      />

      {/* Infrastructure grid */}
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* Floating particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.2, y: 0 }}
          animate={{
            opacity: [0.15, 0.65, 0.15],
            y: [0, -24, 0],
          }}
          transition={{
            duration: 5,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#C14A5C] shadow-[0_0_18px_rgba(193,74,92,0.9)]"
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      {/* Section depth fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#111111] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#111111] to-transparent" />
    </div>
  );
}