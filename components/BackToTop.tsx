"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "1.25rem",
            right: "1.25rem",
            zIndex: 9999,
          }}
          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-surface-100/80 backdrop-blur-xl border border-cream/10 flex items-center justify-center text-cream/60 hover:text-cream hover:border-gold/30 transition-colors duration-300 shadow-lg shadow-black/30"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
        </motion.button>
      )}
    </AnimatePresence>,
    document.body
  );
}
