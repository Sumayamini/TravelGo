import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={cn("rounded-2xl border border-slate-100 bg-white shadow-card", className)}
      {...props}
    />
  );
}
