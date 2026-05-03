import type { Metadata } from "next";
import ChandigarhTaxiContent from "./ChandigarhTaxiContent";

export const metadata: Metadata = {
  title: "Taxi Service in Chandigarh | Bhardwaj Travels – Book 24/7",
  description:
    "Looking for a reliable taxi in Chandigarh? Bhardwaj Travels offers 24/7 cab service in Chandigarh for airport transfers, outstation trips, local travel & more. Call +91 94175 66648.",
  alternates: { canonical: "https://www.bhardwajtravels1.com/chandigarh-taxi" },
};

export default function ChandigarhTaxiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Bhardwaj Travels – Taxi Service in Chandigarh",
            description:
              "24/7 taxi and cab service in Chandigarh for airport transfers, outstation trips, local travel, corporate cabs, and wedding fleet.",
            url: "https://www.bhardwajtravels1.com/chandigarh-taxi",
            telephone: "+919417566648",
            areaServed: "Chandigarh",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chandigarh",
              addressRegion: "Chandigarh",
              addressCountry: "IN",
            },
            priceRange: "$$",
            openingHours: "Mo-Su 00:00-23:59",
          }),
        }}
      />
      <ChandigarhTaxiContent />
    </>
  );
}
