"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { ReactNode } from "react";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlowCard({
  children,
  className = "",
}: GlowCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const rect = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[2rem] border border-[var(--primary)]/25 bg-[linear-gradient(145deg,#16080c,#0b0b0b_55%,#050505)] ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(154,16,36,0.22),
              transparent 70%
            )
          `,
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}