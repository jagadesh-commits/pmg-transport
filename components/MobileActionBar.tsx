"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const WHATSAPP_URL =
  "https://wa.me/919498073311?text=Hi%20PMG%20Transport%2C%20I%20need%20a%20transport%20quote";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012 6.18 2 2 0 014 4z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0012.04 2a9.93 9.93 0 00-8.6 14.88L2 22l5.25-1.38a9.9 9.9 0 004.78 1.22h.01c5.47 0 9.92-4.45 9.92-9.92a9.86 9.86 0 00-2.91-7.01zM12.04 20.15a8.23 8.23 0 01-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 1115.32-4.38 8.27 8.27 0 01-8.13 8.42zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

function CalculatorIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6M9 11h.01M12 11h.01M15 11h.01M9 14h.01M12 14h.01M15 14h.01M9 17h6" />
    </svg>
  );
}

function scrollToCalculator() {
  document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const actionButtonClass =
  "flex min-h-14 flex-1 flex-col items-center justify-center gap-1 px-2 py-2 text-pmg-text transition active:bg-pmg-surface";

export function MobileActionBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-gray-200 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Mobile quick actions"
    >
      <a href="tel:+919498073311" className={actionButtonClass}>
        <PhoneIcon className="h-5 w-5 text-[#CC1A1A]" />
        <span className="font-heading text-xs font-semibold uppercase tracking-wide">Call</span>
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${actionButtonClass} bg-[#25D366] text-white active:bg-[#20bd5a]`}
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="font-heading text-xs font-semibold uppercase tracking-wide">WhatsApp</span>
      </a>

      {isHome ? (
        <button type="button" onClick={scrollToCalculator} className={actionButtonClass}>
          <CalculatorIcon className="h-5 w-5 text-[#CC1A1A]" />
          <span className="font-heading text-xs font-semibold uppercase tracking-wide">Get Fare</span>
        </button>
      ) : (
        <Link href="/#calculator" className={actionButtonClass}>
          <CalculatorIcon className="h-5 w-5 text-[#CC1A1A]" />
          <span className="font-heading text-xs font-semibold uppercase tracking-wide">Get Fare</span>
        </Link>
      )}
    </nav>
  );
}
