import { Text } from "@react-email/components";
import EmailLayout from "./EmailLayout";
import type { PartnerData } from "@/lib/schemas";

interface Props {
  data: PartnerData;
}

export default function PartnerCustomerEmail({ data }: Props) {
  return (
    <EmailLayout>
      <Text style={greeting}>Hi {data.contactPerson},</Text>
      <Text style={body}>
        Thank you for reaching out to Bhardwaj Travels! We&apos;ve received your
        partnership proposal from <strong>{data.companyName}</strong>.
      </Text>
      <Text style={body}>
        Our partnerships team will review your submission and{" "}
        <strong>reach out within 24 hours</strong>. We look forward to exploring
        collaboration opportunities with you.
      </Text>
      <Text style={body}>
        In the meantime, feel free to call us at{" "}
        <strong>+91 98773 47600</strong> or reply to this email with any
        questions.
      </Text>
      <Text style={signoff}>
        Warm regards,
        <br />
        Team Bhardwaj Travels
      </Text>
    </EmailLayout>
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

const signoff = {
  fontSize: "14px",
  color: "#0A0A0A",
  lineHeight: "22px",
};
