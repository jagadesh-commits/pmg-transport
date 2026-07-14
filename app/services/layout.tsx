import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel Transport Services | PMG Transport Chennai",
  description:
    "Steel product transport, logistics & warehousing, real-time tracking, and project cargo — mill-to-fabricator delivery across Chennai, Thiruvallur, and Kanchipuram.",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
