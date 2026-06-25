"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";

const testimonials = [
  {
    quote:
      "PMG Transport moved our steel coil shipment from the mill to our fabrication yard in Kanchipuram without a single issue. Professional team, proper load securing, on-time delivery. Highly recommended.",
    name: "Ramesh Kumar",
    designation: "Plant Manager, Chennai",
  },
  {
    quote:
      "We have been using PMG for regular TMT bar and steel sheet deliveries across Thiruvallur for over 2 years. Reliable, affordable, and always on time. Best steel logistics partner we have had.",
    name: "Suresh Babu",
    designation: "Operations Head, Thiruvallur",
  },
  {
    quote:
      "Booked a Taurus 24 ton for a steel pipe and structural beam delivery. The team was professional, had all documentation ready, and delivered safely. Will definitely use again.",
    name: "Arjun Selvam",
    designation: "Site Engineer, Kanchipuram",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M7 7h4v6H7V7zM13 7h4v6h-4V7z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4 text-pmg-red"
          aria-hidden
        >
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 21l2.3-7-6-4.6h7.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionBadge icon={<QuoteIcon />}>Testimonials</SectionBadge>
        <h2 className="font-heading mt-6 text-4xl font-extrabold uppercase tracking-tight text-pmg-text sm:text-5xl md:text-6xl">
          What Our Clients Say
        </h2>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="flex flex-col rounded-xl border border-[#E0E0E0] border-t-[3px] border-t-pmg-red bg-white p-6 shadow-sm sm:p-7"
            >
              <StarRating />
              <p className="mt-4 flex-1 text-sm italic leading-relaxed text-pmg-muted sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-[#E0E0E0] pt-5">
                <p className="font-heading text-sm font-bold uppercase tracking-wide text-pmg-text">
                  {t.name}
                </p>
                <p className="mt-1 text-xs text-pmg-muted sm:text-sm">{t.designation}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
