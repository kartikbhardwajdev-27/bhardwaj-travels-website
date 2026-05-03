import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: 'About Us – Bhardwaj Travels',
  description: "Learn about Bhardwaj Travels – North India's trusted taxi service based in Zirakpur, Punjab. Over 5 lakh trips, 5-star rated, with experienced and verified drivers.",
  alternates: { canonical: 'https://bhardwajtravels.com/about' },
};

export default function AboutPage() {
  return <AboutContent />;
}
