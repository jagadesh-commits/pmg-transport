import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About PMG Transports | Steel Logistics Chennai — Established 2026",
  },
  description:
    "PMG Transports is a Chennai-based steel transport and logistics company operating from the Sathangadu Iron & Steel Market in Manali. Established 2026. Serving Chennai, Thiruvallur and Kanchipuram.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
