import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PMG Transport | Steel Transport & Logistics",
  description:
    "PMG Transport — specialists in steel coil, TMT bar, steel sheets, pipes, and structural section transport across Chennai, Thiruvallur, and Kanchipuram. Trusted since 2010.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
