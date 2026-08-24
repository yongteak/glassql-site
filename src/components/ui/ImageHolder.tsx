/**
 * @file ImageHolder.tsx
 * @description Wrapper for screenshots, mock frames, and visual UI representations.
 */
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ImageHolderProps = {
  children: ReactNode;
  className?: string;
};

export function ImageHolder({ children, className }: ImageHolderProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c11]", className)}>
      {children}
    </div>
  );
}
