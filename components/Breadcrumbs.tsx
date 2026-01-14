"use client";

import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base">
        <li>
          <Link
            href="/"
            className="flex items-center text-white/60 hover:text-white transition-colors duration-300"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-white/40 mx-2" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-white/60 hover:text-white transition-colors duration-300 font-display"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white font-display">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

