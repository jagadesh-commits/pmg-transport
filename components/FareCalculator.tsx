"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";

const PICKUP_LOCATION = "Manali Steel Yard, Chennai";
const BUSINESS_PHONE = "919498073311";

type Rate = { base: number; extra: number };

const rates: Record<string, Rate> = {
  "Chengalpattu & Madhavaram": { base: 9000, extra: 900 },
  Kanchipuram: { base: 9000, extra: 900 },
  "Maraimalai Nagar": { base: 8000, extra: 800 },
  Sriperumbudur: { base: 5000, extra: 500 },
  Oragadam: { base: 6000, extra: 600 },
  Potheri: { base: 4500, extra: 450 },
  "Ambattur & Kattur": { base: 4500, extra: 450 },
  Vichoor: { base: 2500, extra: 250 },
  Vyasarpadi: { base: 2500, extra: 250 },
  Ernavur: { base: 2000, extra: 200 },
  Thiruttani: { base: 8000, extra: 800 },
  Perungudi: { base: 5000, extra: 500 },
  Velachery: { base: 5000, extra: 500 },
  Tambaram: { base: 5500, extra: 550 },
  Thiruporur: { base: 8000, extra: 800 },
  "Tiruvallur & Kakkalur": { base: 5000, extra: 500 },
  Guindy: { base: 5000, extra: 500 },
  "Sri City": { base: 8000, extra: 800 },
};

const DESTINATIONS = Object.keys(rates);

function formatINR(value: number): string {
  return "\u20B9" + Math.round(value).toLocaleString("en-IN");
}

type Result = {
  destination: string;
  weight: number;
  low: number;
  high: number;
};

function CalculatorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M6 3h12v18H6V3zm3 4h6M9 11h.01M12 11h.01M15 11h.01M9 14h.01M12 14h.01M15 14h.01M9 17h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FareCalculator() {
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  function calculate() {
    if (!destination) {
      setError("Please select a destination");
      setResult(null);
      return;
    }
    const tons = Number(weight);
    if (!weight.trim() || !tons || tons <= 0) {
      setError("Please enter valid weight");
      setResult(null);
      return;
    }

    setError("");

    const rate = rates[destination];
    const fare =
      tons <= 10 ? rate.base : rate.base + (tons - 10) * rate.extra;

    setResult({
      destination,
      weight: tons,
      low: fare,
      high: fare * 1.1,
    });
  }

  const whatsappHref = result
    ? `https://wa.me/${BUSINESS_PHONE}?text=${encodeURIComponent(
        `Hi PMG Transport, I need a truck from Manali Steel Yard to ${result.destination} for ${result.weight} tons. Estimated fare: ${formatINR(result.low)} - ${formatINR(result.high)}`,
      )}`
    : "#";

  const fieldLabel =
    "text-xs font-semibold uppercase tracking-wider text-pmg-muted";
  const fieldBase =
    "mt-2 w-full rounded-lg border border-[#E0E0E0] px-4 py-3 text-pmg-text outline-none transition";

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionBadge icon={<CalculatorIcon />}>Fare Calculator</SectionBadge>
          <h2 className="font-heading mt-6 text-4xl font-extrabold uppercase tracking-tight text-pmg-text sm:text-5xl">
            Check Transport Fare
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-pmg-muted sm:text-lg">
            Instant fare estimate from Manali Steel Yard to your destination
          </p>
        </div>

        <div className="mt-12 rounded-xl border border-[#E0E0E0] bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.08)] sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={fieldLabel}>Pickup Location</label>
              <input
                type="text"
                value={PICKUP_LOCATION}
                readOnly
                disabled
                className={`${fieldBase} cursor-not-allowed bg-pmg-surface text-pmg-muted`}
              />
            </div>

            <div>
              <label htmlFor="fc-destination" className={fieldLabel}>
                Destination
              </label>
              <select
                id="fc-destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className={`${fieldBase} bg-white focus:border-pmg-red focus:ring-2 focus:ring-[rgba(204,26,26,0.2)]`}
              >
                <option value="" disabled>
                  Select Destination
                </option>
                {DESTINATIONS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="fc-weight" className={fieldLabel}>
              Total Weight (in tons)
            </label>
            <input
              id="fc-weight"
              type="number"
              min={1}
              max={100}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight in tons"
              className={`${fieldBase} bg-white focus:border-pmg-red focus:ring-2 focus:ring-[rgba(204,26,26,0.2)]`}
            />
          </div>

          {error && (
            <p className="mt-4 text-sm font-medium text-pmg-red">{error}</p>
          )}

          <button
            type="button"
            onClick={calculate}
            className="mt-6 w-full rounded-full bg-[#CC1A1A] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1A5FCC] sm:text-base"
          >
            Calculate Fare
          </button>

          {result && (
            <div className="mt-8 rounded-xl border border-[#E0E0E0] bg-pmg-surface p-6 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden>
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-pmg-muted">
                Estimated Fare
              </p>
              <p className="mt-2 font-heading text-3xl font-black text-pmg-red sm:text-4xl">
                {formatINR(result.low)} - {formatINR(result.high)}
              </p>
              <p className="mt-3 text-xs text-pmg-muted">
                * Final fare confirmed by our team. Estimate based on standard
                rates.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition hover:brightness-95"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M19.05 4.91A9.82 9.82 0 0012.04 2a9.93 9.93 0 00-8.6 14.88L2 22l5.25-1.38a9.9 9.9 0 004.78 1.22h.01c5.47 0 9.92-4.45 9.92-9.92a9.86 9.86 0 00-2.91-7.01zM12.04 20.15a8.23 8.23 0 01-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 1115.32-4.38 8.27 8.27 0 01-8.13 8.42zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
                  </svg>
                  Book via WhatsApp
                </a>
                <a
                  href={`tel:+${BUSINESS_PHONE}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#CC1A1A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1A5FCC]"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
                    <path
                      d="M4 6h4l2 5-2 2a12 12 0 006 6l2-2 5 2v4a2 2 0 01-2 2 10 10 0 01-10-10 2 2 0 012-2z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
