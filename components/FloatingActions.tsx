"use client";

import { useTruckBooking } from "@/components/TruckBookingProvider";
import BackToTopButton from "@/components/BackToTop";
import { PmgTruckAnimation } from "@/components/PmgTruckAnimation";

const WHATSAPP_NUMBER = "919498073311";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0012.04 2a9.93 9.93 0 00-8.6 14.88L2 22l5.25-1.38a9.9 9.9 0 004.78 1.22h.01c5.47 0 9.92-4.45 9.92-9.92a9.86 9.86 0 00-2.91-7.01zM12.04 20.15a8.23 8.23 0 01-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 1115.32-4.38 8.27 8.27 0 01-8.13 8.42zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

export function FloatingActions() {
  const { openBooking } = useTruckBooking();

  return (
    <div
      className="pointer-events-none fixed bottom-5 right-5 z-40 flex h-fit w-fit max-w-none flex-col items-end gap-3.5 pb-[env(safe-area-inset-bottom)] sm:bottom-6 sm:right-6 md:z-50"
      aria-label="Quick actions"
    >
      <BackToTopButton className="max-md:fixed max-md:bottom-[90px] max-md:right-5 max-md:z-40 md:relative md:bottom-auto md:right-auto" />

      <button
        type="button"
        onClick={openBooking}
        aria-label="Book a Truck"
        className="pointer-events-auto group relative hidden h-14 w-14 items-center justify-center rounded-full bg-[#CC1A1A] text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition hover:scale-105 hover:bg-[#1A5FCC] md:flex sm:w-auto sm:gap-2.5 sm:px-5"
      >
        <PmgTruckAnimation variant="icon" className="h-10 w-[75px]" />
        <span className="hidden text-sm font-semibold sm:inline">Book a Truck</span>
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-[#111111] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:hidden">
          Book a Truck
        </span>
      </button>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="pointer-events-auto group relative hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition hover:scale-105 hover:brightness-95 md:flex"
      >
        <WhatsAppGlyph className="h-7 w-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-[#111111] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  );
}
