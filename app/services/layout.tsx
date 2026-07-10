import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PMG Transport | Steel Transport Services",
  description:
    "Steel coil, TMT bar, steel sheets & plates, pipes & tubes, and structural section transport across Chennai, Thiruvallur, and Kanchipuram. Book a truck from Manali Steel Yard today.",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
