"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";
import { PillButton } from "@/components/PillButton";

const detail = [
  {
    title: "Steel Product Transport",
    body: "PMG Transport specializes in steel logistics — not general heavy equipment. We haul Steel Coils, Steel Sheets & Plates, TMT Bars & Rods, Steel Pipes & Tubes, Steel Wire & Rods, and Angles, Channels & Beams with proper load securing, weight distribution, and mill-to-fabricator routing across Chennai, Thiruvallur, and Kanchipuram.",
  },
  {
    title: "Logistics & Warehousing",
    body: "Bonded warehousing and inventory management built for steel stock — coil yards, sheet and plate staging, TMT bar storage, and timed releases aligned to fabrication and project schedules. Ideal for distributors and fabricators who need buffer between mill receipts and site delivery.",
  },
  {
    title: "Real-Time Tracking",
    body: "GPS-enabled fleet tracking with live status updates and 24/7 dispatch support for every steel consignment. Your team sees pickup confirmations, in-transit milestones, ETAs, and proof of delivery as coils, bars, and structural sections move through the supply chain.",
  },
  {
    title: "Project Cargo",
    body: "Coordinated steel project deliveries — phased mill-to-fabricator movements, multi-drop scheduling for large coil and structural orders, and route planning for oversized steel loads. We align road movement with a single accountable operations lead from first pickup to final drop.",
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
            Steel Transport & Logistics
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-pmg-muted">
            PMG Transport specializes in steel logistics — moving Steel Coils,
            Sheets & Plates, TMT Bars & Rods, Pipes & Tubes, Wire & Rods, and
            Angles, Channels & Beams with disciplined planning, secured hauling,
            and warehousing when you need inventory buffer and control.
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
