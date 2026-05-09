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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "TaxiService"],
            "name": "Bhardwaj Travels",
            "description": "Reliable taxi and cab service across North India. Outstation trips, airport transfers, wedding fleet, corporate rentals and tour packages from Zirakpur, Chandigarh.",
            "url": "https://www.bhardwajtravels1.com",
            "telephone": "+919417566648",
            "email": "bhardwajtravels999@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "218-O, Victoria City, Bhabat",
              "addressLocality": "Zirakpur",
              "addressRegion": "Punjab",
              "postalCode": "140603",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 30.651262549534998,
              "longitude": 76.8008999390526
            },
            "hasMap": "https://maps.app.goo.gl/dLb2n93xEZT8C8TY8",
            "areaServed": [
              "Zirakpur", "Chandigarh", "Mohali", "Panchkula", "North India"
            ],
            "serviceType": [
              "Local City Taxi",
              "Outstation Cab",
              "Airport Transfer",
              "Wedding Fleet",
              "Corporate Rental",
              "Tour Packages"
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "priceRange": "₹₹",
            "currenciesAccepted": "INR",
            "paymentAccepted": "Cash, UPI, Bank Transfer",
            "logo": "https://www.bhardwajtravels1.com/logo.svg",
            "image": "https://www.bhardwajtravels1.com/opengraph-image.jpg",
            "sameAs": [
              "https://maps.app.goo.gl/dLb2n93xEZT8C8TY8"
            ]
          }),
        }}
      />
      <Hero />
      <ServicesGrid />
      <FleetHighlight />
      <PackagesHighlight />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
