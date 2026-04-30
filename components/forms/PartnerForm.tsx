"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { partnerSchema, type PartnerData } from "@/lib/schemas";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import FormSuccess from "./FormSuccess";

export default function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PartnerData>({
    resolver: zodResolver(partnerSchema),
  });

  async function onSubmit(data: PartnerData) {
    setServerError("");
    try {
      const res = await fetch("/api/partner", {
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
        title="Proposal received!"
        message="Thank you for your interest. Our partnerships team will reach out within 24 hours."
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
          label="Company Name"
          placeholder="Your company name"
          required
          {...register("companyName")}
          error={errors.companyName?.message}
        />
        <Input
          label="Contact Person Name"
          placeholder="Your full name"
          required
          {...register("contactPerson")}
          error={errors.contactPerson?.message}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Email"
          type="email"
          placeholder="you@company.com"
          required
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          label="Phone"
          type="tel"
          placeholder="10-digit number"
          required
          {...register("phone")}
          error={errors.phone?.message}
        />
      </div>

      <Textarea
        label="Message / Proposal"
        placeholder="Tell us about your partnership idea (minimum 20 characters)"
        required
        {...register("message")}
        error={errors.message?.message}
      />

      <Button
        type="submit"
        size="lg"
        loading={isSubmitting}
        className="w-full sm:w-auto"
      >
        Submit Proposal
      </Button>
    </form>
  );
}
