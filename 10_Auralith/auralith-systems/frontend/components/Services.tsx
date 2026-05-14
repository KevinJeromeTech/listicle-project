"use client";

import { Code2, Workflow, BarChart3, Cloud } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { servicesItems } from "../data/siteData";
import GlowCard from "./GlowCard";

const iconMap = { Code2, Workflow, BarChart3, Cloud };

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-24 md:px-10"
    >
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-[var(--primary)]/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[var(--primary-light)]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="mb-14">
          <SectionHeader
            eyebrow="What We Do"
            title="Technology solutions built around business outcomes."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicesItems.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <Reveal key={service.title} delay={index * 0.12}>
                <GlowCard className="p-6 shadow-[0_0_45px_rgba(120,15,30,0.10)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/70 hover:shadow-[0_0_60px_rgba(120,15,30,0.25)]">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--primary)]/40 bg-[var(--primary)]/15 shadow-[0_0_25px_var(--primary-soft)] transition group-hover:scale-110">
                    <Icon className="text-[var(--primary-light)]" size={26} />
                  </div>

                  <span className="mb-4 inline-flex rounded-full border border-[var(--primary)]/25 bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary-light)]">
                    Capability
                  </span>

                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>

                  <p className="text-sm leading-7 text-zinc-400">
                    {service.description}
                  </p>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}