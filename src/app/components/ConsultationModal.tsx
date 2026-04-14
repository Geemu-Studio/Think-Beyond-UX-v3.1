import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Lock, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
import { PlaceholderPhoto } from './ui/shared/PlaceholderPhoto';
import { EXPERTS, type Expert } from '../data/experts';
import { Mail, Phone, MessageCircle, Award, BadgeCheck, Briefcase } from 'lucide-react';

const EXPERT_PHOTO =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyLWljb24gbHVjaWRlLWNpcmNsZS11c2VyIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48cGF0aCBkPSJNNyAyMC42NjJWMTlhMiAyIDAgMCAxIDItMmg2YTIgMiAwIDAgMSAyIDJ2MS42NjIiLz48L3N2Zz4=';


export type ModalExpert = Expert;

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  pathname?: string;
  expert?: ModalExpert;
  variant?: 'default' | 'expert' | 'managed-services';
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
      <div className="w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center shrink-0 shadow-sm z-10">
        <span className="text-[9px] text-white font-bold">+17</span>
      </div>
    </div>
  );
}


export function ConsultationModal({ isOpen, onClose, pathname, expert, variant }: ConsultationModalProps) {
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
  
  const [showNav, setShowNav] = useState(true);
  
  const [cycleExpert, setCycleExpert] = useState<ModalExpert | null>(null);

  const fallbackExpert: ModalExpert = {
    id: 'default',
    name: 'Marcin Pieńkowski',
    role: 'Lead Education Cloud Architect',
    highlight: '8x Salesforce Certified',
    category: 'Education Cloud Architects',
    description: 'Lead strategist and institutional architect specialising in university-wide digital transformation.',
    certificates: ['8x Salesforce Certified', 'System Architect'],
    skills: ['Enterprise Architecture', 'Governance', 'SIS Migration'],
    contact: { whatsapp: '48502227174', email: 'marcin@thinkbeyond.cloud', phone: '+48 502 227 174' }
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

  // Sync expert with prop
  useEffect(() => {
    if (isOpen) {
      setCycleExpert(null); // Reset cycle when opening
    }
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        resetForm();
      }, 300);
    }
  }, [isOpen, resetForm]);

  if (!isOpen) return null;

  const currentExpert = cycleExpert || expert || fallbackExpert;

  // Determine which layout to show
  const activeVariant = variant || (expert || cycleExpert ? 'expert' : 'default');

  const handleNextExpert = () => {
    const currentIndex = EXPERTS.findIndex(e => e.id === currentExpert.id);
    const nextIndex = (currentIndex + 1) % EXPERTS.length;
    setCycleExpert(EXPERTS[nextIndex]);
  };

  const handlePrevExpert = () => {
    const currentIndex = EXPERTS.findIndex(e => e.id === currentExpert.id);
    const prevIndex = (currentIndex - 1 + EXPERTS.length) % EXPERTS.length;
    setCycleExpert(EXPERTS[prevIndex]);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setShowNav(scrollTop < 150);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <AnimatePresence mode="wait">
        {activeVariant === 'expert' || activeVariant === 'managed-services' ? (
          /* ── NEW: Single Column Profile Layout ── */
          <motion.div
            key="expert-layout"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
          >
            {/* Close Button UI */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-[110] w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-black text-neutral-400 hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer border border-neutral-200"
            >
              <X className="w-5 h-5" strokeWidth={2.5} />
            </button>

            {/* Navigation Buttons */}
            {activeVariant === 'expert' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showNav ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none"
              >
                <button
                  onClick={handlePrevExpert}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-black text-neutral-400 hover:text-white transition-all shadow-xl backdrop-blur-md border border-neutral-100 active:scale-90 group pointer-events-auto"
                  aria-label="Previous expert"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={handleNextExpert}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-black text-neutral-400 hover:text-white transition-all shadow-xl backdrop-blur-md border border-neutral-100 active:scale-90 group pointer-events-auto"
                  aria-label="Next expert"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            )}

            <div 
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto min-h-0 h-full scroll-smooth custom-scrollbar"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentExpert.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Profile Header & Info (White Section) */}
                  <div className="bg-white px-8 pt-12 pb-10">
                    <div className="flex flex-col items-center text-center mb-10">
                      <div className="relative">
                        <PlaceholderPhoto
                          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-8 ring-4 ring-neutral-50 shadow-md"
                        />
                        {activeVariant === 'expert' && (
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm z-10">
                            {EXPERTS.findIndex(e => e.id === currentExpert.id) + 1} / {EXPERTS.length}
                          </div>
                        )}
                      </div>
                      <span className="text-[11px] text-neutral-400 uppercase tracking-[2px] font-bold block mb-2 mt-4">
                        {activeVariant === 'managed-services' ? 'Strategic Support' : currentExpert.role}
                      </span>
                      <h2 className="text-3xl sm:text-4xl leading-tight tracking-tight text-black font-bold mb-4">
                        {activeVariant === 'managed-services' ? 'Expert Support Consultation' : currentExpert.name}
                      </h2>
                      <div className="h-1 w-12 bg-black rounded-full" />
                    </div>

                {activeVariant === 'expert' && (
                  <div className="space-y-10">
                    {/* Bio */}
                    <div className="text-center max-w-lg mx-auto">
                      <p className="text-[15px] leading-relaxed text-neutral-600 font-medium italic">
                        &ldquo;{currentExpert.description}&rdquo;
                      </p>
                    </div>

                    {/* Certificates & Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-neutral-100">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Award className="w-4 h-4 text-black" />
                          <span className="text-[11px] text-black font-bold uppercase tracking-wider">Certifications</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {currentExpert.certificates.map((cert, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-100 text-[12px] font-bold text-neutral-700 flex items-center gap-1.5">
                              <BadgeCheck className="w-3.5 h-3.5 text-black" />
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Briefcase className="w-4 h-4 text-black" />
                          <span className="text-[11px] text-black font-bold uppercase tracking-wider">Expertise</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {currentExpert.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-lg bg-black text-white text-[12px] font-bold tracking-tight">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Contact Bar */}
                    <div className="flex items-center justify-center gap-4 pt-6 border-t border-neutral-100">
                      <a href={`https://wa.me/${currentExpert.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366]/10 text-[#075E54] hover:bg-[#25D366] hover:text-white transition-all duration-300 font-bold text-[13px]">
                        <MessageCircle className="w-4 h-4" /> WhatsApp
                      </a>
                      <a href={`mailto:${currentExpert.contact.email}`} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-black hover:text-white transition-all duration-300 font-bold text-[13px]">
                        <Mail className="w-4 h-4" /> Email
                      </a>
                      <a href={`tel:${currentExpert.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-black hover:text-white transition-all duration-300 font-bold text-[13px]">
                        <Phone className="w-4 h-4" /> Call
                      </a>
                    </div>
                  </div>
                )}

                {activeVariant === 'managed-services' && (
                  <div className="text-center max-w-lg mx-auto py-4">
                    <p className="text-[15px] leading-relaxed text-neutral-600 font-medium">
                      Discuss how our Managed Services can act as a seamless extension of your HE institution. Tell us about your current technical constraints.
                    </p>
                    </div>
                  )}
                </div>

                {/* Form Section */}
                <div id="expert-contact-form" className="bg-slate-50 border-t border-neutral-200 px-8 py-16">
                  {renderFormUI('expert')}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          </motion.div>
        ) : (
          /* ── ORIGINAL: Two Column Layout ── */
          <motion.div
            key="default-layout"
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
                {/* Left Column (Content) */}
                <div className="lg:col-span-5 bg-zinc-50 px-3 py-10 lg:px-8 lg:py-14 flex flex-col gap-10 border-b lg:border-b-0 lg:border-r border-zinc-200">
                  <div className="text-left">
                    <span className="text-[11px] text-neutral-400 uppercase tracking-[2px] font-bold block mb-4">
                      Strategic Consultation
                    </span>
                    <h2 className="text-[32px] sm:text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">
                      Book a strategic institutional review.
                    </h2>
                  </div>

                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center">
                        <AvatarStack />
                        <div className="ml-5">
                          <div className="mb-0.5 text-black font-['Outfit'] font-bold text-xl leading-snug">
                            20+ Specialists
                          </div>
                          <div className="uppercase tracking-[1px] text-[#A3A3A3] font-bold text-[11px] leading-tight">
                            UK HIGHER ED ADVISORS
                          </div>
                        </div>
                      </div>
                      <div className="text-[14px] leading-relaxed text-[#525252] font-medium">
                        Your dialogue will be handled with absolute discretion by our senior leadership team.
                      </div>
                    </div>

                    <div className="flex flex-col rounded-2xl gap-3 pt-6 border-t border-solid border-[#D4D4D4]">
                      <div className="flex flex-col gap-1.5">
                        <ContactLink icon={IconEmail} label="hello@thinkbeyond.cloud" href="mailto:hello@thinkbeyond.cloud" />
                        <ContactLink icon={IconPhone} label="+44 (0) 20 1234 5678" href="tel:+442012345678" />
                        <ContactLink icon={IconWhatsApp} label="WhatsApp Business" href="https://wa.me/48502227174" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (Form) */}
                <div className="lg:col-span-7 bg-white px-3 py-10 lg:px-10 lg:py-14 flex flex-col items-center justify-start lg:justify-center">
                  {renderFormUI('default')}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  // Modular Form UI
  function renderFormUI(layoutType: 'default' | 'expert') {
    return (
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className={`w-full flex flex-col items-center text-center gap-8 ${layoutType === 'default' ? 'max-w-md py-10' : ''}`}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 200 }}
              className={`${layoutType === 'default' ? 'w-24 h-24' : 'w-20 h-20'} bg-black rounded-full flex items-center justify-center shadow-lg`}
            >
              <CheckCircle2 className={`${layoutType === 'default' ? 'w-12 h-12' : 'w-10 h-10'} text-white`} />
            </motion.div>
            <div>
              <h3 className={`${layoutType === 'default' ? 'text-[32px]' : 'text-2xl'} font-bold tracking-tight text-black mb-3`}>Strategic Dialogue Initiated</h3>
              <p className="text-neutral-500 text-md leading-relaxed px-10">
                {layoutType === 'expert' 
                  ? `Your brief has been forwarded to ${currentExpert.name.split(' ')[0]}. A session will be coordinated within 24 business hours.`
                  : "A dedicated institutional strategist will coordinate your strategy session within 24 business hours."}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`w-full ${layoutType === 'default' ? 'max-w-[480px]' : 'max-w-lg mx-auto'} flex flex-col gap-10`}
          >
            <div className={`${layoutType === 'default' ? 'text-left' : 'text-center'} space-y-2`}>
              <h3 className={`${layoutType === 'default' ? 'text-[28px]' : 'text-2xl'} font-bold tracking-tight text-black`}>
                {layoutType === 'expert' ? 'Initialise Strategic Review' : 'Initiate Strategic Review'}
              </h3>
              {layoutType === 'expert' && (
                <p className="text-[13px] text-neutral-500 font-medium">
                  Fill out the form below to begin your consultation with {activeVariant === 'managed-services' ? 'our support team' : currentExpert.name.split(' ')[0]}.
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full text-left" noValidate>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className={`text-[12px] ${layoutType === 'default' ? 'text-neutral-700' : 'text-neutral-500'} font-bold ml-1 uppercase tracking-wider`}>Full Name</label>
                  <Input
                    placeholder="e.g. Professor Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    error={!!errors.name}
                    className={layoutType === 'expert' ? "bg-white border-white shadow-sm focus:border-black transition-all" : ""}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.name}</p>}
                </div>

                <div className="flex flex-col gap-1.5 text-black">
                  <label className={`text-[12px] ${layoutType === 'default' ? 'text-neutral-700' : 'text-neutral-500'} font-bold ml-1 uppercase tracking-wider`}>Institution name</label>
                  <Input
                    placeholder="Start typing institution name..."
                    list="modal-universities"
                    value={form.university}
                    onChange={(e) => setForm({ ...form, university: e.target.value })}
                    error={!!errors.university}
                    className={layoutType === 'expert' ? "bg-white border-white shadow-sm focus:border-black transition-all" : ""}
                  />
                  {errors.university && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.university}</p>}
                  <datalist id="modal-universities">
                    {UNIVERSITY_OPTIONS}
                  </datalist>
                </div>

                <div className="flex flex-col gap-1.5 text-black">
                  <label className={`text-[12px] ${layoutType === 'default' ? 'text-neutral-700' : 'text-neutral-500'} font-bold ml-1 uppercase tracking-wider`}>Work Email</label>
                  <Input
                    type="email"
                    placeholder="j.smith@university.ac.uk"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    error={!!errors.email}
                    className={layoutType === 'expert' ? "bg-white border-white shadow-sm focus:border-black transition-all" : ""}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.email}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className={`text-[12px] ${layoutType === 'default' ? 'text-neutral-700' : 'text-neutral-500'} font-bold ml-1 uppercase tracking-wider`}>Primary Challenge (Optional)</label>
                  <Textarea
                    placeholder="Briefly describe what you'd like to discuss..."
                    className={layoutType === 'expert' ? "bg-white border-white shadow-sm focus:bg-white text-black min-h-[100px] rounded-2xl" : "bg-neutral-50 px-4 py-3 placeholder:text-neutral-400 focus:bg-white text-black"}
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
                  <span className="text-[12px] text-neutral-500 leading-relaxed group-hover:text-black transition-colors">
                    I consent to the processing of data in accordance with GDPR and understand my information will be handled with absolute confidentiality.
                  </span>
                </label>
                {errors.gdpr && <p className="text-[11px] text-red-500 font-bold ml-8">{errors.gdpr}</p>}
              </div>

              <Button
                type="submit"
                disabled={!isFormValid}
                fullWidth={true}
                className={`mt-2 ${layoutType === 'expert' ? 'py-6 text-[14px]' : ''} uppercase tracking-widest font-bold shadow-xl hover:shadow-2xl transition-all`}
              >
                Request Consultation
                <Send className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>

              <div className={`flex items-center justify-center gap-2 ${layoutType === 'expert' ? 'text-slate-400' : 'text-slate-500'} text-[10px] uppercase font-bold tracking-widest mt-2`}>
                <Lock className="w-3 h-3" aria-hidden="true" />
                <span>{layoutType === 'expert' ? 'End-to-End Encrypted Data' : 'Your data is 100% secure. No spam, ever.'}</span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
}
