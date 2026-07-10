import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PMG Transport | Steel Transport & Logistics in Chennai",
  description:
    "Chennai's dedicated steel logistics company — steel coils, TMT bars, sheets & plates, pipes & tubes moved from Manali Steel Yard across Chennai, Thiruvallur, and Kanchipuram. Trusted since 2010.",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
