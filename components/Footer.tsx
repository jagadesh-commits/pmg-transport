"use client";

import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

const services = [
  "Steel Product Transport",
  "Steel Coil Transport",
  "Logistics & Warehousing",
  "Project Cargo",
  "Mill to Fabricator Delivery",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

type IconProps = SVGProps<SVGSVGElement>;

function MessageCircleIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://wa.me/919498073311",
    label: "WhatsApp",
    icon: MessageCircleIcon,
  },
];

export function Footer() {
  return (
    <footer className="bg-[#FDF6F5] text-[#0d0d0d]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-8 lg:py-[60px]">
        <div className="text-center sm:text-left">
          <Image
            src="/pmg-transports-logo.png"
            alt="PMG Transports"
            height={80}
            width={160}
            className="mx-auto h-20 w-auto object-contain sm:mx-0"
          />
          <p className="mt-4 text-sm font-semibold text-pmg-red">
            Trusted Since 2010
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#5f5e5a]">
            Chennai&apos;s dedicated steel logistics company — moving steel coils,
            TMT bars, sheets &amp; plates, pipes &amp; tubes, and structural sections
            from Manali Steel Yard across Chennai, Thiruvallur, and Kanchipuram.
            Trusted since 2010.
          </p>
        </div>

        <div className="border-t border-[#e5e5e5] pt-8 text-center sm:text-left md:border-t-0 md:pt-0 lg:border-l lg:pl-8">
          <h3 className="text-base font-bold text-[#0d0d0d]">Services</h3>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service}>
                <a
                  href="/services"
                  className="text-sm text-[#0d0d0d] transition-colors duration-200 hover:text-pmg-red"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-[#e5e5e5] pt-8 text-center sm:text-left md:border-t-0 md:pt-0 lg:border-l lg:pl-8">
          <h3 className="text-base font-bold text-[#0d0d0d]">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#0d0d0d] transition-colors duration-200 hover:text-pmg-red"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-[#e5e5e5] pt-8 text-center sm:text-left md:border-t-0 md:pt-0 lg:border-l lg:pl-8">
          <h3 className="text-base font-bold text-[#0d0d0d]">Contact</h3>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#5f5e5a]">
            <p className="flex flex-col gap-1 sm:block">
              <a
                href="tel:+919498073311"
                className="text-[#0d0d0d] transition-colors duration-200 hover:text-pmg-red"
              >
                +91 94980 73311
              </a>
              <span className="hidden text-[#5f5e5a] sm:inline"> / </span>
              <a
                href="tel:+919087273311"
                className="text-[#0d0d0d] transition-colors duration-200 hover:text-pmg-red"
              >
                +91 90872 73311
              </a>
            </p>
            <p>
              D-196, Sathangadu Iron &amp; Steel Market, Manali, Chennai -
              600068
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-3 sm:justify-start">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#0d0d0d] transition-colors duration-200 hover:border-pmg-red hover:bg-pmg-red hover:text-white"
              >
                <Icon className="h-5 w-5" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-pmg-red px-4 py-4 text-center text-[13px] text-white sm:px-6 sm:text-left lg:px-8">
        <p className="mx-auto max-w-7xl">
          © 2026 PMG Transport Private Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
