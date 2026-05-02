import { Text, Section } from "@react-email/components";
import EmailLayout from "./EmailLayout";
import type { BookRideData } from "@/lib/schemas";

interface Props {
  data: BookRideData;
}

export default function BookingCustomerEmail({ data }: Props) {
  return (
    <EmailLayout>
      <Text style={greeting}>Hi {data.fullName},</Text>
      <Text style={body}>
        Thank you for choosing Bhardwaj Travels! We&apos;ve received your
        booking enquiry and our team is on it.
      </Text>
      <Text style={body}>
        <strong>We&apos;ll respond within 2 hours</strong> with a confirmation
        and fare details. For urgent needs, please call us directly.
      </Text>

      <Text style={sectionTitle}>Your Enquiry Summary</Text>
      <Section style={table}>
        <Row label="Trip Type" value={data.tripType} />
        <Row label="Pickup" value={data.pickupLocation ?? ''} />
        {data.dropLocation && <Row label="Drop" value={data.dropLocation} />}
        <Row label="Date" value={data.travelDate ?? ''} />
        <Row label="Time" value={data.travelTime ?? ''} />
        <Row label="Vehicle" value={data.vehicleType} />
        <Row label="Passengers" value={String(data.passengers)} />
      </Section>

      <Text style={body}>
        If you have any questions in the meantime, feel free to call us at{" "}
        <strong>+91 94175 66648</strong> or reply to this email.
      </Text>

      <Text style={signoff}>
        Warm regards,
        <br />
        Team Bhardwaj Travels
      </Text>
    </EmailLayout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td style={labelStyle}>{label}</td>
      <td style={valueStyle}>{value}</td>
    </tr>
  );
}

const greeting = {
  fontSize: "16px",
  fontWeight: "600" as const,
  color: "#0A0A0A",
  marginBottom: "8px",
};

const body = {
  fontSize: "14px",
  color: "#5C5C56",
  lineHeight: "22px",
  marginBottom: "16px",
};

const sectionTitle = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#0A0A0A",
  marginBottom: "12px",
};

const table = {
  width: "100%" as const,
  marginBottom: "24px",
};

const labelStyle = {
  padding: "8px 12px",
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#0A0A0A",
  backgroundColor: "#FAFAF7",
  borderBottom: "1px solid #E8E8E3",
  width: "120px",
  verticalAlign: "top" as const,
};

const valueStyle = {
  padding: "8px 12px",
  fontSize: "13px",
  color: "#5C5C56",
  borderBottom: "1px solid #E8E8E3",
  verticalAlign: "top" as const,
};

const signoff = {
  fontSize: "14px",
  color: "#0A0A0A",
  lineHeight: "22px",
};
