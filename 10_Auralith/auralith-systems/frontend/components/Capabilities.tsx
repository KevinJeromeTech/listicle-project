"use client";

import {
  Code2,
  Database,
  Cloud,
  ShieldCheck,
  Workflow,
  Bot,
} from "lucide-react";
import Reveal from "./Reveal";
import GlowCard from "./GlowCard";

const capabilities = [
  {
    title: "Full-Stack Platforms",
    description: "Modern web applications built with scalable frontend and backend architecture.",
    icon: Code2,
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Data Infrastructure",
    description: "Structured data systems, dashboards, APIs, and reporting workflows.",
    icon: Database,
    tags: ["PostgreSQL", "APIs", "Analytics"],
  },
  {
    title: "Cloud-Ready Systems",
    description: "Deployment-focused applications prepared for production environments.",
    icon: Cloud,
    tags: ["AWS", "Docker", "Vercel"],
  },
  {
    title: "Secure Architecture",
    description: "Systems designed with maintainability, access control, and reliability in mind.",
    icon: ShieldCheck,
    tags: ["Auth", "Security", "Monitoring"],
  },
  {
    title: "Workflow Automation",
    description: "Internal tools that reduce repetitive work and improve operational speed.",
    icon: Workflow,
    tags: ["Automation", "Ops", "Efficiency"],
  },
  {
    title: "AI-Enhanced Tools",
    description: "AI-assisted systems for insights, decision support, and productivity workflows.",
    icon: Bot,
    tags: ["AI", "Insights", "Assistants"],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative overflow-hidden px-6 py-24 md:px-10">
      <div className="absolute left-[-8%] top-0 h-96 w-96 rounded-full bg-[var(--primary)]/20 blur-[140px]" />
      <div className="absolute right-[-8%] bottom-0 h-80 w-80 rounded-full bg-[var(--primary-light)]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="mb-14">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[var(--primary-light)]">
              Capabilities
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Infrastructure capabilities built for modern business systems.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              Auralith Systems combines software engineering, automation, cloud-ready architecture, and data intelligence to build systems that scale with business operations.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <GlowCard className="p-6 shadow-[0_0_45px_rgba(120,15,30,0.10)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/65 hover:shadow-[0_0_60px_rgba(120,15,30,0.22)]">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--primary)]/35 bg-[var(--primary)]/15 shadow-[0_0_25px_var(--primary-soft)]">
                    <Icon className="text-[var(--primary-light)]" size={26} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>

                  <p className="mb-6 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}