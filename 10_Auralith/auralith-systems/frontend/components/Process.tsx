import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import GlowCard from "./GlowCard";
import { processItems } from "../data/siteData";

export default function Process() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 md:px-10">
      <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/12 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="mb-14">
          <SectionHeader
            eyebrow="Process"
            title="From business problem to deployed solution."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-5">
          {processItems.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.12}>
              <GlowCard className="p-6 shadow-[0_0_45px_rgba(120,15,30,0.10)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/65 hover:shadow-[0_0_60px_rgba(120,15,30,0.22)]">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-transparent opacity-70" />

                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-sm font-black shadow-[0_0_30px_var(--primary-glow)]">
                  {index + 1}
                </div>

                <h3 className="mb-3 text-xl font-bold">{item.step}</h3>

                <p className="text-sm leading-7 text-zinc-500">{item.description}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}