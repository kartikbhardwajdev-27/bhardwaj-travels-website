import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From local city taxis to outstation trips, airport transfers, tour packages, wedding bookings, and corporate rentals — Bhardwaj Travels has you covered.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
