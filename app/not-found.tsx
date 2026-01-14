"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Header />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/50 to-slate-950" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number */}
          <h1 className="text-9xl sm:text-[12rem] md:text-[15rem] font-display font-black bg-gradient-to-r from-rose-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-4 sm:mb-6 leading-none">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
            Page Not Found
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 sm:mb-12 leading-relaxed font-display">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 font-display"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full glass-effect-strong text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 font-display"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

