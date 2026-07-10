"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  { label: "Years of Experience", value: 14 },
  { label: "Loads Delivered", value: 2800 },
  { label: "Fleet Assets", value: 320 },
  { label: "Districts Served", value: 3 },
] as const;

function AnimatedNumber({ value }: { value: number }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    const durationMs = 2000;
    const tickMs = 32;
    const steps = Math.max(1, Math.ceil(durationMs / tickMs));
    let step = 0;
    const id = setInterval(() => {
      step += 1;
      const next = Math.min(value, Math.round((value * step) / steps));
      setN(next);
      if (step >= steps) {
        setN(value);
        clearInterval(id);
      }
    }, tickMs);
    return () => clearInterval(id);
  }, [value]);

  return <span className="tabular-nums">{n}+</span>;
}

export function Stats() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="border-y border-white/20 bg-pmg-red"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center border-b border-r border-white/20 px-4 py-12 text-center max-md:[&:nth-child(2n)]:border-r-0 max-md:[&:nth-child(n+3)]:border-b-0 md:border-b-0 md:border-r md:[&:nth-child(4n)]:border-r-0 md:py-16"
          >
            <span className="font-heading text-4xl font-extrabold text-white sm:text-5xl md:text-[52px]">
              <AnimatedNumber value={item.value} />
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
