import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "PMG Transport | Steel Transport & Logistics in Chennai",
  description:
    "Chennai's dedicated steel logistics company — steel coils, TMT bars, sheets & plates, pipes & tubes moved from Manali Steel Yard across Chennai, Thiruvallur, and Kanchipuram. Trusted since 2010.",
};

const serviceOptions = [
  "Steel Product Transport",
  "Steel Coil Transport",
  "TMT Bar & Rod Delivery",
  "Steel Sheets & Plates Transport",
  "Steel Pipes & Tubes Transport",
  "Angles, Channels & Beams Transport",
  "Logistics & Warehousing",
  "Project Cargo",
  "Other",
];

export default function ContactPage() {
  return (
    <main className="pt-36 sm:pt-28 md:pt-[72px]">
      <Contact
        title="Get a Steel Transport Quote"
        description="Reach out for delivery bookings, rate enquiries, or warehousing requirements — our team responds within 2 hours on working days."
        serviceOptions={serviceOptions}
        workingHoursExtra="Sunday: Emergency bookings only (WhatsApp)"
        urgentNote="For urgent bookings, WhatsApp us directly at +91 94980 73311 — we typically respond within 30 minutes during working hours."
      />
    </main>
  );
}
