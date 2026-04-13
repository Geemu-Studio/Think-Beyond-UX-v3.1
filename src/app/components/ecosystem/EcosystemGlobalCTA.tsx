import { useState } from 'react';
import { ArrowRight, Globe, Users, CheckCircle } from 'lucide-react';
import { ConsultationModal } from '../ConsultationModal';

export function EcosystemGlobalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-slate-50 py-24 px-3 lg:px-6 border-t border-slate-200">
      <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-6">
        
        <span className="text-sm font-bold text-slate-500 uppercase tracking-widest block">
          STRATEGIC PARTNERSHIP
        </span>
        
        <h2 className="text-[32px] sm:text-[40px] md:text-5xl leading-[1.1] tracking-[-1.5px] text-slate-900 font-extrabold max-w-3xl">
          Stop patching legacy systems. Architect a unified ecosystem.
        </h2>
        
        <p className="mt-2 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Partner with Europe's largest Salesforce Education Cloud practice. Whether you are decoupling from Tribal SITS, establishing a Single Source of Truth (SSOT), or seeking to optimise your Recruitment & Admissions data model, our enterprise architects are ready to audit your infrastructure.
        </p>

        <div className="mt-10 flex flex-col items-center gap-12 w-full">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">
            {[
              { icon: <Globe className="w-5 h-5 text-slate-500" />, text: "Europe's Largest Education Cloud Practice" },
              { icon: <Users className="w-5 h-5 text-slate-500" />, text: "20+ Certified Architects" },
              { icon: <CheckCircle className="w-5 h-5 text-slate-500" />, text: "Official Salesforce Partner" }
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-slate-200 shadow-sm rounded-lg px-4 py-3 flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px]">
                {card.icon}
                <span className="text-sm font-medium text-slate-800 tracking-tight whitespace-nowrap">
                  {card.text}
                </span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all shadow-xl hover:shadow-2xl active:scale-95 text-base w-full sm:w-auto justify-center"
          >
            Schedule an Architectural Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pathname="/ecosystem#strategic-partnership" 
      />
    </section>
  );
}
