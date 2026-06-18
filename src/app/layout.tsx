import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

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
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <noscript>
          <style>{`.reveal-up { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body>
        <Navbar />
        <Reveal />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
