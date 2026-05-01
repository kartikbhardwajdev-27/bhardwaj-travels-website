import { Text, Section } from "@react-email/components";
import EmailLayout from "./EmailLayout";
import type { BookRideData } from "@/lib/schemas";

interface Props {
  data: BookRideData;
}

export default function BookingAdminEmail({ data }: Props) {
  return (
    <EmailLayout>
      <Text style={title}>New Booking Enquiry</Text>
      <Text style={subtitle}>A new ride booking has been submitted.</Text>

      <Section style={table}>
        <Row label="Name" value={data.fullName} />
        <Row label="Phone" value={data.phone} />
        <Row label="Email" value={data.email} />
        <Row label="Trip Type" value={data.tripType} />
        <Row label="Passengers" value={String(data.passengers)} />
        <Row label="Vehicle Type" value={data.vehicleType} />
        <Row label="Pickup" value={data.pickupLocation} />
        {data.dropLocation && <Row label="Drop" value={data.dropLocation} />}
        <Row label="Date" value={data.travelDate} />
        <Row label="Time" value={data.travelTime} />
        {data.notes && <Row label="Notes" value={data.notes} />}
      </Section>
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

const title = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#0A0A0A",
  marginBottom: "4px",
};

const subtitle = {
  fontSize: "14px",
  color: "#5C5C56",
  marginBottom: "24px",
};

const table = {
  width: "100%" as const,
};

const labelStyle = {
  padding: "10px 12px",
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#0A0A0A",
  backgroundColor: "#FAFAF7",
  borderBottom: "1px solid #E8E8E3",
  width: "140px",
  verticalAlign: "top" as const,
};

const valueStyle = {
  padding: "10px 12px",
  fontSize: "13px",
  color: "#5C5C56",
  borderBottom: "1px solid #E8E8E3",
  verticalAlign: "top" as const,
};
