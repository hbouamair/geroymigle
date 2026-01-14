import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClassesHero from "@/components/ClassesHero";
import ClassGrid from "@/components/ClassGrid";

export const metadata: Metadata = {
  title: "Classes - Learn Bachata | Gero & Miglė",
  description: "Discover our bachata classes: Partnerwork Routines, Master Class, Choreos, Men Style, Lady Style, and Programs.",
};

export default function ClassesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ClassesHero />
      <ClassGrid />
      <Footer />
    </main>
  );
}

