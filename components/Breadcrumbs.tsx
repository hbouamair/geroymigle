"use client";

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
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-xs">
        <li>
          <Link href="/" className="text-cream/35 hover:text-cream/60 transition-colors duration-300">
            <Home className="w-3.5 h-3.5" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-cream/20" />
            {item.href ? (
              <Link href={item.href} className="text-cream/35 hover:text-cream/60 transition-colors duration-300 font-medium">
                {item.label}
              </Link>
            ) : (
              <span className="text-cream/70 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
