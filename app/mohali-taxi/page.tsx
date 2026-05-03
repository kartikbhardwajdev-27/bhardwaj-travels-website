import type { Metadata } from "next";
import MohaliTaxiContent from "./MohaliTaxiContent";

export const metadata: Metadata = {
  title: "Taxi Service in Mohali | Bhardwaj Travels – Book 24/7",
  description:
    "Need a taxi in Mohali? Bhardwaj Travels provides reliable cab service in Mohali for local travel, airport drops, IT park commutes & outstation trips. Available 24/7 with verified drivers. Call +91 94175 66648.",
  alternates: { canonical: "https://www.bhardwajtravels1.com/mohali-taxi" },
};

export default function MohaliTaxiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Bhardwaj Travels – Taxi Service in Mohali",
            description:
              "24/7 cab service in Mohali for airport transfers, IT park commutes, outstation trips, corporate travel, and wedding fleet.",
            url: "https://www.bhardwajtravels1.com/mohali-taxi",
            telephone: "+919417566648",
            areaServed: "Mohali",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mohali",
              addressRegion: "Punjab",
              addressCountry: "IN",
            },
            priceRange: "$$",
            openingHours: "Mo-Su 00:00-23:59",
          }),
        }}
      />
      <MohaliTaxiContent />
    </>
  );
}
