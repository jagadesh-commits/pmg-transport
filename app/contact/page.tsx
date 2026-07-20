import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: {
    absolute: "Contact PMG Transports | Chennai Steel Transport",
  },
  description:
    "Contact PMG Transports for steel transport quotes. Call +91 94980 73311 or WhatsApp us. Located at Sathangadu Iron & Steel Market, Manali, Chennai.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="pt-36 sm:pt-28 md:pt-[72px]">
      <Contact
        title="Get a Steel Transport Quote"
        description="Reach out for delivery bookings, rate enquiries, or warehousing requirements — our team responds within 2 hours on working days."
        workingHoursExtra="Sunday: Emergency bookings only (WhatsApp)"
        urgentNote="For urgent bookings, WhatsApp us directly at +91 94980 73311 — we typically respond within 30 minutes during working hours."
      />
    </main>
  );
}
