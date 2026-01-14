"use client";

import { motion } from "framer-motion";
import { Users, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="project" className="section-elegant relative overflow-hidden">
      {/* Elegant Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Elegant Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 sm:mb-16 md:mb-20 px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8"
            >
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-rose-400/80" />
              <div className="divider-elegant w-12 sm:w-16" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.1] tracking-tight">
              <span className="text-white/95">WHO</span>{" "}
              <span className="gradient-text">WE</span>{" "}
              <span className="text-white/95">ARE?</span>
            </h2>
          </motion.div>

          {/* Elegant Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center px-4 sm:px-0">
            {/* Image - Elegant 2026 Style */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <div className="relative aspect-[3/4] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden glass-effect-strong shadow-2xl">
                <Image
                  src="/geroymigle.jpg"
                  alt="Gero & Miglė - Bachata Instructors"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1280px) 50vw, 600px"
                  quality={100}
                  priority
                />
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                {/* Name Overlay */}
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8">
                  <div className="bg-black/50 backdrop-blur-md rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 border border-white/20">
                    <p className="text-white text-lg sm:text-xl font-semibold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      Gero & Miglė
                    </p>
                    <p className="text-white/80 text-xs sm:text-sm">Bachata Instructors</p>
                  </div>
                </div>
              </div>
              {/* Elegant Decorative Elements */}
              <motion.div
                className="absolute -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-purple-400/30 to-rose-400/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>

            {/* Elegant Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="glass-effect-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 card-hover">
                <div className="flex items-start space-x-4 sm:space-x-5 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-rose-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white/95 mb-3 sm:mb-4">
                      Passionate About Bachata
                    </h3>
                    <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                      We are Gero & Miglė, dedicated bachata instructors passionate about sharing
                      the joy of social dancing. Our mission is to help you become the best
                      bachata social dancer you can be.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 card-hover">
                <h3 className="text-xl sm:text-2xl font-semibold text-white/95 mb-4 sm:mb-5">
                  Our Approach
                </h3>
                <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                  We combine structured learning with creative expression, ensuring you not only
                  learn the moves but also develop your own style and confidence on the dance floor.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

