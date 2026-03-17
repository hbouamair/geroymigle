"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { label: "Facebook", href: "https://web.facebook.com/geroymigle#" },
  { label: "Instagram", href: "https://www.instagram.com/geroymigleoficial" },
  { label: "YouTube", href: "https://www.youtube.com/geroymigle" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Classes", href: "/classes" },
  { name: "Project", href: "/project" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Top Divider */}
      <div className="divider" />

      <div className="container-tight py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <Image
              src="/logo-white.png"
              alt="Gero & Miglė"
              width={160}
              height={60}
              className="h-14 md:h-16 w-auto object-contain mb-5"
            />
            <p className="text-cream/40 text-sm leading-relaxed max-w-xs mb-6">
              Become the best bachata social dancer with structured programs and expert guidance.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cream/8 text-cream/40 text-xs font-medium hover:border-cream/20 hover:text-cream/70 transition-all duration-300"
                >
                  {social.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-3"
          >
            <h4 className="font-display font-bold text-sm text-cream/60 uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream/40 text-sm hover:text-cream transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-4"
          >
            <h4 className="font-display font-bold text-sm text-cream/60 uppercase tracking-widest mb-5">
              Get in Touch
            </h4>
            <a
              href="mailto:geroymiglebachata@gmail.com"
              className="text-cream/40 text-sm hover:text-gold transition-colors duration-300 break-all"
            >
              geroymiglebachata@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/25 text-xs">
            &copy; {currentYear} Gero & Miglė. All rights reserved.
          </p>
          <p className="text-cream/25 text-xs">
            Made with care for dancers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
