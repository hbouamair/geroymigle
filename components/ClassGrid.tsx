"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, PlayCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { classDetails } from "@/lib/classData";

const classes = classDetails.map((classItem) => ({
  title: classItem.title,
  description: classItem.description,
  badge: classItem.badge,
  gradient: classItem.gradient,
  href: `/classes/${classItem.slug}`,
  image: classItem.image,
  duration: classItem.duration,
  lessonsCount: classItem.lessonsCount,
}));

export default function ClassGrid() {
  return (
    <section className="section-space relative overflow-hidden">
      <div className="absolute inset-0 line-grid opacity-30 pointer-events-none" />

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
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-5">
              <span className="text-cream">Choose your</span>
              <br />
              <span className="gradient-text">learning path</span>
            </h2>
            <p className="text-lg text-cream/50 max-w-xl">
              Explore our diverse range of classes designed for every dancer.
            </p>
          </div>
        </motion.div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 mb-16 md:mb-20">
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={classItem.href} className="group block h-full">
                <div className="glass-card rounded-2xl md:rounded-3xl overflow-hidden h-full card-lift">
                  {/* Image */}
                  {classItem.image && (
                    <div className="relative aspect-video overflow-hidden">
                      <div
                        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${classItem.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />

                      {/* Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="tag bg-surface/60 backdrop-blur-xl border-cream/10 text-cream/70">
                          {classItem.badge}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5 md:p-7">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-cream mb-3 tracking-tight group-hover:text-gold transition-colors duration-500">
                      {classItem.title}
                    </h3>
                    <p className="text-sm text-cream/45 leading-relaxed mb-5">
                      {classItem.description}
                    </p>

                    {/* Meta */}
                    {(classItem.duration || classItem.lessonsCount) && (
                      <div className="flex items-center gap-4 mb-5 text-xs text-cream/35">
                        {classItem.duration && (
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{classItem.duration}</span>
                          </div>
                        )}
                        {classItem.lessonsCount && (
                          <div className="flex items-center gap-1.5">
                            <PlayCircle className="w-3.5 h-3.5" />
                            <span>{classItem.lessonsCount} Lessons</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* CTA Row */}
                    <div className="flex items-center justify-between pt-4 border-t border-cream/5">
                      <span className="text-xs font-display font-bold uppercase tracking-widest text-cream/40 group-hover:text-cream/70 transition-colors duration-300">
                        Explore
                      </span>
                      <div className="w-8 h-8 rounded-full border border-cream/10 flex items-center justify-center group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-500">
                        <ArrowUpRight className="w-3.5 h-3.5 text-cream/30 group-hover:text-gold transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card-strong rounded-3xl md:rounded-4xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/3 via-transparent to-violet-500/3 pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <CheckCircle2 className="w-10 h-10 text-gold/60 mx-auto mb-4" />
                <h3 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight gradient-text mb-2">
                  What's Included
                </h3>
                <div className="divider w-24 mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Structured Learning", desc: "Step-by-step progression from basics to advanced" },
                  { title: "Expert Instruction", desc: "Learn directly from Gero & Miglė" },
                  { title: "Flexible Access", desc: "Learn at your own pace, anytime, anywhere" },
                  { title: "All Levels Welcome", desc: "From beginner to advanced dancers" },
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-500" />
                    <div>
                      <h4 className="font-display font-bold text-sm text-cream mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-cream/40 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
