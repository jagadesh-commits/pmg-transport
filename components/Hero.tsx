"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
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

const SCROLL_CYCLE_MS = 15_000;
const STRIP_GAP_PX = 12;

function HeroImageStrip() {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLDivElement>(null);
  const scrollOffsetRef = useRef(0);
  const isPausedRef = useRef(false);
  const [queue, setQueue] = useState(() => [...HERO_STRIP_IMAGES]);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const onEnter = () => {
      isPausedRef.current = true;
    };
    const onLeave = () => {
      isPausedRef.current = false;
    };

    root.addEventListener("mouseenter", onEnter);
    root.addEventListener("mouseleave", onLeave);

    let raf = 0;
    let lastTime = performance.now();

    const measureStep = () => {
      const first = firstItemRef.current;
      if (!first) return 0;
      return first.offsetHeight + STRIP_GAP_PX;
    };

    const tick = (now: number) => {
      const step = measureStep();
      if (step > 0 && !isPausedRef.current) {
        const dt = now - lastTime;
        lastTime = now;

        let nextOffset =
          scrollOffsetRef.current +
          (step * HERO_STRIP_IMAGES.length * dt) / SCROLL_CYCLE_MS;

        while (nextOffset >= step) {
          nextOffset -= step;
          scrollOffsetRef.current = nextOffset;
          setQueue((current) => {
            const [head, ...rest] = current;
            return [...rest, head];
          });
        }

        scrollOffsetRef.current = nextOffset;
        setScrollOffset(nextOffset);
      } else {
        lastTime = now;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      root.removeEventListener("mouseenter", onEnter);
      root.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="hero-picsum-strip-root pointer-events-none absolute inset-0 z-[1] overflow-hidden lg:pointer-events-auto lg:inset-auto lg:left-0 lg:top-1/2 lg:z-[9] lg:w-[200px] lg:-translate-y-1/2 lg:-rotate-6"
      aria-hidden
    >
      <div className="h-full w-full overflow-hidden lg:h-[min(560px,70vh)] lg:[mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] lg:[-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]">
        <div
          ref={trackRef}
          className="flex w-full flex-col gap-3 will-change-transform"
          style={{ transform: `translateY(-${scrollOffset}px)` }}
        >
          {queue.map((image, index) => (
            <div
              key={image.src}
              ref={index === 0 ? firstItemRef : undefined}
              className="relative mx-auto w-full shrink-0 overflow-hidden max-lg:h-[min(100dvh,720px)] max-lg:max-w-none lg:mx-0 lg:h-[140px] lg:w-[200px] lg:rounded-xl lg:shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                draggable={false}
                sizes="100vw"
                priority={image.src === HERO_STRIP_IMAGES[0].src}
                loading={
                  image.src === HERO_STRIP_IMAGES[0].src ? undefined : "lazy"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
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
  fontSize: "clamp(36px, 9vw, 96px)",
  fontWeight: 900,
};

export function Hero() {
  const { openBooking } = useTruckBooking();

  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden bg-pmg-bg pt-36 sm:pt-28 md:pt-[72px]">
      <HeroImageStrip />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-br from-black/70 via-black/45 to-black/30 max-md:block md:hidden"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-pmg-bg/70 via-pmg-bg/35 to-pmg-bg/55 max-md:hidden md:max-lg:block lg:hidden"
        aria-hidden
      />
      <div className="pattern-dots pointer-events-none absolute inset-0 z-[3] opacity-[0.5]" />
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
            className="font-heading mt-8 uppercase leading-[1.05] tracking-tight text-white md:text-pmg-text"
            style={headlineStyle}
          >
            <span className="block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] md:text-pmg-text md:drop-shadow-none">
              LOCAL STEEL
            </span>
            <span className="block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] md:text-pmg-text md:drop-shadow-none">
              TRANSPORT &
            </span>
            <span className="block text-pmg-red">LOGISTICS</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="mt-8 max-w-lg text-base leading-relaxed text-pmg-muted max-md:text-white/90 sm:text-lg"
          >
            Local steel transport and logistics across Chennai, Thiruvallur,
            and Kanchipuram — steel coils, TMT bars, sheets & plates, and
            pipes hauled from mill to fabricator.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <button
              type="button"
              onClick={openBooking}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#CC1A1A] py-2 pl-2 pr-7 text-sm font-semibold tracking-wide text-white shadow-lg shadow-black/15 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#1A5FCC] active:scale-[0.98] active:bg-[#1A5FCC] sm:w-auto sm:justify-start sm:pr-8 sm:text-base"
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
            <PillButton href="/services" variant="primary" className="w-full justify-center sm:w-auto">
              View Services
            </PillButton>
          </motion.div>
        </div>

        <motion.div
          id="calculator"
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
