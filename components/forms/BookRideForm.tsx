"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookRideSchema, type BookRideData, tripTypes, vehicleTypes } from "@/lib/schemas";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import FormSuccess from "./FormSuccess";

interface BookRideFormProps {
  defaultVehicle?: string;
}

const tripTypeOptions = tripTypes.map((t) => ({ value: t, label: t }));
const vehicleOptions = vehicleTypes.map((v) => ({ value: v, label: v }));

const needsDropLocation = [
  "Outstation / Intercity",
  "Airport Pickup",
  "Airport Drop",
];

export default function BookRideForm({ defaultVehicle }: BookRideFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookRideData>({
    resolver: zodResolver(bookRideSchema),
    defaultValues: {
      vehicleType: (defaultVehicle as BookRideData["vehicleType"]) || undefined,
    },
  });

  const tripType = watch("tripType");
  const showDrop = needsDropLocation.includes(tripType);

  async function onSubmit(data: BookRideData) {
    setServerError("");
    try {
      const res = await fetch("/api/book-ride", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setServerError(
          json.error || "Something went wrong. Please try calling us at +91 98773 47600."
        );
      }
    } catch {
      setServerError(
        "Something went wrong. Please try calling us at +91 98773 47600."
      );
    }
  }

  if (submitted) {
    return (
      <FormSuccess
        message="We've received your booking enquiry. Check your email for confirmation. We'll respond within 2 hours."
        onReset={() => {
          reset();
          setSubmitted(false);
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {serverError && (
        <div className="bg-error/10 border border-error/20 text-error rounded-xl px-4 py-3 text-sm">
          {serverError}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Full Name"
          placeholder="Your full name"
          required
          {...register("fullName")}
          error={errors.fullName?.message}
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="10-digit number"
          required
          {...register("phone")}
          error={errors.phone?.message}
        />
      </div>

      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        required
        {...register("email")}
        error={errors.email?.message}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Select
          label="Type of Trip"
          required
          options={tripTypeOptions}
          placeholder="Select trip type"
          {...register("tripType")}
          error={errors.tripType?.message}
        />
        <Input
          label="Number of Passengers"
          type="number"
          min={1}
          max={20}
          placeholder="e.g. 4"
          required
          {...register("passengers", { valueAsNumber: true })}
          error={errors.passengers?.message}
        />
      </div>

      <Select
        label="Preferred Vehicle Type"
        required
        options={vehicleOptions}
        placeholder="Select vehicle type"
        {...register("vehicleType")}
        error={errors.vehicleType?.message}
      />

      <Input
        label="Pickup Location"
        placeholder="e.g. Connaught Place, Delhi"
        required
        {...register("pickupLocation")}
        error={errors.pickupLocation?.message}
      />

      {showDrop && (
        <Input
          label="Drop Location"
          placeholder="e.g. IGI Airport Terminal 3"
          required
          {...register("dropLocation")}
          error={errors.dropLocation?.message}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Date of Travel"
          type="date"
          required
          {...register("travelDate")}
          error={errors.travelDate?.message}
        />
        <Input
          label="Time"
          type="time"
          required
          {...register("travelTime")}
          error={errors.travelTime?.message}
        />
      </div>

      <Textarea
        label="Additional Notes / Special Requirements"
        placeholder="Any special requests? (optional)"
        {...register("notes")}
        error={errors.notes?.message}
      />

      <Button
        type="submit"
        size="lg"
        loading={isSubmitting}
        className="w-full sm:w-auto"
      >
        Send Enquiry
      </Button>

    </form>
  );
}
