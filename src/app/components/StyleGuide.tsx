import React, { useState } from 'react';
import { 
  Phone, Mail, CheckCircle2, Quote, Lightbulb, Play, AlertCircle, X, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { 
  CampaignOutlined, DataUsageOutlined, VolunteerActivismOutlined, 
  TrendingUpOutlined, MenuBookOutlined, HubOutlined, 
  DevicesOutlined, PublicOutlined, SensorsOutlined, 
  FavoriteBorderOutlined, SupportAgentOutlined, 
  HealthAndSafetyOutlined, TrackChangesOutlined 
} from '@mui/icons-material';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { GlassPlayButton } from './ui/GlassPlayButton';
import { ExpertFooterAccordion } from './ui/ExpertFooterAccordion';

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export function StyleGuide() {
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'components' | 'patterns' | 'icons'>('colors');

  const renderColors = () => (
    <div className="flex flex-col gap-16 animate-in fade-in duration-500 text-left">
      <div className="flex flex-col gap-4 border-b border-neutral-100 pb-8">
        <h1 className="text-[36px] md:text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">Kolory (Colors)</h1>
        <p className="text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
          Inwentaryzacja palety "Greybox". Wykorzystujemy wyłącznie odcienie szarości i czerni dla zachowania minimalistycznego charakteru Premium.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
      </section>
    </div>
  );

  const renderTypography = () => (
    <div className="flex flex-col gap-16 animate-in fade-in duration-500 text-left">
      <div className="flex flex-col gap-4 border-b border-neutral-100 pb-8">
        <h1 className="text-[36px] md:text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">Skala Typograficzna (Type Scale)</h1>
        <p className="text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
          <strong>OutfitBold</strong> dla nagłówków oraz <strong>Inter Regular</strong> dla treści podstawowej. Konfiguracja rozmiarów oparta o system 4px/8px.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {/* Headings Section */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] font-bold tracking-tight text-black">Nagłówki (Headings)</h2>
            <p className="text-[14px] text-neutral-400">Font: Outfit Bold / sans-serif</p>
          </div>

          <div className="flex flex-col gap-10">
            {[
              { label: 'Heading - XXL', size: '64px (4rem)', lh: '72px', cls: 'text-[64px] leading-[72px] font-bold' },
              { label: 'Heading - XL', size: '56px (3.5rem)', lh: '64px', cls: 'text-[56px] leading-[64px] font-bold' },
              { label: 'Heading - LG', size: '48px (3rem)', lh: '56px', cls: 'text-[48px] leading-[56px] font-bold' },
              { label: 'Heading - MD', size: '40px (2.5rem)', lh: '44px', cls: 'text-[40px] leading-[44px] font-bold' },
              { label: 'Heading - SM', size: '32px (2rem)', lh: '36px', cls: 'text-[32px] leading-[36px] font-bold' },
              { label: 'Heading - XS', size: '24px (1.5rem)', lh: '28px', cls: 'text-[24px] leading-[28px] font-bold' },
              { label: 'Heading - XXS', size: '20px (1.25rem)', lh: '24px', cls: 'text-[20px] leading-[24px] font-bold' },
              { label: 'Heading - XXXS', size: '16px (1rem)', lh: '20px', cls: 'text-[16px] leading-[20px] font-bold' },
            ].map((item) => (
              <div key={item.label} className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-6 items-start pb-6 border-b border-neutral-50 last:border-0 hover:bg-neutral-50/50 transition-colors px-2 -mx-2 rounded-xl">
                <div className={`${item.cls} text-black tracking-tight`}>{item.label}</div>
                <div className="flex flex-col gap-1.5 md:pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Size:</span>
                    <span className="text-[13px] text-black font-medium">{item.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Line height:</span>
                    <span className="text-[13px] text-black font-medium">{item.lh}*</span>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-[11px] text-neutral-400 mt-4 italic">*(110% rounded to a multiple of 4)</p>
          </div>
        </section>

        {/* Body Section */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] font-bold tracking-tight text-black">Treść (Body Copy)</h2>
            <p className="text-[14px] text-neutral-400">Font: Inter Regular</p>
          </div>

          <div className="flex flex-col gap-10">
            {[
              { label: 'Body LG', size: '18px (1.125rem)', lh: '36px', cls: 'text-[18px] leading-[36px]' },
              { label: 'Body MD', size: '16px (1rem)', lh: '24px', cls: 'text-[16px] leading-[24px]' },
              { label: 'Body SM', size: '14px (0.875rem)', lh: '22px', cls: 'text-[14px] leading-[22px]' },
              { label: 'Body XS', size: '12px (0.75rem)', lh: '18px', cls: 'text-[12px] leading-[18px]' },
            ].map((item) => (
              <div key={item.label} className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-6 items-start pb-6 border-b border-neutral-50 last:border-0 hover:bg-neutral-50/50 transition-colors px-2 -mx-2 rounded-xl">
                <div className={`${item.cls} text-neutral-700`}>{item.label}</div>
                <div className="flex flex-col gap-1.5 md:pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Size:</span>
                    <span className="text-[13px] text-black font-medium">{item.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Line height:</span>
                    <span className="text-[13px] text-black font-medium">{item.lh}*</span>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-[11px] text-neutral-400 mt-4 italic">*(150% rounded to a multiple of 2)</p>
          </div>
        </section>

        {/* Visual Samples */}
        <section className="flex flex-col gap-8 bg-black p-10 md:p-14 rounded-[32px]">
          <div className="flex flex-col gap-2 mb-4">
             <span className="text-[11px] text-neutral-500 uppercase tracking-[1.6px] font-bold">Visual Examples</span>
             <h3 className="text-white text-2xl font-bold tracking-tight">System w akcji</h3>
          </div>
          
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
               <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px]">Heading XXL Example</span>
               <h1 className="text-[64px] leading-[72px] font-bold text-white tracking-[-2px]">Experience Education.</h1>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
               <span className="text-[11px] text-neutral-400 uppercase tracking-[1.4px]">Heading MD & Body MD</span>
               <h2 className="text-[40px] leading-[44px] font-bold text-white tracking-[-1px]">Designed for the learners of tomorrow.</h2>
               <p className="text-[16px] leading-[24px] text-neutral-400 max-w-xl">
                  Prospective students are overwhelmed by generic marketing. Standing out requires deeply relevant, timely, and authentic storytelling across their preferred channels.
               </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const renderComponents = () => (
    <div className="flex flex-col gap-16 animate-in fade-in duration-500 text-left">
      <div className="flex flex-col gap-4 border-b border-neutral-100 pb-8">
        <h1 className="text-[36px] md:text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">Komponenty Interfejsu</h1>
        <p className="text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
          Izolowane elementy UI. Atomizacja wg konwencji "Single Source of Truth". Zbiór buttonów i formularzy.
        </p>
      </div>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] tracking-[-0.6px] text-black font-bold">1. Przyciski & Linki</h2>
          <p className="text-[14px] text-neutral-500">Główne akcje, hover effects oraz specjalny wariant rozmytego szkła.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-neutral-50 rounded-[24px] p-8 border border-neutral-100 flex flex-col gap-8">
            <h3 className="text-[14px] text-black font-bold uppercase tracking-wider">Podstawowe (Primary)</h3>
            
            <div className="flex flex-col items-start gap-5 w-full max-w-sm">
              <Button>
                Primary CTA (Default)
              </Button>
              <Button size="lg" fullWidth>
                Full Width Primary CTA
              </Button>
              <Button size="lg" fullWidth disabled>
                Full Width CTA (Disabled)
              </Button>
            </div>

            <div className="flex flex-col items-start gap-4 pt-6 border-t border-neutral-200">
              <h3 className="text-[14px] text-black font-bold uppercase tracking-wider mb-2">Micro-Link & Icons</h3>
              <a href="#" onClick={(e)=>e.preventDefault()} className="text-[15px] text-neutral-700 hover:text-black transition-colors font-semibold cursor-pointer">
                Standard Link / Nav Link (:hover)
              </a>
              <div className="bg-neutral-800 p-4 rounded-lg w-full">
                <span className="text-[13px] text-neutral-300 hover:text-white transition-colors cursor-pointer" style={{ fontWeight: 500 }}>
                  Card Interaction Link (:hover)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button aria-label="Phone Outline" onClick={(e)=>e.preventDefault()} className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all cursor-pointer">
                <Phone className="w-5 h-5" />
              </button>
              <button aria-label="Mail Outline" onClick={(e)=>e.preventDefault()} className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-black hover:text-white transition-all cursor-pointer">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-[24px] p-8 border border-neutral-100 flex flex-col gap-8">
             <h3 className="text-[14px] text-black font-bold uppercase tracking-wider">Glassmorphism Play (Nowość)</h3>
             <p className="text-[13px] text-neutral-500 mb-2 leading-relaxed">Przycisk odtworzenia video do stosowania na obrazkach, zajawkach i kartach.</p>
             
             <div className="grid grid-cols-2 gap-4">
               {/* Dark background preview */}
               <div className="bg-neutral-900 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden h-40">
                 {/* Fake abstract element inside */}
                 <div className="absolute w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl -top-10 -right-10"></div>
                 <GlassPlayButton variant="light" />
               </div>
               
               {/* Light background preview */}
               <div className="bg-white border border-neutral-200 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden h-40 group">
                 <div className="absolute w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -bottom-10 -left-10 group-hover:scale-150 transition-transform duration-700"></div>
                 <GlassPlayButton variant="dark" />
               </div>
             </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] tracking-[-0.6px] text-black font-bold">2. Pola Formularza</h2>
          <p className="text-[14px] text-neutral-500">Zunifikowane atomy `Input` obsługujące różne stany i walidację.</p>
        </div>

        <div className="bg-white rounded-[24px] p-8 border border-neutral-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] flex flex-col gap-6 max-w-xl">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-neutral-700 font-medium">Standard State</label>
            <Input type="text" placeholder="Wpisz imię i nazwisko" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-neutral-700 font-medium">Focus / Filled State</label>
            <Input type="text" value="Jan Kowalski (wypełnione)" readOnly className="border-black bg-white" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-neutral-700 font-medium">Error State</label>
            <Input type="text" placeholder="Błędne dane" error={true} readOnly />
            <p className="text-[12px] text-black font-semibold mt-0.5">To pole jest wymagane do dalszych kroków</p>
          </div>

          <div className="flex flex-col gap-1.5 pt-4 border-t border-neutral-100 mt-2">
            <label className="flex items-start gap-4 cursor-pointer">
              <input type="checkbox" defaultChecked className="mt-1 accent-black w-4 h-4 shrink-0 cursor-pointer" />
              <span className="text-[13px] text-neutral-600 leading-[1.6]">
                Zgoda na przetworzenie danych osobowych. (Domyślny checkbox HTML z atrybutem accent-black).
              </span>
            </label>
          </div>
        </div>
      </section>
    </div>
  );

  const renderPatterns = () => (
    <div className="flex flex-col gap-16 animate-in fade-in duration-500 text-left">
      <div className="flex flex-col gap-4 border-b border-neutral-100 pb-8">
        <h1 className="text-[36px] md:text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">Wzorce UX (Patterns)</h1>
        <p className="text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
          Złożone organizmy powstałe z poszczególnych komponentów bazowych. Odpowiedzialne za konwersję (CRO).
        </p>
      </div>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] tracking-[-0.6px] text-black font-bold">1. Karty (Cards / Bloki Prezentacyjne)</h2>
          <p className="text-[14px] text-neutral-500">Jasne vs ciemne tryby dla prezentacji rozwiązań wertykalnych.</p>
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
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-[20px] tracking-[-0.6px] text-black font-bold">2. Case Study (Widok Szczegółowy)</h2>
          <p className="text-[14px] text-neutral-500">Stuktura wizualna modalnego widoku Case Study prezentująca nagłówki i sekcję "Zapytaj o podobne wdrożenie".</p>
        </div>

        <div className="bg-white border border-neutral-100 rounded-[32px] sm:rounded-[40px] shadow-2xl max-w-4xl overflow-hidden text-left flex flex-col w-full relative">
          {/* Header */}
          <div className="bg-black flex items-center overflow-hidden z-10 relative">
            <div className="h-20 sm:h-28 flex items-center px-8 sm:px-12 w-full relative">
              <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-[100px] font-bold text-white/[0.05] pointer-events-none select-none">S</div>
              <div className="relative z-10 w-full text-left">
                <span className="text-neutral-500 text-[9px] uppercase tracking-[2px] font-bold mb-0.5 block">Case Study Success Story</span>
                <h2 className="text-white text-xl sm:text-2xl font-bold tracking-tight">SWPS University</h2>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 flex flex-col gap-10 bg-white relative z-20">
            <header>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 leading-tight">
                Transforming the Student Experience at Scale: The SWPS University Ecosystem
              </h3>
            </header>

            <blockquote className="bg-neutral-50 rounded-2xl p-8 border-l-4 border-black relative overflow-hidden group/quote">
              <Quote className="absolute -top-2 -right-2 w-20 h-20 text-black/5 opacity-10" />
              <p className="text-lg italic text-neutral-800 leading-relaxed mb-6 relative z-10">
                "Incredible attention to our institutional needs. The Think Beyond team provided wonderful support, patience, and expertise. Thanks to their commitment, this complex transformation went as smoothly as possible."
              </p>
              <footer className="flex items-center gap-4 relative z-10">
                  <div className="h-px w-8 bg-neutral-200"></div>
                  <cite className="not-italic font-bold text-black text-sm">SWPS University Representative</cite>
              </footer>
            </blockquote>

            {/* Nowy Expert Footer Accordion */}
            <ExpertFooterAccordion />
          </div>
        </div>
      </section>
    </div>
  );

  const renderIcons = () => {
    const iconGrid = (title: string, icons: { name: string, Icon: any, source: string }[]) => (
      <div className="flex flex-col gap-6">
        <h3 className="text-[14px] text-neutral-400 font-bold uppercase tracking-wider">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {icons.map((item, idx) => (
            <div key={idx} className="group relative bg-neutral-50 rounded-2xl p-6 border border-neutral-100 flex flex-col items-center justify-center gap-4 hover:bg-white hover:shadow-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer">
              <div className="text-neutral-400 group-hover:text-black transition-colors duration-300">
                <item.Icon size={32} />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-[11px] font-bold text-black break-all text-center">{item.name}</span>
                <span className="text-[9px] text-neutral-400 uppercase font-mono">{item.source}</span>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-black/5 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <div className="flex flex-col gap-16 animate-in fade-in duration-500 text-left">
        <div className="flex flex-col gap-4 border-b border-neutral-100 pb-8">
          <h1 className="text-[36px] md:text-[40px] leading-[1.1] tracking-[-1.5px] text-black font-bold">Ikony Systemowe (Used Icons)</h1>
          <p className="text-[16px] text-neutral-500 leading-[1.7] max-w-2xl">
            Inwentaryzacja symboli wykorzystywanych w projekcie. Wyświetlane są <strong>wyłącznie</strong> ikony wdrożone w aktualnych komponentach serwisu.
          </p>
        </div>

        <section className="flex flex-col gap-16">
          {iconGrid("Logistyka & Akcje (Lucide React)", [
            { name: "Phone", Icon: Phone, source: "Interakcja" },
            { name: "Mail", Icon: Mail, source: "Kontakt" },
            { name: "CheckCircle2", Icon: CheckCircle2, source: "Sukces" },
            { name: "AlertCircle", Icon: AlertCircle, source: "Błąd/Uwaga" },
            { name: "Quote", Icon: Quote, source: "Referencje" },
            { name: "Lightbulb", Icon: Lightbulb, source: "Wnioski" },
            { name: "ChevronLeft", Icon: ChevronLeft, source: "Nawigacja" },
            { name: "ChevronRight", Icon: ChevronRight, source: "Nawigacja" },
            { name: "X / Close", Icon: X, source: "Zamknij" },
            { name: "Play", Icon: Play, source: "Wideo" },
          ])}

          {iconGrid("Ikony Tematyczne (Material Outlined)", [
            { name: "Campaign", Icon: (props: any) => <CampaignOutlined sx={{ fontSize: props.size || 24, color: 'inherit' }} />, source: "Marketing" },
            { name: "DataUsage", Icon: (props: any) => <DataUsageOutlined sx={{ fontSize: props.size || 24, color: 'inherit' }} />, source: "Marketing" },
            { name: "VolunteerActivism", Icon: (props: any) => <VolunteerActivismOutlined sx={{ fontSize: props.size || 24, color: 'inherit' }} />, source: "Marketing" },
            { name: "TrendingUp", Icon: (props: any) => <TrendingUpOutlined sx={{ fontSize: props.size || 24, color: 'inherit' }} />, source: "Growth" },
            { name: "MenuBook", Icon: (props: any) => <MenuBookOutlined sx={{ fontSize: props.size || 24, color: 'inherit' }} />, source: "Edukacja" },
            { name: "Hub", Icon: (props: any) => <HubOutlined sx={{ fontSize: props.size || 24, color: 'inherit' }} />, source: "Platforma" },
            { name: "Devices", Icon: (props: any) => <DevicesOutlined sx={{ fontSize: props.size || 24, color: 'inherit' }} />, source: "Technologia" },
            { name: "Public", Icon: (props: any) => <PublicOutlined sx={{ fontSize: props.size || 24, color: 'inherit' }} />, source: "Zasięg" },
            { name: "Sensors", Icon: (props: any) => <SensorsOutlined sx={{ fontSize: props.size || 24, color: 'inherit' }} />, source: "Analiza" },
            { name: "FavoriteBorder", Icon: (props: any) => <FavoriteBorderOutlined sx={{ fontSize: props.size || 24, color: 'inherit' }} />, source: "StudentCare" },
            { name: "SupportAgent", Icon: (props: any) => <SupportAgentOutlined sx={{ fontSize: props.size || 24, color: 'inherit' }} />, source: "Support" },
            { name: "HealthAndSafety", Icon: (props: any) => <HealthAndSafetyOutlined sx={{ fontSize: props.size || 24, color: 'inherit' }} />, source: "Security" },
            { name: "TrackChanges", Icon: (props: any) => <TrackChangesOutlined sx={{ fontSize: props.size || 24, color: 'inherit' }} />, source: "Cele" },
          ])}

          <div className="flex flex-col gap-6">
            <h3 className="text-[14px] text-neutral-400 font-bold uppercase tracking-wider">Komponenty Specjalne</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="group relative bg-neutral-900 rounded-2xl p-6 border border-neutral-800 flex flex-col items-center justify-center gap-4 hover:shadow-2xl hover:scale-[1.05] transition-all duration-300">
                <GlassPlayButton variant="light" />
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[11px] font-bold text-white text-center">GlassPlayButton</span>
                  <span className="text-[9px] text-neutral-400 uppercase font-mono">Custom UI</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      
      <div className="flex flex-col flex-1 relative w-full mx-auto">
        
        {/* Górna horyzontalna nawigacja StyleGuide */}
        <div className="sticky top-0 z-[90] w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 px-6 sm:px-12 py-4 flex items-center justify-between gap-6 overflow-x-auto shrink-0 shadow-sm">
          <div className="flex items-center gap-3 shrink-0">
             <span className="text-[11px] text-neutral-400 uppercase tracking-[2px] font-bold hidden md:block">Design System</span>
             <span className="text-[18px] md:text-xl font-bold text-black tracking-[-1px]">Interactive Canvas</span>
          </div>

          <nav className="flex items-center gap-2 shrink-0">
            <button 
              onClick={() => setActiveTab('colors')} 
              className={cn(
                "px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer border whitespace-nowrap", 
                activeTab === 'colors' ? "bg-black border-black shadow-md text-white" : "border-transparent bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200"
              )}
            >
              A) Kolory
            </button>
            <button 
              onClick={() => setActiveTab('typography')} 
              className={cn(
                "px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer border whitespace-nowrap", 
                activeTab === 'typography' ? "bg-black border-black shadow-md text-white" : "border-transparent bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200"
              )}
            >
              B) Typografia
            </button>
            <button 
              onClick={() => setActiveTab('components')} 
              className={cn(
                "px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer border whitespace-nowrap", 
                activeTab === 'components' ? "bg-black border-black shadow-md text-white" : "border-transparent bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200"
              )}
            >
              C) Komponenty
            </button>
            <button 
              onClick={() => setActiveTab('patterns')} 
              className={cn(
                "px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer border whitespace-nowrap", 
                activeTab === 'patterns' ? "bg-black border-black shadow-md text-white" : "border-transparent bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200"
              )}
            >
              D) Wzorce UX
            </button>
            <button 
              onClick={() => setActiveTab('icons')} 
              className={cn(
                "px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer border whitespace-nowrap", 
                activeTab === 'icons' ? "bg-black border-black shadow-md text-white" : "border-transparent bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200"
              )}
            >
              E) Ikony
            </button>
          </nav>
        </div>

        {/* Główny panel treści */}
        <main className="flex-1 w-full max-w-7xl bg-white px-6 py-12 md:py-16 md:px-16 mx-auto overflow-y-visible hidden-scrollbar">
          {activeTab === 'colors' && renderColors()}
          {activeTab === 'typography' && renderTypography()}
          {activeTab === 'components' && renderComponents()}
          {activeTab === 'patterns' && renderPatterns()}
          {activeTab === 'icons' && renderIcons()}
        </main>
      </div>

      {/* Systemowy Footer Płótna */}
      <footer className="w-full border-t border-neutral-200 bg-neutral-50 px-6 sm:px-12 py-8 mt-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-neutral-500 font-medium shrink-0">
        <div>
          &copy; 2026 Design System
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <span>Design System Canvas</span>
          <span className="w-1 h-1 rounded-full bg-neutral-300 hidden sm:block"></span>
          <span>v1.0.0</span>
          <span className="w-1 h-1 rounded-full bg-neutral-300 hidden sm:block"></span>
          <span>Greybox Architecture</span>
        </div>
      </footer>
    </div>
  );
}
