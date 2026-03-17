"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw, AlertCircle } from "lucide-react";
import Header from "@/components/Header";

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
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg pointer-events-none" />

        <div className="container-tight relative z-10 text-center py-20">
          <div className="max-w-xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-rose/10 border border-rose/20 flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-rose" />
            </div>

            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-cream mb-3">
              Something Went Wrong
            </h1>
            <p className="text-base text-cream/40 mb-8 max-w-md mx-auto">
              We encountered an unexpected error. Please try again or return to the homepage.
            </p>

            {process.env.NODE_ENV === "development" && error.message && (
              <div className="mb-8 p-4 rounded-xl glass-card text-left">
                <p className="text-xs text-rose font-mono">{error.message}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button onClick={reset} className="btn-primary inline-flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </button>
              <Link href="/" className="btn-outline inline-flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
