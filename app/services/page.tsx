import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: 'Our Services – Taxi, Outstation, Airport, Wedding & Corporate',
  description: 'Explore all travel services by Bhardwaj Travels – local city taxi, outstation intercity trips, airport pickup & drop, tour packages, wedding bookings, and corporate rentals across North India.',
  alternates: { canonical: 'https://www.bhardwajtravels1.com/services' },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
