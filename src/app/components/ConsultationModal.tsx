import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Lock, X, ChevronLeft, ChevronRight, Mail, Phone, MessageCircle, Award, BadgeCheck, Briefcase, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useConsultationForm } from '../hooks/useConsultationForm';
import {
  UNIVERSITY_OPTIONS,
  ContactLink,
  IconEmail,
  IconPhone,
  IconWhatsApp
} from './ui/consultation/SharedConsultationUI';
import { PlaceholderPhoto } from './ui/shared/PlaceholderPhoto';
import { EXPERTS, type Expert } from '../data/experts';

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
  const navRef = useRef(true);
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

  useEffect(() => {
    if (isOpen) {
      setCycleExpert(null); // Reset cycle when opening
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        resetForm();
      }, 300);
    }
  }, [isOpen, resetForm]);

  if (!isOpen) return null;

  const currentExpert = cycleExpert || expert || fallbackExpert;
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
    const shouldShow = scrollTop < 150;
    if (shouldShow !== navRef.current) {
      navRef.current = shouldShow;
      setShowNav(shouldShow);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <AnimatePresence mode="wait">
        {activeVariant === 'expert' || activeVariant === 'managed-services' ? (
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
              aria-label="Close modal"
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
                        <div className="text-center max-w-lg mx-auto">
                          <p className="text-[15px] leading-relaxed text-neutral-600 font-medium italic">
                            &ldquo;{currentExpert.description}&rdquo;
                          </p>
                        </div>

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

                  <div id="expert-contact-form" className="bg-slate-50 border-t border-neutral-200 px-8 py-16">
                    {renderFormUI('expert')}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="default-layout"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-6xl bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute right-8 top-8 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-neutral-50/50 hover:bg-black text-neutral-400 hover:text-white hover:scale-105 transition-all shadow-sm active:scale-95 cursor-pointer backdrop-blur-md border border-neutral-100"
            >
              <X className="w-6 h-6" strokeWidth={2.5} />
            </button>

            <div className="flex-1 overflow-y-auto min-h-0 h-full scroll-smooth custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">
                {/* Left Column: Strategic Content */}
                <div className="lg:col-span-5 bg-white px-8 py-14 lg:px-10 lg:py-16 flex flex-col gap-10 border-b lg:border-b-0 lg:border-r border-neutral-100">
                  <div className="flex flex-col gap-10">
                    {/* Top Trust Section */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-5">
                        <AvatarStack />
                        <div>
                          <div className="text-black font-bold text-[28px] leading-tight tracking-tight">
                            20+ Experts
                          </div>
                          <div className="text-neutral-400 font-bold text-[11px] uppercase tracking-[1.5px] mt-1">
                            Institutional Strategy Architects
                          </div>
                        </div>
                      </div>
                      <p className="text-[15px] leading-relaxed text-neutral-600 font-medium max-w-sm">
                        Your institution's transformation will be guided by our full team of certified Salesforce architects.
                      </p>
                    </div>

                    <div className="h-px bg-neutral-100 w-full" />

                    {/* Expert Profile - Marcin Pieńkowski */}
                    <div className="space-y-8">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 border border-neutral-100 shadow-sm relative shrink-0">
                          <User className="w-7 h-7" />
                          <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-1 shadow-lg ring-2 ring-white">
                            <BadgeCheck className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="text-black font-bold text-[16px] uppercase tracking-[0.5px]">
                            MARCIN PIEŃKOWSKI
                          </div>
                          <div className="text-neutral-400 text-[13px] font-medium mt-0.5">
                            Institutional Strategist
                          </div>
                        </div>
                      </div>
                      
                      {/* Boxed Quote */}
                      <div className="bg-[#FAFAFA] border border-neutral-100 rounded-[24px] p-6 sm:p-8 relative group hover:bg-[#F5F5F5] transition-colors">
                        <p className="text-[12px] leading-relaxed text-neutral-800 font-medium italic text-left">
                          "Let's start with strategy. I won't sell you another IT system. I'll show you how to architect the institutional foundation your vision demands."
                        </p>
                      </div>
                    </div>

                    {/* Contact Links */}
                    <div className="flex flex-col gap-4 pt-4">
                       <ContactLink icon={IconEmail} label="marcin@thinkbeyond.cloud" href="mailto:marcin@thinkbeyond.cloud" />
                       <ContactLink icon={IconPhone} label="+48 502 227 174" href="tel:+48502227174" />
                       <ContactLink icon={IconWhatsApp} label="WhatsApp Chat" href="https://wa.me/48502227174" />
                    </div>
                  </div>
                </div>

                {/* Right Column: Form */}
                <div className="lg:col-span-7 bg-white px-8 py-14 lg:px-12 lg:py-16 flex flex-col items-center justify-center">
                  {renderFormUI('default')}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  function renderFormUI(layoutType: 'default' | 'expert') {
    return (
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className={`w-full flex flex-col items-center text-center gap-8 ${layoutType === 'default' ? 'max-w-md' : ''}`}
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
                  <label className="text-[12px] text-neutral-500 font-bold ml-1 uppercase tracking-wider">Full Name</label>
                  <Input
                    placeholder="e.g. Professor Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    error={!!errors.name}
                    className="bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-black transition-all rounded-xl h-12 text-black shadow-sm"
                  />
                  {errors.name && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.name}</p>}
                </div>

                <div className="flex flex-col gap-1.5 ">
                   <label className="text-[12px] text-neutral-500 font-bold ml-1 uppercase tracking-wider">Institution name</label>
                  <Input
                    placeholder="Start typing institution name..."
                    list="modal-universities"
                    value={form.university}
                    onChange={(e) => setForm({ ...form, university: e.target.value })}
                    error={!!errors.university}
                    className="bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-black transition-all rounded-xl h-12 text-black shadow-sm"
                  />
                  {errors.university && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.university}</p>}
                  <datalist id="modal-universities">
                    {UNIVERSITY_OPTIONS}
                  </datalist>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] text-neutral-500 font-bold ml-1 uppercase tracking-wider">Work Email</label>
                  <Input
                    type="email"
                    placeholder="j.smith@university.ac.uk"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    error={!!errors.email}
                    className="bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-black transition-all rounded-xl h-12 text-black shadow-sm"
                  />
                  {errors.email && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.email}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] text-neutral-500 font-bold ml-1 uppercase tracking-wider">Primary Challenge (Optional)</label>
                  <Textarea
                    placeholder="Briefly describe what you'd like to discuss..."
                    className="bg-neutral-50 border border-neutral-200 focus:bg-white focus:border-black transition-all rounded-xl min-h-[120px] text-black shadow-sm"
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
                className="mt-2 py-6 text-[14px] uppercase tracking-widest font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                Request Consultation
                <Send className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-2">
                <Lock className="w-3 h-3" aria-hidden="true" />
                <span>End-to-End Encrypted Data</span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
}
