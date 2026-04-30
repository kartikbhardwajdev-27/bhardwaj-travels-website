import { NextResponse } from "next/server";
import { resend, ADMIN_EMAIL, FROM_EMAIL } from "@/lib/resend";
import { partnerSchema } from "@/lib/schemas";
import PartnerAdminEmail from "@/components/emails/PartnerAdminEmail";
import PartnerCustomerEmail from "@/components/emails/PartnerCustomerEmail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = partnerSchema.safeParse(body);

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
      subject: `🤝 New Partnership Inquiry — ${data.companyName}`,
      react: PartnerAdminEmail({ data }),
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: "Partnership inquiry received — Bhardwaj Travels",
      react: PartnerCustomerEmail({ data }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Partner API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send inquiry. Please try again." },
      { status: 500 }
    );
  }
}
