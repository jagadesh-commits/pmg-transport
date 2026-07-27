"use client";

import { motion } from "framer-motion";

const items = [
  { label: "Fleet Strength", display: "9" },
  { label: "Districts Served", display: "3" },
  { label: "Routes Covered", display: "18+" },
  { label: "Dispatch Support", display: "24/7" },
] as const;

export function Stats() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="border-y border-white/20 bg-pmg-red"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center border-b border-r border-white/20 px-4 py-12 text-center max-md:[&:nth-child(2n)]:border-r-0 max-md:[&:nth-child(n+3)]:border-b-0 md:border-b-0 md:border-r md:[&:nth-child(4n)]:border-r-0 md:py-16"
          >
            <span className="font-heading text-4xl font-extrabold text-white sm:text-5xl md:text-[52px] tabular-nums">
              {item.display}
            </span>
            <span
              className="mt-3 max-w-[11rem] text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-[13px]"
              style={{ letterSpacing: "2px" }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
