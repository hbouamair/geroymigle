"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, MessageSquare, User, Send, Loader2, 
  CheckCircle2, MapPin, Phone, Clock 
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API endpoint
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-center py-12 sm:py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center"
        >
          <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
        </motion.div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
          Message Sent!
        </h3>
        <p className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-xl mx-auto">
          Thank you for contacting us. We'll get back to you as soon as possible!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSubmitted(false)}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg hover:shadow-lg transition-all duration-300 font-display"
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-lg sm:text-xl font-semibold text-white mb-3 font-display">
          Your Name <span className="text-rose-400">*</span>
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border-2 ${
              errors.name ? "border-rose-500" : "border-white/10"
            } text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-all duration-300 font-display text-lg`}
            placeholder="Enter your name"
          />
        </div>
        {errors.name && (
          <p className="mt-2 text-sm text-rose-400">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-lg sm:text-xl font-semibold text-white mb-3 font-display">
          Email Address <span className="text-rose-400">*</span>
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border-2 ${
              errors.email ? "border-rose-500" : "border-white/10"
            } text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-all duration-300 font-display text-lg`}
            placeholder="your.email@example.com"
          />
        </div>
        {errors.email && (
          <p className="mt-2 text-sm text-rose-400">{errors.email}</p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-lg sm:text-xl font-semibold text-white mb-3 font-display">
          Subject <span className="text-rose-400">*</span>
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border-2 ${
              errors.subject ? "border-rose-500" : "border-white/10"
            } text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-all duration-300 font-display text-lg`}
            placeholder="What is this regarding?"
          />
        </div>
        {errors.subject && (
          <p className="mt-2 text-sm text-rose-400">{errors.subject}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-lg sm:text-xl font-semibold text-white mb-3 font-display">
          Message <span className="text-rose-400">*</span>
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/40" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border-2 ${
              errors.message ? "border-rose-500" : "border-white/10"
            } text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-all duration-300 font-display text-lg resize-none`}
            placeholder="Tell us how we can help you..."
          />
        </div>
        {errors.message && (
          <p className="mt-2 text-sm text-rose-400">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={`w-full py-5 sm:py-6 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white font-bold text-lg sm:text-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 font-display flex items-center justify-center space-x-3 ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-6 h-6 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-6 h-6" />
            <span>Send Message</span>
          </>
        )}
      </motion.button>
    </form>
  );
}

