"use client";

import { Bot, CloudCog, Gauge, Workflow } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import GlowCard from "./GlowCard";
import { solutionItems } from "../data/siteData";

const iconMap = { Workflow, Gauge, CloudCog, Bot };

export default function Solutions() {
  return (
    <section id="solutions-built" className="relative overflow-hidden px-6 py-24 md:px-10">
      <div className="absolute right-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-[var(--primary)]/20 blur-[140px]" />
      <div className="absolute left-[20%] bottom-0 h-72 w-72 rounded-full bg-[var(--primary-light)]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="mb-14">
          <SectionHeader
            eyebrow="Solutions"
            title="Systems designed to modernize how businesses operate."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {solutionItems.map((solution, index) => {
            const Icon = iconMap[solution.icon as keyof typeof iconMap];

            return (
              <Reveal key={solution.title} delay={index * 0.12}>
                <GlowCard className="p-8 shadow-[0_0_45px_rgba(120,15,30,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/70 hover:shadow-[0_0_70px_rgba(120,15,30,0.25)]">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--primary)]/40 bg-[var(--primary)]/15 shadow-[0_0_25px_var(--primary-soft)]">
                    <Icon className="text-[var(--primary-light)]" size={26} />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">{solution.title}</h3>

                  <p className="max-w-xl leading-7 text-zinc-400">
                    {solution.description}
                  </p>

                  <div className="mt-7 h-px bg-gradient-to-r from-[var(--primary)]/60 via-[var(--primary-light)]/20 to-transparent" />
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}