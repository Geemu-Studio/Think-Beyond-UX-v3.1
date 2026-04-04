import React from 'react';

const EXPERT_PHOTO = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyLWljb24gbHVjaWRlLWNpcmNsZS11c2VyIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48cGF0aCBkPSJNNyAyMC42NjJWMTlhMiAyIDAgMCAxIDItMmg2YTIgMiAwIDAgMSAyIDJ2MS42NjIiLz48L3N2Zz4=';

export function ExpertTrace() {
  return (
    <div className="flex items-center gap-2 mt-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
      <div className="w-5 h-5 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-200 overflow-hidden shrink-0">
        <img 
          src={EXPERT_PHOTO} 
          alt="Marcin Pieńkowski" 
          className="w-3.5 h-3.5 opacity-40"
        />
      </div>
      <span className="text-[12px] text-neutral-500 font-medium tracking-tight">
        Strategic direction by Marcin Pieńkowski
      </span>
    </div>
  );
}
