"use client";

import StatsCounter from "./StatsCounter";

const stats = [
  {
    value: 12,
    suffix: "+",
    label: "Enterprise Systems",
    description: "Platforms, dashboards, and internal tools.",
  },
  {
    value: 40,
    suffix: "+",
    label: "Automation Workflows",
    description: "Manual processes converted into systems.",
  },
  {
    value: 99,
    suffix: "%",
    label: "Infrastructure Readiness",
    description: "Designed for uptime, scale, and maintainability.",
  },
];

export default function StatsStrip() {
  return (
    <div className="mt-16 grid gap-5 border-t border-[var(--primary)]/20 pt-8 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-[var(--primary)]/20 bg-black/25 p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(120,15,30,0.08)] transition hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-[0_0_40px_rgba(120,15,30,0.18)]"
        >
          <StatsCounter
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}