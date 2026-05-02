"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import BookRideForm from "@/components/forms/BookRideForm";
import PartnerForm from "@/components/forms/PartnerForm";

const contactInfo = [
  {
    icon: Phone,
    title: "Call us",
    value: "+91 94175 66648",
    href: "tel:+919417566648",
    subtitle: "Available 24/7",
  },
  {
    icon: Mail,
    title: "Email us",
    value: "bhardwajtravels999@gmail.com",
    href: "mailto:bhardwajtravels999@gmail.com",
    subtitle: "We reply within 2 hours",
  },
  {
    icon: MapPin,
    title: "Visit us",
    value: "Victoria City, Zirakpur, Mohali, Punjab - 140603",
    href: "#map",
    subtitle: "Zirakpur, Punjab, India",
  },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const defaultVehicle = searchParams.get("vehicle") || "";
  const [activeTab, setActiveTab] = useState<"book" | "partner">("book");

  return (
    <>
      {/* Tabs */}
      <div className="flex border-b border-soft-gray mb-8">
        <button
          onClick={() => setActiveTab("book")}
          className={`flex-1 pb-3 text-center font-medium transition-colors relative cursor-pointer ${
            activeTab === "book" ? "text-foreground" : "text-muted hover:text-foreground"
          }`}
        >
          Book a Ride
          {activeTab === "book" && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab("partner")}
          className={`flex-1 pb-3 text-center font-medium transition-colors relative cursor-pointer ${
            activeTab === "partner"
              ? "text-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          Partner with Us
          {activeTab === "partner" && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
            />
          )}
        </button>
      </div>

      {/* Form */}
      {activeTab === "book" ? (
        <BookRideForm defaultVehicle={defaultVehicle} />
      ) : (
        <PartnerForm />
      )}
    </>
  );
}

export default function ContactContent() {
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
            Get in touch
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Have a question or want to book a ride? We&apos;re here to help.
          </p>
        </motion.div>
      </div>

      {/* Form — full width on all breakpoints */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-6 sm:p-8 border border-soft-gray shadow-sm"
        >
          <Suspense fallback={<div className="h-96 flex items-center justify-center text-muted">Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </motion.div>
      </div>

      {/* Contact cards — stacked on mobile, 3-column row on desktop */}
      <div className="max-w-2xl md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.title}
              href={info.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-4 border border-soft-gray hover:border-primary hover:shadow-[0_0_20px_rgba(255,214,10,0.08)] transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <info.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-sm">
                  {info.title}
                </h3>
                <p className="text-foreground text-sm font-medium">{info.value}</p>
                <p className="text-muted text-xs mt-0.5">{info.subtitle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="map">
        <div className="rounded-2xl overflow-hidden border border-soft-gray h-80">
          <iframe
            src="https://maps.google.com/maps?q=30.651900412933028,76.80110464974004&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bhardwaj Travels Office Location"
          />
        </div>
      </div>
    </div>
  );
}
