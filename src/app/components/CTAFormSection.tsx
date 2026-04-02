import { useState } from 'react';
import { Send, CheckCircle2, Lock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useConsultationForm } from '../hooks/useConsultationForm';
import { 
  UNIVERSITY_OPTIONS,
  ContactLink,
  IconEmail, 
  IconPhone, 
  IconWhatsApp, 
  IconMessenger 
} from './ui/consultation/SharedConsultationUI';

/* ── Expert photo ── */
const EXPERT_PHOTO =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyLWljb24gbHVjaWRlLWNpcmNsZS11c2VyIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48cGF0aCBkPSJNNyAyMC42NjJWMTlhMiAyIDAgMCAxIDItMmg2YTIgMiAwIDAgMSAyIDJ2MS42NjIiLz48L3N2Zz4=';

/* ── Avatar stack component ── */
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

const CONTACT_ITEMS = [
  { icon: IconEmail, label: 'marcin@thinkbeyond.cloud', href: 'mailto:marcin@thinkbeyond.cloud' },
  { icon: IconPhone, label: '+48 502 227 174', href: 'tel:+48502227174' },
  { icon: IconWhatsApp, label: 'WhatsApp Chat', href: 'https://wa.me/48502227174' },
  { icon: IconMessenger, label: 'Messenger', href: 'https://m.me/thinkbeyond' },
];

interface CTAFormSectionProps {
  title?: string;
  tagline?: string;
  formTitle?: string;
  buttonText?: string;
}

export function CTAFormSection({
  title = "Architecting the institutional foundation your vision demands.",
  tagline = "Strategic Mission Centre",
  formTitle = "Coordinate your institutional strategy review.",
  buttonText = "Initiate Strategic Review"
}: CTAFormSectionProps) {
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
    <section id="contact-form" className="bg-neutral-100 py-24 px-3 lg:px-6 border-t border-neutral-200">
      <div className="mx-auto max-w-5xl flex flex-col gap-14">

        {/* ── Section headline ── */}
        <div className="text-left">
          <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px]" style={{ fontWeight: 600 }}>
            {tagline}
          </span>
          <h2 className="mt-3 text-[34px] sm:text-[42px] leading-[1.15] tracking-[-1.5px] text-black text-left font-bold">
            {title}
          </h2>
        </div>

        {/* ── 2-col layout (5/12 - 7/12) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* ════════ LEFT COLUMN (5/12) ════════ */}
          <div className="lg:col-span-5 flex flex-col gap-10 antialiased">
            
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
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full bg-[#E5E7EB] border border-solid border-[#D1D5DB] shrink-0 w-10 h-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="">
                  <h4 className="text-[15px] font-bold text-black uppercase tracking-tight font-['Outfit']">
                    Marcin Pieńkowski
                  </h4>
                  <span className="text-[12px] text-neutral-400 font-medium tracking-tight">Institutional Strategists</span>
                </div>
              </div>
              <div className="flex rounded-2xl bg-white border border-solid border-[#F0F0F0] p-5">
                <div className="text-[14px] leading-relaxed text-[#404040] italic">
                  &quot;Let&apos;s start with strategy. I won&apos;t sell you another IT system. I&apos;ll show you how to architect the institutional foundation your vision demands.&quot;
                </div>
              </div>
            </div>

            {/* ── BOTTOM: Contact Links ── */}
            <div className="flex flex-col rounded-2xl gap-3">
              <div className="flex flex-col gap-1.5">
                {CONTACT_ITEMS.map((item) => (
                  <ContactLink 
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    href={item.href}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ════════ RIGHT COLUMN (7/12) ════════ */}
          <div className="lg:col-span-7 bg-white rounded-[24px] border border-zinc-200 p-8 sm:p-10 flex flex-col gap-6 text-left">
            <div>
              <h3 className="text-[24px] sm:text-[28px] leading-[1.2] tracking-[-0.8px] text-black font-bold">
                {formTitle}
              </h3>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="24" fill="#111" />
                  <path d="M14 24l8 8 12-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-[18px] text-black font-bold">Strategy Session Initiated</p>
                <p className="text-[14px] text-neutral-500">
                  A dedicated strategist will coordinate your session within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left" noValidate>

                {/* Name */}
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

                {/* University */}
                <div className="flex flex-col gap-1.5 text-black">
                  <label className="text-[13px] text-neutral-700 font-bold ml-1">Institution name</label>
                  <Input
                    placeholder="Start typing institution name..."
                    list="cta-universities"
                    value={form.university}
                    onChange={(e) => setForm({ ...form, university: e.target.value })}
                    error={!!errors.university}
                  />
                  {errors.university && <p className="text-[12px] text-black font-bold ml-1">{errors.university}</p>}
                  <datalist id="cta-universities">
                    {UNIVERSITY_OPTIONS}
                  </datalist>
                </div>

                {/* Email */}
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

                {/* GDPR */}
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

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={!isFormValid}
                  fullWidth={true}
                  className="mt-2 shadow-xl hover:shadow-2xl transition-all"
                >
                  {buttonText}
                  <Send className="ml-2 w-4 h-4" />
                </Button>

                {/* Trust line */}
                <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 mt-2">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5.5" width="9" height="6.5" rx="1" />
                    <path d="M4.5 5.5V3.5a2 2 0 0 1 4 0v2" />
                  </svg>
                  <span>Your data is 100% secure.</span>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}