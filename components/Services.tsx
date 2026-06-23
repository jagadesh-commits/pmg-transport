"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";

const services = [
  {
    num: "01",
    title: "Heavy Equipment Transport",
    desc: "Specialized hauling of oversized machinery and construction equipment with full permits and escorts",
  },
  {
    num: "02",
    title: "Logistics & Warehousing",
    desc: "End-to-end supply chain solutions including bonded warehousing, inventory management, and cross-docking",
  },
  {
    num: "03",
    title: "Real-Time Tracking",
    desc: "GPS-enabled fleet tracking with live status updates and 24/7 dispatch support",
  },
  {
    num: "04",
    title: "Project Cargo",
    desc: "Full project planning, route surveys, and multi-modal coordination for complex cargo movements",
  },
];

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-pmg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionBadge icon={<GridIcon />}>What We Do</SectionBadge>
        <h2 className="font-heading mt-6 text-4xl font-extrabold uppercase tracking-tight text-pmg-text sm:text-5xl md:text-6xl">
          Our Core Services
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((s) => (
            <Link
              key={s.num}
              href="/services"
              className="group relative overflow-hidden rounded-xl border border-pmg-border bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-pmg-red/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <span
                className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-pmg-red transition-transform duration-300 group-hover:scale-y-100"
                aria-hidden
              />
              <span className="pointer-events-none absolute right-6 top-6 font-heading text-7xl font-black text-black/[0.06] transition-colors group-hover:text-[rgba(204,26,26,0.12)]">
                {s.num}
              </span>
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(204,26,26,0.15)] text-pmg-red">
                  <GridIcon />
                </span>
                <h3 className="font-heading mt-5 text-xl font-bold uppercase tracking-wide text-pmg-text">
                  {s.title}
                </h3>
                <p className="mt-3 text-pmg-muted">{s.desc}</p>
                <span className="mt-6 inline-flex translate-y-2 items-center gap-1 text-sm font-semibold text-pmg-red opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  → Learn More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
