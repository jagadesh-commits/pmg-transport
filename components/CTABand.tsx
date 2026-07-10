"use client";

import { motion } from "framer-motion";
import { PillButton } from "@/components/PillButton";

export function CTABand() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden bg-pmg-red py-16 sm:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -40deg,
            #fff,
            #fff 2px,
            transparent 2px,
            transparent 16px
          )`,
        }}
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl text-white">
          <h2 className="font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Ready to Move Your Cargo?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Get the best rates on heavy transport. Talk to our team today.
          </p>
        </div>
        <PillButton href="/contact" variant="onDark">
          Request a Quote
        </PillButton>
      </div>
    </motion.section>
  );
}
