"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, LogIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: Array<{ name: string; href: string; exact: boolean }> = [
    { name: "Home", href: "/", exact: true },
    { name: "Classes", href: "/classes", exact: false },
    { name: "Project", href: "/project", exact: false },
    { name: "Contact", href: "/contact", exact: false },
  ];

  // Check if a nav item is active
  const isActive = (href: string, exact: boolean) => {
    if (exact) {
      return pathname === href;
    }
    // For non-exact matches, check if pathname starts with href
    // This handles /classes and /classes/[slug] correctly
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-effect-strong shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative h-10 sm:h-12 md:h-14 w-auto"
            >
              <Image
                src="/logo-white.png"
                alt="Gero & Miglė Logo"
                width={150}
                height={56}
                className="h-full w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className={`relative group text-base font-medium tracking-wider uppercase transition-all duration-500 ${
                    isActive(item.href, item.exact)
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-rose-400 via-purple-400 to-pink-400 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive(item.href, item.exact)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                  {/* Active indicator dot */}
                  {isActive(item.href, item.exact) && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Link
                href="/login"
                className="flex items-center space-x-2 px-5 py-2.5 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 text-base font-medium"
              >
                <LogIn size={16} />
                <span>Log In</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2.5 text-white/80 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu - Modern 2026 Design */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with low opacity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 right-0 z-50 md:hidden glass-effect-strong border-b border-white/20 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="container mx-auto px-6 sm:px-8">
                {/* Header with Logo and Close Button */}
                <div className="flex items-center justify-between py-6 border-b border-white/10 mb-6">
                  <Link 
                    href="/" 
                    className="flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="relative h-24 sm:h-28 md:h-20 w-auto"
                    >
                      <Image
                        src="/logo-white.png"
                        alt="Gero & Miglė Logo"
                        width={300}
                        height={120}
                        className="h-full w-auto object-contain"
                        priority
                      />
                    </motion.div>
                  </Link>
                  
                  {/* Close Button - Enhanced */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-effect flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent"
                    aria-label="Close menu"
                  >
                    <X size={24} className="sm:w-6 sm:h-6" />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <div className="space-y-2 pb-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        className={`block transition-all duration-300 py-4 px-4 rounded-xl text-lg font-semibold border ${
                          isActive(item.href, item.exact)
                            ? "text-white bg-white/10 border-white/30"
                            : "text-white/80 hover:text-white border-transparent hover:bg-white/10 hover:border-white/20"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          {isActive(item.href, item.exact) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-400 to-pink-400"
                            />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Login Button */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1, duration: 0.4 }}
                    className="pt-4"
                  >
                    <Link
                      href="/login"
                      className="flex items-center justify-center space-x-3 px-6 py-4 rounded-xl glass-effect hover:bg-white/20 transition-all duration-300 text-lg font-semibold border border-white/20"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <LogIn size={20} />
                      <span>Log In</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

