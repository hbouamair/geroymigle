"use client";

import { motion } from "framer-motion";
import { Users, Trophy, ArrowRight, Sparkles } from "lucide-react";

interface ProjectHeroProps {
  onOpenForm: () => void;
}

export default function ProjectHero({ onOpenForm }: ProjectHeroProps) {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-12 sm:pb-20">
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
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 sm:mb-8 px-4"
          >
            <span className="gradient-text">G&M PROJECT</span>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 px-4"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed">
              Would you like to be the coach of our teams in your city? Would you like to perform with us on stage?
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed">
              If you are a teacher and are interested in taking your dance and that of your students to the next level, this challenge is for you!
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 px-4 sm:px-0"
          >
            <div className="glass-effect rounded-xl sm:rounded-2xl p-5 sm:p-6">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 mb-2 sm:mb-3 mx-auto" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Lead Teams</h3>
              <p className="text-white/70 text-xs sm:text-sm">Become a coach in your city</p>
            </div>
            <div className="glass-effect rounded-xl sm:rounded-2xl p-5 sm:p-6">
              <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400 mb-2 sm:mb-3 mx-auto" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Perform on Stage</h3>
              <p className="text-white/70 text-xs sm:text-sm">Showcase your skills with us</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="px-4"
          >
            <p className="text-white/80 mb-4 text-lg sm:text-xl">
              If you want to be G&M project coach in your city, fill the next form:
            </p>
            <motion.button
              onClick={onOpenForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 font-display"
            >
              <span>START HERE</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

