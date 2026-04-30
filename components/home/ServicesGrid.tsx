"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  Route,
  Plane,
  Map,
  Heart,
  Building2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Local City Taxi",
    description: "Comfortable rides for all your in-city travel needs.",
  },
  {
    icon: Route,
    title: "Outstation / Intercity",
    description: "Seamless intercity travel with experienced drivers.",
  },
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    description: "Timely airport transfers — never miss a flight.",
  },
  {
    icon: Map,
    title: "Tour Packages & Sightseeing",
    description: "Explore North India with curated tour packages.",
  },
  {
    icon: Heart,
    title: "Wedding & Event Bookings",
    description: "Premium fleet for your special occasions.",
  },
  {
    icon: Building2,
    title: "Corporate / Monthly Rentals",
    description: "Dedicated vehicles for businesses and teams.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 sm:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What we offer
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            From daily commutes to dream vacations — we&apos;ve got the ride for
            every occasion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href="/services"
                className="group block bg-card rounded-2xl p-7 border border-soft-gray hover:border-primary hover:shadow-[0_0_30px_rgba(255,214,10,0.08)] transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
