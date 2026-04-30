import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/fleet", label: "Our Fleet" },
];

const serviceLinks = [
  { href: "/services", label: "Local City Taxi" },
  { href: "/services", label: "Outstation Trips" },
  { href: "/services", label: "Airport Transfers" },
  { href: "/services", label: "Tour Packages" },
  { href: "/services", label: "Wedding Bookings" },
  { href: "/services", label: "Corporate Rentals" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5" aria-label="Bhardwaj Travels">
              <Image
                src="/logo.svg"
                alt="Bhardwaj Travels"
                width={1024}
                height={1024}
                sizes="40px"
                className="h-10 w-10 shrink-0"
              />
              <span className="font-display font-bold text-sm tracking-[0.18em] uppercase text-white">
                Bhardwaj Travels
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              North India&apos;s trusted travel partner. Reliable taxi services
              for every journey — local, outstation, airports, weddings, and
              corporate travel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919877347600"
                  className="flex items-start gap-3 text-white/60 text-sm hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  +91 98773 47600
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bhardwajtravels.com"
                  className="flex items-start gap-3 text-white/60 text-sm hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  info@bhardwajtravels.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>[PLACEHOLDER] Office Address, New Delhi, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Bhardwaj Travels. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/40 text-sm hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-white/40 text-sm hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-white/40 text-sm hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
