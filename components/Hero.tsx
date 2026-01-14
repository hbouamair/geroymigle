"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Optimize video for performance
    video.playsInline = true;
    video.setAttribute('webkit-playsinline', 'true');
    
    // Ensure video plays and loops continuously
    const playVideo = async () => {
      try {
        // Use requestAnimationFrame for smoother playback
        await video.play();
        // Set playback rate to normal (1.0) to ensure smooth playback
        video.playbackRate = 1.0;
      } catch (error) {
        // Autoplay was prevented, handle gracefully
        console.log('Video autoplay prevented');
      }
    };

    // Handle video end - restart immediately
    const handleEnded = () => {
      video.currentTime = 0;
      playVideo();
    };

    // Handle video pause - restart if paused (but not if user paused)
    const handlePause = () => {
      // Only auto-resume if it wasn't user-initiated and tab is visible
      if (video.paused && document.visibilityState === 'visible' && !video.ended) {
        playVideo();
      }
    };

    // Handle visibility change - restart when tab becomes visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && video.paused && !video.ended) {
        playVideo();
      }
    };

    // Handle canplay event - start playing when enough data is buffered
    const handleCanPlay = () => {
      if (video.paused) {
        playVideo();
      }
    };

    // Initial play attempt
    playVideo();

    // Add event listeners
    video.addEventListener('ended', handleEnded);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('pause', handlePause);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('pause', handlePause);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            filter: "brightness(0.6) contrast(1.1) saturate(1.2)",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
          onLoadedData={(e) => {
            // Start playing as soon as enough data is loaded
            e.currentTarget.play().catch(() => {});
          }}
          onEnded={(e) => {
            // Force restart if loop doesn't work
            e.currentTarget.currentTime = 0;
            e.currentTarget.play();
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Elegant Gradient Overlay - 2026 Style */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-purple-950/40 to-slate-950/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        
        {/* Refined Animated Gradient Overlays */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-purple-500/5 to-pink-500/10 pointer-events-none"
          animate={{
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Elegant Glassmorphism Effect Overlay */}
        <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" />
      </div>

      {/* Elegant Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-[1] pointer-events-none">
        <motion.div
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: [0, 120, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] bg-rose-500/15 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: [0, -120, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content - Modern 2026 Design */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 isolate">
        <div className="max-w-7xl mx-auto pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          
          {/* Modern 2026 Title Section */}
          <div className="relative isolate">
            {/* Decorative Top Accent */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center mb-6 sm:mb-8 md:mb-10"
            >
              <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
                className="mx-4 sm:mx-6"
              >
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400/80" />
              </motion.div>
              <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent via-pink-400/50 to-transparent" />
            </motion.div>

            {/* Main Title - Modern Split Layout */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              {/* Prefix Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-4 sm:mb-6"
              >
                <span className="inline-block text-white/60 text-xs sm:text-sm md:text-base font-light tracking-[0.3em] uppercase px-4 py-2 rounded-full glass-effect">
                  WITH
                </span>
              </motion.div>

              {/* Main Name - Large & Bold */}
              <motion.h1
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative inline-block mb-6 sm:mb-8 md:mb-10"
              >
                <span 
                  className="block gradient-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-display font-bold leading-[0.9] tracking-tight"
                  style={{ 
                    textShadow: '0 0 60px rgba(168, 85, 247, 0.3), 0 0 120px rgba(236, 72, 153, 0.2)',
                  }}
                >
                  GERO & MIGLĖ
                </span>
                
                {/* Decorative Underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent rounded-full"
                />
              </motion.h1>

              {/* Subtitle - Modern Typography */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-2 sm:space-y-3 md:space-y-4 px-4"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white/90 tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                  BECOME THE BEST
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold gradient-text-subtle tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  BACHATA SOCIAL DANCER
                </h2>
              </motion.div>
            </div>

            {/* Modern CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-12 md:mt-16 relative z-[100] isolate"
            >
              <Link 
                href="/classes" 
                className="group relative overflow-hidden btn-elegant px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-semibold rounded-full z-[100] pointer-events-auto cursor-pointer"
                style={{ isolation: 'isolate' }}
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>GET STARTED</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              
              {/* Secondary Info */}
              <div className="flex items-center space-x-2 text-white/60 text-sm sm:text-base">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>Available 24/7</span>
              </div>
            </motion.div>

            {/* Modern Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full blur-3xl hidden lg:block pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-20 h-20 sm:w-32 sm:h-32 bg-pink-500/10 rounded-full blur-3xl hidden lg:block pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

