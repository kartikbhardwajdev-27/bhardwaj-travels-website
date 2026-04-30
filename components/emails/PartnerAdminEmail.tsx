import { Text, Section } from "@react-email/components";
import EmailLayout from "./EmailLayout";
import type { PartnerData } from "@/lib/schemas";

interface Props {
  data: PartnerData;
}

export default function PartnerAdminEmail({ data }: Props) {
  return (
    <EmailLayout>
      <Text style={title}>New Partnership Inquiry</Text>
      <Text style={subtitle}>
        A new partnership proposal has been submitted.
      </Text>

      <Section style={table}>
        <Row label="Company" value={data.companyName} />
        <Row label="Contact Person" value={data.contactPerson} />
        <Row label="Email" value={data.email} />
        <Row label="Phone" value={data.phone} />
        <Row label="Message" value={data.message} />
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
