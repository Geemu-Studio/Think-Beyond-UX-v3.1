/* Abstract placeholder logos — pure SVG lettermarks, strict grayscale */

function LogoSWSP() {
  return (
    <div className="flex items-center gap-3">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="4" fill="#111" />
        <text x="16" y="22" textAnchor="middle" fill="white" fontSize="14" fontFamily="sans-serif" fontWeight="700">S</text>
      </svg>
      <span className="text-[13px] text-neutral-700 tracking-[-0.2px]" style={{ fontWeight: 600 }}>
        Uniwersytet SWPS
      </span>
    </div>
  );
}

function LogoKozminski() {
  return (
    <div className="flex items-center gap-3">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="4" fill="#333" />
        <text x="16" y="22" textAnchor="middle" fill="white" fontSize="13" fontFamily="sans-serif" fontWeight="700">ALK</text>
      </svg>
      <span className="text-[13px] text-neutral-700 tracking-[-0.2px]" style={{ fontWeight: 600 }}>
        Akademia Leona Koźmińskiego
      </span>
    </div>
  );
}

function LogoCDV() {
  return (
    <div className="flex items-center gap-3">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="4" fill="#555" />
        <text x="16" y="22" textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif" fontWeight="700">CDV</text>
      </svg>
      <span className="text-[13px] text-neutral-700 tracking-[-0.2px]" style={{ fontWeight: 600 }}>
        Collegium Da Vinci
      </span>
    </div>
  );
}

export function SocialProofBar() {
  return (
    <section className="bg-neutral-50 border-t border-b border-neutral-200 py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-6">
        <p className="text-[12px] text-neutral-400 uppercase tracking-[1.2px]" style={{ fontWeight: 600 }}>
          Zaufali nam liderzy transformacji edukacji:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          <LogoSWSP />
          <LogoKozminski />
          <LogoCDV />
        </div>
      </div>
    </section>
  );
}
