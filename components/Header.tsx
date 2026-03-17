"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/", exact: true },
    { name: "Classes", href: "/classes", exact: false },
    { name: "Project", href: "/project", exact: false },
    { name: "Contact", href: "/contact", exact: false },
  ];

  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-surface/80 backdrop-blur-2xl border-b border-cream/5"
            : "bg-transparent"
        }`}
      >
        <nav className="container-tight">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="h-10 md:h-12 w-auto"
              >
                <Image
                  src="/logo-white.png"
                  alt="Gero & Miglė"
                  width={140}
                  height={48}
                  className="h-full w-auto object-contain"
                  priority
                />
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-display font-medium tracking-wide uppercase transition-colors duration-300 rounded-full ${
                    isActive(item.href, item.exact)
                      ? "text-gold"
                      : "text-cream/50 hover:text-cream"
                  }`}
                >
                  {item.name}
                  {isActive(item.href, item.exact) && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-gold/10 border border-gold/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link
                href="/login"
                className="group flex items-center gap-2 px-5 py-2.5 text-sm font-display font-semibold text-surface bg-cream rounded-full hover:bg-gold transition-colors duration-300"
              >
                <span>Log In</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>

            <button
              className="md:hidden relative z-10 p-2 text-cream/80 hover:text-cream transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-surface/95 backdrop-blur-3xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8"
            >
              <div className="space-y-2 w-full max-w-sm">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-4 text-4xl font-display font-bold tracking-tight transition-colors duration-300 ${
                        isActive(item.href, item.exact)
                          ? "text-gold"
                          : "text-cream/40 hover:text-cream"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.08, duration: 0.5 }}
                  className="pt-8"
                >
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary inline-flex items-center gap-2 text-lg"
                  >
                    <span>Log In</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
