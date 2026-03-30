import * as React from "react";

import { cn } from "./utils";
import { AlertCircle } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "flex w-full rounded-xl px-4 py-3.5 text-[14px] outline-none transition-colors border placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-neutral-400 bg-neutral-50 text-black pr-10"
              : "border-transparent bg-neutral-100 text-black focus:border-black focus:bg-white",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black">
            <AlertCircle className="w-5 h-5 opacity-80" />
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
