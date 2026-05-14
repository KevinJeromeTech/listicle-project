import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-zinc-900 bg-[#0d0d0d] px-6 py-24 md:px-10"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,15,30,0.18),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#9A1024]">
              Let’s Build The Future
            </p>

            <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Intelligent systems engineered for ambitious businesses.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Auralith Systems designs scalable infrastructure,
              automation systems, analytics platforms, and modern
              enterprise software built for growth.
            </p>

            <button className="mt-10 flex items-center gap-2 rounded-2xl bg-[#780F1E] px-7 py-4 font-bold transition-all duration-300 hover:bg-[#9A1024] hover:shadow-[0_0_35px_rgba(120,15,30,0.35)]">
              Schedule Consultation
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid gap-5">
            {/* Contact */}
            <div className="rounded-3xl border border-zinc-800 bg-[#161616]/80 p-6 backdrop-blur">
              <p className="mb-2 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Contact
              </p>

              <a
                href="mailto:hello@auralithsystems.com"
                className="text-lg font-semibold transition hover:text-[#C14A5C]"
              >
                hello@auralithsystems.com
              </a>
            </div>

            {/* Socials */}
            <div className="rounded-3xl border border-zinc-800 bg-[#161616]/80 p-6 backdrop-blur">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Socials
              </p>

              <div className="flex gap-4">
                {/* GitHub */}
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-black/30 transition hover:border-[#780F1E]/60 hover:bg-[#780F1E]/10"
                  aria-label="GitHub"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.16c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.21 1.79 1.21 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.77.11 3.06.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.79 1.07.79 2.17v3.22c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-black/30 transition hover:border-[#780F1E]/60 hover:bg-[#780F1E]/10"
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V23h-4V8Z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-black/30 transition hover:border-[#780F1E]/60 hover:bg-[#780F1E]/10"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Capabilities */}
            <div className="rounded-3xl border border-zinc-800 bg-[#161616]/80 p-6 backdrop-blur">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Core Capabilities
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Infrastructure",
                  "Automation",
                  "AI Systems",
                  "Analytics",
                  "Cloud",
                  "Security",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-700 bg-black/30 px-4 py-2 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-zinc-900 pt-8 text-sm text-zinc-500 md:flex-row md:items-center">
          <div>
            © 2026 Auralith Systems. Engineered for tomorrow.
          </div>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-zinc-300">
              Privacy
            </a>

            <a href="#" className="transition hover:text-zinc-300">
              Terms
            </a>

            <a href="#" className="transition hover:text-zinc-300">
              Infrastructure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}