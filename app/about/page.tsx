import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bhardwaj Travels — North India's trusted taxi and travel service. Our story, our values, and why thousands of customers choose us.",
};

export default function AboutPage() {
  return <AboutContent />;
}
