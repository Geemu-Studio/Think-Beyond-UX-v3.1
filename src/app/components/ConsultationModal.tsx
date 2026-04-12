import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Lock, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useConsultationForm } from '../hooks/useConsultationForm';
import { 
  UK_UNIVERSITIES,
  UNIVERSITY_OPTIONS,
  ContactLink,
  IconEmail, 
  IconPhone, 
  IconWhatsApp, 
  IconMessenger 
} from './ui/consultation/SharedConsultationUI';

const EXPERT_PHOTO =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyLWljb24gbHVjaWRlLWNpcmNsZS11c2VyIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48cGF0aCBkPSJNNyAyMC42NjJWMTlhMiAyIDAgMCAxIDItMmg2YTIgMiAwIDAgMSAyIDJ2MS42NjIiLz48L3N2Zz4=';


export interface ModalExpert {
  name: string;
  role: string;
  image?: string;
}

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  pathname?: string;
  expert?: ModalExpert;
}

/* ── Avatar stack component for Trust ── */
function AvatarStack() {
  const avatars = [
    { initials: 'AK', color: 'bg-[#F5F5F5]' },
    { initials: 'MB', color: 'bg-[#D4D4D4]' },
  ];

  return (
    <div className="flex -space-x-2">
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
      <div className="w-10 h-10 rounded-full border-2 border-white bg-[#111111] flex items-center justify-center shrink-0 shadow-sm z-10">
        <span className="text-[9px] text-white font-bold">+17</span>
      </div>
    </div>
  );
}


export function ConsultationModal({ isOpen, onClose, pathname, expert }: ConsultationModalProps) {
  const {
    form,
    setForm,
    submitted,
    setSubmitted,
    errors,
    isFormValid,
    handleSubmit,
    resetForm
  } = useConsultationForm();

  const displayExpert = expert || {
    name: 'Marcin Pieńkowski',
    role: 'Institutional Strategist • Lead Education Cloud Architect'
  };

  // Accessibility: ESC key handling & Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(resetForm, 300);
    }
  }, [isOpen, resetForm]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-6xl bg-neutral-100 rounded-[24px] sm:rounded-[32px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
      >

        {/* Close Button UI */}
        <button
          onClick={onClose}
          className="absolute right-8 top-8 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white text-black hover:scale-105 transition-all shadow-lg active:scale-95 cursor-pointer backdrop-blur-md border border-black/5"
        >
          <X className="w-6 h-6" strokeWidth={2.5} />
        </button>

        <div className="flex-1 overflow-y-auto min-h-0 h-full scroll-smooth">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column (Content) - 5/12 */}
            <div className="lg:col-span-5 bg-zinc-50 px-3 py-10 lg:px-8 lg:py-14 flex flex-col gap-10 border-b lg:border-b-0 lg:border-r border-zinc-200">
              <div className="text-left">
                <span className="text-[11px] text-neutral-400 uppercase tracking-[2px] font-bold block mb-4">
                  {displayExpert.role}
                </span>
                <h2 className="text-[32px] sm:text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">
                  Book a strategic consultation with {displayExpert.name}.
                </h2>
              </div>

              <div className="flex flex-col gap-10">
                {/* ── TOP: Trust section ── */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center">
                    <AvatarStack />
                    <div className="ml-5">
                      <div className="mb-0.5 text-black font-['Outfit'] font-bold text-xl leading-snug">
                        20+ Experts
                      </div>
                      <div className="uppercase tracking-[1px] text-[#A3A3A3] font-bold text-[11px] leading-tight">
                        INSTITUTIONAL STRATEGY ARCHITECTS
                      </div>
                    </div>
                  </div>
                  <div className="text-[14px] leading-relaxed text-[#525252] font-medium">
                    Your institution&apos;s transformation will be guided by our full team of certified Salesforce architects.
                  </div>
                </div>

                {/* ── MIDDLE: Lead strategist ── */}
                <div className="flex flex-col pt-6 gap-3 border-t border-solid border-[#D4D4D4]">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-full bg-[#E5E7EB] border border-solid border-[#D1D5DB] shrink-0 w-16 h-16 sm:w-20 sm:h-20 shadow-sm relative overflow-hidden">
                      <span className="text-[10px] text-neutral-400 font-black tracking-[0.2em] uppercase">PHOTO</span>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-[18px] sm:text-[20px] font-bold text-black tracking-tight">{displayExpert.name}</h4>
                      <span className="text-[14px] text-neutral-500 font-medium tracking-tight mt-0.5">{displayExpert.role}</span>
                    </div>
                  </div>
                </div>

                {/* ── BOTTOM: Contact Links ── */}
                <div className="flex flex-col rounded-2xl gap-3">
                  <div className="flex flex-col gap-1.5">
                    <ContactLink icon={IconEmail} label="marcin@thinkbeyond.cloud" href="mailto:marcin@thinkbeyond.cloud" />
                    <ContactLink icon={IconPhone} label="+48 502 227 174" href="tel:+48502227174" />
                    <ContactLink icon={IconWhatsApp} label="WhatsApp" href="https://wa.me/48502227174" />
                    <ContactLink icon={IconMessenger} label="Messenger" href="https://m.me/thinkbeyond" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Form) - 7/12 */}
            <div className="lg:col-span-7 bg-white px-3 py-10 lg:px-10 lg:py-14 flex flex-col items-center justify-start lg:justify-center">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="w-full max-w-md flex flex-col items-center text-center gap-8 py-10"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12, stiffness: 200 }}
                      className="w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-2xl mb-2"
                    >
                      <CheckCircle2 className="w-12 h-12 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-[32px] font-bold tracking-tight text-black mb-4">Strategic Dialogue Initiated</h3>
                      <p className="text-neutral-500 text-lg leading-relaxed">
                        A dedicated strategist will coordinate your strategy session within 24 business hours.
                      </p>
                    </div>
                    <Button
                      variant="link"
                      onClick={() => setSubmitted(false)}
                      className="text-neutral-400 hover:text-black transition-colors"
                    >
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full max-w-[480px] flex flex-col gap-10"
                  >
                    <div className="flex flex-col gap-3 text-left">
                     <h3 className="text-[28px] font-bold tracking-tight text-black text-left">
                        Initiate Strategic Review
                      </h3>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full text-left" noValidate>
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[13px] text-neutral-700 font-bold ml-1">Full Name</label>
                          <Input
                            placeholder="Professor Jane Smith"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            error={!!errors.name}
                          />
                          {errors.name && <p className="text-[12px] text-black font-bold ml-1">{errors.name}</p>}
                        </div>

                        <div className="flex flex-col gap-1.5 text-black">
                          <label className="text-[13px] text-neutral-700 font-bold ml-1">Institution name</label>
                          <Input
                            placeholder="Start typing institution name..."
                            list="modal-universities"
                            value={form.university}
                            onChange={(e) => setForm({ ...form, university: e.target.value })}
                            error={!!errors.university}
                          />
                          {errors.university && <p className="text-[12px] text-black font-bold ml-1">{errors.university}</p>}
                          <datalist id="modal-universities">
                            {UNIVERSITY_OPTIONS}
                          </datalist>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[13px] text-neutral-700 font-bold ml-1">Your Role</label>
                          <Input
                            placeholder="e.g. Vice-Chancellor, Head of Enrolment..."
                            value={form.role}
                            onChange={(e) => setForm({ ...form, role: e.target.value })}
                            error={!!errors.role}
                          />
                          {errors.role && <p className="text-[12px] text-black font-bold ml-1">{errors.role}</p>}
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[13px] text-neutral-700 font-bold ml-1">Work Email</label>
                          <Input
                            type="email"
                            placeholder="j.smith@university.ac.uk"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            error={!!errors.email}
                          />
                          {errors.email && <p className="text-[12px] text-black font-bold ml-1">{errors.email}</p>}
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[13px] text-neutral-700 font-bold ml-1">Primary Challenge (Optional)</label>
                          <Textarea
                            placeholder="Briefly describe what you'd like to discuss..."
                            className="bg-neutral-50 px-4 py-3 placeholder:text-neutral-400 focus:bg-white text-black"
                            value={form.challenge}
                            onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 py-1">
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
                        fullWidth={true}
                        className="mt-2 shadow-xl hover:shadow-2xl transition-all"
                      >
                        Request Consultation
                        <Send className="ml-2 w-4 h-4" aria-hidden="true" />
                      </Button>

                      <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mt-2">
                        <Lock className="w-3 h-3" aria-hidden="true" />
                        <span>Your data is 100% secure. No spam, ever.</span>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
