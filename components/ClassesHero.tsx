"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Sparkles, PlayCircle } from "lucide-react";

export default function ClassesHero() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-12 sm:pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4 sm:mb-6"
          >
            <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 px-4"
          >
            <span className="gradient-text">CLASSES</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Choose from our comprehensive selection of bachata classes designed to take your dancing to the next level
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12 px-4 sm:px-0"
          >
            <div className="glass-effect rounded-xl sm:rounded-2xl p-5 sm:p-6">
              <Users className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-3 mx-auto" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">6</div>
              <div className="text-white/70 text-xs sm:text-sm">Class Types</div>
            </div>
            <div className="glass-effect rounded-xl sm:rounded-2xl p-5 sm:p-6">
              <PlayCircle className="w-7 h-7 sm:w-8 sm:h-8 text-pink-400 mb-2 sm:mb-3 mx-auto" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-white/70 text-xs sm:text-sm">Access</div>
            </div>
            <div className="glass-effect rounded-xl sm:rounded-2xl p-5 sm:p-6">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-400 mb-2 sm:mb-3 mx-auto" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">All</div>
              <div className="text-white/70 text-xs sm:text-sm">Levels</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

