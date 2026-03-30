import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 shadow-sm outline-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-70 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:bg-neutral-800 border border-black disabled:bg-neutral-200 disabled:text-neutral-400 disabled:border-neutral-200",
        outline:
          "bg-white text-black border border-black hover:bg-black hover:text-white disabled:bg-neutral-50 disabled:text-neutral-400 disabled:border-neutral-200",
        secondary:
          "bg-neutral-100 text-black hover:bg-neutral-200 disabled:bg-neutral-50 disabled:text-neutral-400",
        ghost:
          "hover:bg-neutral-100 text-black shadow-none disabled:text-neutral-400",
        link: "text-black underline-offset-4 hover:underline shadow-none disabled:text-neutral-400",
      },
      size: {
        default: "px-5 py-2 text-[14px] min-h-10",
        sm: "px-4 py-1.5 text-[13px] min-h-9",
        lg: "px-8 py-4 text-[15px] min-h-12",
        icon: "h-10 w-10 p-0 rounded-full",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
