"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PillButton } from "@/components/PillButton";
import { useTruckBooking } from "@/components/TruckBookingProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { openBooking } = useTruckBooking();

  return (
    <header className="fixed top-0 z-[60] w-full border-b-2 border-pmg-red bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex items-center justify-between gap-3 sm:contents">
            <Link href="/" className="relative flex shrink-0 items-center">
              <Image
                src="/pmg-transports-logo.png?v=3"
                alt="PMG Transports"
                width={260}
                height={140}
                className="h-12 w-auto object-contain sm:h-16 md:h-[68px]"
                style={{ width: "auto" }}
                priority
                unoptimized
              />
            </Link>
            <div className="shrink-0 sm:hidden">
              <PillButton
                variant="primary"
                onClick={openBooking}
                className="!py-1.5 !pl-1.5 !pr-5 !text-xs !whitespace-nowrap"
              >
                Get Quote
              </PillButton>
            </div>
          </div>

          <nav className="scrollbar-hide -mx-4 flex items-center gap-x-3 overflow-x-auto px-4 pb-0.5 sm:mx-0 sm:flex-1 sm:flex-wrap sm:justify-center sm:overflow-visible sm:gap-x-6 sm:px-0 md:gap-x-8">
            {links.map(({ href, label }) => {
              const active = href.includes("#") ? false : pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`shrink-0 whitespace-nowrap text-xs font-medium text-[#444444] transition-colors hover:text-pmg-red sm:text-sm ${
                    active ? "text-pmg-red" : ""
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 sm:block">
            <PillButton
              variant="primary"
              onClick={openBooking}
              className="!whitespace-nowrap"
            >
              Get Quote
            </PillButton>
          </div>
        </div>
      </div>
    </header>
  );
}
