"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Mail, Heart, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { icon: Facebook, href: "https://web.facebook.com/geroymigle#", label: "Facebook", color: "hover:text-blue-400" },
  { icon: Instagram, href: "https://www.instagram.com/geroymigleoficial", label: "Instagram", color: "hover:text-pink-400" },
  { icon: Youtube, href: "https://www.youtube.com/geroymigle", label: "YouTube", color: "hover:text-red-400" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Classes", href: "/classes" },
  { name: "Project", href: "/project" },
  { name: "More", href: "/#more" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Modern 2026 Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-purple-950/20 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Elegant Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content - Modern 2026 Design - Fully Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
            {/* Brand Section - Enhanced 2026 Style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="sm:col-span-2 lg:col-span-2"
            >
              <div className="mb-6 sm:mb-8">
                <Image
                  src="/logo-white.png"
                  alt="Gero & Miglė Logo"
                  width={250}
                  height={100}
                  className="h-20 sm:h-24 md:h-28 w-auto object-contain"
                />
              </div>
              <p className="text-white/70 mb-6 sm:mb-8 md:mb-10 leading-relaxed text-base sm:text-lg md:text-xl max-w-md">
                Become the best bachata social dancer with structured programs,
                online classes, and expert guidance from passionate instructors.
              </p>
              
              {/* Modern Social Links - 2026 Style */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl glass-effect-strong flex items-center justify-center text-white/70 ${social.color} transition-all duration-500 border border-white/10 hover:border-white/30`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links - Modern 2026 Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 sm:mt-0"
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-5 sm:mb-6 md:mb-8 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Quick Links
              </h4>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center space-x-2 text-white/70 hover:text-white transition-all duration-300 text-base sm:text-lg md:text-xl font-medium"
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Section - Modern 2026 Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 sm:mt-0"
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-5 sm:mb-6 md:mb-8 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Contact
              </h4>
              <motion.a
                href="mailto:geroymiglebachata@gmail.com"
                className="group flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 text-white/70 hover:text-white transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl glass-effect-strong flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0 border border-white/10 group-hover:border-white/30">
                  <Mail className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-base sm:text-lg md:text-xl font-medium break-words sm:break-all leading-relaxed pt-0 sm:pt-1 md:pt-2">
                  geroymiglebachata@gmail.com
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Modern 2026 Bottom Bar - Fully Responsive */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-8 sm:pt-10 md:pt-12 border-t border-white/10"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
              <p className="text-white/60 text-base sm:text-lg md:text-xl tracking-wide">
                © {currentYear} por <span className="text-white/80 font-semibold">Gero & Miglė</span>. All rights reserved.
              </p>
              <motion.div
                className="flex items-center space-x-2 sm:space-x-3 text-white/60 text-base sm:text-lg md:text-xl"
                whileHover={{ scale: 1.05 }}
              >
                <span>Made with</span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-rose-400/90 fill-rose-400/90" />
                </motion.div>
                <span>for dancers</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

