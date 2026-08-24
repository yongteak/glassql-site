/**
 * @file BrandWordmark.tsx
 * @description GlasSQL header lockup: elephant mark + product name.
 */
import { cn } from "@/lib/cn";

type BrandWordmarkProps = {
  height?: number;
  className?: string;
};

export function BrandWordmark({ height = 32, className }: BrandWordmarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 select-none", className)}>
      <img
        src="/brand/logo-mark.png"
        alt=""
        width={height}
        height={height}
        className="block shrink-0 object-contain"
        loading="eager"
      />
      <span className="font-sans text-[17px] font-semibold tracking-[-0.03em] text-[#26251e]">
        GlasSQL
      </span>
    </span>
  );
}
