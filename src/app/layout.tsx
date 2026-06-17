import type { Metadata } from "next";
import { Oswald, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "APEX Performance Studio — West Chester, PA",
  description:
    "Performance studio in West Chester PA. Six disciplines, three resident coaches. Trial hour on the house.",
  openGraph: {
    title: "APEX Performance Studio",
    description: "West Chester, PA. An hour at the limit.",
    type: "website",
  },
};

// LocalBusiness JSON-LD schema for Google
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthClub',
  name: 'APEX Performance Studio',
  description: 'Performance studio in West Chester PA. Six disciplines, three resident coaches.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'West Chester',
    addressRegion: 'PA',
    addressCountry: 'US',
  },
  telephone: '(610) 555-0174',
  email: 'hello@apexperformancestudio.com',
  openingHours: ['Mo-Fr 05:00-22:00', 'Sa 06:00-20:00', 'Su 07:00-18:00'],
  priceRange: '$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${instrument.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased bg-[#0c0a08] text-[color:var(--color-cream)]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
