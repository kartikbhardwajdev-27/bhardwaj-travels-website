import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: 'Contact Us – Book a Taxi or Get a Quote',
  description: 'Contact Bhardwaj Travels to book a cab, get a custom quote, or enquire about tour packages. Call +91 94175 66648 or WhatsApp us anytime.',
  alternates: { canonical: 'https://bhardwajtravels.com/contact' },
};

export default function ContactPage() {
  return <ContactContent />;
}
