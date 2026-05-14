"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions-built" },
  { label: "Stack", href: "#solutions" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#about" },
  { label: "Consultation", href: "#consultation" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--primary)]/30 bg-black/40 text-white backdrop-blur-xl transition hover:border-[var(--primary)]/70 hover:bg-[var(--primary)]/10"
        aria-label="Toggle mobile navigation"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <div className="absolute left-4 right-4 top-24 overflow-hidden rounded-[1.5rem] border border-[var(--primary)]/25 bg-[#0d0d0d]/95 p-4 shadow-[0_0_50px_rgba(120,15,30,0.25)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,15,30,0.25),transparent_42%)]" />

          <div className="relative z-10 grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-[var(--primary)]/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#consultation"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-r from-[#7a0f1d] via-[#99182b] to-[#c0263d] px-4 py-3 text-center text-sm font-bold text-white shadow-[0_0_30px_rgba(154,16,36,0.35)]"
            >
              Let’s Build
            </a>
          </div>
        </div>
      )}
    </div>
  );
}