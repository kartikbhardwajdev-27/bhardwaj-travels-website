import type { BookRideData, PartnerData } from "@/lib/schemas";

// ─── Shared helpers ──────────────────────────────────────────────────────────

function layout(content: string, footerNote: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#ffffff;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;">

    <!-- Header -->
    <div style="background:#FFD60A;padding:20px 30px;text-align:center;">
      <span style="color:#0A0A0A;font-size:22px;font-weight:700;font-family:Arial,sans-serif;letter-spacing:1px;">
        BHARDWAJ TRAVELS
      </span>
    </div>

    <!-- Content -->
    <div style="background:#ffffff;padding:32px 30px;">
      ${content}
    </div>

    <!-- Footer -->
    <div style="background:#0A0A0A;padding:20px 30px;text-align:center;">
      <p style="color:#ffffff;font-size:12px;font-family:Arial,sans-serif;margin:0 0 6px;">
        ${footerNote}
      </p>
      <p style="color:#888888;font-size:11px;font-family:Arial,sans-serif;margin:0;">
        Phone: +91 94175 66648 &nbsp;|&nbsp; bhardwajtravels999@gmail.com
      </p>
    </div>

  </div>
</body>
</html>`;
}

function tableRows(rows: Array<[string, string]>): string {
  return rows
    .map(
      ([label, value], i) => `
      <tr>
        <td style="padding:10px 12px;font-size:13px;font-weight:600;color:#0A0A0A;
                   background:${i % 2 === 0 ? "#f9f9f9" : "#ffffff"};
                   border-bottom:1px solid #e8e8e3;width:150px;vertical-align:top;
                   font-family:Arial,sans-serif;">${label}</td>
        <td style="padding:10px 12px;font-size:13px;color:#5C5C56;
                   background:${i % 2 === 0 ? "#f9f9f9" : "#ffffff"};
                   border-bottom:1px solid #e8e8e3;vertical-align:top;
                   font-family:Arial,sans-serif;">${escapeHtml(value)}</td>
      </tr>`
    )
    .join("");
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─── Booking emails ───────────────────────────────────────────────────────────

export function bookingAdminHtml(data: BookRideData): string {
  const rows: Array<[string, string]> = [
    ["Full Name", data.fullName],
    ["Phone Number", data.phone],
    ["Email", data.email],
    ["Type of Trip", data.tripType],
    ["Passengers", String(data.passengers)],
    ["Preferred Vehicle", data.vehicleType],
    ["Pickup Location", data.pickupLocation],
    ...(data.dropLocation ? ([["Drop Location", data.dropLocation]] as Array<[string, string]>) : []),
    ["Date of Travel", data.travelDate],
    ["Time", data.travelTime],
    ...(data.notes ? ([["Additional Notes", data.notes]] as Array<[string, string]>) : []),
  ];

  const content = `
    <h2 style="font-size:20px;font-weight:700;color:#0A0A0A;margin:0 0 6px;font-family:Arial,sans-serif;">
      New Booking Enquiry Received
    </h2>
    <p style="font-size:14px;color:#5C5C56;margin:0 0 24px;font-family:Arial,sans-serif;">
      A new ride booking enquiry has been submitted. Details below.
    </p>
    <table style="width:100%;border-collapse:collapse;">
      ${tableRows(rows)}
    </table>`;

  return layout(
    content,
    "Reply to this email to respond to the customer &nbsp;&mdash;&nbsp; Bhardwaj Travels Admin"
  );
}

export function bookingCustomerHtml(data: BookRideData): string {
  const firstName = data.fullName.split(" ")[0];

  const rows: Array<[string, string]> = [
    ["Type of Trip", data.tripType],
    ["Pickup Location", data.pickupLocation],
    ...(data.dropLocation ? ([["Drop Location", data.dropLocation]] as Array<[string, string]>) : []),
    ["Date of Travel", data.travelDate],
    ["Time", data.travelTime],
    ["Preferred Vehicle", data.vehicleType],
    ["Passengers", String(data.passengers)],
  ];

  const content = `
    <h2 style="font-size:22px;font-weight:700;color:#0A0A0A;margin:0 0 16px;font-family:Arial,sans-serif;">
      Thank you, ${escapeHtml(firstName)}!
    </h2>
    <p style="font-size:14px;color:#5C5C56;line-height:22px;margin:0 0 12px;font-family:Arial,sans-serif;">
      We&apos;ve received your booking enquiry and will get back to you
      <strong style="color:#0A0A0A;">within 2 hours</strong> with a confirmation and fare details.
    </p>
    <p style="font-size:14px;color:#5C5C56;line-height:22px;margin:0 0 24px;font-family:Arial,sans-serif;">
      For urgent queries, call us at <strong style="color:#0A0A0A;">+91 94175 66648</strong>
      or reply to this email.
    </p>

    <p style="font-size:15px;font-weight:600;color:#0A0A0A;margin:0 0 12px;font-family:Arial,sans-serif;">
      Your Enquiry Summary
    </p>
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      ${tableRows(rows)}
    </table>

    <p style="font-size:14px;color:#0A0A0A;line-height:22px;margin:0;font-family:Arial,sans-serif;">
      Warm regards,<br />
      <strong>Team Bhardwaj Travels</strong>
    </p>`;

  return layout(content, "Bhardwaj Travels &mdash; Trusted travel across North India");
}

// ─── Partner emails ───────────────────────────────────────────────────────────

export function partnerAdminHtml(data: PartnerData): string {
  const rows: Array<[string, string]> = [
    ["Company Name", data.companyName],
    ["Contact Person", data.contactPerson],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Message / Proposal", data.message],
  ];

  const content = `
    <h2 style="font-size:20px;font-weight:700;color:#0A0A0A;margin:0 0 6px;font-family:Arial,sans-serif;">
      New Partnership Enquiry Received
    </h2>
    <p style="font-size:14px;color:#5C5C56;margin:0 0 24px;font-family:Arial,sans-serif;">
      A new partnership proposal has been submitted. Details below.
    </p>
    <table style="width:100%;border-collapse:collapse;">
      ${tableRows(rows)}
    </table>`;

  return layout(
    content,
    "Reply to this email to respond to the partner &nbsp;&mdash;&nbsp; Bhardwaj Travels Admin"
  );
}

export function partnerCustomerHtml(data: PartnerData): string {
  const content = `
    <h2 style="font-size:22px;font-weight:700;color:#0A0A0A;margin:0 0 16px;font-family:Arial,sans-serif;">
      Thank you, ${escapeHtml(data.contactPerson)}!
    </h2>
    <p style="font-size:14px;color:#5C5C56;line-height:22px;margin:0 0 12px;font-family:Arial,sans-serif;">
      We&apos;ve received your partnership proposal from
      <strong style="color:#0A0A0A;">${escapeHtml(data.companyName)}</strong>.
    </p>
    <p style="font-size:14px;color:#5C5C56;line-height:22px;margin:0 0 12px;font-family:Arial,sans-serif;">
      Our partnerships team will review your proposal and
      <strong style="color:#0A0A0A;">reach out within 24 hours</strong>.
      We look forward to exploring collaboration opportunities with you.
    </p>
    <p style="font-size:14px;color:#5C5C56;line-height:22px;margin:0 0 24px;font-family:Arial,sans-serif;">
      In the meantime, feel free to call us at
      <strong style="color:#0A0A0A;">+91 94175 66648</strong>
      or reply to this email with any questions.
    </p>
    <p style="font-size:14px;color:#0A0A0A;line-height:22px;margin:0;font-family:Arial,sans-serif;">
      Warm regards,<br />
      <strong>Team Bhardwaj Travels</strong>
    </p>`;

  return layout(content, "Bhardwaj Travels &mdash; Trusted travel across North India");
}
