"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions-built" },
  { label: "Process", href: "#about" },
  { label: "Contact", href: "#consultation" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--primary)]/20 bg-[#090909]/88 shadow-[0_0_40px_rgba(120,15,30,0.12)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-4"
        >
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[var(--primary)]/20 bg-black/50 shadow-[0_0_28px_rgba(154,16,36,0.16)] backdrop-blur-xl transition duration-300 group-hover:border-[var(--primary)]/45 group-hover:shadow-[0_0_38px_rgba(154,16,36,0.28)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_45%)]" />

            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-[0_0_25px_rgba(154,16,36,0.15)] backdrop-blur-xl">
              <img
                src="/favicon.ico"
                alt="Auralith Systems Logo"
                className="h-10 w-10 object-contain"
               />
          </div>
          </div>

          <div>
            <h1 className="text-lg font-black tracking-[0.22em] text-[var(--primary-light)] transition duration-300 group-hover:text-white md:text-xl">
              AURALITH SYSTEMS
            </h1>

            <p className="mt-1 text-[10px] tracking-[0.42em] text-zinc-400 md:text-xs">
              ENGINEERING SCALABLE INTELLIGENCE
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-300 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative transition duration-300 hover:text-white"
            >
              <span className="relative z-10">{link.label}</span>

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="#consultation"
          className="hidden rounded-xl bg-gradient-to-r from-[#7a0f1d] via-[#99182b] to-[#c0263d] px-5 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(154,16,36,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(154,16,36,0.55)] lg:block"
        >
          Let’s Build
        </a>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--primary)]/20 bg-black/30 text-white backdrop-blur-xl transition hover:border-[var(--primary)]/70 hover:bg-[var(--primary)]/10 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[var(--primary)]/15 bg-[#090909]/96 px-6 py-6 backdrop-blur-2xl lg:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,15,30,0.18),transparent_38%)]" />

          <div className="relative z-10 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-[var(--primary)]/15 bg-black/30 px-4 py-3 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-[var(--primary)]/60 hover:bg-[var(--primary)]/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#consultation"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-r from-[#7a0f1d] via-[#99182b] to-[#c0263d] px-5 py-3 text-center text-sm font-bold text-white shadow-[0_0_30px_rgba(154,16,36,0.35)]"
            >
              Let’s Build
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}