/**
 * @file DeviceFrame.tsx
 * @description Cursor-styled IDE mockup frame (white card on cream canvas with 1px hairline border, no drop shadows).
 */
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type DeviceFrameKind = "web" | "mac" | "terminal";

type DeviceFrameProps = {
  kind?: DeviceFrameKind;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
};

function TrafficLights() {
  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      <span className="size-2.5 rounded-full bg-[#e6e5e0] border border-[#cfcdc4]" />
      <span className="size-2.5 rounded-full bg-[#e6e5e0] border border-[#cfcdc4]" />
      <span className="size-2.5 rounded-full bg-[#e6e5e0] border border-[#cfcdc4]" />
    </div>
  );
}

export function DeviceFrame({
  kind = "web",
  children,
  className,
  title,
  subtitle,
}: DeviceFrameProps) {
  const defaultTitle =
    title ?? (kind === "terminal" ? "Terminal — zsh" : kind === "mac" ? "GlasSQL Desktop" : "my.glassql.app");

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-[#e6e5e0] bg-white text-[#26251e]",
        className,
      )}
    >
      <div className="flex h-10 items-center justify-between border-b border-[#e6e5e0] bg-[#fafaf7] px-4">
        <div className="flex items-center gap-3">
          <TrafficLights />
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-medium text-[#5a5852]">{defaultTitle}</span>
            {subtitle && (
              <span className="rounded bg-[#e6e5e0]/60 px-1.5 py-0.5 font-mono text-[10px] text-[#26251e]">
                {subtitle}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-5 items-center rounded-full bg-white border border-[#e6e5e0] px-2.5">
            <span className="size-1.5 rounded-full bg-[#1f8a65] mr-1.5" />
            <span className="font-mono text-[10px] text-[#5a5852]">Workspace PG (WASM)</span>
          </div>
        </div>
      </div>
      <div className="relative bg-white">{children}</div>
    </div>
  );
}
