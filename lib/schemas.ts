import { z } from "zod";

export const tripTypes = [
  "Local City Taxi",
  "Outstation / Intercity",
  "Airport Pickup",
  "Airport Drop",
  "Tour Package / Sightseeing",
  "Wedding / Event",
  "Corporate Rental",
  "Other",
] as const;

export const vehicleTypes = [
  "Sedan",
  "SUV",
  "Premium",
  "Tempo Traveller",
  "No preference",
] as const;

export const bookRideSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
  email: z.string().email("Enter a valid email address"),
  tripType: z.enum(tripTypes, "Please select a trip type"),
  passengers: z
    .number({ error: "Enter number of passengers" })
    .min(1, "At least 1 passenger")
    .max(20, "Maximum 20 passengers"),
  vehicleType: z.enum(vehicleTypes, "Please select a vehicle type"),
  pickupLocation: z.string().optional(),
  dropLocation: z.string().optional(),
  travelDate: z.string().optional(),
  travelTime: z.string().optional(),
  notes: z.string().optional(),
});

export type BookRideData = z.infer<typeof bookRideSchema>;

export const partnerSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactPerson: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
  message: z.string().min(20, "Please write at least 20 characters"),
});

export type PartnerData = z.infer<typeof partnerSchema>;
