"use client";

import { motion } from "framer-motion";
import { Monitor, MapPin, Clock, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: BookOpen,
    title: "STRUCTURED PROGRAMS",
    description: "Comprehensive learning paths from beginner to advanced",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Monitor,
    title: "From any Device",
    description: "Learn on your phone, tablet, or computer",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "ANY PLACE",
    description: "Practice wherever you feel comfortable",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Clock,
    title: "ANY TIME",
    description: "24/7 access to all your lessons",
    gradient: "from-orange-500 to-red-500",
  },
];

const quickLinks = [
  { name: "Classes", href: "/classes", color: "from-purple-500 to-pink-500" },
  { name: "G&M Project", href: "/project", color: "from-blue-500 to-cyan-500" },
];

export default function Features() {
  return (
    <section id="classes" className="section-elegant relative overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Elegant Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-4 sm:mb-6"
          >
            <div className="divider-elegant w-16 sm:w-20 md:w-24 mx-auto mb-4 sm:mb-6" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight">
            <span className="gradient-text">WHAT WILL YOU GET</span>
            <br />
            <span className="text-white/95">IN OUR PLATFORM?</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light tracking-wide">
            Experience the future of dance learning
          </p>
        </motion.div>

        {/* Elegant Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full card-hover relative overflow-hidden">
                  {/* Subtle gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white/95 group-hover:text-white transition-colors tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed group-hover:text-white/70 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Elegant Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0"
        >
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
            >
              <Link
                href={link.href}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl glass-effect p-6 sm:p-8 md:p-10 card-hover block"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 group-hover:text-white transition-colors">{link.name}</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/50 group-hover:text-white group-hover:translate-x-2 transition-all duration-500 flex-shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

