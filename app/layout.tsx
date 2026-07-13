import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { MobileActionBar } from "@/components/MobileActionBar";
import { JsonLd } from "@/components/JsonLd";
import { movingCompanySchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PMG Transport | Steel Transport & Logistics",
  description:
    "Specialists in steel coil, TMT bar, and steel product transport with integrated logistics warehousing across Chennai, Thiruvallur, and Kanchipuram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-pmg-bg text-pmg-text">
        <JsonLd data={movingCompanySchema} />
        <PageLoader />
        <AppShell>
          <Navbar />
          <div className="flex flex-1 flex-col pb-20 md:pb-0">
            <div className="flex flex-1 flex-col">{children}</div>
            <Footer />
          </div>
          <MobileActionBar />
        </AppShell>
      </body>
    </html>
  );
}
