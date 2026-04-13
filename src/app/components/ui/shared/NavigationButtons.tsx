import * as React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationButtonsProps {
  onPrev: (e?: React.MouseEvent) => void;
  onNext: (e?: React.MouseEvent) => void;
  className?: string;
  buttonClassName?: string;
  disabledPrev?: boolean;
  disabledNext?: boolean;
}

/**
 * Standardized premium Navigation Buttons (L/R) for the ThinkBeyond ecosystem.
 * Follows the h-14, rounded-full, border-slate-200 white pattern.
 */
export function NavigationButtons({
  onPrev,
  onNext,
  className = '',
  buttonClassName = '',
  disabledPrev = false,
  disabledNext = false
}: NavigationButtonsProps) {
  // Base classes for the buttons
  const baseBtnClass = `
    h-14 w-14 
    rounded-full 
    border border-slate-200 
    bg-white 
    shadow-sm 
    flex items-center justify-center 
    text-slate-900 
    hover:bg-slate-50 
    transition-all 
    active:scale-95 
    cursor-pointer 
    disabled:opacity-50 
    disabled:cursor-not-allowed
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={`flex gap-4 ${className}`}>
      <button
        onClick={(e) => {
          if (e) e.stopPropagation();
          onPrev(e);
        }}
        disabled={disabledPrev}
        className={`${baseBtnClass} ${buttonClassName}`}
        aria-label="Previous"
      >
        <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
      </button>
      <button
        onClick={(e) => {
          if (e) e.stopPropagation();
          onNext(e);
        }}
        disabled={disabledNext}
        className={`${baseBtnClass} ${buttonClassName}`}
        aria-label="Next"
      >
        <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
      </button>
    </div>
  );
}
