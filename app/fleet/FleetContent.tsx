"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Briefcase, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

type VehicleCategory = "all" | "sedan" | "suv" | "premium" | "tempo";

interface Vehicle {
  category: VehicleCategory;
  categoryLabel: string;
  models: string;
  capacity: string;
  bestFor: string;
  images: string[];
}

const vehicles: Vehicle[] = [
  {
    category: "sedan",
    categoryLabel: "SEDAN",
    models: "Swift Dzire / Honda Amaze",
    capacity: "4 passengers + driver",
    bestFor: "City rides, airport transfers, day trips",
    images: ["/images/fleet/sedan-1.jpg", "/images/fleet/sedan-2.jpg"],
  },
  {
    category: "suv",
    categoryLabel: "SUV",
    models: "Toyota Innova, Innova Crysta",
    capacity: "6 passengers + driver",
    bestFor: "Family trips, outstation",
    images: ["/images/fleet/suv-1.jpg"],
  },
  {
    category: "suv",
    categoryLabel: "SUV",
    models: "Ertiga, Kia Carens",
    capacity: "6 passengers + driver",
    bestFor: "Family trips, group travel, outstation",
    images: ["/images/fleet/suv-2.jpg", "/images/fleet/suv-3.jpg"],
  },
  {
    category: "premium",
    categoryLabel: "PREMIUM",
    models: "Mercedes E-Class / BMW 5 Series",
    capacity: "4 passengers + driver",
    bestFor: "VIP travel, executive travel, special occasions",
    images: ["/images/fleet/premium-1.jpg", "/images/fleet/premium-2.jpg"],
  },
  {
    category: "tempo",
    categoryLabel: "TEMPO TRAVELLER",
    models: "Force Tempo Traveller",
    capacity: "12–16 passengers + driver",
    bestFor: "Group tours, pilgrimages, events",
    images: ["/images/fleet/tempo-1.jpg", "/images/fleet/tempo-2.jpg"],
  },
  {
    category: "tempo",
    categoryLabel: "TEMPO TRAVELLER",
    models: "Luxury Tempo Traveller (AC, Push back seats)",
    capacity: "12–16 passengers + driver",
    bestFor: "Premium group travel, corporate tours, weddings",
    images: ["/images/fleet/tempo-3.jpg"],
  },
];

const filters: { value: VehicleCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
  { value: "premium", label: "Premium" },
  { value: "tempo", label: "Tempo Traveller" },
];

// ─── Reusable slideshow component ────────────────────────────────────────────
interface ImageSlideshowProps {
  images: string[];
  alt: string;
  categoryLabel: string;
}

function ImageSlideshow({ images, alt, categoryLabel }: ImageSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  // Auto-play — pauses while the user is hovering
  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [paused, images.length, next]);

  // Touch swipe (>30 px drag triggers prev/next)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 30) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div
      className="relative aspect-[3/2] overflow-hidden group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/*
        Strip approach: all images sit side-by-side in a flex row that is
        N × 100% wide. We translateX by -(current × 100%) to reveal the
        correct slide. overflow-hidden on the parent clips everything else.
      */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 400ms ease-in-out",
        }}
      >
        {images.map((src, i) => (
          <div key={src} className="relative min-w-full h-full shrink-0">
            <Image
              src={src}
              alt={`${alt} — photo ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Category badge */}
      <span className="absolute top-3 left-3 z-10 bg-primary text-black text-xs font-bold px-3 py-1 rounded-lg">
        {categoryLabel}
      </span>

      {/* Arrow buttons + dot indicators — only rendered when there are multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-4 bg-primary" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

export default function FleetContent() {
  const [active, setActive] = useState<VehicleCategory>("all");

  const filtered =
    active === "all"
      ? vehicles
      : vehicles.filter((v) => v.category === active);

  return (
    <div className="pt-32 lg:pt-40 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Fleet
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Well-maintained vehicles for every type of journey. Pick your ride
            and let&apos;s go.
          </p>
        </motion.div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                active === f.value
                  ? "bg-primary text-black"
                  : "bg-card text-muted border border-soft-gray hover:border-primary hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((vehicle, i) => (
              <motion.div
                key={`${vehicle.models}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl overflow-hidden border border-soft-gray hover:border-primary hover:shadow-[0_0_30px_rgba(255,214,10,0.08)] transition-all duration-300"
              >
                <ImageSlideshow
                  images={vehicle.images}
                  alt={vehicle.models}
                  categoryLabel={vehicle.categoryLabel}
                />
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                    {vehicle.models}
                  </h3>
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-muted text-sm">
                      <Users className="w-4 h-4 shrink-0" />
                      {vehicle.capacity}
                    </div>
                    <div className="flex items-center gap-2 text-muted text-sm">
                      <Briefcase className="w-4 h-4 shrink-0" />
                      Best for: {vehicle.bestFor}
                    </div>
                  </div>
                  <Link href={`/contact?vehicle=${vehicle.category}`}>
                    <Button size="sm" className="w-full">
                      Book this
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
