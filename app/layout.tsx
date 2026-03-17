import type { Metadata } from "next";
import { DM_Sans, Syne, Playfair_Display } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gero & Miglė - Become the Best Bachata Social Dancer",
  description: "Learn bachata dancing with Gero & Miglė. Structured programs, online classes, and masterclasses to take your dancing to the next level.",
  keywords: "bachata, dance, online classes, dance lessons, bachata social dancing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${syne.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
