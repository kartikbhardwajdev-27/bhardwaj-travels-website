import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bhardwajtravels1.com'),
  title: {
    default: 'Bhardwaj Travels – Taxi & Cab Service in North India',
    template: '%s | Bhardwaj Travels',
  },
  description: 'Book reliable taxi and cab services across North India. Outstation trips, airport transfers, wedding fleet, corporate rentals & tour packages from Zirakpur, Chandigarh.',
  keywords: ['taxi service Zirakpur', 'cab service Chandigarh', 'outstation taxi North India', 'airport transfer Chandigarh', 'Bhardwaj Travels'],
  authors: [{ name: 'Bhardwaj Travels' }],
  creator: 'Bhardwaj Travels',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bhardwajtravels.com',
    siteName: 'Bhardwaj Travels',
    title: 'Bhardwaj Travels – Taxi & Cab Service in North India',
    description: 'Reliable taxi services across North India. Outstation, airport, weddings, corporate travel from Zirakpur & Chandigarh.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhardwaj Travels – Taxi & Cab Service in North India',
    description: 'Reliable taxi services across North India. Outstation, airport, weddings, corporate travel.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: '3F3uhFfs7QEnWTBM0fifEJGxzER3YWt7PYp86QkV5LM',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
