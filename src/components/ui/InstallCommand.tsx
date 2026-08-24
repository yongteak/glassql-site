/**
 * @file InstallCommand.tsx
 * @description Copyable terminal command line in Cursor style.
 */
import { useState } from "react";
import { cn } from "@/lib/cn";
import { IconCheck, IconCopy } from "./Icons";

type InstallCommandProps = {
  command: string;
  className?: string;
};

export function InstallCommand({ command, className }: InstallCommandProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard write may fail if document is not focused
    }
  };

  return (
    <div
      className={cn(
        "group relative flex items-center justify-between gap-3 rounded-md border border-[#e6e5e0] bg-white px-3.5 py-2.5 font-mono text-[13px] text-[#26251e] transition hover:border-[#cfcdc4]",
        className,
      )}
    >
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
        <span className="text-[#f54e00] font-medium select-none">$</span>
        <span className="select-all text-[#26251e]">{command}</span>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 rounded p-1 text-[#807d72] transition hover:bg-[#fafaf7] hover:text-[#26251e]"
        aria-label={copied ? "Copied" : "Copy to clipboard"}
      >
        {copied ? <IconCheck className="size-3.5 text-[#1f8a65]" /> : <IconCopy className="size-3.5" />}
      </button>
    </div>
  );
}
