import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "G&M Project - Become a Coach | Gero & Miglė",
  description: "Join the G&M Project as a coach in your city. Learn choreographies and perform with us on stage.",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

