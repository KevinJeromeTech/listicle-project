"use client";

import { useState } from "react";
import {
  Send,
  Mail,
  Building2,
  User,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "Software Engineering",
  details: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requiredFieldsFilled =
      formData.name.trim() &&
      formData.email.trim() &&
      formData.company.trim() &&
      formData.details.trim();

    if (!requiredFieldsFilled) {
      setStatus("error");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData(initialForm);
    } catch (error) {
      console.error("CONTACT FORM ERROR:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="consultation"
      className="relative overflow-hidden px-6 py-24 md:px-10"
    >
      <div className="absolute right-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-[var(--primary)]/25 blur-[150px]" />
      <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-[var(--primary-light)]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div>
            <SectionHeader
              eyebrow="Consultation"
              title="Tell us what system your business needs next."
              description="Share the challenge, workflow, platform, or automation you want to build. Auralith Systems can help map the technical path forward."
            />

            <div className="mt-8 rounded-[2rem] border border-[var(--primary)]/25 bg-[linear-gradient(145deg,#16080c,#0b0b0b_55%,#050505)] p-6 shadow-[0_0_45px_rgba(120,15,30,0.12)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--primary)]/35 bg-[var(--primary)]/15">
                  <ShieldCheck
                    className="text-[var(--primary-light)]"
                    size={22}
                  />
                </div>

                <div>
                  <h3 className="font-bold">Secure intake workflow</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    This consultation form is ready for future backend
                    integration with email delivery, CRM routing, and database
                    storage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[2rem] border border-[var(--primary)]/30 bg-[linear-gradient(145deg,#17070c,#0b0b0b_55%,#030303)] p-6 shadow-[0_0_70px_rgba(120,15,30,0.18)] md:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,15,30,0.22),transparent_42%)]" />

            <div className="relative z-10">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-300">
                    <User size={16} className="text-[var(--primary-light)]" />
                    Name
                  </span>

                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your name"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl border border-[var(--primary)]/20 bg-black/45 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-[var(--primary)]/70 focus:bg-black/60 focus:shadow-[0_0_25px_var(--primary-soft)] disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-300">
                    <Mail size={16} className="text-[var(--primary-light)]" />
                    Email
                  </span>

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="you@company.com"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl border border-[var(--primary)]/20 bg-black/45 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-[var(--primary)]/70 focus:bg-black/60 focus:shadow-[0_0_25px_var(--primary-soft)] disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-300">
                    <Building2
                      size={16}
                      className="text-[var(--primary-light)]"
                    />
                    Company
                  </span>

                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    type="text"
                    placeholder="Company or project"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl border border-[var(--primary)]/20 bg-black/45 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-[var(--primary)]/70 focus:bg-black/60 focus:shadow-[0_0_25px_var(--primary-soft)] disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-300">
                    <Send size={16} className="text-[var(--primary-light)]" />
                    Service Interest
                  </span>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full rounded-2xl border border-[var(--primary)]/20 bg-black/45 px-4 py-4 text-white outline-none transition focus:border-[var(--primary)]/70 focus:bg-black/60 focus:shadow-[0_0_25px_var(--primary-soft)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <option>Software Engineering</option>
                    <option>Business Automation</option>
                    <option>Data Dashboard</option>
                    <option>Cloud Systems</option>
                    <option>AI-Enhanced Tooling</option>
                  </select>
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-300">
                  <MessageSquare
                    size={16}
                    className="text-[var(--primary-light)]"
                  />
                  Project Details
                </span>

                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us what you want to build, automate, improve, or modernize..."
                  disabled={isSubmitting}
                  className="w-full resize-none rounded-2xl border border-[var(--primary)]/20 bg-black/45 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-[var(--primary)]/70 focus:bg-black/60 focus:shadow-[0_0_25px_var(--primary-soft)] disabled:cursor-not-allowed disabled:opacity-60"
                />
              </label>

              {status === "error" && (
                <p className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  Please complete all required fields or try again.
                </p>
              )}

              {status === "success" && (
                <p className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                  Consultation request received. We’ll follow up soon.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7a0f1d] via-[#99182b] to-[#c0263d] px-7 py-4 font-bold shadow-[0_0_45px_rgba(154,16,36,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_55px_rgba(154,16,36,0.6)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending Request..." : "Request Consultation"}
                <Send size={18} />
              </button>

              <p className="mt-4 text-center text-sm text-zinc-500">
                Connected to your Next.js API route.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}