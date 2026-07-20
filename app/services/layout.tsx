import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel Transport Services Chennai",
  description:
    "Steel product transport, logistics & warehousing, real-time tracking and project cargo services from Manali Steel Yard, Chennai. Serving Chennai, Thiruvallur and Kanchipuram.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
