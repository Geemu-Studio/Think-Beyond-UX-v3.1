import React from 'react';
import { Play } from 'lucide-react';
import { cn } from './utils';

export interface GlassPlayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "light" | "dark";
}

export function GlassPlayButton({ className, variant = "light", ...props }: GlassPlayButtonProps) {
  const isLight = variant === "light";
  return (
    <button 
      className={cn(
        "w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg transition-all cursor-pointer group hover:scale-105 active:scale-95",
        isLight 
          ? "bg-white/20 hover:bg-white/30 border border-white/30" 
          : "bg-black/10 hover:bg-black/20 border border-black/10",
        className
      )}
      {...props}
    >
      <Play 
        className={cn(
          "w-6 h-6 ml-1 transition-all",
          isLight ? "text-white drop-shadow-md" : "text-black"
        )} 
        fill="currentColor" 
      />
    </button>
  );
}
