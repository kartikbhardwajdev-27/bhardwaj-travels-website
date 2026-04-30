import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ADMIN_EMAIL, FROM_EMAIL } from "@/lib/resend";
import { bookRideSchema } from "@/lib/schemas";
import { bookingAdminHtml, bookingCustomerHtml } from "@/lib/email-templates";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const result = bookRideSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 }
      );
    }

    const data = result.data;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `🚖 New Booking Inquiry — ${data.fullName} — ${data.tripType}`,
      html: bookingAdminHtml(data),
    });

    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "We've received your inquiry — Bhardwaj Travels",
      html: bookingCustomerHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Book ride API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send inquiry. Please try again." },
      { status: 500 }
    );
  }
}
