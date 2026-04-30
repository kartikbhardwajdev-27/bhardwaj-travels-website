import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@bhardwajtravels.com";
export const FROM_EMAIL = process.env.FROM_EMAIL || "bookings@bhardwajtravels.com";
