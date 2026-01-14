"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Users, CheckCircle2, DollarSign, Share2, Sparkles, BookOpen, Play, Star, Clock, Award, TrendingDown, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import type { ClassDetail } from "@/lib/classData";
import InstructorModal from "@/components/InstructorModal";
import Breadcrumbs from "@/components/Breadcrumbs";

interface ClassDetailPageProps {
  classItem: ClassDetail;
}

// Instructor data with detailed info
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
    achievements: [
      "International Bachata Champion",
      "10+ Years Teaching Experience",
      "5000+ Students Taught",
      "Featured in Major Dance Festivals"
    ],
    rating: 5.0,
    students: 5000
  },
  "Miglė Kreipaviciute": {
    name: "Miglė Kreipaviciute",
    image: "/migle.jpg",
    bio: "Expert in feminine bachata styling and body movement. Known for elegant teaching style and helping dancers express themselves through graceful movements and emotional connection.",
    location: "International",
    achievements: [
      "Award-Winning Bachata Performer",
      "8+ Years Teaching Experience",
      "4000+ Students Taught",
      "Specialized in Lady Styling"
    ],
    rating: 5.0,
    students: 4000
  }
};

export default function ClassDetailPage({ classItem }: ClassDetailPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  // Calculate price comparison (if applicable)
  const hasMonthlyPrice = classItem.price.includes("month");
  const monthlyPrice = hasMonthlyPrice ? parseFloat(classItem.price.match(/[\d.]+/)?.[0] || "0") : null;
  const yearlyPrice = monthlyPrice ? monthlyPrice * 12 : null;
  const yearlySavings = yearlyPrice ? yearlyPrice * 0.2 : null; // 20% savings

  return (
    <section ref={containerRef} className="relative min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 overflow-hidden">
      {/* Creative 2026 Background - Multi-layer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/40 to-slate-950" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className={`absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] xl:w-[40rem] xl:h-[40rem] bg-gradient-to-br ${classItem.gradient} opacity-10 rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] xl:w-[40rem] xl:h-[40rem] bg-gradient-to-br ${classItem.gradient} opacity-10 rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%),
                             linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 sm:mb-12"
        >
          <Breadcrumbs
            items={[
              { label: "Classes", href: "/classes" },
              { label: classItem.title },
            ]}
          />
        </motion.div>

        <div className="max-w-7xl xl:max-w-[90rem] mx-auto">
          {/* Creative Hero Section - Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-20 sm:mb-24">
            {/* Left Column - Title & Info */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10">
              {/* Badge with Creative Design */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                <span className={`inline-flex items-center space-x-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r ${classItem.gradient} text-white text-sm sm:text-base font-bold tracking-[0.2em] uppercase shadow-2xl shadow-purple-500/40 transform hover:scale-105 transition-transform duration-300`}>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{classItem.badge}</span>
                </span>
              </motion.div>

              {/* Creative Title - Split Layout */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-2 sm:space-y-4"
              >
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black leading-[0.85] tracking-tight">
                  <span className={`block bg-gradient-to-r ${classItem.gradient} bg-clip-text text-transparent`}>
                    {classItem.title.split('|')[0].trim()}
                  </span>
                  {classItem.title.includes('|') && (
                    <motion.span
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="block text-3xl sm:text-4xl md:text-5xl text-white/60 font-light mt-2"
                    >
                      {classItem.title.split('|')[1].trim()}
                    </motion.span>
                  )}
                </div>
              </motion.h1>

              {/* Description with Creative Typography */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl sm:text-2xl md:text-3xl text-white/80 leading-relaxed font-display font-light max-w-3xl"
              >
                {classItem.fullDescription}
              </motion.p>

              {/* Quick Stats - Creative Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-3 gap-4 sm:gap-6"
              >
                {[
                  { icon: Clock, label: "24/7", sublabel: "Access" },
                  { icon: Star, label: "5.0", sublabel: "Rating" },
                  { icon: Award, label: "100+", sublabel: "Students" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-effect-strong rounded-2xl p-4 sm:p-6 text-center group cursor-pointer"
                  >
                    <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 bg-gradient-to-r ${classItem.gradient} bg-clip-text text-transparent`} />
                    <div className="text-2xl sm:text-3xl font-bold text-white font-display">{stat.label}</div>
                    <div className="text-xs sm:text-sm text-white/60 font-display">{stat.sublabel}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Creative Image Presentation - Enhanced */}
            {classItem.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5 relative"
              >
                {/* Larger, More Prominent Image */}
                <motion.div
                  style={{ y: imageY, opacity: imageOpacity }}
                  className="relative w-full aspect-video rounded-[3rem] overflow-hidden glass-effect-strong border-2 border-white/20 group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={classItem.image}
                    alt={classItem.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Play Button Overlay - Video Preview */}
                  <div className="absolute inset-0 flex items-center justify-center group/play">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center cursor-pointer opacity-0 group-hover/play:opacity-100 transition-opacity duration-300"
                    >
                      <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white ml-1" />
                    </motion.div>
                  </div>
                  
                  {/* Floating Decorative Elements */}
                  <motion.div
                    className={`absolute top-8 right-8 w-16 h-16 bg-gradient-to-br ${classItem.gradient} opacity-30 rounded-full blur-xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className={`absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br ${classItem.gradient} opacity-30 rounded-full blur-xl`}
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>

                {/* Enhanced Price Display - With Savings Comparison */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 sm:mt-8 glass-effect-strong rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-white/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <DollarSign className={`w-6 h-6 bg-gradient-to-r ${classItem.gradient} bg-clip-text text-transparent`} />
                      <span className="text-sm text-white/60 font-display uppercase tracking-wider">Price</span>
                    </div>
                    {hasMonthlyPrice && yearlySavings && (
                      <div className="flex items-center space-x-1 px-2 py-1 rounded-full bg-green-500/20 border border-green-400/30">
                        <TrendingDown className="w-3 h-3 text-green-400" />
                        <span className="text-xs text-green-400 font-bold font-display">Save 20%</span>
                      </div>
                    )}
                  </div>
                  <div className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${classItem.gradient} bg-clip-text text-transparent font-display mb-2`}>
                    {classItem.price}
                  </div>
                  {hasMonthlyPrice && yearlyPrice && yearlySavings && (
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-white/60 font-display">Yearly Plan</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg text-white/40 line-through font-display">€{yearlyPrice.toFixed(2)}</span>
                          <span className="text-xl font-bold text-green-400 font-display">€{(yearlyPrice - yearlySavings).toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-green-400 font-display">
                        <Info className="w-3 h-3" />
                        <span>Save €{yearlySavings.toFixed(2)} per year</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Creative Content Section - Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            {/* Main Content - Creative Layout */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-12">
              {/* What You'll Learn - Creative Card Design */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="glass-effect-strong rounded-[3rem] p-8 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden">
                  {/* Creative Background Pattern */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${classItem.gradient} opacity-5`} />
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                  
                  <div className="relative z-10">
                    {/* Creative Header */}
                    <div className="flex items-center justify-between mb-10 sm:mb-12">
                      <div className="flex items-center space-x-5">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-r ${classItem.gradient} flex items-center justify-center shadow-2xl`}
                        >
                          <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </motion.div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white">
                          What You'll Learn
                        </h2>
                      </div>
                    </div>

                    {/* Creative Steps List - Numbered Cards */}
                    <div className="space-y-4 sm:space-y-6">
                      {classItem.steps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          whileHover={{ x: 10, scale: 1.02 }}
                          className="group relative"
                        >
                          <div className="flex items-start space-x-6 p-6 sm:p-8 rounded-2xl glass-effect hover:bg-white/10 transition-all duration-500 cursor-pointer">
                            {/* Creative Number Badge */}
                            <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r ${classItem.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                              <span className="text-2xl sm:text-3xl font-black text-white font-display">
                                {index + 1}
                              </span>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 pt-2">
                              <p className="text-xl sm:text-2xl md:text-3xl text-white/90 group-hover:text-white transition-colors font-display font-medium leading-relaxed">
                                {step}
                              </p>
                            </div>

                            {/* Hover Indicator */}
                            <motion.div
                              initial={{ scale: 0, rotate: -45 }}
                              whileHover={{ scale: 1, rotate: 0 }}
                              className="flex-shrink-0"
                            >
                              <CheckCircle2 className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${classItem.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Creative Sticky Sidebar - Better Mobile Layout */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="lg:sticky lg:top-32 space-y-5 sm:space-y-6 lg:space-y-8">
                {/* Instructors - Creative Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-effect-strong rounded-3xl p-8 sm:p-10 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${classItem.gradient} opacity-5`} />
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${classItem.gradient} flex items-center justify-center shadow-lg`}>
                        <Users className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">Instructors</h3>
                    </div>
                    <div className="space-y-5">
                      {classItem.instructors.map((instructor, index) => {
                        const instructorInfo = instructorData[instructor];
                        const instructorImage = instructor.includes('Gero') ? '/gero.jpg' : '/migle.jpg';
                        
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ x: 5, scale: 1.02 }}
                            onClick={() => {
                              if (instructorInfo) {
                                setSelectedInstructor(instructor);
                              }
                            }}
                            className="flex items-center space-x-4 p-4 rounded-xl glass-effect hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                          >
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300 shadow-lg group-hover:scale-110">
                              <Image
                                src={instructorImage}
                                alt={instructor}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 64px, 80px"
                              />
                            </div>
                            <div className="flex-1">
                              <span className="text-xl sm:text-2xl text-white/90 group-hover:text-white transition-colors font-display font-medium block">
                                {instructor}
                              </span>
                              {instructorInfo && (
                                <div className="flex items-center space-x-3 mt-1">
                                  <div className="flex items-center space-x-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="text-sm text-white/60 font-display">{instructorInfo.rating}</span>
                                  </div>
                                  <span className="text-sm text-white/60 font-display">•</span>
                                  <span className="text-sm text-white/60 font-display">{instructorInfo.students}+ students</span>
                                </div>
                              )}
                            </div>
                            {instructorInfo && (
                              <motion.div
                                whileHover={{ x: 3 }}
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              >
                                <ArrowLeft className="w-5 h-5 text-white/60 rotate-180" />
                              </motion.div>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                    
                    {/* Instructor Modal */}
                    {selectedInstructor && instructorData[selectedInstructor] && (
                      <InstructorModal
                        isOpen={!!selectedInstructor}
                        onClose={() => setSelectedInstructor(null)}
                        instructor={instructorData[selectedInstructor]}
                      />
                    )}
                  </div>
                </motion.div>

                {/* Creative CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  {/* Join Button - Creative Design */}
                  <Link
                    href="/login"
                    className={`group relative block w-full text-center px-8 sm:px-10 py-6 sm:py-7 rounded-2xl bg-gradient-to-r ${classItem.gradient} text-white font-black text-xl sm:text-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 overflow-hidden font-display`}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7" />
                      <span>Join Now</span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Link>

                  {/* Share Button - Creative Design */}
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: classItem.title,
                          text: classItem.description,
                          url: window.location.href,
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                      }
                    }}
                    className="w-full flex items-center justify-center space-x-3 px-8 sm:px-10 py-6 sm:py-7 rounded-2xl glass-effect-strong text-white font-bold text-lg sm:text-xl hover:bg-white/15 transition-all duration-500 group font-display"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Share2 className="w-6 h-6 sm:w-7 sm:h-7" />
                    </motion.div>
                    <span>Share Class</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
