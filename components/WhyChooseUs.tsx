"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";

const features = [
  {
    title: "On-Time Delivery",
    text: "Industry-leading on-time delivery rate across all routes",
  },
  {
    title: "Licensed & Insured",
    text: "Fully licensed fleet with comprehensive cargo insurance",
  },
  {
    title: "24/7 Operations",
    text: "Round-the-clock dispatch center and customer support",
  },
  {
    title: "Local Service Area",
    text: "Chennai, Thiruvallur, and Kanchipuram — local heavy equipment transport and logistics",
  },
  {
    title: "Expert Crew",
    text: "Trained operators for oversized and sensitive cargo",
  },
  {
    title: "Competitive Rates",
    text: "Transparent pricing with no hidden charges",
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 21l2.3-7-6-4.6h7.6L12 2z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhyChooseUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-pmg-bg py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionBadge icon={<StarIcon />}>Why PMG</SectionBadge>
        <h2 className="font-heading mt-6 max-w-4xl text-4xl font-extrabold uppercase leading-tight tracking-tight text-pmg-text sm:text-5xl md:text-6xl">
          Built on Reliability,
          <br />
          Driven by Trust
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4">
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(204,26,26,0.15)] text-pmg-red">
                <StarIcon />
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-pmg-text">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-pmg-muted sm:text-base">
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
