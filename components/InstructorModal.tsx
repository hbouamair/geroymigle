"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, MapPin, Star, Users, Heart } from "lucide-react";
import Image from "next/image";

interface InstructorModalProps {
  isOpen: boolean;
  onClose: () => void;
  instructor: {
    name: string;
    image: string;
    bio?: string;
    location?: string;
    achievements?: string[];
    rating?: number;
    students?: number;
  };
}

export default function InstructorModal({ isOpen, onClose, instructor }: InstructorModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-surface/90 backdrop-blur-xl z-[9999]"
            onClick={onClose}
          />

          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto custom-scrollbar glass-card-strong rounded-3xl p-6 sm:p-8 md:p-10 my-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full glass-card flex items-center justify-center text-cream/50 hover:text-cream transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-8">
                {/* Profile Image */}
                <div className="relative w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden ring-2 ring-gold/20">
                  <Image src={instructor.image} alt={instructor.name} fill className="object-cover" sizes="96px" priority />
                </div>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-cream mb-1">{instructor.name}</h2>
                {instructor.location && (
                  <div className="flex items-center justify-center gap-1.5 text-cream/40 text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{instructor.location}</span>
                  </div>
                )}
              </div>

              {instructor.bio && (
                <div className="glass-card rounded-xl p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-4 h-4 text-rose" />
                    <h3 className="font-display font-bold text-sm text-cream">About</h3>
                  </div>
                  <p className="text-sm text-cream/55 leading-relaxed">{instructor.bio}</p>
                </div>
              )}

              {instructor.achievements && instructor.achievements.length > 0 && (
                <div className="glass-card rounded-xl p-5 mb-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4 text-gold" />
                    <h3 className="font-display font-bold text-sm text-cream">Achievements</h3>
                  </div>
                  <ul className="space-y-2">
                    {instructor.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-cream/[0.02] transition-colors">
                        <Star className="w-3.5 h-3.5 text-gold/60 fill-gold/60 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-cream/60">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                {instructor.rating && (
                  <div className="glass-card rounded-xl p-4 text-center">
                    <Star className="w-5 h-5 text-gold/60 fill-gold/60 mx-auto mb-1.5" />
                    <div className="font-display font-bold text-xl text-cream">{instructor.rating}</div>
                    <div className="text-[10px] text-cream/35 uppercase tracking-widest">Rating</div>
                  </div>
                )}
                {instructor.students && (
                  <div className="glass-card rounded-xl p-4 text-center">
                    <Users className="w-5 h-5 text-violet-400/60 mx-auto mb-1.5" />
                    <div className="font-display font-bold text-xl text-cream">{instructor.students.toLocaleString()}+</div>
                    <div className="text-[10px] text-cream/35 uppercase tracking-widest">Students</div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
