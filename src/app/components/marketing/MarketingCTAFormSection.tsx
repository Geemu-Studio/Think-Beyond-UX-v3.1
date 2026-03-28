import React, { useState } from 'react';

function AvatarSilhouette({ initials, offset }: { initials: string; offset: string }) {
  return (
    <div
      className="w-11 h-11 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center shrink-0 absolute"
      style={{ left: offset }}
    >
      <span className="text-[12px] text-neutral-600 select-none" style={{ fontWeight: 700 }}>
        {initials}
      </span>
    </div>
  );
}

function IconEmail() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="12" height="8" rx="1.5" />
      <path d="M1 4.5l6 4 6-4" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 2c0 0 1-1.5 2-1.5.4 0 .8.4 1.2.9L6.5 3.5c.4.5.4.9 0 1.3L5.6 5.8C6 7 7 8 8.2 8.4l.9-.9c.4-.4.8-.4 1.3 0l2 1.5c.5.4.9.8.9 1.2 0 1-1.5 2-1.5 2C5.5 13.5.5 8.5.5 2z" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9.5 8.8c-.2.5-.7.9-1.2 1-1.2.2-3.3-1.3-3.8-2.5-.2-.5-.1-.9.2-1.3l.3-.3c.1-.2.1-.4 0-.5L4.5 4.7c-.2-.2-.4-.2-.6-.1-.6.4-1 1.1-.9 1.9.2 1.5 1.9 3.4 3.6 4 .8.3 1.7.1 2.3-.5.2-.2.3-.4.2-.6l-.4-.4c-.1-.2-.3-.2-.5-.1l-.3.3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
function IconMessenger() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 9.5l2-2.5 1.5 1.5 2.5-3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CONTACTS = [
  { icon: <IconEmail />, label: 'marcin@thinkbeyond.cloud', href: 'mailto:marcin@thinkbeyond.cloud' },
  { icon: <IconPhone />, label: '+48 502 227 174', href: 'tel:+48502227174' },
  { icon: <IconWhatsApp />, label: 'WhatsApp', href: 'https://wa.me/48502227174' },
  { icon: <IconMessenger />, label: 'Messenger', href: 'https://m.me/thinkbeyond' },
];

export function MarketingCTAFormSection() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className="bg-neutral-100 py-24 px-6 border-t border-neutral-200">
      <div className="mx-auto max-w-5xl flex flex-col gap-14">

        <div className="text-left">
          <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px]" style={{ fontWeight: 600 }}>
            Free Strategic Consultation
          </span>
          <h2 className="mt-3 text-[34px] sm:text-[42px] leading-[1.15] tracking-[-1.5px] text-black text-left">
            About us: Your dedicated higher education transformation team.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-[20px] border border-[#F0F0F0] p-7 flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <div className="relative h-11 shrink-0" style={{ width: '84px' }}>
                  <AvatarSilhouette initials="AK" offset="0px" />
                  <AvatarSilhouette initials="MB" offset="26px" />
                  <AvatarSilhouette initials="PW" offset="52px" />
                </div>
                <p className="text-[22px] text-black tracking-[-0.6px]" style={{ fontWeight: 800 }}>20+ Experts<br /><span style={{ fontWeight: 400 }} className="text-neutral-500 text-[15px] tracking-normal">Salesforce</span></p>
              </div>
              <p className="text-[14px] text-neutral-600 leading-[1.7]">
                Your institution's transformation will be guided by our full team of certified Salesforce architects and developers.
              </p>
            </div>

            <div className="border-t border-neutral-300" />

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-300 shrink-0 bg-neutral-200 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="15" r="8" fill="#9CA3AF" />
                    <path d="M4 38c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#9CA3AF" />
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] text-black" style={{ fontWeight: 700 }}>Marcin Pieńkowski</p>
                  <p className="text-[13px] text-neutral-500 leading-[1.5] mt-0.5">
                    Digital Transformation Strategist
                  </p>
                </div>
              </div>

              <div className="relative bg-white rounded-[16px] border border-[#F0F0F0] p-5">
                <div className="absolute -top-3 left-8 w-5 h-3 overflow-hidden">
                  <div className="w-4 h-4 bg-white border-t border-l border-[#F0F0F0] rotate-45 translate-y-1 translate-x-1" />
                </div>
                <p className="text-[14px] text-neutral-700 leading-[1.75] italic">
                  "Let's start with strategy. I won't sell you another IT system. I'll show you how to build the institutional foundation your ambitions deserve."
                </p>
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-6 flex flex-col gap-4">
              <p className="text-[12px] text-neutral-400 uppercase tracking-[1.2px]" style={{ fontWeight: 700 }}>
                Prefer direct contact?
              </p>
              <ul className="flex flex-col gap-2.5">
                {CONTACTS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[14px] text-neutral-700 hover:text-black transition-colors group"
                      style={{ fontWeight: 500 }}
                    >
                      <span className="w-8 h-8 flex items-center justify-center border border-neutral-300 bg-white rounded-full group-hover:border-black transition-colors shrink-0">
                        {item.icon}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[24px] border border-[#F0F0F0] p-8 sm:p-10 flex flex-col gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
            <div>
              <h3 className="text-[24px] sm:text-[28px] leading-[1.2] tracking-[-0.8px] text-black">
                Transform your university's narrative. Let's design your next campaign ecosystem.
              </h3>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="24" fill="#111" />
                  <path d="M14 24l8 8 12-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-[18px] text-black" style={{ fontWeight: 700 }}>Thank you!</p>
                <p className="text-[14px] text-neutral-500">
                  Marcin will be in touch within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-neutral-700" style={{ fontWeight: 500 }}>
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Professor Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`rounded-xl px-4 py-3 text-[14px] text-black outline-none transition-colors placeholder:text-neutral-400 border ${errors.name ? 'border-neutral-400 bg-neutral-50' : 'border-transparent bg-neutral-100 focus:border-black focus:bg-white'}`}
                  />
                  {errors.name && <p className="text-[12px] text-neutral-700">{errors.name}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-neutral-700" style={{ fontWeight: 500 }}>
                    Institution name
                  </label>
                  <input
                    type="text"
                    placeholder="Your university"
                    value={form.university}
                    onChange={(e) => setForm({ ...form, university: e.target.value })}
                    className={`rounded-xl px-4 py-3 text-[14px] text-black outline-none transition-colors placeholder:text-neutral-400 border ${errors.university ? 'border-neutral-400 bg-neutral-50' : 'border-transparent bg-neutral-100 focus:border-black focus:bg-white'}`}
                  />
                  {errors.university && <p className="text-[12px] text-neutral-700">{errors.university}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-neutral-700" style={{ fontWeight: 500 }}>
                    Institutional email address
                  </label>
                  <input
                    type="email"
                    placeholder="j.smith@university.ac.uk"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`rounded-xl px-4 py-3 text-[14px] text-black outline-none transition-colors placeholder:text-neutral-400 border ${errors.email ? 'border-neutral-400 bg-neutral-50' : 'border-transparent bg-neutral-100 focus:border-black focus:bg-white'}`}
                  />
                  {errors.email && <p className="text-[12px] text-neutral-700">{errors.email}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.gdpr}
                      onChange={(e) => setForm({ ...form, gdpr: e.target.checked })}
                      className="mt-0.5 accent-black w-4 h-4 shrink-0"
                    />
                    <span className="text-[13px] text-neutral-600 leading-[1.6]">
                      I consent to the processing of my personal data in accordance with GDPR for the purpose of responding to my enquiry.
                    </span>
                  </label>
                  {errors.gdpr && <p className="text-[12px] text-neutral-700 ml-7">{errors.gdpr}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 text-[15px] hover:bg-neutral-800 transition-colors rounded-full"
                  style={{ fontWeight: 600 }}
                >
                  Request a Marketing Consultation
                </button>

                <div className="flex items-center justify-center gap-2 text-[12px] text-neutral-400">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5.5" width="9" height="6.5" rx="1" />
                    <path d="M4.5 5.5V3.5a2 2 0 0 1 4 0v2" />
                  </svg>
                  <span>Your data is 100% secure and will never be shared. No spam, ever.</span>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
