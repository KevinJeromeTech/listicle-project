import { Layers3 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import GlowCard from "./GlowCard";
import { stackItems } from "../data/siteData";

export default function Stack() {
  return (
    <section id="solutions" className="relative overflow-hidden px-6 py-24 md:px-10">
      <div className="absolute left-[-8%] top-1/2 h-80 w-80 rounded-full bg-[var(--primary)]/18 blur-[130px]" />

      <Reveal>
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2rem] border border-[var(--primary)]/25 bg-[linear-gradient(145deg,#15080b,#0b0b0b_60%,#050505)] p-8 shadow-[0_0_55px_rgba(120,15,30,0.14)] md:p-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,15,30,0.18),transparent_35%)]" />

          <div className="relative z-10">
            <SectionHeader
              eyebrow="Enterprise Stack"
              title="Built with tools real consulting teams use."
              description="Auralith uses a practical enterprise stack designed for security, maintainability, scalability, and long-term client support."
            />
          </div>

          <div className="relative z-10 grid gap-4 sm:grid-cols-2">
            {stackItems.map((item, index) => (
              <Reveal key={item} delay={index * 0.08}>
                <GlowCard className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/10 hover:shadow-[0_0_30px_rgba(120,15,30,0.22)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--primary)]/35 bg-[var(--primary)]/15 shadow-[0_0_20px_var(--primary-soft)] transition group-hover:scale-110">
                      <Layers3 className="text-[var(--primary-light)]" size={18} />
                    </div>

                    <span className="font-semibold">{item}</span>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}