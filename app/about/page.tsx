"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";
import { PillButton } from "@/components/PillButton";

const pillars = [
  {
    title: "Safety First",
    text: "Every steel load is secured to prevent shifting, coil roll, or edge damage in transit — because steel cargo demands handling precision, not guesswork.",
  },
  {
    title: "Transparent Ops",
    text: "Live dispatch updates, LR documentation, and milestone tracking keep your procurement and site teams aligned from Manali pickup to delivery sign-off.",
  },
  {
    title: "Local Coverage",
    text: "Chennai, Thiruvallur, and Kanchipuram — local steel transport and logistics with vetted partners.",
  },
];

function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M16 11a4 4 0 10-8 0 4 4 0 008 0zM4 20a8 8 0 0116 0M20 20v-2a4 4 0 00-3-3.87"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-pmg-bg pt-36 sm:pt-28 md:pt-[72px]">
      <section className="border-b border-pmg-border py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionBadge icon={<TeamIcon />}>About PMG</SectionBadge>
          <h1 className="font-heading mt-6 text-4xl font-extrabold uppercase tracking-tight text-pmg-text sm:text-5xl md:text-6xl">
            Built to Move Steel
          </h1>
          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-pmg-muted">
            <p>
              PMG Transport is a local steel transport and logistics company with
              integrated warehousing capability. For over fourteen years we have
              moved steel coils, TMT bars, sheets &amp; plates, and time-critical
              project cargo across Chennai, Thiruvallur, and Kanchipuram—pairing
              disciplined road movement with the planning rigor your schedules
              depend on.
            </p>
            <p>
              Our operations desk runs 24/7, our fleet and partner network are
              licensed and insured, and our crews train specifically for steel
              handling and high-value loads. When the schedule is tight and the
              cargo is critical, we are the team steel customers call.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <div className="w-full rounded-xl border border-pmg-border bg-white px-8 py-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:w-auto sm:text-left">
              <p className="font-heading text-5xl font-black text-pmg-red">14+</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-pmg-text">
                Years in Steel Logistics
              </p>
            </div>
            <div className="w-full rounded-xl border border-pmg-border bg-white px-8 py-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:w-auto sm:text-left">
              <p className="font-heading text-5xl font-black text-pmg-red">3</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-pmg-text">
                Districts Served
              </p>
            </div>
            <div className="w-full rounded-xl border border-pmg-border bg-white px-8 py-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:w-auto sm:text-left">
              <p className="font-heading text-5xl font-black text-pmg-red">500+</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-pmg-text">
                Steel Routes Covered
              </p>
            </div>
            <div className="w-full rounded-xl border border-pmg-border bg-white px-8 py-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:w-auto sm:text-left">
              <p className="font-heading text-5xl font-black text-pmg-red">99%</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-pmg-text">
                On-Time Delivery Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="bg-pmg-surface py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight text-pmg-text sm:text-4xl">
            What We Stand For
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-pmg-red">
                  {p.title}
                </h3>
                <p className="mt-3 text-pmg-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="border-t border-pmg-border bg-pmg-bg py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="text-center text-lg font-medium text-pmg-text sm:text-left">
            See how we plan and execute every steel delivery.
          </p>
          <PillButton href="/#process" variant="outline" className="w-full justify-center sm:w-auto">
            View Our Process
          </PillButton>
        </div>
      </section>
    </main>
  );
}
