"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Sparkles, Send } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@geroymigle.com",
      href: "mailto:info@geroymigle.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "International",
      href: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="relative min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 overflow-hidden">
        {/* Modern 2026 Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950" />
          <motion.div
            className="absolute top-20 right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] bg-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <div className="inline-flex items-center justify-center mb-6 sm:mb-8">
                <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                  className="mx-4 sm:mx-6"
                >
                  <Send className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
                </motion.div>
                <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent via-pink-400/50 to-transparent" />
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight">
                <span className="gradient-text">Contact Us</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-white/80 max-w-3xl mx-auto font-display font-light">
                Get in touch with us. We'd love to hear from you!
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
              {/* Left Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="order-2 lg:order-1"
              >
                <div className="glass-effect-strong rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12">
                  <ContactForm />
                </div>
              </motion.div>

              {/* Right Column - Image & Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8 sm:space-y-10 order-1 lg:order-2"
              >
                {/* Image */}
                <div className="relative group">
                  <div className="relative aspect-[3/4] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden glass-effect-strong shadow-2xl">
                    <Image
                      src="/geroymigleprofile1.jpg"
                      alt="Gero & Miglė - Contact Us"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={100}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>
                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-purple-400/30 to-rose-400/30 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.15, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Contact Information Cards */}
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={index}
                        href={info.href}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className={`block glass-effect-strong rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group ${
                          info.href === "#" ? "cursor-default" : "cursor-pointer"
                        }`}
                      >
                        <div className="flex items-center space-x-4 sm:space-x-6">
                          <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${info.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm sm:text-base text-white/60 font-display uppercase tracking-wider mb-1">
                              {info.label}
                            </p>
                            <p className="text-lg sm:text-xl md:text-2xl text-white font-display font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-200 group-hover:to-purple-200 transition-all duration-500">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

