import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import FleetHighlight from "@/components/home/FleetHighlight";
import PackagesHighlight from "@/components/home/PackagesHighlight";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata = {
  title: 'Bhardwaj Travels – Trusted Taxi Service from Zirakpur & Chandigarh',
  description: 'Book a taxi from Zirakpur or Chandigarh for outstation trips, airport transfers, weddings, corporate travel & tour packages across North India. 24/7 service, verified drivers.',
  alternates: { canonical: 'https://www.bhardwajtravels1.com' },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FleetHighlight />
      <PackagesHighlight />
      <WhyChooseUs />
      <CtaBanner />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Bhardwaj Travels",
            description:
              "Reliable taxi and travel services across North India. Outstation, airport transfers, weddings, corporate rentals, and tour packages.",
            url: "https://bhardwajtravels.com",
            telephone: "+919417566648",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Zirakpur",
              addressRegion: "Punjab",
              addressCountry: "IN",
            },
            areaServed: "North India",
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "500",
            },
          }),
        }}
      />
    </>
  );
}
