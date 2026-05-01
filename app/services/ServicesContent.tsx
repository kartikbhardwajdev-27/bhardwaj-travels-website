"use client";

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
} from "lucide-react";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Car,
    title: "Local City Taxi",
    image: "/images/services/city-taxi.jpg",
    alt: "Local city taxi service in Delhi NCR",
    description: [
      "Need a reliable ride within the city? Our local taxi service covers every corner of Delhi NCR and major North Indian cities. Whether it's a quick errand, a meeting across town, or a day of shopping, we've got you covered.",
      "Our drivers know the city inside and out. They'll get you there on time, every time — taking the fastest routes while keeping you comfortable.",
      "Available round the clock with both AC and non-AC options. Hatchbacks, sedans, and SUVs — pick what suits your ride.",
    ],
  },
  {
    icon: Route,
    title: "Outstation / Intercity",
    image: "/images/services/outstation.jpg",
    alt: "Outstation intercity cab service from Chandigarh",
    description: [
      "Planning a trip to another city? Our outstation service makes intercity travel comfortable and hassle-free. From one-way drops to round trips, we handle it all.",
      "We cover all major North Indian routes — Chandigarh to Manali, Shimla, Jaipur, Agra, Rishikesh, Amritsar, and hundreds more. Multi-day bookings available with experienced long-distance drivers.",
      "Transparent pricing with no hidden tolls or extra charges. Your fare includes everything — just sit back and enjoy the journey.",
    ],
  },
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    image: "/images/services/airport-transfer.jpg",
    alt: "Airport pickup and drop service at IGI Delhi",
    description: [
      "Never stress about getting to the airport on time. Our airport transfer service tracks your flight status and adjusts pickup times accordingly — so you're never left waiting.",
      "We serve all major airports in North India including IGI Delhi, Chandigarh, Jaipur, and Lucknow. Meet-and-greet service available for premium bookings.",
      "Early morning or late night — our drivers are always on time. Flat-rate pricing with no surge charges, ever.",
    ],
  },
  {
    icon: Map,
    title: "Tour Packages & Sightseeing",
    image: "/images/services/tour-packages.jpg",
    alt: "Tour packages and sightseeing across North India",
    description: [
      "Explore North India's most beautiful destinations with our curated tour packages. We plan the route, arrange the stays, and provide an experienced driver-guide.",
      "Popular packages include the Golden Triangle (Delhi-Agra-Jaipur), Himachal Hill Stations, Uttarakhand Spiritual Circuit, and Punjab Heritage tours. Custom itineraries available on request.",
      "Family trips, honeymoon packages, group tours — we tailor every package to your needs and budget. Just tell us where you want to go.",
    ],
  },
  {
    icon: Heart,
    title: "Wedding & Event Bookings",
    image: "/images/services/wedding-fleet.jpg",
    alt: "Premium wedding fleet and event transportation service",
    description: [
      "Make your special day even more special with our premium wedding fleet. Decorated vehicles for the baraat, luxury cars for the couple, and shuttle service for guests.",
      "We understand that weddings require flawless coordination. Our dedicated event manager works with your wedding planner to ensure every guest reaches every venue on time.",
      "Multi-vehicle packages available — from 5 to 50+ cars. Sedans, SUVs, luxury vehicles, and tempo travellers to accommodate every need.",
    ],
  },
  {
    icon: Building2,
    title: "Corporate / Monthly Rentals",
    image: "/images/services/corporate-rental.jpg",
    alt: "Corporate cab and monthly car rental service for businesses",
    description: [
      "Reliable transportation for your business. Whether you need a daily office commute vehicle, client pickup service, or a fleet for your entire team — we offer flexible corporate plans.",
      "Monthly rental packages with dedicated drivers, fuel included. Customizable routes, timings, and vehicle types to match your company's requirements.",
      "GST-compliant billing, professional chauffeurs, and a dedicated account manager for every corporate client. Scale up or down as needed — no long-term lock-in.",
    ],
  },
];

export default function ServicesContent() {
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col gap-10 items-center ${
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
