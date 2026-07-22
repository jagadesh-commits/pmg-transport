import { faqs } from "@/lib/faqs";

const SITE_URL = "https://pmg-transport-iota.vercel.app";

export const movingCompanySchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "PMG Transport",
  url: SITE_URL,
  telephone: "+919498073311",
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-196, Sathangadu Iron & Steel Market, Manali",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600068",
    addressCountry: "IN",
  },
  areaServed: ["Chennai", "Thiruvallur", "Kanchipuram"],
  openingHoursSpecification: [
    {
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
  ],
  description:
    "Local steel transport and logistics company moving steel coils, TMT bars, sheets & plates, pipes & tubes from Manali Steel Yard across Chennai, Thiruvallur, and Kanchipuram. Established 2026.",
  image: `${SITE_URL}/pmg-transports-logo.png`,
  sameAs: ["https://wa.me/919498073311"],
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
