"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, User, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Invalid email";
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 2000));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full pl-11 pr-4 py-3.5 rounded-xl bg-cream/[0.03] border ${
      errors[field] ? "border-rose-500/50" : "border-cream/8"
    } text-cream placeholder-cream/25 focus:outline-none focus:border-gold/40 transition-all duration-300 text-sm`;

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="font-display font-extrabold text-2xl text-cream mb-3">Message Sent!</h3>
        <p className="text-sm text-cream/50 mb-8 max-w-md mx-auto">
          Thank you for contacting us. We'll get back to you as soon as possible!
        </p>
        <button onClick={() => setIsSubmitted(false)} className="btn-primary text-sm">
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-cream/70 mb-1.5">Your Name *</label>
        <div className="relative">
          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/25" />
          <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass("name")} placeholder="Enter your name" />
        </div>
        {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-cream/70 mb-1.5">Email *</label>
        <div className="relative">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/25" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass("email")} placeholder="your@email.com" />
        </div>
        {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-cream/70 mb-1.5">Subject *</label>
        <div className="relative">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/25" />
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} className={inputClass("subject")} placeholder="What is this regarding?" />
        </div>
        {errors.subject && <p className="mt-1 text-xs text-rose-400">{errors.subject}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-cream/70 mb-1.5">Message *</label>
        <div className="relative">
          <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-cream/25" />
          <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className={`${inputClass("message")} resize-none`} placeholder="Tell us how we can help..." />
        </div>
        {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn-primary w-full flex items-center justify-center gap-2 ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
      >
        {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /><span>Sending...</span></> : <><Send className="w-4 h-4" /><span>Send Message</span></>}
      </button>
    </form>
  );
}
