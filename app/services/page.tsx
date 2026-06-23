"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";
import { PillButton } from "@/components/PillButton";

const detail = [
  {
    title: "Heavy Equipment Transport",
    body: "Specialized hauling of oversized machinery and construction equipment with full permits and escorts. We coordinate route surveys, pilot vehicles, and compliance documentation so your assets move without surprises.",
  },
  {
    title: "Logistics & Warehousing",
    body: "End-to-end supply chain solutions including bonded warehousing, inventory management, and cross-docking. Ideal for projects that need staging, consolidation, and timed releases to site.",
  },
  {
    title: "Real-Time Tracking",
    body: "GPS-enabled fleet tracking with live status updates and 24/7 dispatch support. Your team sees progress milestones, ETAs, and exception alerts as the move unfolds.",
  },
  {
    title: "Project Cargo",
    body: "Full project planning, route surveys, and multi-modal coordination for complex cargo movements. We align road, rail, and port handoffs with a single accountable operations lead.",
  },
];

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M8 4h8l4 4v12H8V4zM8 8h6M8 12h10M8 16h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-pmg-bg pt-[72px]">
      <section className="border-b border-pmg-border py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionBadge icon={<DocIcon />}>Services</SectionBadge>
          <h1 className="font-heading mt-6 text-4xl font-extrabold uppercase tracking-tight text-pmg-text sm:text-5xl md:text-6xl">
            Heavy Transport & Logistics
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-pmg-muted">
            From single oversize loads to multi-phase project cargo, PMG Transport
            delivers disciplined planning, permitted movement, and warehousing when
            you need buffer and control.
          </p>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="bg-pmg-surface py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {detail.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-pmg-border bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:border-pmg-red/40"
            >
              <span
                className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-pmg-red transition-transform duration-300 group-hover:scale-y-100"
                aria-hidden
              />
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-pmg-text">
                {item.title}
              </h2>
              <p className="mt-4 max-w-3xl text-pmg-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <section className="border-t border-pmg-border bg-pmg-bg py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="text-lg font-medium text-pmg-text">
            Need permits, escorts, or a warehouse stop along the route?
          </p>
          <PillButton href="/contact" variant="primary">
            Request a Quote
          </PillButton>
        </div>
      </section>
    </main>
  );
}
