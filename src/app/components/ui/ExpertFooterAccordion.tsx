import React, { useState } from 'react';
import { Mail, Phone, CheckCircle2 } from 'lucide-react';
import { Input } from './input';
import { Button } from './button';
import { motion, AnimatePresence } from 'motion/react';

export function ExpertFooterAccordion() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [form, setForm] = useState({ name: '', university: '', email: '', gdpr: false });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'This field is required';
    if (!form.university.trim()) e.university = 'This field is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email address';
    if (!form.gdpr) e.gdpr = 'Your consent is required to proceed';
    return e;
  };

  const isFormValid = 
    form.name.trim() !== '' && 
    form.university.trim() !== '' && 
    form.email.trim() !== '' && 
    /\S+@\S+\.\S+/.test(form.email) && 
    form.gdpr;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <div className="mt-16 pt-12 border-t border-neutral-100 flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden shrink-0">
             <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-500 font-bold text-lg">
               MP
             </div>
          </div>
          <div className="flex flex-col text-left">
            <h5 className="font-bold text-black text-lg">Marcin Pieńkowski</h5>
            <p className="text-sm text-neutral-500">Digital Transformation Strategist</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:+48502227174" className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all cursor-pointer">
            <Phone className="w-5 h-5" />
          </a>
          <a href="mailto:marcin@thinkbeyond.cloud" className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all cursor-pointer">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="w-full">
        {submitted ? (
          <div className="bg-white rounded-[24px] border border-[#F0F0F0] p-12 flex flex-col items-center gap-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.05)] animate-in fade-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-xl mb-2">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <div>
              <h6 className="font-bold text-black text-2xl mb-2">Thank you!</h6>
              <p className="text-neutral-500 max-w-sm">
                Marcin will be in touch within 24 business hours to talk about the details.
              </p>
            </div>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm font-bold text-black hover:underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-[24px] border border-[#F0F0F0] p-8 sm:p-10 flex flex-col gap-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)] text-left">
            <div>
              <h3 className="text-[24px] sm:text-[28px] leading-[1.2] tracking-[-0.8px] text-black">
                Let's talk about the complete student experience at your institution.
              </h3>
            </div>
            
            {!isExpanded ? (
              <Button size="lg" onClick={() => setIsExpanded(true)}>
                Zapytaj o podobne wdrożenie
              </Button>
            ) : (
              <AnimatePresence>
                <motion.form 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-6 w-full text-left overflow-hidden" 
                  noValidate
                >
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] text-neutral-700 font-medium">Full name</label>
                    <Input
                      type="text"
                      placeholder="Professor Jane Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      error={!!errors.name}
                    />
                    {errors.name && <p className="text-[12px] text-black font-semibold mt-0.5">{errors.name}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] text-neutral-700 font-medium">Institution name</label>
                    <Input
                      type="text"
                      placeholder="Your university"
                      list="uk-universities"
                      value={form.university}
                      onChange={(e) => setForm({ ...form, university: e.target.value })}
                      error={!!errors.university}
                    />
                    {errors.university && <p className="text-[12px] text-black font-semibold mt-0.5">{errors.university}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] text-neutral-700 font-medium">Institutional email address</label>
                    <Input
                      type="email"
                      placeholder="j.smith@university.ac.uk"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      error={!!errors.email}
                    />
                    {errors.email && <p className="text-[12px] text-black font-semibold mt-0.5">{errors.email}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.gdpr}
                        onChange={(e) => setForm({ ...form, gdpr: e.target.checked })}
                        className="mt-1 accent-black w-4 h-4 shrink-0 cursor-pointer"
                      />
                      <span className="text-[13px] text-neutral-600 leading-[1.6]">
                        I consent to the processing of my personal data in accordance with GDPR for the purpose of responding to my enquiry.
                      </span>
                    </label>
                    {errors.gdpr && <p className="text-[12px] text-black font-semibold ml-7 mt-0.5">{errors.gdpr}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={!isFormValid}
                    size="lg"
                    fullWidth={true}
                  >
                    Speak with Our Team
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-[12px] text-neutral-400 mt-2">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5.5" width="9" height="6.5" rx="1" />
                      <path d="M4.5 5.5V3.5a2 2 0 0 1 4 0v2" />
                    </svg>
                    <span>Your data is 100% secure and will never be shared. No spam, ever.</span>
                  </div>
                </motion.form>
              </AnimatePresence>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
