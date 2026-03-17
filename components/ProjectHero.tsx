"use client";

import { motion } from "framer-motion";
import { Users, Trophy, ArrowRight } from "lucide-react";

interface ProjectHeroProps {
  onOpenForm: () => void;
}

export default function ProjectHero({ onOpenForm }: ProjectHeroProps) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="container-tight relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="tag mb-6 inline-block">Project</span>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6">
              <span className="gradient-text">G&M Project</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-4 mb-10"
          >
            <p className="text-lg sm:text-xl text-cream/60 leading-relaxed max-w-2xl">
              Would you like to be the coach of our teams in your city? Would you like to perform with us on stage?
            </p>
            <p className="text-base text-cream/45 leading-relaxed max-w-xl">
              If you are a teacher and are interested in taking your dance and that of your students to the next level, this challenge is for you!
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
          >
            <div className="glass-card rounded-2xl p-5">
              <Users className="w-6 h-6 text-violet-400 mb-3" />
              <h3 className="font-display font-bold text-base text-cream mb-1">Lead Teams</h3>
              <p className="text-xs text-cream/40">Become a coach in your city</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <Trophy className="w-6 h-6 text-gold mb-3" />
              <h3 className="font-display font-bold text-base text-cream mb-1">Perform on Stage</h3>
              <p className="text-xs text-cream/40">Showcase your skills with us</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-sm text-cream/45 mb-4">
              Want to be a G&M project coach in your city? Fill the form below:
            </p>
            <button
              onClick={onOpenForm}
              className="btn-primary group inline-flex items-center gap-3"
            >
              <span>Start Here</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
