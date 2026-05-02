"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const vehicles = [
  {
    type: "Sedan",
    capacity: "4 passengers",
    image: "/images/fleet/sedan-1.jpg",
    alt: "Sedan – Swift Dzire / Honda Amaze",
  },
  {
    type: "SUV",
    capacity: "6 passengers",
    image: "/images/fleet/suv-1.jpg",
    alt: "SUV – Innova Crysta, Ertiga, Kia Carens, Hycross, Rumion",
  },
  {
    type: "Premium",
    capacity: "4 passengers",
    image: "/images/fleet/premium-1.jpg",
    alt: "Premium – Mercedes E-Class / BMW 5 Series / Audi A6",
  },
  {
    type: "Tempo Traveller",
    capacity: "12–16 passengers",
    image: "/images/fleet/tempo-1.jpg",
    alt: "Tempo Traveller – Force Urban / Force Tempo Traveller",
  },
];

export default function FleetHighlight() {
  return (
    <section className="py-20 sm:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4"
        >
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              A vehicle for every journey
            </h2>
            <p className="text-muted max-w-md">
              Choose from our well-maintained fleet — from economy sedans to
              spacious travellers.
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
          {vehicles.map((vehicle, i) => (
            <motion.div
              key={vehicle.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/fleet`}
                className="group block bg-off-white rounded-2xl overflow-hidden border border-soft-gray hover:border-primary hover:shadow-[0_0_30px_rgba(255,214,10,0.08)] transition-all duration-300"
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
  );
}
