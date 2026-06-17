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
  title: "APEX Performance Studio — Haddon Township, NJ",
  description:
    "Performance studio in Haddon Township NJ. Six disciplines, three resident coaches. An hour at the limit — first one's on us.",
  openGraph: {
    title: "APEX Performance Studio",
    description: "Haddon Township, NJ. An hour at the limit.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${instrument.variable}`}>
      <body className="antialiased bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
