"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";
import { PillButton } from "@/components/PillButton";
import { TruckBooking } from "@/components/TruckBooking";

const HERO_STRIP_IMAGES = [
  "https://picsum.photos/200/140?random=1",
  "https://picsum.photos/200/140?random=2",
  "https://picsum.photos/200/140?random=3",
  "https://picsum.photos/200/140?random=4",
  "https://picsum.photos/200/140?random=5",
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
            {cards.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="shrink-0 overflow-hidden rounded-xl shadow"
              >
                <img
                  src={src}
                  alt=""
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

function ShowcasePanels() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[480px] lg:mx-0">
      <div className="absolute right-4 top-6 w-[72%] rotate-[8deg] overflow-hidden rounded-2xl border border-pmg-border bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] sm:right-0">
        <div className="aspect-[4/3] bg-gradient-to-br from-pmg-surface to-white">
          <svg
            viewBox="0 0 400 260"
            className="h-full w-full text-pmg-text"
            aria-hidden
          >
            <defs>
              <linearGradient id="p1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#CC1A1A" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#111" stopOpacity="0.04" />
              </linearGradient>
            </defs>
            <rect width="400" height="260" fill="url(#p1)" opacity="0.5" />
            <path
              d="M40 180h260l40-60h60v60H40v0z"
              fill="#F5F5F5"
              stroke="#E0E0E0"
              strokeWidth="1"
            />
            <rect x="50" y="120" width="120" height="50" rx="4" fill="#CC1A1A" opacity="0.85" />
            <circle cx="90" cy="190" r="18" fill="#424242" stroke="#fff" strokeWidth="2" opacity="0.5" />
            <circle cx="220" cy="190" r="18" fill="#424242" stroke="#fff" strokeWidth="2" opacity="0.5" />
          </svg>
        </div>
        <p className="border-t border-pmg-border bg-pmg-surface px-4 py-3 text-xs font-medium uppercase tracking-wider text-pmg-muted">
          Fleet tracking · Live ETA
        </p>
      </div>

      <div className="absolute right-[18%] top-[38%] w-[68%] -rotate-[6deg] overflow-hidden rounded-2xl border border-pmg-border bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        <div className="aspect-[4/3] bg-gradient-to-tr from-white to-pmg-surface">
          <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden>
            <path
              d="M0 200 Q200 40 400 200"
              fill="none"
              stroke="rgba(0,0,0,0.08)"
              strokeWidth="4"
            />
            <rect x="120" y="96" width="160" height="56" rx="6" fill="rgba(204,26,26,0.2)" stroke="#E0E0E0" />
            <path d="M140 128h120" stroke="rgba(0,0,0,0.12)" strokeWidth="2" strokeDasharray="8 6" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-4 right-[28%] w-[55%] rotate-[3deg] overflow-hidden rounded-2xl border border-pmg-border bg-white p-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(204,26,26,0.15)] text-pmg-red">
            <ShieldIcon />
          </span>
          <div>
            <p className="text-sm font-semibold text-pmg-text">Warehousing</p>
            <p className="text-xs text-pmg-muted">Cross-dock & bonded storage</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const headlineStyle: CSSProperties = {
  fontSize: "clamp(48px, 7vw, 96px)",
  fontWeight: 900,
};

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden bg-pmg-bg pt-28 sm:pt-[5.25rem] md:pt-[72px]">
      <HeroImageStrip />
      <div className="pattern-dots pointer-events-none absolute inset-0 opacity-[0.5]" />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[90%] w-[55%] rotate-[10deg] rounded-3xl bg-pmg-red/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col gap-14 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-8 lg:py-20">
        <div className="max-w-xl flex-1">
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
            <span className="block text-pmg-text">LOCAL HEAVY EQUIPMENT</span>
            <span className="block text-pmg-text">TRANSPORT &</span>
            <span className="block text-pmg-red">LOGISTICS</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="mt-8 max-w-lg text-base leading-relaxed text-pmg-muted sm:text-lg"
          >
            Local heavy equipment transport and logistics across Chennai,
            Thiruvallur, and Kanchipuram.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <TruckBooking
              trigger={(open) => (
                <button
                  type="button"
                  onClick={open}
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
              )}
            />
            <PillButton href="/services" variant="primary">
              View Services
            </PillButton>
          </motion.div>
        </div>

        <motion.div
          className="relative z-10 flex flex-1 justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <ShowcasePanels />
        </motion.div>
      </div>
    </section>
  );
}
