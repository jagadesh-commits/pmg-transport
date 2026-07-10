"use client";

import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

const services = [
  "Heavy Equipment Transport",
  "Steel Coil Transport",
  "Logistics & Warehousing",
  "Project Cargo",
  "Local Delivery",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

type IconProps = SVGProps<SVGSVGElement>;

function FacebookIcon({ className, ...props }: IconProps) {
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
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className, ...props }: IconProps) {
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
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className, ...props }: IconProps) {
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
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

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
  { href: "#", label: "Facebook", icon: FacebookIcon },
  { href: "#", label: "Instagram", icon: InstagramIcon },
  { href: "#", label: "LinkedIn", icon: LinkedinIcon },
  {
    href: "https://wa.me/919498073311",
    label: "WhatsApp",
    icon: MessageCircleIcon,
  },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a6e] text-white" style={{ padding: "60px 5%" }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <div>
          <Image
            src="/logo.png"
            alt="PMG Transports"
            height={80}
            width={160}
            className="h-20 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-4 font-heading text-lg font-bold tracking-wide text-white">
            PMG TRANSPORTS
          </p>
          <p className="mt-2 text-sm font-semibold text-white/90">
            Trusted Since 2010
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Local steel transport and logistics across Chennai, Thiruvallur and
            Kanchipuram. Your trusted partner for heavy equipment and steel cargo
            movement.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#CC1A1A]">Services</h3>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service}>
                <a
                  href="/services"
                  className="text-sm text-white transition-colors duration-200 hover:text-[#CC1A1A]"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#CC1A1A]">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white transition-colors duration-200 hover:text-[#CC1A1A]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-[#CC1A1A]">Contact</h3>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/90">
            <p>
              <a
                href="tel:+919498073311"
                className="transition-colors duration-200 hover:text-[#CC1A1A]"
              >
                +91 94980 73311
              </a>
              <span className="text-white/60"> / </span>
              <a
                href="tel:+919087273311"
                className="transition-colors duration-200 hover:text-[#CC1A1A]"
              >
                +91 90872 73311
              </a>
            </p>
            <p>
              D-196, Sathangadu Iron &amp; Steel Market, Manali, Chennai -
              600068
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111133] text-white transition-colors duration-200 hover:bg-[#CC1A1A]"
              >
                <Icon className="h-5 w-5" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-5"
        style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}
      >
        <p>© 2026 PMG Transport Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
