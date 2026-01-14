"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Header />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/50 to-slate-950" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Error Icon */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-500/20 border-2 border-red-500/30 flex items-center justify-center">
              <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12 text-red-400" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4 sm:mb-6">
            Something Went Wrong
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 sm:mb-12 leading-relaxed font-display">
            We encountered an unexpected error. Please try again or return to the homepage.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="mb-8 p-4 rounded-xl glass-effect text-left">
              <p className="text-sm text-red-400 font-mono">{error.message}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={reset}
              className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 font-display"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Try Again</span>
            </button>
            <Link
              href="/"
              className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full glass-effect-strong text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 font-display"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

