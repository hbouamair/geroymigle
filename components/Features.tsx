"use client";

import { motion } from "framer-motion";
import { Monitor, MapPin, Clock, BookOpen, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: BookOpen,
    title: "Structured Programs",
    description: "Comprehensive learning paths designed to take you from beginner to advanced, step by step.",
    span: "lg:col-span-2 lg:row-span-2",
    accent: "bg-violet-500/10 border-violet-500/10",
    iconColor: "text-violet-400",
    large: true,
  },
  {
    icon: Monitor,
    title: "Any Device",
    description: "Phone, tablet, or desktop — your classes travel with you.",
    span: "lg:col-span-1",
    accent: "bg-gold/10 border-gold/10",
    iconColor: "text-gold",
  },
  {
    icon: MapPin,
    title: "Any Place",
    description: "Practice wherever feels right. No commute needed.",
    span: "lg:col-span-1",
    accent: "bg-rose/10 border-rose/10",
    iconColor: "text-rose",
  },
  {
    icon: Clock,
    title: "Any Time",
    description: "24/7 access to every lesson. Learn on your schedule.",
    span: "lg:col-span-2",
    accent: "bg-cream/5 border-cream/5",
    iconColor: "text-cream/70",
  },
];

export default function Features() {
  return (
    <section className="section-space relative overflow-hidden">
      <div className="absolute inset-0 line-grid opacity-40 pointer-events-none" />

      <div className="container-tight relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="max-w-3xl">
            <span className="tag mb-6 inline-block">Platform</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.05] mb-5">
              <span className="text-cream">What you'll get</span>
              <br />
              <span className="text-cream/30">in our platform</span>
            </h2>
            <p className="text-lg text-cream/50 max-w-xl leading-relaxed">
              Everything you need to master bachata social dancing, designed for the way you learn.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16 md:mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`${feature.span || ""}`}
              >
                <div className={`glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 h-full card-lift group ${feature.accent}`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${feature.accent} transition-transform duration-500 group-hover:scale-110`}>
                    <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                  </div>
                  <h3 className={`font-display font-bold tracking-tight text-cream mb-3 ${feature.large ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-cream/50 leading-relaxed ${feature.large ? "text-base md:text-lg max-w-md" : "text-sm"}`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {[
            { name: "Explore Classes", href: "/classes", desc: "Browse all class types" },
            { name: "G&M Project", href: "/project", desc: "Become a coach" },
          ].map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            >
              <Link
                href={link.href}
                className="group glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 flex items-center justify-between card-lift block"
              >
                <div>
                  <h3 className="font-display font-bold text-lg md:text-xl text-cream group-hover:text-gold transition-colors duration-300">
                    {link.name}
                  </h3>
                  <p className="text-sm text-cream/40 mt-1">{link.desc}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-500">
                  <ArrowUpRight className="w-4 h-4 text-cream/40 group-hover:text-gold transition-colors duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
