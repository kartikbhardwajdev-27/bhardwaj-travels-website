import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a ride or partner with Bhardwaj Travels. Get in touch via phone, email, or our online booking form. We respond within 2 hours.",
};

export default function ContactPage() {
  return <ContactContent />;
}
