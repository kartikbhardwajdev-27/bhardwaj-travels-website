import { NextResponse } from "next/server";
import { resend, ADMIN_EMAIL, FROM_EMAIL } from "@/lib/resend";
import { bookRideSchema } from "@/lib/schemas";
import BookingAdminEmail from "@/components/emails/BookingAdminEmail";
import BookingCustomerEmail from "@/components/emails/BookingCustomerEmail";

export async function POST(request: Request) {
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

    // Send email to admin
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `🚖 New Booking Inquiry — ${data.fullName} — ${data.tripType}`,
      react: BookingAdminEmail({ data }),
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "We've received your booking inquiry — Bhardwaj Travels",
      react: BookingCustomerEmail({ data }),
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
