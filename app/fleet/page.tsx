import type { Metadata } from "next";
import FleetContent from "./FleetContent";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Explore our well-maintained fleet of sedans, SUVs, premium cars, and tempo travellers. Find the perfect vehicle for your journey with Bhardwaj Travels.",
};

export default function FleetPage() {
  return <FleetContent />;
}
