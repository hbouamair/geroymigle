"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/ProjectHero";
import ProjectForm from "@/components/ProjectForm";
import ChoreographyList from "@/components/ChoreographyList";

export default function ProjectPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      <ProjectHero onOpenForm={() => setIsFormOpen(true)} />
      <ChoreographyList />
      <ProjectForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <Footer />
    </main>
  );
}

