import { ArrowRight } from 'lucide-react';

interface PlaceholderPhotoProps {
  className?: string;
  text?: string;
  onAction?: () => void;
  actionLabel?: string;
}

/**
 * Standardized placeholder for images used across the ThinkBeyond platform.
 * Features the signature "PHOTO" tracking style with an optional CTA button.
 */
export function PlaceholderPhoto({ 
  className = '', 
  text = 'PHOTO',
  onAction,
  actionLabel
}: PlaceholderPhotoProps) {
  return (
    <div 
      className={`relative bg-neutral-50 flex items-center justify-center overflow-hidden border border-neutral-100 group/photo ${className}`}
    >
      <div className="flex flex-col items-center gap-2">
        <span 
          className="text-[10px] sm:text-[11px] text-neutral-300 font-black tracking-[0.5em] uppercase select-none"
        >
          {text}
        </span>
      </div>

      {onAction && actionLabel && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAction();
          }}
          className="absolute bottom-4 right-4 bg-black text-white px-5 py-2.5 rounded-full flex items-center gap-3 text-[13px] font-bold hover:bg-neutral-800 transition-all active:scale-95 shadow-lg group/cta"
        >
          {actionLabel}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
        </button>
      )}
    </div>
  );
}
