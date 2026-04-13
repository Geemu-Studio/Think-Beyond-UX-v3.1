import React from 'react';
import { Input } from './input';
import { Button } from './button';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Send, CheckCircle2, Lock, X, Plus, Minus } from 'lucide-react';
import { useConsultationForm } from '../../hooks/useConsultationForm';
import { 
  UK_UNIVERSITIES, 
  IconEmail, 
  IconPhone, 
  IconWhatsApp, 
  IconMessenger 
} from './consultation/SharedConsultationUI';

const EXPERT_PHOTO =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyLWljb24gbHVjaWRlLWNpcmNsZS11c2VyIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48cGF0aCBkPSJNNyAyMC42NjJWMTlhMiAyIDAgMCAxIDItMmg2YTIgMiAwIDAgMSAyIDJ2MS42NjIiLz48L3N2Zz4=';

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

/* ── Standardized Contact Links ── */
function ContactLink({ icon: Icon, label, href }: { icon: any; label: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-4 text-[15px] text-neutral-600 hover:text-black transition-all group py-1.5"
    >
      <div className="w-10 h-10 flex items-center justify-center border border-zinc-200 bg-white rounded-full group-hover:border-black group-hover:bg-neutral-50 transition-all shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <span className="font-medium tracking-tight whitespace-nowrap">{label}</span>
    </a>
  );
}

export interface ExpertData {
  name: string;
  role: string;
  quote: string;
}

export function ExpertFooterAccordion({ expert }: { expert?: ExpertData }) {
  const defaultExpert = {
    name: 'Marcin Pieńkowski',
    role: 'Institutional Strategist',
    quote: "Let's start with strategy. I won't sell you another IT system. I'll show you how to architect the institutional foundation your vision demands."
  };

  const activeExpert = expert || defaultExpert;

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
    <div className="mt-16 pt-12 border-t border-neutral-100 flex flex-col gap-10">

      {/* Strategic Hub Transition Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

        {/* LEFT COLUMN: Authority & Trust (5/12) */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div className="flex flex-col gap-6 text-left">
            <div className="flex items-center gap-6">
              <AvatarStack />
              <div>
                <h3 className="text-[24px] sm:text-[28px] font-bold tracking-tight text-black mb-0.5">20+ Experts</h3>
                <p className="text-[11px] text-neutral-400 uppercase tracking-[1.5px] font-bold">Institutional Strategy Architects</p>
              </div>
            </div>
            <p className="text-[16px] text-neutral-600 leading-relaxed">
              Your institution&apos;s transformation will be guided by our full team of certified Salesforce architects.
            </p>
          </div>

          <hr className="border-neutral-100" />

          {/* Marcin Profile & Quote (Institutional Layout) */}
          <div className="flex flex-col gap-6 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center border border-neutral-200">
                <div className="w-6 h-6 text-neutral-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[16px] font-bold text-black uppercase tracking-tight">{activeExpert.name}</h4>
                <span className="text-[13px] text-neutral-400">{activeExpert.role}</span>
              </div>
            </div>
            
            {/* Quote (Institutional Style) */}
            <div className="bg-white border border-zinc-100 p-8 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.02)] relative">
              <p className="text-[15px] sm:text-[16px] text-[#404040] leading-relaxed italic">
                &quot;{activeExpert.quote}&quot;
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <ContactLink icon={IconEmail} label="marcin@thinkbeyond.cloud" href="mailto:marcin@thinkbeyond.cloud" />
            <ContactLink icon={IconPhone} label="+48 502 227 174" href="tel:+48502227174" />
            <ContactLink icon={IconWhatsApp} label="WhatsApp Chat" href="https://wa.me/48502227174" />
            <ContactLink icon={IconMessenger} label="Messenger" href="https://m.me/thinkbeyond" />
          </div>
        </div>

        {/* RIGHT COLUMN: Action & Conversion (7/12) */}
        <div className="lg:col-span-7 w-full shrink-0">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="bg-white border border-zinc-200 shadow-[0_12px_48px_rgba(0,0,0,0.04)] p-8 sm:p-10 text-left rounded-[32px] flex flex-col items-center text-center gap-6 py-12 animate-in fade-in zoom-in-95 duration-500 min-h-[400px] justify-center"
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg mb-2 text-white">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-[18px] font-bold tracking-tight text-black mb-2">Strategy Session Initiated</h4>
                  <p className="text-neutral-500 max-w-xs mx-auto leading-relaxed text-[13px]">
                    Your strategy session coordination will begin within 24 business hours.
                  </p>
                </div>
                <Button variant="link" onClick={() => setSubmitted(false)} className="mt-2 text-xs">
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white border border-zinc-200 shadow-[0_12px_48px_rgba(0,0,0,0.04)] p-8 sm:p-10 text-left rounded-[32px] flex flex-col gap-5"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-[24px] sm:text-[28px] font-bold tracking-tight text-black">
                    Coordinate your institutional strategy review.
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full text-left" noValidate>
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
                        list="footer-universities"
                        value={form.university}
                        onChange={(e) => setForm({ ...form, university: e.target.value })}
                        error={!!errors.university}
                      />
                      {errors.university && <p className="text-[12px] text-black font-bold ml-1">{errors.university}</p>}
                      <datalist id="footer-universities">
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
                    size="lg"
                    fullWidth={true}
                    className="mt-2 shadow-xl hover:shadow-2xl transition-all"
                  >
                    Initiate Strategic Review
                    <Send className="ml-2 w-4 h-4" />
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 mt-2">
                    <Lock className="w-3 h-3" />
                    <span>Your data is 100% secure.</span>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
