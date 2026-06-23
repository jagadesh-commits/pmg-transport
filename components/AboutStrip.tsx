"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M4 16h2l1-4h6v4h6l2-4h2v8H4v-4zm4 0h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const statBoxes = [
  { num: "500+", label: "Routes Covered" },
  { num: "99%", label: "On-Time Rate" },
  { num: "24/7", label: "Support" },
  { num: "3", label: "Districts Served" },
];

export function AboutStrip() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-pmg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionBadge icon={<TruckIcon />}>About PMG</SectionBadge>
            <p className="font-heading mt-8 text-7xl font-black leading-none text-pmg-red sm:text-8xl">
              14+
            </p>
            <p className="font-heading mt-2 text-xl font-bold uppercase tracking-wide text-pmg-text">
              Years of Moving Heavy
            </p>
            <p className="mt-6 text-lg leading-relaxed text-pmg-muted">
              PMG Transport is built for loads that do not fit standard lanes.
              From route surveys and permits to escorts and warehouse handoff,
              we coordinate every mile with dispatch discipline and crews who
              understand oversized cargo. We serve Chennai, Thiruvallur, and
              Kanchipuram with local assets and partners positioned to keep
              critical equipment moving on schedule.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-pmg-red transition hover:opacity-80"
            >
              Learn More About Us →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {statBoxes.map((b) => (
              <div
                key={b.label}
                className="rounded-lg border border-pmg-border border-t-[3px] border-t-pmg-red bg-[#F5F5F5] p-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              >
                <p className="font-heading text-2xl font-black text-pmg-text sm:text-3xl">
                  {b.num}
                </p>
                <p className="mt-2 text-sm font-medium text-pmg-muted">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
