import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "neutral" | "info" | "warning";
};

const tones = {
  neutral: "bg-slate-100 text-slate-600",
  info: "bg-sky text-ocean",
  warning: "bg-amber-50 text-amber-800",
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", tones[tone], className)}
      {...props}
    />
  );
}
