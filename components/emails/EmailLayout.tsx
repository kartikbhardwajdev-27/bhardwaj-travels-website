import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import type { ReactNode } from "react";

interface EmailLayoutProps {
  children: ReactNode;
}

export default function EmailLayout({ children }: EmailLayoutProps) {
  return (
    <Html>
      <Head />
      <Body style={body}>
        {/* Header */}
        <Section style={header}>
          <Text style={headerText}>Bhardwaj Travels</Text>
        </Section>

        {/* Content */}
        <Container style={container}>{children}</Container>

        {/* Footer */}
        <Section style={footer}>
          <Hr style={divider} />
          <Text style={footerText}>
            Bhardwaj Travels — North India&apos;s Trusted Travel Partner
          </Text>
          <Text style={footerText}>
            Phone: +91 98773 47600 | Email: bhardwajtravels999@gmail.com
          </Text>
          <Text style={footerText}>[PLACEHOLDER - Update with real address]</Text>
        </Section>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#FAFAF7",
  fontFamily: "Inter, -apple-system, sans-serif",
  margin: "0",
  padding: "0",
};

const header = {
  backgroundColor: "#FFD60A",
  padding: "20px 30px",
  textAlign: "center" as const,
};

const headerText = {
  color: "#0A0A0A",
  fontSize: "22px",
  fontWeight: "700" as const,
  margin: "0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "30px",
  maxWidth: "600px",
};

const footer = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px 30px",
};

const divider = {
  borderTop: "1px solid #E8E8E3",
  margin: "0 0 16px 0",
};

const footerText = {
  color: "#5C5C56",
  fontSize: "12px",
  lineHeight: "18px",
  margin: "0 0 4px 0",
  textAlign: "center" as const,
};
