"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, BadgeDollarSign, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service — book anytime, travel anytime.",
  },
  {
    icon: ShieldCheck,
    title: "Verified, Trained Drivers",
    description: "Background-checked, experienced, and courteous professionals.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description: "No hidden charges. Know your fare before you ride.",
  },
  {
    icon: Wrench,
    title: "Well-Maintained Fleet",
    description: "Every vehicle is regularly serviced and inspected for safety.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-14"
        >
          Why choose us
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
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
              <p className="text-muted text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
