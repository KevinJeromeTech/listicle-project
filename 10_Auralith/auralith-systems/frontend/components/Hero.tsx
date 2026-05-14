"use client";

import {
  ArrowRight,
  Activity,
  Cloud,
  Database,
  ShieldCheck,
  Code2,
} from "lucide-react";

import Reveal from "./Reveal";
import GlowCard from "./GlowCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-5 pt-28 md:px-10 lg:pt-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="absolute left-[-10%] top-0 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(120,15,30,0.40),transparent_68%)] blur-[140px]" />

      <div className="absolute right-[-10%] top-0 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(120,15,30,0.18),transparent_70%)] blur-[140px]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="relative z-10 grid min-h-[88vh] items-center gap-20 py-28 lg:grid-cols-[1fr_1fr] lg:py-32">
          {/* LEFT SIDE */}
          <Reveal>
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-black/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/90 backdrop-blur-xl">
                Intelligent Infrastructure
              </div>

              <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl xl:text-[6.4rem]">
                <span className="block text-white">Engineering</span>

                <span className="block text-white">Scalable</span>

                <span className="block bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 bg-clip-text text-transparent">
                  Intelligence
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-9 text-zinc-400">
                Auralith Systems designs modern software infrastructure,
                automation systems, and enterprise-grade platforms for ambitious
                businesses preparing for scale.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#consultation"
                  className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#7a0f1d] via-[#99182b] to-[#c0263d] px-8 py-5 text-base font-bold text-white shadow-[0_0_40px_rgba(154,16,36,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(154,16,36,0.45)]"
                >
                  Build With Us

                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#solutions-built"
                  className="rounded-2xl border border-white/20 bg-black/30 px-8 py-5 text-base font-semibold text-white transition-all duration-300 hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/10"
                >
                  View Solutions
                </a>
              </div>
            </div>
          </Reveal>

          {/* RIGHT SIDE */}
          <Reveal delay={0.2}>
            <GlowCard className="relative mx-auto w-full max-w-[620px] lg:mr-8 xl:mr-12 overflow-hidden rounded-[2.5rem] border border-[var(--primary)]/20 bg-black/40 p-5 shadow-[0_0_80px_rgba(120,15,30,0.16)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,15,30,0.18),transparent_42%)]" />

              {/* TOP */}
              <div className="relative z-10 flex items-start justify-between gap-6">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
                    Live Operations
                  </div>

                  <p className="text-zinc-500">Auralith Core</p>

                  <h2 className="mt-2 text-3xl font-black leading-tight md:text-4xl">
                    Intelligence Control Layer
                  </h2>
                </div>

                <div className="shrink-0 rounded-2xl border border-white/20 bg-black/30 p-4">
                  <Activity className="text-white" size={28} />
                </div>
              </div>

              {/* METRIC ROW */}
              <div className="relative z-10 mt-8 grid grid-cols-3 gap-3">
                {[
                  {
                    label: "System Load",
                    value: "28%",
                  },
                  {
                    label: "Response Time",
                    value: "124ms",
                  },
                  {
                    label: "Security Score",
                    value: "A+",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/5 bg-black/40 p-4"
                  >
                    <p className="text-xs text-zinc-500">{item.label}</p>

                    <h3 className="mt-2 text-2xl font-black">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>

              {/* OPERATIONAL CARDS */}
              <div className="relative z-10 mt-6 space-y-4">
                {[
                  {
                    title: "Software Systems",
                    subtitle: "Optimized",
                    icon: Code2,
                  },
                  {
                    title: "Data Intelligence",
                    subtitle: "Synced",
                    icon: Database,
                  },
                  {
                    title: "Cloud Operations",
                    subtitle: "Online",
                    icon: Cloud,
                  },
                  {
                    title: "Secure Architecture",
                    subtitle: "Protected",
                    icon: ShieldCheck,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/35 px-5 py-4 transition duration-300 hover:border-[var(--primary)]/30 hover:bg-black/45"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl border border-white/15 bg-black/30 p-3">
                          <Icon size={20} className="text-white" />
                        </div>

                        <div>
                          <h4 className="text-lg font-bold">{item.title}</h4>

                          <p className="text-sm text-zinc-500">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.95)]" />
                    </div>
                  );
                })}
              </div>

              {/* INFRASTRUCTURE BAR */}
              <div className="relative z-10 mt-6 rounded-3xl border border-white/5 bg-black/35 p-5">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-sm text-zinc-500">
                      Infrastructure Readiness
                    </p>

                    <h3 className="mt-1 text-4xl font-black">94%</h3>
                  </div>

                  <div className="rounded-full border border-white/20 px-5 py-2 text-sm font-bold">
                    Stable
                  </div>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]" />
                </div>
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}