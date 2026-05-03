import type { Metadata } from "next";
import PanchkulaTaxiContent from "./PanchkulaTaxiContent";

export const metadata: Metadata = {
  title: "Taxi Service in Panchkula | Bhardwaj Travels – Book 24/7",
  description:
    "Looking for a reliable taxi in Panchkula? Bhardwaj Travels offers 24/7 cab service in Panchkula for airport transfers, outstation trips, local travel & more. Call +91 94175 66648.",
  alternates: { canonical: "https://www.bhardwajtravels1.com/panchkula-taxi" },
};

export default function PanchkulaTaxiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Bhardwaj Travels – Taxi Service in Panchkula",
            description:
              "24/7 taxi and cab service in Panchkula for airport transfers, outstation trips, local travel, corporate cabs, and wedding fleet.",
            url: "https://www.bhardwajtravels1.com/panchkula-taxi",
            telephone: "+919417566648",
            areaServed: "Panchkula",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Panchkula",
              addressRegion: "Haryana",
              addressCountry: "IN",
            },
            priceRange: "$$",
            openingHours: "Mo-Su 00:00-23:59",
          }),
        }}
      />
      <PanchkulaTaxiContent />
    </>
  );
}
