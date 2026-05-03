import type { Metadata } from "next";
import ZirakpurTaxiContent from "./ZirakpurTaxiContent";

export const metadata: Metadata = {
  title: "Taxi Service in Zirakpur | Bhardwaj Travels – Book 24/7",
  description:
    "Need a taxi in Zirakpur? Bhardwaj Travels provides reliable cab service in Zirakpur for local travel, airport drops, outstation trips & corporate travel. Available 24/7 with verified drivers. Call +91 94175 66648.",
  alternates: { canonical: "https://www.bhardwajtravels1.com/zirakpur-taxi" },
};

export default function ZirakpurTaxiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Bhardwaj Travels – Taxi Service in Zirakpur",
            description:
              "24/7 cab service in Zirakpur for local travel, airport transfers, outstation trips, corporate travel, and wedding fleet.",
            url: "https://www.bhardwajtravels1.com/zirakpur-taxi",
            telephone: "+919417566648",
            areaServed: "Zirakpur",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Zirakpur",
              addressRegion: "Punjab",
              addressCountry: "IN",
            },
            priceRange: "$$",
            openingHours: "Mo-Su 00:00-23:59",
          }),
        }}
      />
      <ZirakpurTaxiContent />
    </>
  );
}
