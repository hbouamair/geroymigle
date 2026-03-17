"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} id="project" className="section-space relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-violet-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[3/4] rounded-3xl md:rounded-4xl overflow-hidden"
            >
              <Image
                src="/geroymigle.jpg"
                alt="Gero & Miglė - Bachata Instructors"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                priority
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />

              {/* Floating Label */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="glass-card-strong rounded-xl px-5 py-3">
                  <p className="font-display font-bold text-cream text-sm">Gero & Miglė</p>
                  <p className="text-cream/50 text-xs">International Bachata Instructors</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative corner accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-gold/15 rounded-3xl pointer-events-none hidden lg:block" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-violet-500/10 rounded-3xl pointer-events-none hidden lg:block" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <span className="tag mb-5 inline-block">About Us</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6">
                <span className="text-cream">Who</span>{" "}
                <span className="gradient-text">we are</span>
              </h2>
            </div>

            <div className="glass-card rounded-2xl p-6 md:p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-cream mb-2">
                    Passionate About Bachata
                  </h3>
                  <p className="text-cream/50 leading-relaxed">
                    We are Gero & Miglė, dedicated bachata instructors passionate about sharing
                    the joy of social dancing. Our mission is to help you become the best
                    bachata social dancer you can be.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="font-display font-bold text-xl text-cream mb-3">Our Approach</h3>
              <p className="text-cream/50 leading-relaxed">
                We combine structured learning with creative expression, ensuring you not only
                learn the moves but also develop your own style and confidence on the dance floor.
              </p>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "5000+", label: "Students" },
                { value: "50+", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-xl sm:text-2xl md:text-3xl gradient-text">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-cream/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
