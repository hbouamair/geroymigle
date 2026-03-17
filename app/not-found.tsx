"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg pointer-events-none" />
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="container-tight relative z-10 text-center py-20">
          <div className="max-w-xl mx-auto">
            <h1 className="font-display font-extrabold text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] leading-none gradient-text mb-4">
              404
            </h1>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-cream mb-4">
              Page Not Found
            </h2>
            <p className="text-base text-cream/40 mb-10 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/" className="btn-primary inline-flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-outline inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
