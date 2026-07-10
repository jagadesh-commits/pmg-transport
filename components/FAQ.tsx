"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We provide heavy equipment transport and logistics services across Chennai, Thiruvallur, and Kanchipuram districts. Contact us for routes outside these areas.",
  },
  {
    question: "What types of vehicles do you have?",
    answer:
      "Our fleet includes Bolero (5 ton), Eicher 15 ton, Eicher 17 ton, Eicher 20 ton, Taurus 24 ton, and 14 Wheeler Taurus for all load sizes.",
  },
  {
    question: "How do I get a price estimate?",
    answer:
      "You can call us at +91 94980 73311 or fill the enquiry form on our website. We will give you a quote based on your pickup location, drop location, and load size.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on distance and route. For local Chennai routes it is usually same day or next day. We will give you an estimated time when you book.",
  },
  {
    question: "Is my cargo insured during transport?",
    answer:
      "Yes, we take full responsibility for safe cargo handling. Transit insurance options are available on request.",
  },
  {
    question: "Can you handle oversized or heavy machinery?",
    answer:
      "Yes, heavy equipment and oversized machinery transport is our core specialization. We handle route surveys, permits, and escorts as needed.",
  },
  {
    question: "What are your working hours?",
    answer:
      "We operate Monday to Saturday, 9:00 AM to 6:00 PM. For urgent requirements you can WhatsApp us at +91 94980 73311.",
  },
  {
    question: "How do I track my shipment?",
    answer:
      "Our team provides regular updates via phone and WhatsApp throughout the journey. Live tracking coming soon.",
  },
];

function QuestionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M12 18h.01M9.5 9a2.5 2.5 0 115 0c0 2-2.5 2.5-2.5 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#F5F5F5] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionBadge icon={<QuestionIcon />}>FAQ</SectionBadge>
        <h2 className="font-heading mt-6 text-4xl font-extrabold uppercase tracking-tight text-pmg-text sm:text-5xl md:text-6xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-lg border border-[#E0E0E0] bg-white transition-colors ${
                  isOpen ? "border-l-[3px] border-l-pmg-red" : "border-l-[3px] border-l-transparent"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-heading text-sm font-bold uppercase tracking-wide sm:text-base ${
                      isOpen ? "text-pmg-red" : "text-pmg-text"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className={isOpen ? "text-pmg-red" : "text-pmg-muted"}>
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-[#E0E0E0] px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
                    <p className="text-sm leading-relaxed text-pmg-muted sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
