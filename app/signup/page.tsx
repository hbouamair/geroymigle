"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SignUpPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) { alert("Passwords do not match"); return; }
    if (!agreedToTerms) { alert("Please agree to the terms"); return; }
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const passwordRequirements = [
    { text: "At least 8 characters", met: formData.password.length >= 8 },
    { text: "One uppercase letter", met: /[A-Z]/.test(formData.password) },
    { text: "One number", met: /[0-9]/.test(formData.password) },
  ];

  const inputClass = "w-full pl-11 pr-4 py-3.5 rounded-xl bg-cream/[0.03] border border-cream/8 text-cream placeholder-cream/25 focus:outline-none focus:border-gold/40 transition-all duration-300 text-sm";

  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 mesh-bg pointer-events-none" />
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="container-tight relative z-10 max-w-md w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card-strong rounded-3xl p-6 sm:p-8 md:p-10"
          >
            <div className="text-center mb-8">
              <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-2">
                <span className="text-cream">Create</span>{" "}
                <span className="gradient-text">Account</span>
              </h1>
              <p className="text-sm text-cream/40">Start your bachata journey today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-cream/60 mb-1.5">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/25" />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-cream/60 mb-1.5">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/25" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-cream/60 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/25" />
                  <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required className={`${inputClass} pr-11`} placeholder="Create a password" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-cream/25 hover:text-cream/50 transition-colors">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {formData.password && (
                  <div className="mt-2 space-y-1">
                    {passwordRequirements.map((req, i) => (
                      <div key={i} className={`flex items-center gap-1.5 text-[11px] ${req.met ? "text-emerald-400" : "text-cream/25"}`}>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{req.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-cream/60 mb-1.5">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/25" />
                  <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className={`${inputClass} pr-11`} placeholder="Confirm password" />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-cream/25 hover:text-cream/50 transition-colors">
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="mt-1 text-xs text-rose-400">Passwords do not match</p>
                )}
              </div>

              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-0.5 w-3.5 h-3.5 rounded border-cream/15 bg-cream/5 text-gold focus:ring-gold/30 focus:ring-offset-0"
                />
                <label htmlFor="terms" className="text-xs text-cream/40">
                  I agree to the{" "}
                  <Link href="/terms" className="text-gold/70 hover:text-gold transition-colors">Terms of Service</Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-gold/70 hover:text-gold transition-colors">Privacy Policy</Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading || !agreedToTerms}
                className={`btn-primary w-full flex items-center justify-center gap-2 ${(isLoading || !agreedToTerms) ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {isLoading ? (
                  <><div className="w-4 h-4 border-2 border-surface/30 border-t-surface rounded-full animate-spin" /><span>Creating...</span></>
                ) : (
                  <><span>Create Account</span><ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-cream/5" /></div>
              <div className="relative flex justify-center text-xs"><span className="px-3 text-cream/25">Or sign up with</span></div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <button className="px-4 py-3 rounded-xl glass-card hover:bg-cream/[0.03] transition-all duration-300 flex items-center justify-center gap-2 text-cream/50 hover:text-cream text-xs font-medium">
                <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <span>Google</span>
              </button>
              <button className="px-4 py-3 rounded-xl glass-card hover:bg-cream/[0.03] transition-all duration-300 flex items-center justify-center gap-2 text-cream/50 hover:text-cream text-xs font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>GitHub</span>
              </button>
            </div>

            <div className="text-center text-xs">
              <span className="text-cream/30">Already have an account? </span>
              <Link href="/login" className="text-gold/70 hover:text-gold font-medium transition-colors">Sign in</Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
