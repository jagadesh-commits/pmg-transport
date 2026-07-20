import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About PMG Transports | Steel Logistics Chennai Since 2010",
  },
  description:
    "PMG Transports is a Chennai-based steel transport and logistics company operating from Manali Steel Yard since 2010. Serving Chennai, Thiruvallur and Kanchipuram.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
