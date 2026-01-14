"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Mail, MapPin, Phone, MessageSquare, 
  Award, Users, CheckCircle2, Send, Loader2, X 
} from "lucide-react";

interface ProjectFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectForm({ isOpen, onClose }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        experience: "",
        message: "",
      });
      setErrors({});
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
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
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.experience) {
      newErrors.experience = "Please select your experience level";
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

    // Simulate form submission (replace with actual API call)
    try {
      // TODO: Replace with actual API endpoint
      // await fetch('/api/project-application', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass-effect-strong rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12 relative">
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-effect flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 border border-white/20 hover:border-white/40 z-10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>

                {/* Success State */}
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="text-center py-8 sm:py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
                      Application Submitted!
                    </h2>
                    <p className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-xl mx-auto">
                      Thank you for your interest in becoming a G&M Project coach. We've received your application and will get back to you soon!
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleClose}
                      className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg hover:shadow-lg transition-all duration-300 font-display"
                    >
                      Close
                    </motion.button>
                  </motion.div>
                ) : (
                  /* Form Content */
                  <>
                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-10">
                      <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
                        <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="mx-3 sm:mx-4"
                        >
                          <Award className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                        </motion.div>
                        <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent via-pink-400/50 to-transparent" />
                      </div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
                        <span className="gradient-text">Apply Now</span>
                      </h2>
                      <p className="text-lg sm:text-xl text-white/80 font-display">
                        Fill out the form below to become a G&M Project coach
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-base sm:text-lg font-semibold text-white mb-2 font-display">
                          Full Name <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-white/5 border-2 ${
                              errors.name ? "border-rose-500" : "border-white/10"
                            } text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-all duration-300 font-display text-base sm:text-lg`}
                            placeholder="Enter your full name"
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-2 text-sm text-rose-400">{errors.name}</p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-base sm:text-lg font-semibold text-white mb-2 font-display">
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
                            className={`w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-white/5 border-2 ${
                              errors.email ? "border-rose-500" : "border-white/10"
                            } text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-all duration-300 font-display text-base sm:text-lg`}
                            placeholder="your.email@example.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-2 text-sm text-rose-400">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone & City Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                        {/* Phone Field */}
                        <div>
                          <label htmlFor="phone" className="block text-base sm:text-lg font-semibold text-white mb-2 font-display">
                            Phone Number <span className="text-rose-400">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={`w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-white/5 border-2 ${
                                errors.phone ? "border-rose-500" : "border-white/10"
                              } text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-all duration-300 font-display text-base sm:text-lg`}
                              placeholder="+1 234 567 8900"
                            />
                          </div>
                          {errors.phone && (
                            <p className="mt-2 text-sm text-rose-400">{errors.phone}</p>
                          )}
                        </div>

                        {/* City Field */}
                        <div>
                          <label htmlFor="city" className="block text-base sm:text-lg font-semibold text-white mb-2 font-display">
                            City <span className="text-rose-400">*</span>
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <input
                              type="text"
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              className={`w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-white/5 border-2 ${
                                errors.city ? "border-rose-500" : "border-white/10"
                              } text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-all duration-300 font-display text-base sm:text-lg`}
                              placeholder="Your city"
                            />
                          </div>
                          {errors.city && (
                            <p className="mt-2 text-sm text-rose-400">{errors.city}</p>
                          )}
                        </div>
                      </div>

                      {/* Experience Level */}
                      <div>
                        <label htmlFor="experience" className="block text-base sm:text-lg font-semibold text-white mb-2 font-display">
                          Dance Experience Level <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none z-10" />
                          <select
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className={`w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-white/5 border-2 ${
                              errors.experience ? "border-rose-500" : "border-white/10"
                            } text-white focus:outline-none focus:border-purple-400 transition-all duration-300 font-display text-base sm:text-lg appearance-none cursor-pointer`}
                          >
                            <option value="" className="bg-slate-900">Select your experience level</option>
                            <option value="beginner" className="bg-slate-900">Beginner (1-2 years)</option>
                            <option value="intermediate" className="bg-slate-900">Intermediate (3-5 years)</option>
                            <option value="advanced" className="bg-slate-900">Advanced (5+ years)</option>
                            <option value="professional" className="bg-slate-900">Professional/Instructor</option>
                          </select>
                        </div>
                        {errors.experience && (
                          <p className="mt-2 text-sm text-rose-400">{errors.experience}</p>
                        )}
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-base sm:text-lg font-semibold text-white mb-2 font-display">
                          Tell Us About Yourself <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/40" />
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className={`w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-white/5 border-2 ${
                              errors.message ? "border-rose-500" : "border-white/10"
                            } text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-all duration-300 font-display text-base sm:text-lg resize-none`}
                            placeholder="Tell us about your dance background, teaching experience, and why you want to be a G&M Project coach..."
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
                        className={`w-full py-4 sm:py-5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white font-bold text-lg sm:text-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 font-display flex items-center justify-center space-x-3 ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-6 h-6" />
                            <span>Submit Application</span>
                          </>
                        )}
                      </motion.button>

                      {/* Privacy Note */}
                      <p className="text-xs sm:text-sm text-white/60 text-center font-display">
                        By submitting this form, you agree to our terms and conditions. We'll contact you soon!
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
