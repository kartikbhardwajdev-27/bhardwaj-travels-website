"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Briefcase, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

type VehicleCategory = "all" | "sedan" | "suv" | "premium" | "tempo";

interface VehiclePhotos {
  exterior: string;
  interior: string[];
}

interface Vehicle {
  category: VehicleCategory;
  categoryLabel: string;
  models: string;
  capacity: string;
  bestFor: string;
  image: string;
  photos?: VehiclePhotos;
}

const vehicles: Vehicle[] = [
  // Sedan
  {
    category: "sedan",
    categoryLabel: "SEDAN",
    models: "Swift Dzire",
    capacity: "4 passengers",
    bestFor: "City rides, airport transfers, day trips",
    image: "/images/fleet/sedan-1.jpg",
    photos: {
      exterior: "/images/fleet/sedan/swift-dzire/photos/exterior.webp",
      interior: [
        "/images/fleet/sedan/swift-dzire/photos/interior-1.webp",
        "/images/fleet/sedan/swift-dzire/photos/interior-2.webp",
        "/images/fleet/sedan/swift-dzire/photos/interior-3.webp",
        "/images/fleet/sedan/swift-dzire/photos/interior-4.webp",
        "/images/fleet/sedan/swift-dzire/photos/interior-5.webp",
      ],
    },
  },
  {
    category: "sedan",
    categoryLabel: "SEDAN",
    models: "Honda Amaze",
    capacity: "4 passengers",
    bestFor: "City rides, airport transfers, day trips",
    image: "/images/fleet/sedan-2.jpg",
    photos: {
      exterior: "/images/fleet/sedan/honda-amaze/photos/exterior.webp",
      interior: [
        "/images/fleet/sedan/honda-amaze/photos/interior-1.webp",
        "/images/fleet/sedan/honda-amaze/photos/interior-2.webp",
        "/images/fleet/sedan/honda-amaze/photos/interior-3.webp",
        "/images/fleet/sedan/honda-amaze/photos/interior-4.webp",
      ],
    },
  },
  // SUV
  {
    category: "suv",
    categoryLabel: "SUV",
    models: "Innova Crysta",
    capacity: "6 passengers",
    bestFor: "Family trips, outstation",
    image: "/images/fleet/suv-1.jpg",
    photos: {
      exterior: "/images/fleet/suv/innova-crysta/photos/exterior.webp",
      interior: [
        "/images/fleet/suv/innova-crysta/photos/interior-1.webp",
        "/images/fleet/suv/innova-crysta/photos/interior-2.webp",
        "/images/fleet/suv/innova-crysta/photos/interior-3.webp",
        "/images/fleet/suv/innova-crysta/photos/interior-4.webp",
      ],
    },
  },
  {
    category: "suv",
    categoryLabel: "SUV",
    models: "Ertiga",
    capacity: "6 passengers",
    bestFor: "Family trips, group travel, outstation",
    image: "/images/fleet/suv-2.jpg",
  },
  {
    category: "suv",
    categoryLabel: "SUV",
    models: "Kia Carens",
    capacity: "6 passengers",
    bestFor: "Family trips, group travel, outstation",
    image: "/images/fleet/suv-3.jpg",
  },
  {
    category: "suv",
    categoryLabel: "SUV",
    models: "Hycross",
    capacity: "6 passengers",
    bestFor: "Family trips, outstation, premium travel",
    image: "/images/fleet/suv-1.jpg",
  },
  {
    category: "suv",
    categoryLabel: "SUV",
    models: "Rumion",
    capacity: "6 passengers",
    bestFor: "City rides, family trips, outstation",
    image: "/images/fleet/suv-2.jpg",
  },
  // Premium
  {
    category: "premium",
    categoryLabel: "PREMIUM",
    models: "Mercedes E-Class",
    capacity: "4 passengers",
    bestFor: "VIP travel, executive travel, special occasions",
    image: "/images/fleet/premium-1.jpg",
  },
  {
    category: "premium",
    categoryLabel: "PREMIUM",
    models: "BMW 5 Series",
    capacity: "4 passengers",
    bestFor: "VIP travel, executive travel, special occasions",
    image: "/images/fleet/premium-2.jpg",
  },
  {
    category: "premium",
    categoryLabel: "PREMIUM",
    models: "Mercedes S-Class",
    capacity: "4 passengers",
    bestFor: "VIP travel, executive travel, weddings",
    image: "/images/fleet/premium-1.jpg",
  },
  {
    category: "premium",
    categoryLabel: "PREMIUM",
    models: "Audi A4",
    capacity: "4 passengers",
    bestFor: "Executive travel, airport transfers, corporate",
    image: "/images/fleet/premium-2.jpg",
  },
  {
    category: "premium",
    categoryLabel: "PREMIUM",
    models: "Audi A6",
    capacity: "4 passengers",
    bestFor: "VIP travel, corporate tours, special occasions",
    image: "/images/fleet/premium-1.jpg",
  },
  // Tempo Traveller
  {
    category: "tempo",
    categoryLabel: "TEMPO TRAVELLER",
    models: "Force Urban",
    capacity: "12–16 passengers",
    bestFor: "Group tours, pilgrimages, events",
    image: "/images/fleet/tempo-1.jpg",
  },
  {
    category: "tempo",
    categoryLabel: "TEMPO TRAVELLER",
    models: "Force Tempo Traveller",
    capacity: "12–16 passengers",
    bestFor: "Group tours, pilgrimages, events",
    image: "/images/fleet/tempo-2.jpg",
  },
  {
    category: "tempo",
    categoryLabel: "TEMPO TRAVELLER",
    models: "Luxury Tempo Traveller (AC, Push-back seats)",
    capacity: "12–16 passengers",
    bestFor: "Premium group travel, corporate tours, weddings",
    image: "/images/fleet/tempo-3.jpg",
  },
];

const filters: { value: VehicleCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
  { value: "premium", label: "Premium" },
  { value: "tempo", label: "Tempo Traveller" },
];

function CategoryBadge({ label, isPremium }: { label: string; isPremium: boolean }) {
  if (isPremium) {
    return (
      <span className="absolute top-3 left-3 z-10 bg-zinc-900 text-[#FDE047] border border-[#FDE047]/40 text-xs font-bold px-3 py-1 rounded-lg tracking-wide">
        {label}
      </span>
    );
  }
  return (
    <span className="absolute top-3 left-3 z-10 bg-[#FDE047] text-zinc-900 text-xs font-bold px-3 py-1 rounded-lg tracking-wide">
      {label}
    </span>
  );
}

function VehiclePhotoArea({ vehicle }: { vehicle: Vehicle }) {
  const photos = vehicle.photos;
  const allPhotos = photos ? [photos.exterior, ...photos.interior] : [];

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-play: cycle through all photos every 3 s, skip when paused
  useEffect(() => {
    if (!photos || paused) return;
    const id = setInterval(
      () => setIdx((i) => (i + 1) % allPhotos.length),
      3000
    );
    return () => clearInterval(id);
  }, [photos, paused, allPhotos.length]);

  // Cleanup pending resume timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // Plain photo area — no toggle, no auto-play
  if (!photos) {
    return (
      <div className="relative h-[200px] overflow-hidden shrink-0">
        <Image
          src={vehicle.image}
          alt={vehicle.models}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <CategoryBadge
          label={vehicle.categoryLabel}
          isPremium={vehicle.category === "premium"}
        />
      </div>
    );
  }

  // Derived state — no separate view/interiorIdx needed
  const view = idx === 0 ? "exterior" : "interior";
  const currentSrc = allPhotos[idx];

  const manualNav = (newIdx: number) => {
    setIdx(newIdx);
    setPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setPaused(false), 5000);
  };

  const goPrev = () => manualNav((idx - 1 + allPhotos.length) % allPhotos.length);
  const goNext = () => manualNav((idx + 1) % allPhotos.length);

  return (
    <div className="relative h-[200px] overflow-hidden shrink-0">
      {/* Crossfade image layer */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSrc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0"
        >
          <Image
            src={currentSrc}
            alt={vehicle.models}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <CategoryBadge
        label={vehicle.categoryLabel}
        isPremium={vehicle.category === "premium"}
      />

      {/* Navigation arrows — visible for all photos */}
      <button
        onClick={goPrev}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={goNext}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Toggle pills — active state derived from current photo position */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-0.5 bg-white/20 backdrop-blur-sm rounded-full px-1 py-1">
        <button
          onClick={() => manualNav(0)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            view === "exterior"
              ? "bg-[#1a1a1a] text-white"
              : "bg-transparent text-white/60"
          }`}
        >
          Exterior
        </button>
        <button
          onClick={() => manualNav(1)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            view === "interior"
              ? "bg-[#1a1a1a] text-white"
              : "bg-transparent text-white/60"
          }`}
        >
          Interior
        </button>
      </div>
    </div>
  );
}

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
                className="bg-card rounded-2xl overflow-hidden border border-soft-gray hover:border-primary hover:shadow-[0_0_30px_rgba(253,224,71,0.08)] transition-all duration-300 flex flex-col"
              >
                <VehiclePhotoArea vehicle={vehicle} />

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                    {vehicle.models}
                  </h3>
                  <div className="space-y-2 mb-5 flex-1">
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
