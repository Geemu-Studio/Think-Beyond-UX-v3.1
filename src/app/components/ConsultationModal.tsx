import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Lock, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
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


interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  pathname?: string;
}

/* ── Avatar stack component for Trust ── */
function AvatarStack() {
  const avatars = [
    { initials: 'AK', color: 'bg-neutral-200' },
    { initials: 'MB', color: 'bg-neutral-300' },
    { initials: 'PW', color: 'bg-neutral-100' },
  ];

  return (
    <div className="flex -space-x-2 mb-1">
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

export function ConsultationModal({ isOpen, onClose, pathname }: ConsultationModalProps) {
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

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(resetForm, 300); // Wait for exit animation
    }
  }, [isOpen, resetForm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">

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

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden h-full">
          {/* Left Column (Content) - 5/12 */}
          <div className="lg:w-[42%] bg-zinc-50 p-10 sm:p-14 flex flex-col gap-10 overflow-y-auto border-r border-zinc-200 scroll-smooth">
            <div className="text-left">
              <span className="text-[11px] text-neutral-400 uppercase tracking-[2px] font-bold block mb-4">
                Strategic Mission Centre
              </span>
              <h2 className="text-[32px] sm:text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">
                Strategic Mission: Student Success & Institutional Growth.
              </h2>
            </div>

            <div className="flex flex-col gap-10">
              <div className="bg-white p-8 rounded-[28px] border border-zinc-200 shadow-sm flex flex-col gap-5 text-left">
                <div className="flex items-center gap-5">
                  <AvatarStack />
                  <div>
                    <h3 className="text-[20px] font-bold tracking-tight text-black mb-0.5">20+ Experts</h3>
                    <p className="text-[13px] text-neutral-500 font-medium uppercase tracking-[0.5px]">Institutional Strategy Architects</p>
                  </div>
                </div>
                <p className="text-[14px] text-neutral-600 leading-relaxed font-medium">
                  Your institution&apos;s transformation will be guided by our full team of certified Salesforce architects.
                </p>
              </div>

              <div className="flex flex-col gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100 flex items-center justify-center shadow-sm shrink-0">
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

                <div className="relative bg-white border border-zinc-200 rounded-[20px] p-6 shadow-sm">
                  <div className="absolute -top-[7px] left-6 w-3.5 h-3.5 bg-white border-t border-l border-zinc-200 rotate-45" />
                  <p className="text-[14px] text-neutral-700 leading-relaxed italic">
                    &quot;I won&apos;t sell you another IT system. I&apos;ll show you how to architect the institutional foundation your vision demands.&quot;
                  </p>
                </div>
              </div>

              <div className="border-t border-zinc-200 pt-6 flex flex-col gap-4 text-left">
                <p className="text-[12px] text-neutral-400 uppercase tracking-[1.2px] font-bold">
                  Prefer direct contact?
                </p>
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
          <div className="flex-1 bg-white p-10 sm:p-14 overflow-y-auto overflow-x-hidden min-h-0 flex flex-col items-center justify-center">
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
                    size="lg"
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
                        <label className="text-[13px] text-neutral-700 font-bold ml-1">Full name</label>
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
                          {UK_UNIVERSITIES.map((name) => (
                            <option key={name} value={name} />
                          ))}
                        </datalist>
                      </div>

                      <div className="flex flex-col gap-1.5">
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
                      size="lg"
                      fullWidth={true}
                      className="py-8 shadow-xl hover:shadow-2xl transition-all"
                    >
                      Initiate Strategic Review
                      <Send className="ml-2 w-4 h-4" />
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 mt-2">
                      <Lock className="w-3 h-3" />
                      <span>Your data is 100% secure. No spam, ever.</span>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
