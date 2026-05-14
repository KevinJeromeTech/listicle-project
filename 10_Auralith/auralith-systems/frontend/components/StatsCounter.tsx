"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type StatsCounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export default function StatsCounter({
  value,
  suffix = "",
  label,
}: StatsCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 1200,
    bounce: 0,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-xl transition hover:border-[var(--primary)]/40 hover:shadow-[0_0_30px_var(--primary-soft)]"
    >
      <p className="text-3xl font-black text-white">
        {displayValue}
        {suffix}
      </p>

      <p className="mt-1 text-sm text-zinc-500">{label}</p>
    </motion.div>
  );
}