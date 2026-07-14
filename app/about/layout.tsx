import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PMG Transport Chennai",
  description:
    "Chennai's dedicated steel logistics company since 2010 — moving steel coils, TMT bars, sheets & plates from Manali Steel Yard across Chennai, Thiruvallur, and Kanchipuram.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
