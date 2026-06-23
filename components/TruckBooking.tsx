"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TruckType = {
  id: string;
  name: string;
  capacity: string;
  ratePerKm: number;
  baseFare: number;
};

const TRUCK_TYPES: TruckType[] = [
  { id: "ace", name: "ACE / DOST / PICKUP", capacity: "1.5 Ton", ratePerKm: 22, baseFare: 1500 },
  { id: "eicher14", name: "EICHER 14FT", capacity: "3.5 Ton", ratePerKm: 30, baseFare: 2200 },
  { id: "eicher17", name: "EICHER 17FT", capacity: "5 Ton", ratePerKm: 38, baseFare: 2800 },
  { id: "eicher19", name: "EICHER 19FT", capacity: "7 Ton", ratePerKm: 46, baseFare: 3400 },
  { id: "container20", name: "20FT CONTAINER", capacity: "6.5 Ton", ratePerKm: 52, baseFare: 4000 },
  { id: "eicherpro22", name: "EICHER PRO 22FT", capacity: "10 Ton", ratePerKm: 64, baseFare: 5200 },
  { id: "container32", name: "32FT CONTAINER", capacity: "7/8 Ton", ratePerKm: 78, baseFare: 6500 },
];

const GOODS_TYPES = [
  "Steel Coils",
  "Steel Sheets & Plates",
  "TMT Bars & Rods",
  "Steel Pipes & Tubes",
  "Angles, Channels & Beams",
  "Steel Wire & Rods",
  "Billets & Ingots",
  "Other Steel Products",
];

const PICKUP_LOCATION = "Manali Steel Yard";

type Destination = {
  name: string;
  upTo10Tons: number;
  perTonAbove10: number;
};

const DESTINATIONS: Destination[] = [
  { name: "Chengalpattu & Madhavaram", upTo10Tons: 9000, perTonAbove10: 900 },
  { name: "Kanchipuram", upTo10Tons: 9000, perTonAbove10: 900 },
  { name: "Maraimalai Nagar", upTo10Tons: 8000, perTonAbove10: 800 },
  { name: "Sriperumbudur", upTo10Tons: 5000, perTonAbove10: 500 },
  { name: "Oragadam", upTo10Tons: 6000, perTonAbove10: 600 },
  { name: "Poothandi", upTo10Tons: 4500, perTonAbove10: 450 },
  { name: "Ambattur & Kattur, Chennai", upTo10Tons: 4500, perTonAbove10: 450 },
  { name: "Vichoor", upTo10Tons: 2500, perTonAbove10: 250 },
  { name: "Vyasarpadi", upTo10Tons: 2500, perTonAbove10: 250 },
  { name: "Ernavoor", upTo10Tons: 2000, perTonAbove10: 200 },
  { name: "Thiruttani", upTo10Tons: 8000, perTonAbove10: 800 },
  { name: "Perungudi", upTo10Tons: 5000, perTonAbove10: 500 },
  { name: "Velachery", upTo10Tons: 5000, perTonAbove10: 500 },
  { name: "Tambaram", upTo10Tons: 5500, perTonAbove10: 550 },
  { name: "Thiruporur", upTo10Tons: 8000, perTonAbove10: 800 },
  { name: "Tiruvallur & Kakkalur", upTo10Tons: 5000, perTonAbove10: 500 },
  { name: "Guindy", upTo10Tons: 5000, perTonAbove10: 500 },
  { name: "Sri City", upTo10Tons: 8000, perTonAbove10: 800 },
];

function computeFare(dest: Destination, weightKg: number): number {
  const tons = weightKg / 1000;
  if (tons <= 10) return dest.upTo10Tons;
  return dest.upTo10Tons + Math.ceil(tons - 10) * dest.perTonAbove10;
}

function formatINR(value: number): string {
  return "\u20B9" + Math.round(value).toLocaleString("en-IN");
}

const BUSINESS_WHATSAPP = "919498073311";

function toWaNumber(mobile: string): string {
  const digits = mobile.replace(/\D/g, "");
  return digits.length === 10 ? `91${digits}` : digits;
}

function openWhatsApp(number: string, message: string) {
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0012.04 2a9.93 9.93 0 00-8.6 14.88L2 22l5.25-1.38a9.9 9.9 0 004.78 1.22h.01c5.47 0 9.92-4.45 9.92-9.92a9.86 9.86 0 00-2.91-7.01zM12.04 20.15a8.23 8.23 0 01-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 1115.32-4.38 8.27 8.27 0 01-8.13 8.42zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3 7h10v8H3V7zm10 3h4l3 3v2h-7v-5zM7 18a1.6 1.6 0 100-3.2A1.6 1.6 0 007 18zm10 0a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Step = 0 | 1 | 2 | 3 | 4;

const STEP_LABELS = ["Route", "Truck & Goods", "Your Details", "Summary"];

function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}

export function TruckBooking({
  trigger,
}: {
  trigger: (open: () => void) => ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>(0);

  const pickup = PICKUP_LOCATION;
  const [drop, setDrop] = useState("");
  const [truckId, setTruckId] = useState("");
  const [goods, setGoods] = useState("");
  const [weight, setWeight] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const destination = DESTINATIONS.find((d) => d.name === drop) ?? null;
  const truck = TRUCK_TYPES.find((t) => t.id === truckId) ?? null;

  const fare = useMemo(() => {
    const weightKg = Number(weight);
    if (!destination || !weightKg || weightKg <= 0) return null;
    return computeFare(destination, weightKg);
  }, [destination, weight]);

  function buildMessage(): string {
    const lines = [
      "*PMG Transports - Truck Booking*",
      "",
      `*Name:* ${name}`,
      `*Mobile:* ${mobile}`,
      email ? `*Email:* ${email}` : "",
      "",
      `*Pickup:* ${pickup}`,
      `*Drop:* ${drop}`,
      `*Pickup Date:* ${pickupDate}`,
      "",
      `*Truck:* ${truck ? `${truck.name} (${truck.capacity})` : "-"}`,
      `*Goods:* ${goods}`,
      `*Weight:* ${weight} Kg`,
      "",
      `*Estimated Fare:* ${fare !== null ? formatINR(fare) : "-"}`,
      "_System-generated estimate. Final rate confirmed by our team (10 am - 6 pm)._",
    ];
    return lines.filter((l) => l !== "").join("\n");
  }

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function reset() {
    setStep(0);
    setDrop("");
    setTruckId("");
    setGoods("");
    setWeight("");
    setPickupDate("");
    setName("");
    setEmail("");
    setMobile("");
    setError("");
  }

  function next() {
    setError("");
    if (step === 0) {
      if (!drop) {
        setError("Please select a destination.");
        return;
      }
    }
    if (step === 1) {
      if (!truckId || !goods || !weight.trim()) {
        setError("Please select truck type, goods type and weight.");
        return;
      }
    }
    if (step === 2) {
      if (!name.trim() || !mobile.trim() || !pickupDate) {
        setError("Please enter your name, mobile number and pickup date.");
        return;
      }
      if (!/^\d{10}$/.test(mobile.trim())) {
        setError("Please enter a valid 10-digit mobile number.");
        return;
      }
    }
    if (step === 3) {
      openWhatsApp(BUSINESS_WHATSAPP, buildMessage());
    }
    setStep((s) => Math.min(4, s + 1) as Step);
  }

  function back() {
    setError("");
    setStep((s) => Math.max(0, s - 1) as Step);
  }

  const inputCls =
    "mt-2 w-full rounded-lg border border-pmg-border bg-white px-4 py-3 text-pmg-text outline-none transition focus:border-pmg-red focus:ring-2 focus:ring-[rgba(204,26,26,0.2)]";
  const labelCls =
    "text-xs font-semibold uppercase tracking-wider text-pmg-muted";

  return (
    <>
      {trigger(open)}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="relative my-4 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 bg-[#111111] px-6 py-5">
                <div className="flex items-center gap-3 text-white">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pmg-red">
                    <TruckIcon className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <p className="font-heading text-lg font-extrabold uppercase tracking-tight">
                      Book a Truck
                    </p>
                    <p className="text-xs text-white/60">
                      Local heavy transport · instant fare estimate
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {step < 4 && (
                <div className="flex items-center gap-2 border-b border-pmg-border bg-pmg-surface px-6 py-4">
                  {STEP_LABELS.map((label, i) => (
                    <div key={label} className="flex flex-1 items-center gap-2">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                          i <= step
                            ? "bg-pmg-red text-white"
                            : "bg-white text-pmg-muted ring-1 ring-pmg-border"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span
                        className={`hidden text-xs font-semibold sm:block ${
                          i <= step ? "text-pmg-text" : "text-pmg-muted"
                        }`}
                      >
                        {label}
                      </span>
                      {i < STEP_LABELS.length - 1 && (
                        <span
                          className={`h-0.5 flex-1 rounded ${
                            i < step ? "bg-pmg-red" : "bg-pmg-border"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="px-6 py-6">
                {step === 0 && (
                  <div className="space-y-5">
                    <div>
                      <label className={labelCls}>Pickup Location</label>
                      <div className="mt-2 flex items-center gap-3 rounded-lg border border-pmg-border bg-pmg-surface px-4 py-3">
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />
                        <span className="text-pmg-text">{pickup}</span>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="tb-drop" className={labelCls}>
                        Drop Location
                      </label>
                      <select
                        id="tb-drop"
                        value={drop}
                        onChange={(e) => setDrop(e.target.value)}
                        className={inputCls}
                      >
                        <option value="" disabled>
                          Select destination
                        </option>
                        {DESTINATIONS.map((d) => (
                          <option key={d.name} value={d.name}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {destination && (
                      <p className="rounded-lg bg-pmg-surface px-4 py-3 text-sm text-pmg-muted">
                        Base rate (up to 10 tons):{" "}
                        <span className="font-bold text-pmg-text">
                          {formatINR(destination.upTo10Tons)}
                        </span>
                        <span className="block text-xs">
                          + {formatINR(destination.perTonAbove10)} per extra ton
                          above 10 tons
                        </span>
                      </p>
                    )}
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <p className={labelCls}>Truck Type</p>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {TRUCK_TYPES.map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setTruckId(t.id)}
                            className={`flex items-center gap-3 rounded-lg border p-3 text-left transition ${
                              truckId === t.id
                                ? "border-pmg-red bg-[rgba(204,26,26,0.06)] ring-1 ring-pmg-red"
                                : "border-pmg-border bg-white hover:border-pmg-red/40"
                            }`}
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-pmg-surface text-pmg-text">
                              <TruckIcon className="h-6 w-6" />
                            </span>
                            <span>
                              <span className="block text-sm font-bold text-pmg-text">
                                {t.name}
                              </span>
                              <span className="block text-xs text-pmg-muted">
                                {t.capacity}
                              </span>
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="tb-goods" className={labelCls}>
                          Goods Type
                        </label>
                        <select
                          id="tb-goods"
                          value={goods}
                          onChange={(e) => setGoods(e.target.value)}
                          className={inputCls}
                        >
                          <option value="" disabled>
                            Select goods type
                          </option>
                          {GOODS_TYPES.map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="tb-weight" className={labelCls}>
                          Approx. Weight (Kg)
                        </label>
                        <input
                          id="tb-weight"
                          type="number"
                          min="1"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          className={inputCls}
                          placeholder="e.g. 1500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="tb-name" className={labelCls}>
                          Name
                        </label>
                        <input
                          id="tb-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={inputCls}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="tb-mobile" className={labelCls}>
                          Mobile Number
                        </label>
                        <input
                          id="tb-mobile"
                          type="tel"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          className={inputCls}
                          placeholder="10-digit mobile"
                        />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="tb-email" className={labelCls}>
                          Email (optional)
                        </label>
                        <input
                          id="tb-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={inputCls}
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="tb-date" className={labelCls}>
                          Pickup Date
                        </label>
                        <input
                          id="tb-date"
                          type="date"
                          min={todayISO()}
                          value={pickupDate}
                          onChange={(e) => setPickupDate(e.target.value)}
                          className={inputCls}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && truck && fare !== null && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {[
                        { label: "Name", value: name },
                        { label: "Mobile", value: mobile },
                        { label: "Weight", value: `${weight} Kg` },
                        { label: "Goods", value: goods },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="rounded-lg border border-pmg-border bg-pmg-surface p-3"
                        >
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-pmg-muted">
                            {row.label}
                          </p>
                          <p className="mt-1 truncate text-sm font-semibold text-pmg-text">
                            {row.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-lg border border-pmg-border p-4">
                      <div className="flex items-center justify-between gap-2 text-sm">
                        <span className="flex items-center gap-2 text-pmg-muted">
                          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                          {pickup}
                        </span>
                        <span className="text-pmg-red">→</span>
                        <span className="flex items-center gap-2 text-pmg-muted">
                          {drop}
                          <span className="h-2.5 w-2.5 rounded-full bg-pmg-red" />
                        </span>
                      </div>
                    </div>

                    <div
                      className="rounded-xl border border-pmg-border p-5 text-center"
                      style={{ borderLeft: "4px solid #CC1A1A" }}
                    >
                      <div className="flex items-center justify-center gap-2 text-pmg-text">
                        <TruckIcon className="h-5 w-5" />
                        <span className="text-sm font-bold">
                          {truck.name} · {truck.capacity}
                        </span>
                      </div>
                      <p className="mt-2 font-heading text-2xl font-black text-pmg-red">
                        Estimated Fare: {formatINR(fare)}
                      </p>
                      <p className="mt-2 text-xs text-pmg-muted">
                        System-generated estimate. Final rate is confirmed by our
                        team (10 am – 6 pm).
                      </p>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="py-6 text-center">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" aria-hidden>
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <h3 className="font-heading mt-5 text-2xl font-extrabold uppercase tracking-tight text-pmg-text">
                      Booking Request Received
                    </h3>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-pmg-muted">
                      Thanks {name || "there"}! The fare shown is a
                      system-generated estimate. Our executive will call you on{" "}
                      <span className="font-semibold text-pmg-text">
                        {mobile}
                      </span>{" "}
                      between 10 am – 6 pm to confirm. Your truck is not assigned
                      until you receive confirmation.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => openWhatsApp(BUSINESS_WHATSAPP, buildMessage())}
                        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-95"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        Send to PMG
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          openWhatsApp(toWaNumber(mobile), buildMessage())
                        }
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] px-5 py-2.5 text-sm font-bold text-[#1a8a45] transition hover:bg-[#25D366] hover:text-white"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        Get copy on my WhatsApp
                      </button>
                    </div>
                  </div>
                )}

                {error && (
                  <p className="mt-4 rounded-lg bg-[rgba(204,26,26,0.08)] px-4 py-3 text-sm font-medium text-pmg-red">
                    {error}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-pmg-border bg-pmg-surface px-6 py-4">
                {step === 0 && (
                  <button
                    type="button"
                    onClick={close}
                    className="text-sm font-semibold text-pmg-muted transition hover:text-pmg-text"
                  >
                    Cancel
                  </button>
                )}
                {step > 0 && step < 4 && (
                  <button
                    type="button"
                    onClick={back}
                    className="rounded-full border-2 border-[#111111] px-5 py-2.5 text-sm font-semibold text-[#111111] transition hover:border-[#1A5FCC] hover:bg-[#1A5FCC] hover:text-white"
                  >
                    Go Back
                  </button>
                )}
                {step === 4 && <span />}

                {step === 0 && (
                  <button
                    type="button"
                    onClick={next}
                    className="rounded-full bg-[#CC1A1A] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#1A5FCC]"
                  >
                    Check Truck Fare
                  </button>
                )}
                {(step === 1 || step === 2) && (
                  <button
                    type="button"
                    onClick={next}
                    className="rounded-full bg-[#CC1A1A] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#1A5FCC]"
                  >
                    Continue
                  </button>
                )}
                {step === 3 && (
                  <button
                    type="button"
                    onClick={next}
                    className="rounded-full bg-green-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-green-700"
                  >
                    Confirm Booking
                  </button>
                )}
                {step === 4 && (
                  <button
                    type="button"
                    onClick={() => {
                      close();
                      reset();
                    }}
                    className="rounded-full bg-[#CC1A1A] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#1A5FCC]"
                  >
                    Okay
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
