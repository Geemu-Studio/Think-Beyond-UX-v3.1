import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Lock, Plus, Minus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useConsultationForm } from '../hooks/useConsultationForm';
import { 
  UK_UNIVERSITIES, 
  IconEmail, 
  IconPhone, 
  IconWhatsApp, 
  IconMessenger 
} from './ui/consultation/SharedConsultationUI';

const EXPERT_PHOTO =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyLWljb24gbHVjaWRlLWNpcmNsZS11c2VyIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48cGF0aCBkPSJNNyAyMC42NjJWMTlhMiAyIDAgMCAxIDItMmg2YTIgMiAwIDAgMSAyIDJ2MS42NjIiLz48L3N2Zz4=';


/* ── Avatar stack component for Trust ── */
function AvatarStack() {
  const avatars = [
    { initials: 'AK', color: 'bg-neutral-200' },
    { initials: 'MB', color: 'bg-neutral-300' },
    { initials: 'PW', color: 'bg-neutral-100' },
  ];

  return (
    <div className="flex -space-x-2 mb-3">
      {avatars.map((avatar, i) => (
        <div
          key={i}
          className={`w-10 h-10 rounded-full border-2 border-white ${avatar.color} flex items-center justify-center shrink-0 shadow-sm`}
        >
          <span className="text-[10px] text-neutral-600 font-bold select-none">
            {avatar.initials}
          </span>
        </div>
      ))}
      <div className="w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center shrink-0 shadow-sm z-10">
        <span className="text-[9px] text-white font-bold">+17</span>
      </div>
    </div>
  );
}

/* ── Standardized Contact Links ── */
function ContactLink({ icon: Icon, label, href }: { icon: any; label: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-[13px] text-neutral-600 hover:text-black transition-all group py-1"
    >
      <div className="w-8 h-8 flex items-center justify-center border border-zinc-200 bg-white rounded-full group-hover:border-black group-hover:bg-neutral-50 transition-all shrink-0">
        <Icon className="w-3.5 h-3.5" />
      </div>
      <span className="font-medium tracking-tight whitespace-nowrap">{label}</span>
    </a>
  );
}

interface ConsultationHubProps {
  submitButtonText?: string;
  successMessage?: string;
  showH2?: boolean;
}

export function ConsultationHub({
  submitButtonText = "Initiate Strategic Review",
  successMessage = "Your strategy session coordination will begin within 24 business hours.",
  showH2 = true
}: ConsultationHubProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    form,
    setForm,
    submitted,
    setSubmitted,
    errors,
    isFormValid,
    handleSubmit
  } = useConsultationForm();

  return (
    <section className={`bg-white border-t border-zinc-200 overflow-hidden ${showH2 ? 'py-24 px-6' : 'py-12 px-0'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT COLUMN: Authority & Context (5/12) */}
          <div className="lg:col-span-5 w-full flex flex-col gap-10">
            {showH2 && (
              <div className="max-w-2xl text-left">
                <span className="text-[11px] text-neutral-400 uppercase tracking-[2px] font-bold block mb-4">
                  Strategic Mission Centre
                </span>
                <h2 className="text-[32px] sm:text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">
                  Architecting the Institutional Foundation for Academic Excellence.
                </h2>
              </div>
            )}

            <div className="grid sm:grid-cols-1 gap-8 text-left">
              {/* Card 1: Expertise signals */}
              <div className="bg-white p-6 rounded-[24px] border border-zinc-200 shadow-sm flex flex-col items-start text-left">
                <AvatarStack />
                <h3 className="text-[18px] font-bold text-black mb-1">20+ Experts</h3>
                <p className="text-[13px] text-neutral-500 font-medium mb-3 uppercase tracking-[0.5px]">Institutional Strategy Architects</p>
                <p className="text-[14px] text-neutral-600 leading-relaxed font-medium">
                  Guidance from our full team of certified architects.
                </p>
              </div>

              {/* Card 2: Marcin Profile & Quote */}
              <div className="bg-white p-6 rounded-[24px] border border-zinc-200 shadow-sm flex flex-col gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100 flex items-center justify-center shrink-0 shadow-sm">
                    <ImageWithFallback 
                      src={EXPERT_PHOTO} 
                      alt="Marcin Pieńkowski"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-black tracking-tight">Marcin Pieńkowski</h4>
                    <p className="text-[11px] text-neutral-500 uppercase tracking-[0.5px]">Lead Institutional Strategist</p>
                  </div>
                </div>
                <div className="relative pt-2">
                  <div className="absolute -top-[5px] left-4 w-3 h-3 bg-white border-t border-l border-zinc-200 rotate-45" />
                  <p className="text-[13px] text-neutral-700 leading-relaxed italic bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                    &quot;I won&apos;t sell you another IT system. I&apos;ll show you how to architect the institutional foundation your vision demands.&quot;
                  </p>
                </div>
              </div>

              {/* Card 3: Direct Contact */}
              <div className="border-t border-zinc-200 pt-6 flex flex-col gap-4 text-left">
                <p className="text-[12px] text-neutral-400 uppercase tracking-[1.2px] font-bold">
                  Prefer direct contact?
                </p>
                <div className="flex flex-col gap-1">
                  <ContactLink icon={IconEmail} label="marcin@thinkbeyond.cloud" href="mailto:marcin@thinkbeyond.cloud" />
                  <ContactLink icon={IconPhone} label="+48 502 227 174" href="tel:+48502227174" />
                  <div className="flex gap-4 mt-1">
                    <a href="https://wa.me/48502227174" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-black transition-colors">
                      <IconWhatsApp />
                    </a>
                    <a href="https://m.me/thinkbeyond" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-black transition-colors">
                      <IconMessenger />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Action & Form (7/12) */}
          <div className="lg:col-span-7 w-full shrink-0">
            <div className="flex flex-col gap-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-full p-8 rounded-[32px] border transition-all duration-300 text-left group flex items-center justify-between cursor-pointer ${
                  isExpanded 
                    ? "bg-black border-black text-white shadow-xl translate-y-[-4px]" 
                    : "bg-white border-zinc-200 text-black hover:border-black hover:shadow-lg"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className={`text-[12px] uppercase tracking-[1.5px] font-bold transition-colors ${isExpanded ? "text-white/60" : "text-neutral-400"}`}>
                    Initiate Strategic Review
                  </span>
                  <h3 className="text-[24px] sm:text-[28px] font-bold tracking-tight">
                    Coordinate your institutional strategy review.
                  </h3>
                </div>
                <div className={`w-12 h-12 rounded-full border transition-all flex items-center justify-center shrink-0 ${
                  isExpanded 
                    ? "bg-white border-white text-black rotate-180" 
                    : "bg-black border-black text-white group-hover:scale-110"
                }`}>
                  {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white rounded-[32px] border border-zinc-200 p-8 shadow-xl mt-2 overflow-hidden">
                      {submitted ? (
                        <div className="flex flex-col items-center text-center gap-6 py-6 animate-in fade-in zoom-in-95 duration-500">
                          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg mb-2 text-white">
                            <CheckCircle2 className="w-8 h-8" />
                          </div>
                          <div>
                            <h4 className="text-[18px] font-bold tracking-tight text-black mb-2">Strategy Session Initiated</h4>
                            <p className="text-neutral-500 max-w-xs mx-auto leading-relaxed text-[13px]">
                              {successMessage}
                            </p>
                          </div>
                          <Button variant="link" onClick={() => setSubmitted(false)} className="mt-2 text-xs">
                            Send another message
                          </Button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left" noValidate>
                          <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1.5 text-left">
                              <label className="text-[13px] text-neutral-700 font-bold ml-1">Full name</label>
                              <Input
                                placeholder="Professor Jane Smith"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                error={!!errors.name}
                              />
                              {errors.name && <p className="text-[12px] text-black font-bold ml-1">{errors.name}</p>}
                            </div>

                            <div className="flex flex-col gap-1.5 text-left text-black">
                              <label className="text-[13px] text-neutral-700 font-bold ml-1">Institution name</label>
                              <Input
                                placeholder="Start typing institution name..."
                                list="hub-universities"
                                value={form.university}
                                onChange={(e) => setForm({ ...form, university: e.target.value })}
                                error={!!errors.university}
                              />
                               {errors.university && <p className="text-[12px] text-black font-bold ml-1">{errors.university}</p>}
                              <datalist id="hub-universities">
                                {UK_UNIVERSITIES.map((name) => (
                                  <option key={name} value={name} />
                                ))}
                              </datalist>
                            </div>

                            <div className="flex flex-col gap-1.5 text-left">
                              <label className="text-[13px] text-neutral-700 font-bold ml-1">Institutional email address</label>
                              <Input
                                type="email"
                                placeholder="j.smith@university.ac.uk"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                error={!!errors.email}
                              />
                               {errors.email && <p className="text-[12px] text-black font-bold ml-1">{errors.email}</p>}
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 py-1 text-left">
                            <label className="flex items-start gap-4 cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={form.gdpr}
                                onChange={(e) => setForm({ ...form, gdpr: e.target.checked })}
                                className="mt-1 accent-black w-4 h-4 shrink-0 cursor-pointer"
                              />
                              <span className="text-[13px] text-neutral-500 leading-relaxed group-hover:text-black transition-colors">
                                I consent to the processing of data in accordance with GDPR.
                              </span>
                            </label>
                            {errors.gdpr && <p className="text-[12px] text-black font-bold ml-8">{errors.gdpr}</p>}
                          </div>

                          <Button
                            type="submit"
                            disabled={!isFormValid}
                            className="py-7 mt-2"
                          >
                            {submitButtonText}
                            <Send className="ml-2 w-4 h-4" />
                          </Button>

                          <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 mt-2">
                            <Lock className="w-3 h-3" />
                            <span>Your data is 100% secure.</span>
                          </div>
                        </form>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
