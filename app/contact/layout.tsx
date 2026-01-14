import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Gero & Miglė",
  description: "Get in touch with Gero & Miglė. We'd love to hear from you and answer any questions about our bachata classes and programs.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

