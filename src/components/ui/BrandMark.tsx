/**
 * @file BrandMark.tsx
 * @description GlasSQL logo mark icon.
 */
import { cn } from "@/lib/cn";

type BrandMarkProps = {
  size?: number;
  alt?: string;
  className?: string;
};

export function BrandMark({ size = 26, alt = "GlasSQL", className }: BrandMarkProps) {
  return (
    <img
      src="/brand/logo-mark.png"
      alt={alt}
      width={size}
      height={size}
      className={cn("block shrink-0 object-contain", className)}
      loading="eager"
    />
  );
}
