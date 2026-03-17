"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Users, CheckCircle2, DollarSign, Share2, BookOpen, Play, Star, Clock, Award, TrendingDown, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import type { ClassDetail } from "@/lib/classData";
import InstructorModal from "@/components/InstructorModal";
import Breadcrumbs from "@/components/Breadcrumbs";

interface ClassDetailPageProps {
  classItem: ClassDetail;
}

const instructorData: Record<string, {
  name: string;
  image: string;
  bio: string;
  location: string;
  achievements: string[];
  rating: number;
  students: number;
}> = {
  "Gero Ruiz": {
    name: "Gero Ruiz",
    image: "/gero.jpg",
    bio: "Professional bachata instructor and performer with years of experience teaching masculine styling and leading techniques. Specialized in helping dancers develop confidence and personal style.",
    location: "International",
    achievements: ["International Bachata Champion", "10+ Years Teaching Experience", "5000+ Students Taught", "Featured in Major Dance Festivals"],
    rating: 5.0,
    students: 5000,
  },
  "Miglė Kreipaviciute": {
    name: "Miglė Kreipaviciute",
    image: "/migle.jpg",
    bio: "Expert in feminine bachata styling and body movement. Known for elegant teaching style and helping dancers express themselves through graceful movements and emotional connection.",
    location: "International",
    achievements: ["Award-Winning Bachata Performer", "8+ Years Teaching Experience", "4000+ Students Taught", "Specialized in Lady Styling"],
    rating: 5.0,
    students: 4000,
  },
};

export default function ClassDetailPage({ classItem }: ClassDetailPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const hasMonthlyPrice = classItem.price.includes("month");
  const monthlyPrice = hasMonthlyPrice ? parseFloat(classItem.price.match(/[\d.]+/)?.[0] || "0") : null;
  const yearlyPrice = monthlyPrice ? monthlyPrice * 12 : null;
  const yearlySavings = yearlyPrice ? yearlyPrice * 0.2 : null;

  return (
    <section ref={containerRef} className="relative min-h-screen pt-28 sm:pt-36 pb-20 sm:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grain pointer-events-none" />
      </div>

      <div className="container-tight relative z-10">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <Breadcrumbs
            items={[
              { label: "Classes", href: "/classes" },
              { label: classItem.title },
            ]}
          />
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-24">
          {/* Left - Title & Info */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <span className="tag mb-5 inline-block">{classItem.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]"
            >
              <span className="gradient-text">
                {classItem.title.split("|")[0].trim()}
              </span>
              {classItem.title.includes("|") && (
                <span className="block text-2xl sm:text-3xl text-cream/40 font-light mt-2">
                  {classItem.title.split("|")[1].trim()}
                </span>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg md:text-xl text-cream/50 leading-relaxed max-w-2xl"
            >
              {classItem.fullDescription}
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { icon: Clock, label: "24/7", sublabel: "Access" },
                { icon: Star, label: "5.0", sublabel: "Rating" },
                { icon: Award, label: "100+", sublabel: "Students" },
              ].map((stat, index) => (
                <div key={index} className="glass-card rounded-xl p-4 text-center">
                  <stat.icon className="w-5 h-5 mx-auto mb-1.5 text-gold/60" />
                  <div className="font-display font-bold text-lg text-cream">{stat.label}</div>
                  <div className="text-xs text-cream/35">{stat.sublabel}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Image & Price */}
          {classItem.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lg:col-span-5"
            >
              <motion.div
                style={{ y: imageY }}
                className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden glass-card group"
              >
                <Image
                  src={classItem.image}
                  alt={classItem.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-surface/20 to-transparent" />
              </motion.div>

              {/* Price Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-5 glass-card-strong rounded-2xl p-5 md:p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gold/60" />
                    <span className="text-xs text-cream/40 font-display uppercase tracking-wider">Price</span>
                  </div>
                  {hasMonthlyPrice && yearlySavings && (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/20">
                      <TrendingDown className="w-3 h-3 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400 font-bold">Save 20%</span>
                    </div>
                  )}
                </div>
                <div className="font-display font-extrabold text-2xl md:text-3xl gradient-text mb-1">
                  {classItem.price}
                </div>
                {hasMonthlyPrice && yearlyPrice && yearlySavings && (
                  <div className="pt-3 border-t border-cream/5 mt-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-cream/35">Yearly Plan</span>
                      <div className="flex items-center gap-2">
                        <span className="text-cream/25 line-through text-xs">&euro;{yearlyPrice.toFixed(2)}</span>
                        <span className="text-emerald-400 font-bold">&euro;{(yearlyPrice - yearlySavings).toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-emerald-400 mt-1">
                      <Info className="w-2.5 h-2.5" />
                      <span>Save &euro;{yearlySavings.toFixed(2)} per year</span>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card-strong rounded-3xl md:rounded-4xl p-6 md:p-10 lg:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-gold" />
                  </div>
                  <h2 className="font-display font-extrabold text-2xl md:text-3xl text-cream">
                    What You'll Learn
                  </h2>
                </div>

                <div className="space-y-3">
                  {classItem.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06, duration: 0.5 }}
                      className="group"
                    >
                      <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-cream/[0.02] transition-colors duration-300">
                        <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 transition-colors duration-300">
                          <span className="text-xs font-display font-bold text-gold/70">{index + 1}</span>
                        </div>
                        <p className="text-base md:text-lg text-cream/70 group-hover:text-cream/90 transition-colors leading-relaxed">
                          {step}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-5">
              {/* Instructors */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="glass-card-strong rounded-2xl md:rounded-3xl p-5 md:p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-gold" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-cream">Instructors</h3>
                </div>
                <div className="space-y-3">
                  {classItem.instructors.map((instructor, index) => {
                    const info = instructorData[instructor];
                    const img = instructor.includes("Gero") ? "/gero.jpg" : "/migle.jpg";
                    return (
                      <div
                        key={index}
                        onClick={() => info && setSelectedInstructor(instructor)}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream/[0.03] transition-colors duration-300 cursor-pointer group"
                      >
                        <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-cream/10 group-hover:ring-gold/20 transition-all duration-300 flex-shrink-0">
                          <Image src={img} alt={instructor} fill className="object-cover" sizes="48px" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-cream/80 group-hover:text-cream transition-colors block">
                            {instructor}
                          </span>
                          {info && (
                            <div className="flex items-center gap-2 mt-0.5">
                              <Star className="w-3 h-3 text-gold/60 fill-gold/60" />
                              <span className="text-[11px] text-cream/35">{info.rating} &middot; {info.students}+ students</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {selectedInstructor && instructorData[selectedInstructor] && (
                  <InstructorModal
                    isOpen={!!selectedInstructor}
                    onClose={() => setSelectedInstructor(null)}
                    instructor={instructorData[selectedInstructor]}
                  />
                )}
              </motion.div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href="/login"
                  className="btn-primary w-full flex items-center justify-center gap-2 text-base"
                >
                  <Play className="w-4 h-4" />
                  <span>Join Now</span>
                </Link>

                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: classItem.title, text: classItem.description, url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  className="btn-outline w-full flex items-center justify-center gap-2 text-base"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share Class</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
