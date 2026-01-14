"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Sparkles,
  Trophy,
  Music,
  Heart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: BookOpen,
    title: "Join Online Programs",
    description: "Learn the bases of each level - from beginner to advanced",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Attend Partnerwork Classes",
    description: "Discover new moves according to your level",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Try Styling Classes",
    description: "Improve your body movement and expression",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Trophy,
    title: "Do Masterclasses",
    description: "Reach higher level on specific things",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Music,
    title: "Push with Choreos",
    description: "Challenge yourself with our choreographies",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Enjoy & Practice",
    description: "Put into practice all you have learned!",
    color: "from-red-500 to-pink-500",
  },
];

export default function Methodology() {
  return (
    <section id="more" className="section-elegant relative overflow-hidden">
      {/* Elegant Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/15 to-transparent" />

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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4 sm:mb-6"
            >
              <div className="divider-elegant w-16 sm:w-20 md:w-24 mx-auto mb-4 sm:mb-6" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight">
              <span className="text-white/95">THIS IS WHAT</span>{" "}
              <span className="gradient-text">WE HAVE</span>{" "}
              <span className="text-white/95">FOR YOU!</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light tracking-wide">
              Follow our methodology to grow your bachata
            </p>
          </motion.div>

          {/* Elegant Methodology Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full card-hover relative overflow-hidden">
                    {/* Elegant Background Gradient on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    
                    <div className="relative z-10">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white/95 mb-3 sm:mb-4 group-hover:text-white transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-sm sm:text-base leading-relaxed group-hover:text-white/70 transition-colors">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Elegant Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="glass-effect-strong rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-8 sm:p-10 md:p-12 lg:p-16 max-w-4xl mx-auto px-4 sm:px-0">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="flex items-center justify-center mb-6 sm:mb-8"
              >
                <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-400/90" />
              </motion.div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 leading-tight">
                <span className="gradient-text">ENJOY DANCING</span>
              </h3>
              <p className="text-xl sm:text-2xl text-white/70 mb-6 sm:mb-8 md:mb-10 font-light">
                Put into practice all you have learned!
              </p>
              <Link href="/classes" className="btn-elegant inline-flex items-center space-x-3 text-sm sm:text-base px-6 sm:px-8 md:px-10 py-3 sm:py-4">
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

