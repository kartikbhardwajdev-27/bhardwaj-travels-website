import type { Metadata } from "next";
import FleetContent from "./FleetContent";

export const metadata: Metadata = {
  title: 'Our Fleet – Sedan, SUV, Premium & Tempo Traveller',
  description: 'Choose from our well-maintained fleet – Swift Dzire, Honda Amaze, Innova Crysta, XUV700, BMW 5 Series, Mercedes, and Tempo Travellers for groups. Available 24/7 across North India.',
  alternates: { canonical: 'https://bhardwajtravels.com/fleet' },
};

export default function FleetPage() {
  return <FleetContent />;
}
