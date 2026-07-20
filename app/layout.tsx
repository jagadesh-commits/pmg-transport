import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { MobileActionBar } from "@/components/MobileActionBar";

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
  metadataBase: new URL("https://pmg-transport-iota.vercel.app"),
  title: {
    default: "Steel Transport Chennai | PMG Transports | Manali Steel Yard",
    template: "%s | PMG Transports",
  },
  description:
    "PMG Transports offers steel coil, TMT bar and heavy equipment transport from Manali Steel Yard across Chennai, Thiruvallur and Kanchipuram. Get instant fare estimate.",
  keywords: [
    "steel transport chennai",
    "truck transport manali",
    "TMT bar transport",
    "steel coil transport",
    "logistics chennai",
    "transport thiruvallur",
    "transport kanchipuram",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pmg-transport-iota.vercel.app",
    siteName: "PMG Transports",
    title: "Steel Transport Chennai | PMG Transports",
    description:
      "Steel coil, TMT bar and heavy equipment transport from Manali Steel Yard across Chennai, Thiruvallur and Kanchipuram.",
    images: [
      {
        url: "/pmg-transports-logo.png",
        width: 800,
        height: 400,
        alt: "PMG Transports Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Transport Chennai | PMG Transports",
    description:
      "Steel transport and logistics across Chennai, Thiruvallur and Kanchipuram.",
    images: ["/pmg-transports-logo.png"],
  },
  alternates: { canonical: "/" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://pmg-transport-iota.vercel.app",
              name: "PMG Transports",
              description:
                "Steel transport and logistics company in Chennai serving Chennai, Thiruvallur and Kanchipuram from Manali Steel Yard.",
              url: "https://pmg-transport-iota.vercel.app",
              telephone: "+919498073311",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "D-196, Sathangadu Iron & Steel Market, Manali",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                postalCode: "600068",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 13.1662,
                longitude: 80.2589,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              areaServed: ["Chennai", "Thiruvallur", "Kanchipuram"],
              priceRange: "₹₹",
            }),
          }}
        />
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
