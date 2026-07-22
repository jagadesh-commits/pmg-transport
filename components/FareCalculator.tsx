"use client";

import { useState } from "react";
import { FARE_RATES, PICKUP_LOCATION } from "@/lib/fareRates";
import {
  useTruckBooking,
  type WeightUnit,
} from "@/components/TruckBookingProvider";

const DESTINATIONS = FARE_RATES.map((r) => r.destination);

export function FareCalculatorCard() {
  const { openBooking } = useTruckBooking();
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("Tons");

  function handleCheckFare() {
    if (!destination) {
      openBooking({ initialStep: 1 });
      return;
    }

    openBooking({
      initialDestination: destination,
      initialWeight: weight.trim() || undefined,
      initialWeightUnit: weightUnit,
      initialStep: 2,
    });
  }

  const fieldWrap =
    "flex items-center gap-3 rounded-xl border border-[#E0E0E0] px-4 py-3";

  return (
    <div className="w-full max-w-[420px] overflow-hidden rounded-2xl bg-white shadow-2xl mx-auto lg:mx-0">
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
              value={`${PICKUP_LOCATION}, Chennai`}
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

          <div className="flex gap-3">
            <input
              type="number"
              min={1}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
              className="w-[65%] rounded-xl border border-[#E0E0E0] bg-white px-4 py-3 text-sm text-pmg-text outline-none placeholder:text-pmg-muted"
            />
            <select
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value as WeightUnit)}
              className="w-[35%] rounded-xl border border-[#E0E0E0] bg-white px-4 py-3 text-sm text-pmg-text outline-none"
              aria-label="Weight unit"
            >
              <option value="Tons">Tons</option>
              <option value="KG">KG</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCheckFare}
          className="mt-4 w-full rounded-xl bg-[#CC1A1A] px-6 py-3.5 text-base font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#1A5FCC]"
        >
          Check Truck Fare
        </button>
      </div>
    </div>
  );
}
