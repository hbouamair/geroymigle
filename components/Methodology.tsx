"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Sparkles,
  Trophy,
  Music,
  Heart,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: BookOpen,
    title: "Online Programs",
    description: "Learn the bases of each level — from beginner to advanced",
    number: "01",
  },
  {
    icon: Users,
    title: "Partnerwork",
    description: "Discover new moves according to your level",
    number: "02",
  },
  {
    icon: Sparkles,
    title: "Styling Classes",
    description: "Improve your body movement and expression",
    number: "03",
  },
  {
    icon: Trophy,
    title: "Masterclasses",
    description: "Reach higher level on specific techniques",
    number: "04",
  },
  {
    icon: Music,
    title: "Choreographies",
    description: "Challenge yourself with our routines",
    number: "05",
  },
  {
    icon: Heart,
    title: "Enjoy & Practice",
    description: "Put into practice all you have learned!",
    number: "06",
  },
];

export default function Methodology() {
  return (
    <section id="more" className="section-space relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />

      <div className="container-tight relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="max-w-3xl">
            <span className="tag mb-6 inline-block">Methodology</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-5">
              <span className="text-cream">This is what</span>
              <br />
              <span className="gradient-text">we have for you</span>
            </h2>
            <p className="text-lg text-cream/50 max-w-xl">
              Follow our proven methodology to grow your bachata journey.
            </p>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-16 md:mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 h-full card-lift group relative">
                  {/* Step Number */}
                  <div className="absolute top-5 right-5 font-display font-extrabold text-4xl md:text-5xl text-cream/[0.04] leading-none select-none">
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors duration-500">
                      <Icon className="w-5 h-5 text-gold/80" />
                    </div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-cream mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-cream/45 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card-strong rounded-3xl md:rounded-4xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-violet-500/5 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
                <span className="gradient-text">Enjoy Dancing</span>
              </h3>
              <p className="text-lg text-cream/50 mb-8 max-w-md mx-auto">
                Put into practice everything you've learned and make the dance floor your stage.
              </p>
              <Link href="/classes" className="btn-primary group inline-flex items-center gap-3">
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
