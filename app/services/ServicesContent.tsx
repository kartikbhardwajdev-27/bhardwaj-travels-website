"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Car,
  Route,
  Plane,
  Map,
  Heart,
  Building2,
  Users,
} from "lucide-react";
import Button from "@/components/ui/Button";

const services = [
  {
    id: "local-city-taxi",
    icon: Car,
    title: "Local City Taxi",
    image: "/images/services/city-taxi.jpg",
    alt: "Local city taxi service in Chandigarh",
    description: [
      "Reliable city rides across Chandigarh and nearby areas — errands, meetings, or a day out, we've got you covered.",
      "Available 24/7. Hatchbacks, sedans, and SUVs — AC and non-AC options.",
    ],
  },
  {
    id: "outstation-intercity",
    icon: Route,
    title: "Outstation / Intercity",
    image: "/images/services/outstation.jpg",
    alt: "Outstation intercity cab service from Chandigarh",
    description: [
      "Comfortable intercity travel — one-way or round trip, we handle it all.",
      "Popular routes: Chandigarh to Manali, Shimla, Jaipur, Agra, Rishikesh, Amritsar, and more. Experienced long-distance drivers for multi-day trips.",
      "Transparent pricing — no hidden tolls or extra charges.",
    ],
  },
  {
    id: "airport-pickup-drop",
    icon: Plane,
    title: "Airport Pickup & Drop",
    image: "/images/services/airport-transfer.jpg",
    alt: "Airport pickup and drop service across North India",
    description: [
      "On-time airport transfers with real-time flight tracking — no waiting, no stress.",
      "We serve Chandigarh International Airport and other major North India airports. Meet-and-greet available on request.",
      "Flat-rate pricing. No surge charges, ever.",
    ],
  },
  {
    id: "tour-packages-sightseeing",
    icon: Map,
    title: "Tour Packages & Sightseeing",
    image: "/images/services/tour-packages.jpg",
    alt: "Tour packages and sightseeing across North India",
    description: [
      "Curated North India tours — we plan the route, arrange stays, and provide an experienced driver-guide.",
      "Popular packages: Himachal Hill Stations, Chandigarh to Manali/Shimla, Punjab Heritage, Uttarakhand Spiritual Circuit. Custom itineraries on request.",
      "Family trips, honeymoon packages, group tours — tailored to your budget.",
    ],
  },
  {
    id: "wedding-event-bookings",
    icon: Heart,
    title: "Wedding & Event Bookings",
    image: "/images/services/wedding-fleet.jpg",
    alt: "Premium wedding fleet and event transportation service",
    description: [
      "Premium wedding fleet — decorated vehicles for the baraat, luxury cars for the couple, shuttle service for guests.",
      "Packages from 5 to 50+ vehicles. Sedans, SUVs, luxury cars, and tempo travellers.",
      "Dedicated event coordinator to ensure every guest reaches every venue on time.",
    ],
  },
  {
    id: "corporate-monthly-rentals",
    icon: Building2,
    title: "Corporate / Monthly Rentals",
    image: "/images/services/corporate-rental.jpg",
    alt: "Corporate cab and monthly car rental service for businesses",
    description: [
      "Daily office commutes, client pickups, or full fleet for your team — flexible corporate plans to suit your business.",
      "Dedicated drivers, customizable routes and timings. GST-compliant billing with a dedicated account manager.",
    ],
  },
  {
    id: "conference-cab-service",
    icon: Users,
    title: "Conference Cab Service",
    image: "https://placehold.co/800x450/1a1a2e/ffffff?text=Conference+Cab+Service",
    alt: "Conference cab service for corporate events and seminars",
    description: [
      "Group transportation for conferences, seminars, and corporate events — on-time, organised, and hassle-free.",
      "We coordinate pick-up and drop for delegates from hotels, airports, and railway stations to the venue. Fleet includes tempo travellers, SUVs, and mini-buses for any group size.",
      "Single-point booking for the entire event. Dedicated coordinator, real-time tracking, and punctual service guaranteed.",
    ],
  },
];

export default function ServicesContent() {
  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const el = document.getElementById(hash);
      if (!el) return;
      const top =
        el.offsetTop - window.innerHeight / 2 + el.offsetHeight / 2;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    };

    const timer = setTimeout(scrollToSection, 100);
    window.addEventListener("hashchange", scrollToSection);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToSection);
    };
  }, []);

  return (
    <div className="pt-32 lg:pt-40 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Everything you need for comfortable, reliable travel across North
            India — all under one roof.
          </p>
        </motion.div>
      </div>

      {/* Service Blocks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            id={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`scroll-mt-20 flex flex-col gap-10 items-center ${
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-soft-gray">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />
              </div>
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {service.title}
                </h2>
              </div>
              <div className="space-y-4 mb-6">
                {service.description.map((para, j) => (
                  <p key={j} className="text-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <Link href="/contact">
                <Button>Get a quote</Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
