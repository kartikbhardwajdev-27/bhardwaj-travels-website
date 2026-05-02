"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  ShieldCheck,
  BadgeDollarSign,
  Wrench,
  Headphones,
  ThumbsUp,
  Heart,
} from "lucide-react";
import Button from "@/components/ui/Button";

const stats = [
  { label: "Years in Business", value: "20+" },
  { label: "Trips Completed", value: "5,00,000+" },
  { label: "Happy Customers", value: "4,00,000+" },
  { label: "Cities Covered", value: "1,000+" },
];

const reasons = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "We never sleep. Book a ride at 3 AM or 3 PM — our team is always ready to assist you.",
  },
  {
    icon: ShieldCheck,
    title: "Verified, Trained Drivers",
    description:
      "Every driver goes through rigorous background checks, training, and periodic evaluations.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden charges, no surge pricing. You see the fare before you book. That's our promise.",
  },
  {
    icon: Wrench,
    title: "Well-Maintained Fleet",
    description:
      "Regular servicing, daily cleaning, and thorough inspections keep our vehicles in top shape.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "A real person picks up the phone. Our support team handles issues promptly and personally.",
  },
  {
    icon: ThumbsUp,
    title: "Customer-First Approach",
    description:
      "Your comfort and safety are our top priorities. We go the extra mile — literally and figuratively.",
  },
];

function AnimatedCounter({ value }: { value: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display text-4xl sm:text-5xl font-bold text-primary"
    >
      {value}
    </motion.span>
  );
}

export default function AboutContent() {
  return (
    <div className="pt-32 lg:pt-40 pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Bhardwaj Travels
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            We&apos;re on a mission to make travel across North India safe,
            comfortable, and accessible for everyone.
          </p>
        </motion.div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Accent bar + label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-[3px] h-[36px] bg-primary rounded-full" />
              <span className="text-primary text-[11px] uppercase tracking-[0.15em] font-medium">
                Our Story
              </span>
            </div>

            {/* Large bold intro paragraph */}
            <p className="text-[26px] font-medium leading-[1.35] text-foreground mb-8">
              Bhardwaj Travels started with a simple idea — provide{" "}
              <span className="text-primary">reliable, honest</span>{" "}taxi
              services in a market full of uncertainty. What began as a small
              operation with just a handful of vehicles has grown into one of
              North India&apos;s most trusted travel companies.
            </p>

            {/* Two-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="border-l-2 border-[#2a2a2a] pl-5">
                <p className="text-[#999] text-[13px] leading-relaxed">
                  Over the years, we&apos;ve expanded our fleet, our routes, and
                  our team — but our core values have stayed the same.
                </p>
              </div>
              <div className="border-l-2 border-[#2a2a2a] pl-5">
                <p className="text-[#999] text-[13px] leading-relaxed">
                  Every driver is handpicked and trained. Every vehicle is
                  maintained to the highest standards. Every customer is treated
                  like family.
                </p>
              </div>
            </div>

            {/* Highlighted card */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[10px] px-6 py-5 flex items-start gap-4">
              <div className="w-8 h-8 bg-[#222] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Heart className="w-4 h-4 text-primary" />
              </div>
              <p className="text-[#bbb] text-[13px] leading-relaxed">
                Today, we serve thousands of customers every month — from daily
                commuters to families on vacation, from corporate executives to
                wedding parties. Whether it&apos;s a quick airport pickup or a
                week-long Himalayan adventure, Bhardwaj Travels delivers the
                same promise:{" "}
                <strong className="text-white font-semibold">
                  comfort, reliability, and a smile.
                </strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-black py-16 sm:py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <AnimatedCounter value={stat.value} />
                <p className="text-white/60 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us — Expanded */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-14"
        >
          Why choose Bhardwaj Travels
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-7 border border-soft-gray hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <reason.icon className="w-6 h-6 text-primary" />
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

      {/* CTA Banner */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-black mb-4">
              Ready to experience the difference?
            </h2>
            <p className="text-black/70 text-lg mb-8 max-w-md mx-auto">
              Join thousands of happy customers. Book your first ride today.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Book a Ride
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
