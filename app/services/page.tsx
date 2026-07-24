"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";
import { PillButton } from "@/components/PillButton";

const detail = [
  {
    title: "Steel Product Transport",
    body: "Dedicated hauling of steel coils, TMT bars & rods, sheets & plates, pipes & tubes, and structural sections. Proper load securing, lashing, and documentation so your steel moves from mill to fabricator without surprises.",
  },
  {
    title: "Logistics & Warehousing",
    body: "Bonded warehousing and inventory management for steel stock — mill receipts, fabricator staging, and timed releases aligned to your production schedule. Ideal for buyers who need buffer stock held close to their site.",
  },
  {
    title: "Mill to Fabricator Delivery",
    body: "Direct movement from Manali Steel Yard to your fabrication unit or site, with timed dispatch and delivery confirmation.",
  },
  {
    title: "Project Cargo",
    body: "Coordinated multi-load steel project deliveries — route planning, multi-drop scheduling, and phased mill-to-fabricator movements for large construction or industrial orders. Full project planning, route surveys, and coordination for large steel orders and occasional oversized or heavy equipment movements. One operations lead, full accountability.",
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
    <main className="bg-pmg-bg pt-36 sm:pt-28 md:pt-[72px]">
      <section className="border-b border-pmg-border py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionBadge icon={<DocIcon />}>Services</SectionBadge>
          <h1 className="font-heading mt-6 text-4xl font-extrabold uppercase tracking-tight text-pmg-text sm:text-5xl md:text-6xl">
            Steel Transport & Logistics
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-pmg-muted">
            From single coil loads to multi-phase steel project cargo, PMG
            Transport delivers disciplined planning, secured movement, and
            warehousing when you need buffer and control.
          </p>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
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
        <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="text-center text-lg font-medium text-pmg-text sm:text-left">
            Need to move steel coils, TMT bars, or structural sections across
            Chennai, Thiruvallur, or Kanchipuram?
          </p>
          <PillButton href="/contact" variant="primary" className="w-full justify-center sm:w-auto">
            Request a Quote
          </PillButton>
        </div>
      </section>
    </main>
  );
}
