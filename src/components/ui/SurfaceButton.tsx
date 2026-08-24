/**
 * @file SurfaceButton.tsx
 * @description Cursor-styled button controls. Primary is Cursor Orange (#f54e00), Download is Ink (#26251e).
 */
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

type Tone = "primary" | "secondary" | "outline" | "dark" | "accent" | "ghost" | "glass";
type Size = "sm" | "md" | "lg";

type SharedProps = {
  tone?: Tone;
  size?: Size;
  pill?: boolean;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  "data-gtm-event"?: string;
  "data-gtm-cta-location"?: string;
  "data-gtm-cta-text"?: string;
  "data-gtm-platform"?: string;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
    href?: undefined;
  };

type ButtonAsLink = SharedProps & {
  to: string;
  href?: undefined;
};

type ButtonAsAnchor = SharedProps & {
  to?: undefined;
  href: string;
  external?: boolean;
};

export type SurfaceButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const toneClass: Record<Tone, string> = {
  primary:
    "bg-[#f54e00] text-white font-medium hover:bg-[#d04200] active:bg-[#b83a00] disabled:bg-[#f54e00]/50 disabled:text-white/80 shadow-none",
  accent:
    "bg-[#f54e00] text-white font-medium hover:bg-[#d04200] active:bg-[#b83a00] disabled:bg-[#f54e00]/50 disabled:text-white/80 shadow-none",
  dark:
    "bg-[#26251e] text-[#f7f7f4] font-medium hover:bg-[#383730] active:bg-[#1a1914] disabled:bg-[#26251e]/50 shadow-none",
  secondary:
    "bg-white text-[#26251e] font-medium border border-[#e6e5e0] hover:bg-[#fafaf7] hover:border-[#cfcdc4] active:bg-[#efeee8] disabled:text-[#a09c92] disabled:border-[#efeee8]",
  outline:
    "bg-white text-[#26251e] font-medium border border-[#e6e5e0] hover:bg-[#fafaf7] hover:border-[#cfcdc4] active:bg-[#efeee8] disabled:text-[#a09c92] disabled:border-[#efeee8]",
  ghost:
    "bg-transparent text-[#26251e] hover:bg-[#e6e5e0]/60 active:bg-[#e6e5e0] disabled:text-[#a09c92]",
  glass:
    "bg-white/90 backdrop-blur-sm text-[#26251e] border border-[#e6e5e0] hover:bg-white hover:border-[#cfcdc4] active:bg-[#fafaf7] disabled:text-[#a09c92]",
};

const sizeClass: Record<Size, string> = {
  sm: "h-8 px-3 text-[13px] gap-1.5",
  md: "h-10 px-4 text-[14px] gap-2",
  lg: "h-11 px-5 text-[15px] gap-2.5",
};

export function SurfaceButton({
  tone = "outline",
  size = "md",
  pill = false,
  children,
  className,
  disabled = false,
  "data-gtm-event": gtmEvent,
  "data-gtm-cta-location": gtmLocation,
  "data-gtm-cta-text": gtmText,
  "data-gtm-platform": gtmPlatform,
  ...rest
}: SurfaceButtonProps) {
  const commonClasses = cn(
    "relative inline-flex items-center justify-center font-sans tracking-[-0.01em] transition-all duration-150 select-none",
    pill ? "rounded-full" : "rounded-md",
    sizeClass[size],
    toneClass[tone],
    disabled && "pointer-events-none opacity-50 cursor-not-allowed",
    className,
  );

  const gtmAttrs = {
    "data-gtm-event": gtmEvent,
    "data-gtm-cta-location": gtmLocation,
    "data-gtm-cta-text": gtmText,
    "data-gtm-platform": gtmPlatform,
  };

  if ("to" in rest && rest.to) {
    return (
      <Link to={rest.to} className={commonClasses} {...gtmAttrs}>
        {children}
      </Link>
    );
  }

  if ("href" in rest && rest.href) {
    if (disabled || rest.href === "") {
      return (
        <span className={commonClasses} aria-disabled="true" {...gtmAttrs}>
          {children}
        </span>
      );
    }

    const isExternal = rest.external ?? rest.href.startsWith("http");
    return (
      <a
        href={rest.href}
        className={commonClasses}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...gtmAttrs}
      >
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" disabled={disabled} className={commonClasses} {...buttonProps} {...gtmAttrs}>
      {children}
    </button>
  );
}
