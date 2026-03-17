"use client";

import { motion } from "framer-motion";

export default function ClassesHero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="tag mb-6 inline-block">Classes</span>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6">
            <span className="gradient-text">Classes</span>
          </h1>
          <p className="text-lg sm:text-xl text-cream/50 max-w-2xl leading-relaxed">
            Choose from our comprehensive selection of bachata classes designed to take your dancing to the next level.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-8 mt-10"
        >
          {[
            { value: "6", label: "Class Types" },
            { value: "24/7", label: "Access" },
            { value: "All", label: "Levels" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="font-display font-bold text-2xl text-cream">{stat.value}</span>
              <span className="text-xs text-cream/40 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
