import type { Metadata } from "next";
import { Inter, Outfit, Cinzel } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-artistic",
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
      <body className={`${inter.variable} ${outfit.variable} ${cinzel.variable} font-sans antialiased`}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

