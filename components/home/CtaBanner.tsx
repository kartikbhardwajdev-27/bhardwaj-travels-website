"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CtaBanner() {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Ready to ride?
          </h2>
          <p className="text-black/70 text-lg mb-8 max-w-md mx-auto">
            Book your trip in under a minute. We&apos;ll handle the rest.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Book Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
