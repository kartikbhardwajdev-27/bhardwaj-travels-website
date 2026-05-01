"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const packages = [
  { route: "Chandigarh → Manali", duration: "6D / 5N" },
  { route: "Chandigarh → Shimla", duration: "2D / 1N" },
  { route: "Chandigarh → Amritsar", duration: "2D / 1N" },
  { route: "Chandigarh → Jammu & Kashmir", duration: "7D / 6N" },
  { route: "Chandigarh → Leh-Ladakh", duration: "7D / 6N" },
  { route: "Chandigarh → Jaipur", duration: "4D / 3N" },
];

export default function PackagesHighlight() {
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
            Popular routes &amp; packages
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Explore our most-booked routes. All packages are fully customizable
            — just inquire and we&apos;ll plan it for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.route}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 border border-soft-gray hover:border-primary hover:shadow-[0_0_30px_rgba(255,214,10,0.08)] transition-all duration-300"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {pkg.route}
              </h3>
              <div className="flex items-center gap-1.5 text-muted text-sm mb-5">
                <Clock className="w-4 h-4" />
                {pkg.duration}
              </div>
              <Link href="/contact">
                <Button size="sm" variant="primary" className="w-full">
                  Inquire now
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/contact">
            <Button variant="ghost">
              Custom route in mind? Let&apos;s plan it
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
