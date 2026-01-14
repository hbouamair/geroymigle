"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, MapPin, Star, Users, Sparkles, Heart } from "lucide-react";
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

  // Ensure component is mounted (client-side only)
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  // Render modal using portal at document body level
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar glass-effect-strong rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 my-4 sm:my-6 md:my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-effect flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 border border-white/20 hover:border-white/40 z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {/* Decorative Header */}
              <div className="text-center mb-8 sm:mb-10">
                <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mx-3 sm:mx-4"
                  >
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                  </motion.div>
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent via-pink-400/50 to-transparent" />
                </div>

                {/* Profile Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden ring-4 ring-purple-500/30 shadow-2xl"
                >
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 128px, 160px"
                    priority
                  />
                </motion.div>

                {/* Name */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4"
                >
                  {instructor.name}
                </motion.h2>

                {/* Location */}
                {instructor.location && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex items-center justify-center space-x-2 text-white/70 mb-6 sm:mb-8"
                  >
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-display text-base sm:text-lg">{instructor.location}</span>
                  </motion.div>
                )}
              </div>

              {/* Bio */}
              {instructor.bio && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mb-8 sm:mb-10"
                >
                  <div className="glass-effect rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white">About</h3>
                    </div>
                    <p className="text-white/80 text-base sm:text-lg leading-relaxed font-display">
                      {instructor.bio}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Achievements */}
              {instructor.achievements && instructor.achievements.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="mb-8 sm:mb-10"
                >
                  <div className="glass-effect rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Award className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white">Achievements</h3>
                    </div>
                    <ul className="space-y-3 sm:space-y-4">
                      {instructor.achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                          className="flex items-start space-x-3 p-3 sm:p-4 rounded-xl glass-effect hover:bg-white/5 transition-all duration-300"
                        >
                          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80 sm:text-white/90 text-base sm:text-lg font-display leading-relaxed">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="grid grid-cols-2 gap-4 sm:gap-6"
              >
                {instructor.rating && (
                  <div className="glass-effect-strong rounded-2xl p-6 sm:p-8 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-white font-display mb-2">
                      {instructor.rating}
                    </div>
                    <div className="text-sm sm:text-base text-white/60 font-display uppercase tracking-wider">
                      Rating
                    </div>
                  </div>
                )}
                {instructor.students && (
                  <div className="glass-effect-strong rounded-2xl p-6 sm:p-8 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-white font-display mb-2">
                      {instructor.students.toLocaleString()}+
                    </div>
                    <div className="text-sm sm:text-base text-white/60 font-display uppercase tracking-wider">
                      Students
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

