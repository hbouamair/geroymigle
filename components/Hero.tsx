"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const marqueeWords = ["BACHATA", "SOCIAL", "DANCING", "PASSION", "RHYTHM", "EXPRESSION", "MOVEMENT", "CONNECTION"];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, 100]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playsInline = true;
    video.setAttribute("webkit-playsinline", "true");

    const playVideo = async () => {
      try {
        await video.play();
        video.playbackRate = 1.0;
      } catch {
        // Autoplay prevented
      }
    };

    const handleEnded = () => {
      video.currentTime = 0;
      playVideo();
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible" && video.paused) playVideo();
    };

    playVideo();
    video.addEventListener("ended", handleEnded);
    video.addEventListener("canplay", () => video.paused && playVideo());
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      video.removeEventListener("ended", handleEnded);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      {/* Video Background */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: videoScale, opacity: videoOpacity }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.35) contrast(1.1) saturate(0.9)" }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 z-[1] grain pointer-events-none" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-surface via-surface/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-surface/30 via-transparent to-surface/30 pointer-events-none" />

      {/* Mesh gradient accent - hidden on mobile for perf */}
      <div className="absolute inset-0 z-[2] pointer-events-none hidden sm:block">
        <motion.div
          className="absolute top-1/4 -left-32 w-[30rem] h-[30rem] lg:w-[40rem] lg:h-[40rem] bg-violet-600/8 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[25rem] h-[25rem] lg:w-[35rem] lg:h-[35rem] bg-gold/8 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 px-5 sm:px-8 lg:px-12 mx-auto w-full max-w-[1320px] pb-6 sm:pb-12 md:pb-20 lg:pb-28 pt-24 sm:pt-28 md:pt-32"
      >
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4 sm:mb-6 md:mb-8"
        >
          <span className="tag text-[10px] sm:text-xs">Online Dance Academy</span>
        </motion.div>

        {/* Main Title */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display font-extrabold text-[2.5rem] leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl tracking-tight mb-3 sm:mb-4">
              <span className="text-cream">GERO</span>
              <span className="text-cream/30 mx-1.5 sm:mx-2 md:mx-3">&</span>
              <span className="gradient-text">MIGLĖ</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="font-display text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-light text-cream/50 tracking-tight leading-snug max-w-[90%] sm:max-w-2xl">
              Become the best
              <span className="text-cream font-medium"> bachata social dancer</span>
            </h2>
          </motion.div>
        </div>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4"
        >
          <Link href="/classes" className="btn-primary group inline-flex items-center justify-center gap-3 text-sm sm:text-base w-full sm:w-auto">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link href="/project" className="btn-outline inline-flex items-center justify-center gap-3 text-sm sm:text-base w-full sm:w-auto">
            <span>G&M Project</span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-8 mt-8 sm:mt-10 md:mt-14 lg:mt-16"
        >
          {[
            { value: "24/7", label: "Access" },
            { value: "6+", label: "Class Types" },
            { value: "5K+", label: "Students" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-1.5 sm:gap-2">
              <span className="font-display font-bold text-base sm:text-lg md:text-xl text-cream">{stat.value}</span>
              <span className="text-[10px] sm:text-xs text-cream/40 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee Strip */}
      <div className="relative z-10 border-t border-cream/5 bg-surface/60 backdrop-blur-sm overflow-hidden flex-shrink-0">
        <div className="py-2.5 sm:py-3 md:py-4">
          <div className="marquee-track">
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} className="inline-flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-display font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cream/15">
                {word}
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gold/30" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
