"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";
import { PillButton } from "@/components/PillButton";
import { FareCalculatorCard } from "@/components/FareCalculator";
import { useTruckBooking } from "@/components/TruckBookingProvider";

const HERO_STRIP_IMAGES = [
  {
    src: "/images/fleet/eicher-front.png",
    alt: "PMG Transport Eicher truck for steel cargo — front view",
  },
  {
    src: "/images/fleet/eicher-side.png",
    alt: "PMG Transport Eicher truck for steel cargo — side view",
  },
  {
    src: "/images/fleet/sast-truck.png",
    alt: "PMG Transport SAST branded truck for steel delivery",
  },
  {
    src: "/images/fleet/bharatbenz-angle.png",
    alt: "PMG Transport BharatBenz truck for steel cargo — angle view",
  },
  {
    src: "/images/fleet/bharatbenz-front.png",
    alt: "PMG Transport BharatBenz truck for steel cargo — front view",
  },
] as const;

function HeroImageStrip() {
  const cards = [...HERO_STRIP_IMAGES, ...HERO_STRIP_IMAGES];

  return (
    <>
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .hero-picsum-strip-track {
          animation: scrollUp 15s linear infinite;
        }
        .hero-picsum-strip-root:hover .hero-picsum-strip-track {
          animation-play-state: paused;
        }
      `}</style>
      <div
        className="hero-picsum-strip-root pointer-events-auto absolute left-0 top-1/2 z-[9] w-[200px]"
        style={{
          transform: "translateY(-50%) rotate(-6deg)",
        }}
        aria-hidden
      >
        <div
          className="h-[min(560px,70vh)] w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          <div className="hero-picsum-strip-track flex w-full flex-col gap-3">
            {cards.map((image, i) => (
              <div
                key={`${image.src}-${i}`}
                className="shrink-0 overflow-hidden rounded-xl shadow"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={140}
                  className="h-[140px] w-[200px] object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M12 3l7 4v5c0 5-3 9-7 10-4-1-7-5-7-10V7l7-4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const headlineStyle: CSSProperties = {
  fontSize: "clamp(48px, 7vw, 96px)",
  fontWeight: 900,
};

export function Hero() {
  const { openBooking } = useTruckBooking();

  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden bg-pmg-bg pt-28 sm:pt-[5.25rem] md:pt-[72px]">
      <HeroImageStrip />
      <div className="pattern-dots pointer-events-none absolute inset-0 opacity-[0.5]" />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[90%] w-[55%] rotate-[10deg] rounded-3xl bg-pmg-red/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col gap-14 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-8 lg:py-20">
        <div className="w-full max-w-xl lg:w-[55%]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge
              icon={<ShieldIcon />}
              className="text-[11px] sm:text-xs"
            >
              Trusted Since 2010
            </SectionBadge>
          </motion.div>

          <h1
            className="font-heading mt-8 uppercase leading-[1.05] tracking-tight text-pmg-text"
            style={headlineStyle}
          >
            <span className="block text-pmg-text">LOCAL STEEL</span>
            <span className="block text-pmg-text">TRANSPORT &</span>
            <span className="block text-pmg-red">LOGISTICS</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="mt-8 max-w-lg text-base leading-relaxed text-pmg-muted sm:text-lg"
          >
            Local steel transport and logistics across Chennai, Thiruvallur,
            and Kanchipuram — steel coils, TMT bars, sheets & plates, and
            pipes hauled from mill to fabricator.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={openBooking}
              className="group inline-flex items-center gap-3 rounded-full bg-[#CC1A1A] py-2 pl-2 pr-7 text-sm font-semibold tracking-wide text-white shadow-lg shadow-black/15 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#1A5FCC] active:scale-[0.98] active:bg-[#1A5FCC] sm:pr-8 sm:text-base"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#111111]">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                  <path
                    d="M3 7h10v8H3V7zm10 3h4l3 3v2h-7v-5zM7 18a1.6 1.6 0 100-3.2A1.6 1.6 0 007 18zm10 0a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Book a Truck</span>
            </button>
            <PillButton href="/services" variant="primary">
              View Services
            </PillButton>
          </motion.div>
        </div>

        <motion.div
          className="relative z-10 flex w-full justify-center lg:w-[45%] lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <FareCalculatorCard />
        </motion.div>
      </div>
    </section>
  );
}
