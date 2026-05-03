"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Plane, Car, MapPin, Briefcase, Heart, Map,
  Award, ShieldCheck, Clock, BadgeDollarSign, Wrench,
  Users, ArrowRight, Phone,
} from "lucide-react";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    description: "Smooth transfers between Zirakpur and Chandigarh International Airport — never miss a flight.",
  },
  {
    icon: Car,
    title: "Local Cab Service in Zirakpur",
    description: "Quick, affordable taxis for all your local trips within Zirakpur and the Tricity area.",
  },
  {
    icon: MapPin,
    title: "Outstation from Zirakpur",
    description: "Comfortable rides to Manali, Shimla, Amritsar, Kasauli, and all major North India destinations.",
  },
  {
    icon: Briefcase,
    title: "Corporate Cab Service",
    description: "Reliable corporate travel from Zirakpur for daily office commutes and executive transfers.",
  },
  {
    icon: Heart,
    title: "Wedding Fleet Zirakpur",
    description: "Elegant wedding cars and group vehicles for your big day in Zirakpur and surrounding areas.",
  },
  {
    icon: Map,
    title: "Tour Packages from Zirakpur",
    description: "Explore North India's scenic hills and pilgrimage sites with our expertly curated tour packages.",
  },
];

const whyUs = [
  {
    icon: Award,
    title: "20+ Years of Experience",
    description: "Two decades of trusted taxi and travel service — headquartered right here in Zirakpur.",
  },
  {
    icon: ShieldCheck,
    title: "Verified, Trained Drivers",
    description: "Background-checked, experienced, and courteous professionals.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service — book anytime, travel anytime.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description: "No hidden charges. Know your fare before you ride.",
  },
  {
    icon: Wrench,
    title: "Well-Maintained Fleet",
    description: "Every vehicle is regularly serviced and inspected for your safety.",
  },
];

const fleet = [
  {
    type: "Sedan",
    capacity: "4 passengers",
    image: "/images/fleet/sedan-1.jpg",
    alt: "Sedan – Swift Dzire / Honda Amaze available in Zirakpur",
  },
  {
    type: "SUV",
    capacity: "6 passengers",
    image: "/images/fleet/suv-1.jpg",
    alt: "SUV – Innova Crysta, Ertiga, KIA Carens available in Zirakpur",
  },
  {
    type: "Premium",
    capacity: "4 passengers",
    image: "/images/fleet/premium-1.jpg",
    alt: "Premium – Mercedes E-Class / BMW 5 Series / Audi A6 in Zirakpur",
  },
  {
    type: "Tempo Traveller",
    capacity: "12–16 passengers",
    image: "/images/fleet/tempo-1.jpg",
    alt: "Tempo Traveller for group travel from Zirakpur",
  },
];

export default function ZirakpurTaxiContent() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-off-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-primary/20">
              Zirakpur · Available 24/7
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Taxi Service in<br />
              <span className="text-primary">Zirakpur</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto mb-10">
              24/7 cab service for local travel, airport drops, outstation trips and corporate travel — based in Zirakpur, serving the entire Tricity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+919417566648">
                <Button variant="outline" size="lg">
                  <Phone className="w-5 h-5" />
                  Call +91 94175 66648
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services in Zirakpur
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Every trip, big or small — we have the right cab waiting for you in Zirakpur.
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
                className="bg-card rounded-2xl p-6 border border-soft-gray hover:border-primary hover:shadow-[0_0_30px_rgba(255,214,10,0.08)] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-14"
          >
            Why Zirakpur Trusts Bhardwaj Travels
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {whyUs.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4"
          >
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Our Fleet in Zirakpur
              </h2>
              <p className="text-muted max-w-md">
                From compact sedans to spacious group travellers — all well-maintained and ready to roll.
              </p>
            </div>
            <Link href="/fleet">
              <Button variant="ghost" size="sm">
                See full fleet
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((vehicle, i) => (
              <motion.div
                key={vehicle.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href="/fleet"
                  className="group block bg-card rounded-2xl overflow-hidden border border-soft-gray hover:border-primary hover:shadow-[0_0_30px_rgba(255,214,10,0.08)] transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden bg-zinc-900">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      {vehicle.type}
                    </h3>
                    <div className="flex items-center gap-1.5 text-muted text-sm">
                      <Users className="w-4 h-4" />
                      {vehicle.capacity}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
              Book Your Zirakpur Taxi Now
            </h2>
            <p className="text-black/70 text-xl mb-8 max-w-2xl mx-auto">
              Trusted by thousands in Zirakpur. Reliable rides, zero surprises.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="!px-10 !text-xl">
                Book Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
