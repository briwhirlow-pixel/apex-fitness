import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    <html lang="en" className={inter.variable}>
      <body className="bg-[#06080F] text-white antialiased">
        <div className="grain" aria-hidden />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
