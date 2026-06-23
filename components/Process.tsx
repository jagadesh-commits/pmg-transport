"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";

const steps = [
  {
    n: "01",
    title: "Enquiry",
    desc: "Share cargo specs, timelines, and route constraints with our team.",
  },
  {
    n: "02",
    title: "Planning",
    desc: "Permits, surveys, and a detailed move plan aligned to your delivery window.",
  },
  {
    n: "03",
    title: "Execution",
    desc: "Dispatch-led movement with live tracking and proactive issue handling.",
  },
  {
    n: "04",
    title: "Delivery",
    desc: "Safe handoff at site or warehouse with documentation and sign-off.",
  },
];

function FlowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M4 12h16M12 4v16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Process() {
  return (
    <motion.section
      id="process"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-24 bg-pmg-bg py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionBadge icon={<FlowIcon />}>How It Works</SectionBadge>
        <h2 className="font-heading mt-6 text-4xl font-extrabold uppercase tracking-tight text-pmg-text sm:text-5xl md:text-6xl">
          Our Process
        </h2>

        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-[2.75rem] z-0 hidden h-0.5 bg-gradient-to-r from-transparent via-pmg-red/40 to-transparent md:block"
            aria-hidden
          />

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="group relative z-[1] flex flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pmg-red font-heading text-sm font-black text-white shadow-md transition-transform group-hover:scale-105">
                  {step.n}
                </div>
                <h3 className="font-heading mt-6 text-lg font-bold uppercase tracking-wide text-pmg-text">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[14rem] text-sm leading-relaxed text-pmg-muted">
                  {step.desc}
                </p>
                {i < steps.length - 1 && (
                  <div
                    className="my-5 h-10 w-0.5 bg-pmg-red/25 md:hidden"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
