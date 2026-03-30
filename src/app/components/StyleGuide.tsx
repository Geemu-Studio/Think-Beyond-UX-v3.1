import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Phone, Mail, CheckCircle2, Quote, Lightbulb } from 'lucide-react';
import { CampaignOutlined } from '@mui/icons-material';

export function StyleGuide() {
  const [formName, setFormName] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-20 flex flex-col gap-24 font-sans text-left">
        
        {/* Header Intro */}
        <div className="flex flex-col gap-4 border-b border-neutral-100 pb-12">
          <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px] font-semibold">Living Documentation</span>
          <h1 className="text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">Design System Canvas</h1>
          <p className="text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
            Inwentaryzacja aktualnych komponentów interfejsu rozwijanych w trybie Greybox/Minimalist (biel, czerń, szarości). Prezentacja kolorystyki, typografii i struktury z istniejącego kodu.
          </p>
        </div>

        {/* 1. STRUKTURA KOLORYSTYCZNA W UŻYCIU */}
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] tracking-[-0.8px] text-black font-bold">1. Struktura Kolorystyczna w użyciu</h2>
            <p className="text-[14px] text-neutral-500">Wyciągnięte odcienie szarości i czerni używane w tłach, ramkach i tekstach.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Backgrounds */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[13px] uppercase tracking-[1.2px] text-neutral-400 font-bold mb-2">Tła (Backgrounds)</h3>
              {[
                { name: 'bg-white', cls: 'bg-white border border-neutral-200' },
                { name: 'bg-neutral-50', cls: 'bg-neutral-50 border border-neutral-200' },
                { name: 'bg-neutral-100', cls: 'bg-neutral-100 border border-neutral-200' },
                { name: 'bg-neutral-200', cls: 'bg-neutral-200 border border-neutral-300' },
                { name: 'bg-neutral-800', cls: 'bg-neutral-800' },
                { name: 'bg-neutral-900', cls: 'bg-neutral-900' },
                { name: 'bg-[#333333]', cls: 'bg-[#333333]' },
                { name: 'bg-black', cls: 'bg-black' }
              ].map((color) => (
                <div key={color.name} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg shrink-0 shadow-sm ${color.cls}`}></div>
                  <code className="text-[13px] text-neutral-600 font-mono bg-neutral-50 px-2 py-1 rounded">{color.name}</code>
                </div>
              ))}
            </div>

            {/* Borders */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[13px] uppercase tracking-[1.2px] text-neutral-400 font-bold mb-2">Krawędzie (Borders)</h3>
              {[
                { name: 'border-transparent', cls: 'border border-transparent bg-neutral-50' },
                { name: 'border-[#F0F0F0]', cls: 'border-2 border-[#F0F0F0] bg-white' },
                { name: 'border-neutral-100', cls: 'border-2 border-neutral-100 bg-white' },
                { name: 'border-neutral-200', cls: 'border-2 border-neutral-200 bg-white' },
                { name: 'border-neutral-400', cls: 'border-2 border-neutral-400 bg-white' },
                { name: 'border-neutral-700', cls: 'border-2 border-neutral-700 bg-neutral-800' },
                { name: 'border-black', cls: 'border-2 border-black bg-white' }
              ].map((color) => (
                <div key={color.name} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg shrink-0 ${color.cls}`}></div>
                  <code className="text-[13px] text-neutral-600 font-mono bg-neutral-50 px-2 py-1 rounded">{color.name}</code>
                </div>
              ))}
            </div>

            {/* Texts */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[13px] uppercase tracking-[1.2px] text-neutral-400 font-bold mb-2">Teksty (Texts)</h3>
              <div className="bg-neutral-50 p-6 rounded-[20px] flex flex-col gap-5 border border-neutral-100">
                <div className="text-black text-[18px] font-bold">text-black</div>
                <div className="text-neutral-800 text-[18px] font-bold">text-neutral-800</div>
                <div className="text-neutral-700 text-[18px] font-bold">text-neutral-700</div>
                <div className="text-neutral-600 text-[18px] font-bold">text-neutral-600</div>
                <div className="text-neutral-500 text-[18px] font-bold">text-neutral-500</div>
                <div className="text-neutral-400 text-[18px] font-bold">text-neutral-400</div>
                <div className="bg-black p-4 rounded-xl flex flex-col gap-3">
                  <div className="text-neutral-300 text-[18px] font-bold">text-neutral-300</div>
                  <div className="text-white text-[18px] font-bold">text-white</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TYPOGRAFIA INTERFEJSU */}
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] tracking-[-0.8px] text-black font-bold">2. Typografia Interfejsu</h2>
            <p className="text-[14px] text-neutral-500">Zestaw nagłówków, tekstów podtytułów oraz opisów odtworzonych kropka w kropkę z obecnych komponentów (np. OfferBridgeSection, MarketingProblemSection).</p>
          </div>

          <div className="flex flex-col gap-12 bg-white rounded-[24px] border border-neutral-100 p-8 sm:p-12 shadow-sm">
            
            {/* Dark Mode Typography (OfferBridge) */}
            <div className="bg-neutral-800 p-10 rounded-[20px] flex flex-col gap-6">
              <div className="mb-4">
                <code className="text-[11px] text-neutral-400 font-mono bg-neutral-900 px-2 py-1 rounded">Dark Section (OfferBridge)</code>
              </div>
              <span className="text-[11px] text-neutral-400 uppercase tracking-[1.6px]" style={{ fontWeight: 600 }}>
                Overline / Pre-title
              </span>
              <h2 className="text-[30px] sm:text-[38px] leading-[1.15] tracking-[-1.2px] text-white">
                A unified ecosystem for the entire student lifecycle.
              </h2>
              <p className="text-[15px] text-neutral-400 leading-[1.75] max-w-xl">
                Discover the core pillars of a transformed institution powered by Salesforce Education Cloud.
              </p>
              
              <div className="mt-4 pt-4 border-t border-neutral-700">
                <h3 className="text-[15px] text-white leading-[1.5] tracking-[-0.3px]" style={{ fontWeight: 600 }}>
                  Card Title (Dark)
                </h3>
                <p className="text-[13px] text-neutral-400 leading-[1.65] mt-2">
                  Content description inside the dark card.
                </p>
              </div>
            </div>

            {/* Light Mode Typography */}
            <div className="p-4 flex flex-col gap-6">
              <div className="mb-4">
                <code className="text-[11px] text-neutral-500 font-mono bg-neutral-100 px-2 py-1 rounded">Light Section (MarketingProblem / Case Study)</code>
              </div>
              <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px]" style={{ fontWeight: 600 }}>
                Opportunity (Light Overline)
              </span>
              <h2 className="text-[32px] leading-[1.15] tracking-[-1.5px] text-black">
                Orchestrating authentic connections at scale.
              </h2>
              <p className="text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
                Move beyond generic mass communication. Empower your marketing teams to craft compelling, data-driven narratives that resonate across every digital touchpoint.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3">
                  <h3 className="text-[24px] sm:text-[28px] leading-[1.2] tracking-[-0.8px] text-black">
                    Let's talk about the complete student experience at your institution.
                  </h3>
                  <code className="text-[11px] text-neutral-400 font-mono">Case study let's talk header</code>
                </div>
                
                <div className="flex flex-col gap-3">
                  <h3 className="text-[18px] text-black tracking-[-0.4px]" style={{ fontWeight: 700 }}>
                    Breaking Through the Digital Noise
                  </h3>
                  <p className="text-[14px] text-neutral-500 leading-[1.7]">
                    Prospective students are overwhelmed by generic marketing. Standing out requires deeply relevant, timely, and authentic storytelling across their preferred channels.
                  </p>
                  <code className="text-[11px] text-neutral-400 font-mono">Problem card typography</code>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. PRZYCISKI, LINKI I FORMULARZE */}
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] tracking-[-0.8px] text-black font-bold">3. Przyciski, Linki i Formularze</h2>
            <p className="text-[14px] text-neutral-500">Główne call-to-action, nawigacja, formularze z różnymi stanami (:hover, :focus, :disabled).</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Buttons & Links */}
            <div className="bg-neutral-50 rounded-[24px] p-8 border border-neutral-100 flex flex-col gap-8">
              <h3 className="text-[14px] text-black font-bold uppercase tracking-wider">Przyciski & Linki</h3>
              
              <div className="flex flex-col items-start gap-5">
                <button className="bg-black text-white px-5 py-2 text-[14px] hover:bg-neutral-800 transition-colors rounded-full font-[600]">
                  Primary CTA (Default)
                </button>
                <button className="w-full py-4 text-[15px] transition-all duration-300 rounded-full font-semibold shadow-sm bg-black text-white hover:bg-neutral-800 border border-black cursor-pointer">
                  Full Width Primary CTA
                </button>
                <button disabled className="w-full py-4 text-[15px] transition-all duration-300 rounded-full font-semibold shadow-sm bg-neutral-200 text-neutral-400 border border-neutral-200 cursor-not-allowed opacity-70">
                  Full Width Primary CTA (Disabled)
                </button>
              </div>

              <div className="flex flex-col items-start gap-4 pt-6 border-t border-neutral-200">
                <a href="#" onClick={(e)=>e.preventDefault()} className="text-[15px] text-neutral-700 hover:text-black transition-colors font-semibold cursor-pointer">
                  Standard Link / Nav Link (:hover)
                </a>
                <div className="bg-neutral-800 p-4 rounded-lg w-full">
                  <span className="text-[13px] text-neutral-300 hover:text-white transition-colors cursor-pointer" style={{ fontWeight: 500 }}>
                    Card Interaction Link (:hover)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-neutral-200">
                <a href="#" aria-label="Phone Outline" onClick={(e)=>e.preventDefault()} className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all cursor-pointer">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Mail Outline" onClick={(e)=>e.preventDefault()} className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all cursor-pointer">
                  <Mail className="w-5 h-5" />
                </a>
                <span className="text-[12px] text-neutral-500 ml-2">Icon Buttons (Case Study Contact)</span>
              </div>
            </div>

            {/* Forms */}
            <div className="bg-white rounded-[24px] p-8 border border-neutral-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] flex flex-col gap-6 text-left">
              <h3 className="text-[14px] text-black font-bold uppercase tracking-wider mb-2">Pola Formularza</h3>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-neutral-700 font-medium">Standard State</label>
                <input
                  type="text"
                  placeholder="Placeholder text"
                  className="rounded-xl px-4 py-3.5 text-[14px] text-black outline-none transition-colors placeholder:text-neutral-400 border border-transparent bg-neutral-100 focus:border-black focus:bg-white"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-neutral-700 font-medium">Focus / Filled State</label>
                <input
                  type="text"
                  value="User typed this value"
                  readOnly
                  className="rounded-xl px-4 py-3.5 text-[14px] text-black outline-none transition-colors placeholder:text-neutral-400 border border-black bg-white focus:border-black focus:bg-white"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] text-neutral-700 font-medium">Error State</label>
                <input
                  type="text"
                  placeholder="Invalid input"
                  className="rounded-xl px-4 py-3.5 text-[14px] text-black outline-none transition-colors placeholder:text-neutral-400 border border-neutral-400 bg-neutral-50"
                  readOnly
                />
                <p className="text-[12px] text-neutral-700 mt-1">This field is required</p>
              </div>

              <div className="flex flex-col gap-1.5 pt-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-1 accent-black w-4 h-4 shrink-0 cursor-pointer"
                  />
                  <span className="text-[13px] text-neutral-600 leading-[1.6]">
                    Zgoda (Checkbox) domyślny wygląd z akcentem: accent-black w-4 h-4.
                  </span>
                </label>
              </div>

            </div>
          </div>
        </section>

        {/* 4. MAKRO-KOMPONENTY (Karty widoczności) */}
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] tracking-[-0.8px] text-black font-bold">4. Makro-komponenty (Composites)</h2>
            <p className="text-[14px] text-neutral-500">Złożone karty oraz bloki prezentacyjne odwzorowane z układu strony.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            
            {/* Dark Offer Bridge Card */}
            <div className="bg-neutral-800 p-8 rounded-[32px] flex flex-col gap-6 justify-center">
              <span className="text-[12px] text-neutral-400 font-mono">OfferBridge Card (Dark)</span>
              
              <div className="bg-transparent border border-neutral-700 rounded-[20px] p-6 flex flex-col gap-3 group hover:bg-[#333333] hover:border-transparent transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98] cursor-pointer no-underline text-left w-full h-full max-w-sm mx-auto">
                <h3 className="text-[15px] text-white leading-[1.5] tracking-[-0.3px]" style={{ fontWeight: 600 }}>
                  Recruitment & Admissions
                </h3>
                <p className="text-[13px] text-neutral-400 leading-[1.65]">
                  Find, engage, and enroll the right students. Create frictionless application journeys.
                </p>
                <div className="mt-auto text-[13px] text-neutral-300 group-hover:text-white transition-colors" style={{ fontWeight: 500 }}>
                  Discover Recruitment
                </div>
              </div>
            </div>

            {/* Light Marketing Problem Card */}
            <div className="bg-white border border-neutral-100 p-8 rounded-[32px] flex flex-col gap-6 justify-center relative overflow-hidden">
               <span className="text-[12px] text-neutral-400 font-mono">MarketingProblem Card (Light)</span>
               <div className="p-8 flex flex-col gap-5 rounded-[20px] bg-neutral-50 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:scale-[1.03] active:scale-[0.98] hover:shadow-2xl transition-all duration-300 group max-w-sm mx-auto w-full text-left">
                  <div className="text-neutral-400 group-hover:scale-110 transition-transform duration-300 group-hover:text-black">
                    <CampaignOutlined sx={{ fontSize: 36, color: 'inherit' }} />
                  </div>
                  <h3 className="text-[18px] text-black tracking-[-0.4px]" style={{ fontWeight: 700 }}>
                    Breaking Through the Noise
                  </h3>
                  <p className="text-[14px] text-neutral-500 leading-[1.7]">
                    Prospective students are overwhelmed by generic marketing. Standing out requires deeply relevant and authentic storytelling.
                  </p>
               </div>
            </div>

          </div>

          <div className="mt-8 flex flex-col gap-6">
            <h3 className="text-[18px] text-black font-bold">Otwarty Modal z Case Study SWPS (Wycinek)</h3>
            <div className="bg-white border border-neutral-100 rounded-[32px] sm:rounded-[40px] shadow-2xl max-w-4xl mx-auto overflow-hidden text-left flex flex-col relative w-full">
              
              {/* Header */}
              <div className="bg-black flex items-center overflow-hidden z-[100] relative">
                <div className="h-20 sm:h-28 flex items-center px-8 sm:px-12 w-full relative">
                  <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-[100px] font-bold text-white/[0.05] pointer-events-none select-none">
                    S
                  </div>
                  <div className="relative z-10 w-full text-left">
                    <span className="text-neutral-500 text-[9px] uppercase tracking-[2px] font-bold mb-0.5 block">
                      Case Study Success Story
                    </span>
                    <h2 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
                      SWPS University
                    </h2>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-12 flex flex-col gap-10 bg-white relative z-[50]">
                <header>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 leading-tight">
                    Transforming the Student Experience at Scale: The SWPS University Ecosystem
                  </h3>
                </header>

                <div className="flex flex-col gap-8">
                  <section className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Lightbulb className="w-5 h-5 text-black" />
                      <h4 className="font-bold text-lg text-black">The Solution: A Unified Digital Campus</h4>
                    </div>
                    <p className="text-neutral-600 leading-relaxed mb-2">Powered by Salesforce Education Cloud and Genesys Cloud, Think Beyond orchestrated a complete omnichannel transformation, shifting the institution from reactive administration to proactive student care.</p>
                  </section>
                </div>

                <blockquote className="bg-neutral-50 rounded-2xl p-8 border-l-4 border-black relative overflow-hidden group/quote">
                  <Quote className="absolute -top-2 -right-2 w-20 h-20 text-black/5 opacity-10" />
                  <p className="text-lg italic text-neutral-800 leading-relaxed mb-6 relative z-10">
                    "Incredible attention to our institutional needs. The Think Beyond team provided wonderful support, patience, and expertise. Thanks to their commitment, this complex transformation went as smoothly as possible."
                  </p>
                  <footer className="flex items-center gap-4 relative z-10">
                      <div className="h-px w-8 bg-neutral-200"></div>
                      <cite className="not-italic font-bold text-black text-sm">
                        SWPS University Representative
                      </cite>
                  </footer>
                </blockquote>

                {/* Forms Expert Footer snippet */}
                <div className="mt-16 pt-12 border-t border-neutral-100 flex flex-col gap-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden shrink-0">
                          <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-500 font-bold text-lg">MP</div>
                      </div>
                      <div className="flex flex-col text-left">
                        <h5 className="font-bold text-black text-lg">Marcin Pieńkowski</h5>
                        <p className="text-sm text-neutral-500">Digital Transformation Strategist</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all cursor-pointer">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all cursor-pointer">
                        <Mail className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
