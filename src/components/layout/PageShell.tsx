/**
 * @file PageShell.tsx
 * @description Standard max-width container and editorial page intro header in Cursor style.
 */
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PageShellProps = {
  children: ReactNode;
  className?: string;
  wide?: boolean;
};

export function PageShell({ children, className, wide = false }: PageShellProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8",
        wide ? "max-w-7xl" : "max-w-6xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

type PageIntroProps = {
  kicker?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  className?: string;
};

export function PageIntro({ title, lead, children, className }: PageIntroProps) {
  return (
    <div className={cn("pt-20 pb-12 sm:pt-28 sm:pb-16 max-w-3xl", className)}>
      <h1 className="text-4xl font-normal tracking-[-0.035em] text-[#26251e] sm:text-5xl sm:leading-[1.12]">
        {title}
      </h1>
      {lead && (
        <p className="mt-4 text-lg leading-relaxed text-[#5a5852] font-normal">
          {lead}
        </p>
      )}
      {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
    </div>
  );
}
