/**
 * @file BrandWordmark.tsx
 * @description GlasSQL header wordmark image lockup.
 */
import { cn } from "@/lib/cn";

type BrandWordmarkProps = {
  height?: number;
  className?: string;
};

const WORDMARK_ASPECT_RATIO = 4547 / 1074;

export function BrandWordmark({ height = 24, className }: BrandWordmarkProps) {
  return (
    <img
      src="/brand/wordmark.png"
      alt="GlasSQL"
      width={Math.round(height * WORDMARK_ASPECT_RATIO)}
      height={height}
      className={cn("block shrink-0 object-contain select-none", className)}
      loading="eager"
    />
  );
}
