import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "APEX Performance Studio — Chicago's Premier Fitness & Wellness",
  description: "Train harder, recover smarter, live better. HIIT, strength, yoga, cycling, and recovery classes in Chicago. Try your first class free.",
  openGraph: {
    title: "APEX Performance Studio",
    description: "Chicago's premier fitness & wellness studio. First class free.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
