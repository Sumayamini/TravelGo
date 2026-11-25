import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-ocean text-white shadow-sm hover:bg-navy",
        secondary: "bg-sky text-navy hover:bg-sky-100",
        outline: "border border-slate-200 bg-white text-navy hover:bg-slate-50",
        ghost: "text-navy hover:bg-sky",
      },
      size: {
        default: "min-h-11 px-5 py-2.5 text-sm",
        sm: "min-h-9 px-3 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  size,
  variant,
  ...props
}: ButtonProps) {
  return <button className={cn(buttonVariants({ className, size, variant }))} {...props} />;
}
