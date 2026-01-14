"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Trophy, 
  Music, 
  User, 
  Heart, 
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Clock,
  PlayCircle
} from "lucide-react";
import Link from "next/link";
import { classDetails } from "@/lib/classData";

interface Class {
  title: string;
  description: string;
  badge: string;
  icon: typeof Users;
  gradient: string;
  href: string;
  image?: string;
  duration?: string;
  lessonsCount?: number;
}

// Map classDetails to Class format for display
const classes: Class[] = classDetails.map((classItem) => ({
  title: classItem.title,
  description: classItem.description,
  badge: classItem.badge,
  icon: Users, // Default icon
  gradient: classItem.gradient,
  href: `/classes/${classItem.slug}`,
  image: classItem.image,
  duration: classItem.duration,
  lessonsCount: classItem.lessonsCount,
}));

// Legacy classes array (keeping for reference, but using classDetails now)
const legacyClasses: Class[] = [
  {
    title: "Partnerwork Routines",
    description: "Learn synchronized partner movements and routines",
    badge: "2 Plans Available",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
    href: "/classes/partnerwork-routines",
    image: "/partnerwork.avif",
  },
  {
    title: "Master Class",
    description: "Advanced techniques and professional insights",
    badge: "FULL PASS",
    icon: Trophy,
    gradient: "from-yellow-500 to-orange-500",
    href: "/classes/master-class",
    image: "/masterclass.jpg",
  },
  {
    title: "Choreos",
    description: "Complete choreography routines to master",
    badge: "FULL PASS",
    icon: Music,
    gradient: "from-purple-500 to-pink-500",
    href: "/classes/choreos",
    image: "/choreo.avif",
  },
  {
    title: "Men Style | by Gero",
    description: "Master the masculine bachata styling techniques",
    badge: "2 Plans Available",
    icon: User,
    gradient: "from-indigo-500 to-blue-500",
    href: "/classes/men-style",
    image: "/men-style.avif",
  },
  {
    title: "Lady Style | by Miglė",
    description: "Elegant feminine styling and body movement",
    badge: "2 Plans Available",
    icon: Heart,
    gradient: "from-pink-500 to-rose-500",
    href: "/classes/lady-style",
    image: "/lady-style.avif",
  },
  {
    title: "Programs",
    description: "Structured learning paths from beginner to advanced",
    badge: "FULL PASS",
    icon: BookOpen,
    gradient: "from-green-500 to-emerald-500",
    href: "/classes/programs",
    image: "/program.avif",
  },
];

export default function ClassGrid() {
  return (
    <section className="section-elegant relative overflow-hidden">
      {/* Elegant Background Pattern - 2026 Style */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-7xl">
        {/* Elegant Section Header - 2026 Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          {/* Elegant divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="divider-elegant w-24 mx-auto mb-8"
          />
          
          {/* Main heading with refined typography */}
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold mb-6 leading-[1.05] tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block text-white/95 mb-2"
            >
              CHOOSE YOUR
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="block gradient-text"
            >
              LEARNING PATH
            </motion.span>
          </h2>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light tracking-wide px-4"
          >
            Explore our diverse range of classes designed for every dancer
          </motion.p>
        </motion.div>

        {/* Modern 2026 Classes Grid - Extra Wide Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 px-4 sm:px-0">
          {classes.map((classItem, index) => {
            return (
              <motion.div
                key={classItem.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group relative"
              >
                    <Link href={classItem.href} className="block h-full group">
                  <div className="rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden card-hover w-full flex flex-col border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-[2px]">
                    {/* Image Section - Top of Card */}
                    {classItem.image && (
                      <div className="relative w-full aspect-video overflow-hidden">
                        <motion.div 
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `url(${classItem.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        />
                        {/* Badge on Image */}
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                          <div className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full bg-black/70 backdrop-blur-2xl border border-white/40 text-white text-[10px] sm:text-xs font-bold tracking-widest shadow-xl">
                            {classItem.badge}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Text Content Section - Below Image */}
                    <div className="flex flex-col flex-grow p-5 sm:p-6 md:p-8 bg-gradient-to-br from-slate-900/95 via-purple-950/95 to-slate-900/95">
                      {/* Title - Modern Typography */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-200 group-hover:to-purple-200 transition-all duration-1000 leading-tight tracking-tight" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                        {classItem.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 group-hover:text-white transition-colors duration-1000 mb-4 sm:mb-6 flex-grow">
                        {classItem.description}
                      </p>

                      {/* Additional Info - Duration & Lessons */}
                      {(classItem.duration || classItem.lessonsCount) && (
                        <div className="flex items-center space-x-4 sm:space-x-6 mb-4 sm:mb-6 text-sm sm:text-base">
                          {classItem.duration && (
                            <div className="flex items-center space-x-2 text-white/70 group-hover:text-white/90 transition-colors">
                              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="font-display">{classItem.duration}</span>
                            </div>
                          )}
                          {classItem.lessonsCount && (
                            <div className="flex items-center space-x-2 text-white/70 group-hover:text-white/90 transition-colors">
                              <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="font-display">{classItem.lessonsCount} Lessons</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Modern CTA - Bottom Section */}
                      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/20 group-hover:border-white/30 transition-all duration-1000">
                        <span className="text-base sm:text-lg font-bold tracking-widest uppercase text-white group-hover:text-white transition-colors duration-1000" style={{ fontFamily: 'var(--font-display)' }}>
                          Explore
                        </span>
                        <motion.div
                          whileHover={{ x: 6, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all duration-500 shadow-lg flex-shrink-0"
                        >
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Modern 2026 Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-0"
        >
          <div className="glass-effect-strong rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 max-w-5xl mx-auto relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="inline-block mb-6"
                >
                  <CheckCircle2 className="w-20 h-20 text-emerald-400/90" />
                </motion.div>
                <h3 className="text-5xl md:text-6xl font-display font-bold mb-4 leading-tight tracking-tight">
                  <span className="gradient-text">WHAT'S INCLUDED</span>
                </h3>
                <div className="divider-elegant w-32 mx-auto mt-6" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { colorClass: "bg-purple-400", shadowClass: "shadow-purple-400/50", title: "Structured Learning", desc: "Step-by-step progression from basics to advanced" },
                  { colorClass: "bg-pink-400", shadowClass: "shadow-pink-400/50", title: "Expert Instruction", desc: "Learn directly from Gero & Miglė" },
                  { colorClass: "bg-yellow-400", shadowClass: "shadow-yellow-400/50", title: "Flexible Access", desc: "Learn at your own pace, anytime, anywhere" },
                  { colorClass: "bg-emerald-400", shadowClass: "shadow-emerald-400/50", title: "All Levels Welcome", desc: "From beginner to advanced dancers" },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className="flex items-start space-x-5 group/item"
                  >
                    <div className={`w-3 h-3 rounded-full ${feature.colorClass} mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-500 shadow-lg ${feature.shadowClass}`} />
                    <div>
                      <h4 className="text-xl font-semibold text-white/95 mb-2 group-hover/item:text-white transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                        {feature.title}
                      </h4>
                      <p className="text-white/60 text-base leading-relaxed group-hover/item:text-white/75 transition-colors">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

