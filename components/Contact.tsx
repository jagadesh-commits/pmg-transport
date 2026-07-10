"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";
import { PillButton } from "@/components/PillButton";

const serviceOptions = [
  "Heavy Equipment Transport",
  "Logistics & Warehousing",
  "Real-Time Tracking",
  "Project Cargo",
];

const WHATSAPP_NUMBER = "919498073311";

const LocationIcon = (
  <path
    d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11zM12 11a2 2 0 100-4 2 2 0 000 4z"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

const PhoneIcon = (
  <>
    <rect
      x="5"
      y="2"
      width="14"
      height="20"
      rx="2"
      ry="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="12"
      y1="18"
      x2="12.01"
      y2="18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);

const ClockIcon = (
  <path
    d="M12 7v5l3 2M12 21a9 9 0 110-18 9 9 0 010 18z"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
);

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0012.04 2a9.93 9.93 0 00-8.6 14.88L2 22l5.25-1.38a9.9 9.9 0 004.78 1.22h.01c5.47 0 9.92-4.45 9.92-9.92a9.86 9.86 0 00-2.91-7.01zM12.04 20.15a8.23 8.23 0 01-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 1115.32-4.38 8.27 8.27 0 01-8.13 8.42zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M6 10h12M6 14h8M8 18l-3 3v-5a4 4 0 014-4h8a4 4 0 014 4v6H8v-4z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      className="flex gap-4 rounded-lg border border-pmg-border bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
      style={{ borderLeft: "3px solid #CC1A1A" }}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(204,26,26,0.15)] text-pmg-red">
        {icon}
      </div>
      <div>
        <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-pmg-text">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}

function isWithinWorkingHours(date: Date): boolean {
  const day = date.getDay();
  if (day < 1 || day > 6) return false;
  const minutes = date.getHours() * 60 + date.getMinutes();
  return minutes >= 9 * 60 && minutes < 18 * 60;
}

function useWorkingHoursStatus(): boolean | null {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setIsOpen(isWithinWorkingHours(new Date()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return isOpen;
}


export function Contact() {
  const isOpen = useWorkingHoursStatus();

  return (
    <>
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="scroll-mt-24 bg-pmg-surface py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionBadge icon={<ChatIcon />}>Get in Touch</SectionBadge>
          <h2 className="font-heading mt-6 text-4xl font-extrabold uppercase tracking-tight text-pmg-text sm:text-5xl">
            Plan Your Next Move
          </h2>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5">
              <ContactCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                    {LocationIcon}
                  </svg>
                }
                title="Address"
              >
                <p className="mt-1 text-sm text-pmg-muted">
                  D-196, Sathangadu Iron &amp; Steel Market, Manali, Chennai -
                  600068
                </p>
              </ContactCard>

              <ContactCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                    {PhoneIcon}
                  </svg>
                }
                title="Phone"
              >
                <a
                  href="tel:+919498073311"
                  className="mt-1 block text-sm text-pmg-muted no-underline transition-[color] duration-200 ease-in-out hover:text-[#CC1A1A]"
                >
                  +91 94980 73311
                </a>
                <a
                  href="tel:+919087273311"
                  className="mt-1 block text-sm text-pmg-muted no-underline transition-[color] duration-200 ease-in-out hover:text-[#CC1A1A]"
                >
                  +91 90872 73311
                </a>
              </ContactCard>

              <ContactCard
                icon={<WhatsAppGlyph className="h-5 w-5" />}
                title="WhatsApp"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-pmg-muted transition hover:text-pmg-red"
                >
                  +91 94980 73311
                </a>
              </ContactCard>

              <ContactCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                    {ClockIcon}
                  </svg>
                }
                title="Working Hours"
              >
                <div className="mt-1 flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                      isOpen === null
                        ? "bg-pmg-border"
                        : isOpen
                          ? "bg-green-500"
                          : "bg-red-500"
                    }`}
                    aria-hidden
                  />
                  <p className="text-sm text-pmg-muted">
                    Mon - Sat: 9:00 AM - 6:00 PM
                    {isOpen !== null && (
                      <span
                        className={`ml-2 text-xs font-semibold ${
                          isOpen ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {isOpen ? "Open now" : "Closed"}
                      </span>
                    )}
                  </p>
                </div>
              </ContactCard>

              <div className="overflow-hidden rounded-xl border border-pmg-border shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <iframe
                  title="PMG Transports location map"
                  src="https://maps.google.com/maps?q=D-196+Sathangadu+Iron+Steel+Market+Manali+Chennai&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Enquiry form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-semibold uppercase tracking-wider text-pmg-muted"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-pmg-border bg-pmg-surface px-4 py-3 text-pmg-text outline-none transition focus:border-pmg-red focus:ring-2 focus:ring-[rgba(204,26,26,0.25)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-xs font-semibold uppercase tracking-wider text-pmg-muted"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-2 w-full rounded-lg border border-pmg-border bg-pmg-surface px-4 py-3 text-pmg-text outline-none transition focus:border-pmg-red focus:ring-2 focus:ring-[rgba(204,26,26,0.25)]"
                  placeholder="Mobile number"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="text-xs font-semibold uppercase tracking-wider text-pmg-muted"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="mt-2 w-full rounded-lg border border-pmg-border bg-pmg-surface px-4 py-3 text-pmg-text outline-none transition focus:border-pmg-red focus:ring-2 focus:ring-[rgba(204,26,26,0.25)]"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-white">
                    Select a service
                  </option>
                  {serviceOptions.map((o) => (
                    <option key={o} value={o} className="bg-white">
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-wider text-pmg-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-y rounded-lg border border-pmg-border bg-pmg-surface px-4 py-3 text-pmg-text outline-none transition focus:border-pmg-red focus:ring-2 focus:ring-[rgba(204,26,26,0.25)]"
                  placeholder="Cargo details, dimensions, pickup and delivery locations"
                />
              </div>
              <PillButton type="submit" variant="primary" className="mt-2">
                Send Enquiry →
              </PillButton>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
}
