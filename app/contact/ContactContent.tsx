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
    value: "+91 98773 47600",
    href: "tel:+919877347600",
    subtitle: "Available 24/7",
  },
  {
    icon: Mail,
    title: "Email us",
    value: "info@bhardwajtravels.com",
    href: "mailto:info@bhardwajtravels.com",
    subtitle: "We reply within 2 hours",
  },
  {
    icon: MapPin,
    title: "Visit us",
    value: "[PLACEHOLDER] Office Address",
    href: "#map",
    subtitle: "New Delhi, India",
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

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.title}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-soft-gray hover:border-primary hover:shadow-[0_0_30px_rgba(255,214,10,0.08)] transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">
                {info.title}
              </h3>
              <p className="text-foreground text-sm font-medium">{info.value}</p>
              <p className="text-muted text-xs mt-1">{info.subtitle}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
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

      {/* Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="map">
        <div className="rounded-2xl overflow-hidden border border-soft-gray h-80">
          {/* [PLACEHOLDER] Replace lat/lng with actual office coordinates */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
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
