"use client";

import { ArrowUpRight, Activity, Database, Shield } from "lucide-react";
import Reveal from "./Reveal";
import GlowCard from "./GlowCard";

const secondaryProjects = [
  {
    category: "DATA & INTELLIGENCE",
    title: "AI Analytics Dashboard",
    description:
      "Developed a business intelligence dashboard powered by real-time reporting systems.",
    metric: "99.9% uptime readiness",
  },
  {
    category: "AUTOMATION SYSTEMS",
    title: "Automation Operations Suite",
    description:
      "Designed internal workflow automation tools to reduce repetitive operational tasks.",
    metric: "60+ hours saved weekly",
  },
  {
    category: "SECURE INFRASTRUCTURE",
    title: "Cloud Security Framework",
    description:
      "Implemented scalable access control and operational monitoring systems.",
    metric: "Enterprise-ready architecture",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden px-6 py-24 md:px-10"
    >
      <div className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-[var(--primary)]/15 blur-[140px]" />
      <div className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-[var(--primary-light)]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="mb-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[var(--primary-light)]">
                Case Studies
              </p>

              <h2 className="text-4xl font-black leading-tight md:text-6xl">
                Systems built for real operational impact.
              </h2>
            </div>

            <button className="group flex items-center gap-2 rounded-2xl border border-[var(--primary)]/30 bg-black/30 px-6 py-4 font-semibold text-white transition duration-300 hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/10">
              View All Work
              <ArrowUpRight
                size={18}
                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </div>
        </Reveal>

        {/* FEATURED CASE STUDY */}
        <Reveal>
          <GlowCard className="group relative mb-8 overflow-hidden border border-[var(--primary)]/20 bg-black/30 p-8 shadow-[0_0_60px_rgba(120,15,30,0.10)] transition duration-500 hover:border-[var(--primary)]/50 hover:shadow-[0_0_80px_rgba(120,15,30,0.22)]">
            <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(120,15,30,0.20),transparent_45%)]" />

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              {/* LEFT */}
              <div className="relative z-10">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
                  Featured Infrastructure
                </div>

                <h3 className="mb-4 text-3xl font-black md:text-5xl">
                  Retail Infrastructure Platform
                </h3>

                <p className="max-w-2xl text-base leading-8 text-zinc-400">
                  Built scalable inventory, analytics, and operational
                  intelligence systems designed for modern retail businesses
                  preparing for growth and multi-location infrastructure.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "PostgreSQL",
                    "APIs",
                    "Cloud Systems",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-4 py-2 text-sm font-semibold text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                  <div className="rounded-2xl border border-[var(--primary)]/15 bg-black/30 p-5">
                    <p className="text-3xl font-black text-white">42%</p>
                    <p className="mt-2 text-sm text-zinc-500">
                      Workflow Optimization
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--primary)]/15 bg-black/30 p-5">
                    <p className="text-3xl font-black text-white">99%</p>
                    <p className="mt-2 text-sm text-zinc-500">
                      Infrastructure Readiness
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--primary)]/15 bg-black/30 p-5">
                    <p className="text-3xl font-black text-white">24/7</p>
                    <p className="mt-2 text-sm text-zinc-500">
                      Operational Monitoring
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="relative">
                <div className="rounded-[2rem] border border-[var(--primary)]/20 bg-[#070707]/90 p-6 shadow-[0_0_60px_rgba(120,15,30,0.18)]">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-zinc-500">
                        Operational Systems
                      </p>

                      <h4 className="mt-1 text-2xl font-bold">
                        Infrastructure Control
                      </h4>
                    </div>

                    <div className="rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 p-4">
                      <Activity className="text-[var(--primary-light)]" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        label: "Inventory Systems",
                        status: "Synced",
                        icon: Database,
                      },
                      {
                        label: "Cloud Operations",
                        status: "Operational",
                        icon: Shield,
                      },
                      {
                        label: "Data Pipelines",
                        status: "Live",
                        icon: Activity,
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="flex items-center justify-between rounded-2xl border border-[var(--primary)]/10 bg-black/40 p-4"
                        >
                          <div className="flex items-center gap-4">
                            <div className="rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 p-3">
                              <Icon
                                size={18}
                                className="text-[var(--primary-light)]"
                              />
                            </div>

                            <div>
                              <p className="font-semibold">{item.label}</p>

                              <p className="text-sm text-zinc-500">
                                {item.status}
                              </p>
                            </div>
                          </div>

                          <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.9)]" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </Reveal>

        {/* SECONDARY PROJECTS */}
        <div className="grid gap-6 lg:grid-cols-3">
          {secondaryProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <GlowCard className="group relative overflow-hidden border border-[var(--primary)]/20 bg-black/30 p-8 transition duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/50 hover:shadow-[0_0_50px_rgba(120,15,30,0.18)]">
                <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(120,15,30,0.18),transparent_42%)]" />

                <div className="relative z-10">
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                    {project.category}
                  </p>

                  <h3 className="mb-5 text-3xl font-black leading-tight">
                    {project.title}
                  </h3>

                  <p className="mb-8 text-base leading-8 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mb-8 h-2 overflow-hidden rounded-full bg-black">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]" />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">
                      {project.metric}
                    </p>

                    <button className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--primary)]/20 bg-black/40 transition duration-300 hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/10">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}