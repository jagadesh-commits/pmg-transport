"use client";

import { useState } from "react";

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

export function FareCalculatorCard() {
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
    const fare = tons <= 10 ? rate.base : rate.base + (tons - 10) * rate.extra;

    setResult({
      destination,
      weight: tons,
      low: fare,
      high: Math.round(fare * 1.1),
    });
  }

  const whatsappHref = result
    ? `https://wa.me/${BUSINESS_PHONE}?text=${encodeURIComponent(
        `Hi PMG Transport, I need a truck from Manali Steel Yard to ${result.destination} for ${result.weight} tons. Estimated fare: ${formatINR(result.low)} - ${formatINR(result.high)}`,
      )}`
    : "#";

  const fieldWrap =
    "flex items-center gap-3 rounded-xl border border-[#E0E0E0] px-4 py-3";

  return (
    <div className="w-full max-w-[420px] overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div className="bg-[#CC1A1A] px-4 py-3 text-center text-base font-bold text-white">
        📍 Check Truck Fare
      </div>

      <div className="p-6">
        <h2 className="text-lg font-bold text-[#111111]">From Manali Steel Yard</h2>

        <div className="mt-4 space-y-3">
          <div className={`${fieldWrap} bg-[#F5F5F5]`}>
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />
            <input
              type="text"
              value={PICKUP_LOCATION}
              readOnly
              disabled
              className="w-full cursor-not-allowed bg-transparent text-sm text-pmg-text outline-none"
            />
          </div>

          <div className={`${fieldWrap} bg-white`}>
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#CC1A1A]" />
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-sm text-pmg-text outline-none"
              aria-label="Select Destination"
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

          <div className={`${fieldWrap} bg-white`}>
            <span className="shrink-0 text-base leading-none" aria-hidden>
              🚛
            </span>
            <input
              type="number"
              min={1}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight in tons"
              className="w-full bg-transparent text-sm text-pmg-text outline-none placeholder:text-pmg-muted"
            />
          </div>
        </div>

        {error && (
          <p className="mt-3 text-sm font-medium text-[#CC1A1A]">{error}</p>
        )}

        <button
          type="button"
          onClick={calculate}
          className="mt-4 w-full rounded-xl bg-[#CC1A1A] px-6 py-3.5 text-base font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#1A5FCC]"
        >
          Check Truck Fare
        </button>

        {result && (
          <div className="mt-5 border-t border-[#E0E0E0] pt-5 text-center">
            <p className="text-xl font-bold leading-tight text-[#CC1A1A] sm:text-2xl">
              {formatINR(result.low)} - {formatINR(result.high)}
            </p>
            <p className="mt-2 text-xs text-pmg-muted">
              * Final fare confirmed by our team
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[#25D366] px-3 py-2.5 text-sm font-bold text-white transition hover:brightness-95"
              >
                Book via WhatsApp
              </a>
              <a
                href={`tel:+${BUSINESS_PHONE}`}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[#CC1A1A] px-3 py-2.5 text-sm font-bold text-white transition hover:brightness-95"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
