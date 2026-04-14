import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ConsultationModal } from '../ConsultationModal';

export function ManagedServicesBridge() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-neutral-800 py-20 px-3 lg:px-6 border-t border-neutral-700/50">
      <div className="mx-auto max-w-5xl flex flex-col gap-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column (Copy) */}
          <div className="flex flex-col items-start text-left">
            <span className="text-[11px] text-neutral-500 uppercase tracking-[1.4px] font-semibold">
              PROFESSIONAL SUPPORT & MANAGED SERVICES
            </span>
            <h2 className="mt-4 text-[30px] sm:text-[38px] leading-[1.15] tracking-[-1.2px] text-white font-bold">
              Already on Salesforce, but constrained by internal IT resources?
            </h2>
            <p className="mt-6 text-[15px] text-neutral-400 leading-[1.75] max-w-xl">
              A successful Education Cloud deployment requires continuous optimisation. Our Managed Services team acts as a seamless extension of your institution, taking over the technical heavy lifting, system administration, and release management. Free your internal team to focus on strategic growth, not system maintenance.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-10 inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-100 transition-all group active:scale-95"
            >
              Explore Managed Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column (Features) */}
          <div className="grid grid-cols-1 gap-4 pt-4 lg:pt-16">
            {[
              "Technical Debt Reduction",
              "Continuous Integration & Audits",
              "Dedicated UK HE Architects"
            ].map((feature, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors"
                style={{ background: 'rgba(255,255,255,0.07)' }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-white/10" style={{ background: 'rgba(255,255,255,0.08)' }}>
                   <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-[17px] font-semibold tracking-tight">
                  {feature}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pathname="/ecosystem#managed-services" 
        variant="managed-services"
      />
    </section>
  );
}
