"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Mail, MapPin, Phone, MessageSquare,
  Award, Users, CheckCircle2, Send, Loader2, X,
} from "lucide-react";

interface ProjectFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectForm({ isOpen, onClose }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", city: "", experience: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", email: "", phone: "", city: "", experience: "", message: "" });
      setErrors({});
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Invalid email";
    if (!formData.phone.trim()) errs.phone = "Phone is required";
    if (!formData.city.trim()) errs.city = "City is required";
    if (!formData.experience) errs.experience = "Select experience level";
    if (!formData.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 2000));
      setIsSubmitted(true);
    } catch {
      alert("Error submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full pl-11 pr-4 py-3.5 rounded-xl bg-cream/[0.03] border ${
      errors[field] ? "border-rose-500/50" : "border-cream/8"
    } text-cream placeholder-cream/25 focus:outline-none focus:border-gold/40 transition-all duration-300 text-sm`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-surface/90 backdrop-blur-xl z-50"
            onClick={() => !isSubmitting && onClose()}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass-card-strong rounded-3xl p-6 sm:p-8 md:p-10">
                <button
                  onClick={() => !isSubmitting && onClose()}
                  disabled={isSubmitting}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full glass-card flex items-center justify-center text-cream/50 hover:text-cream transition-colors z-10"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>

                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h2 className="font-display font-extrabold text-2xl md:text-3xl text-cream mb-3">Application Submitted!</h2>
                    <p className="text-sm text-cream/50 mb-8 max-w-md mx-auto">
                      Thank you for your interest. We've received your application and will get back to you soon!
                    </p>
                    <button onClick={onClose} className="btn-primary text-sm">Close</button>
                  </motion.div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <Award className="w-7 h-7 text-gold/60 mx-auto mb-3" />
                      <h2 className="font-display font-extrabold text-2xl md:text-3xl gradient-text mb-2">Apply Now</h2>
                      <p className="text-sm text-cream/45">Fill out the form to become a G&M Project coach</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-cream/70 mb-1.5">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/25" />
                          <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass("name")} placeholder="Your name" />
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

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-cream/70 mb-1.5">Phone *</label>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/25" />
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass("phone")} placeholder="+1 234 567 8900" />
                          </div>
                          {errors.phone && <p className="mt-1 text-xs text-rose-400">{errors.phone}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-cream/70 mb-1.5">City *</label>
                          <div className="relative">
                            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/25" />
                            <input type="text" name="city" value={formData.city} onChange={handleChange} className={inputClass("city")} placeholder="Your city" />
                          </div>
                          {errors.city && <p className="mt-1 text-xs text-rose-400">{errors.city}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-cream/70 mb-1.5">Experience Level *</label>
                        <div className="relative">
                          <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/25 pointer-events-none z-10" />
                          <select name="experience" value={formData.experience} onChange={handleChange} className={`${inputClass("experience")} appearance-none cursor-pointer`}>
                            <option value="" className="bg-surface-100">Select level</option>
                            <option value="beginner" className="bg-surface-100">Beginner (1-2 years)</option>
                            <option value="intermediate" className="bg-surface-100">Intermediate (3-5 years)</option>
                            <option value="advanced" className="bg-surface-100">Advanced (5+ years)</option>
                            <option value="professional" className="bg-surface-100">Professional / Instructor</option>
                          </select>
                        </div>
                        {errors.experience && <p className="mt-1 text-xs text-rose-400">{errors.experience}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-cream/70 mb-1.5">About You *</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-cream/25" />
                          <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className={`${inputClass("message")} resize-none`} placeholder="Tell us about your dance background..." />
                        </div>
                        {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn-primary w-full flex items-center justify-center gap-2 ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                      >
                        {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /><span>Submitting...</span></> : <><Send className="w-4 h-4" /><span>Submit Application</span></>}
                      </button>

                      <p className="text-[10px] text-cream/30 text-center">
                        By submitting, you agree to our terms. We'll contact you soon.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
