import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClassDetailPage from "@/components/ClassDetailPage";
import { getClassBySlug } from "@/lib/classData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const classItem = getClassBySlug(params.slug);
  
  if (!classItem) {
    return {
      title: "Class Not Found | Gero & Miglė",
    };
  }

  return {
    title: `${classItem.title} | Gero & Miglė`,
    description: classItem.fullDescription,
  };
}

export default function ClassPage({ params }: { params: { slug: string } }) {
  const classItem = getClassBySlug(params.slug);

  if (!classItem) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />
      <ClassDetailPage classItem={classItem} />
      <Footer />
    </main>
  );
}

