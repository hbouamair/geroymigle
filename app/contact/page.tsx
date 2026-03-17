"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@geroymigle.com", href: "mailto:info@geroymigle.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "International", href: "#" },
    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: "#" },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative min-h-screen pt-28 sm:pt-36 pb-20 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 mesh-bg pointer-events-none" />
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="container-tight relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14 md:mb-20"
          >
            <Send className="w-7 h-7 text-gold/50 mx-auto mb-4" />
            <h1 className="font-display font-extrabold text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight gradient-text mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-cream/45 max-w-xl mx-auto">
              Get in touch with us. We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="glass-card-strong rounded-3xl p-6 sm:p-8 md:p-10">
                <ContactForm />
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6 order-1 lg:order-2"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden glass-card">
                <Image
                  src="/geroymigleprofile1.jpg"
                  alt="Gero & Miglė"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/50 via-transparent to-transparent" />
              </div>

              {/* Contact Cards */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.08, duration: 0.5 }}
                      className={`block glass-card rounded-xl p-4 hover:bg-cream/[0.03] transition-all duration-300 group ${
                        info.href === "#" ? "cursor-default" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 transition-colors">
                          <Icon className="w-4 h-4 text-gold/60" />
                        </div>
                        <div>
                          <p className="text-[10px] text-cream/30 uppercase tracking-widest mb-0.5">{info.label}</p>
                          <p className="text-sm font-medium text-cream/70 group-hover:text-cream transition-colors">
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
      </section>

      <Footer />
    </main>
  );
}
