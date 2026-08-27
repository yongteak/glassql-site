/**
 * @file PlatformRow.tsx
 * @description Showcase of GlasSQL clients (Web & Desktop) and MCP bridge in Cursor style.
 */
import { HOME_PLATFORMS } from "@/config/downloads";
import { PageShell } from "@/components/layout/PageShell";
import { IconArrowRight, IconDownload, IconExternalLink, IconSparkles } from "@/components/ui/Icons";
import { InstallCommand } from "@/components/ui/InstallCommand";
import { SurfaceButton } from "@/components/ui/SurfaceButton";

export function PlatformRow() {
  return (
    <section className="py-20 md:py-24 border-t border-[#e6e5e0] bg-[#f7f7f4]">
      <PageShell>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-normal tracking-[-0.03em] text-[#26251e] sm:text-4xl">
              One dataset. Two coordinated client runtimes.
            </h2>
            <p className="mt-3 text-base text-[#5a5852] font-normal">
              GlasSQL Web delivers instant zero-install browser access. GlasSQL Desktop gives you offline air-gap independence and native gateway drivers.
            </p>
          </div>
          <SurfaceButton to="/download" tone="secondary" size="md">
            <span>All downloads & platforms</span>
            <IconArrowRight className="size-3.5" />
          </SurfaceButton>
        </div>

        {/* Primary Clients (Web & macOS Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOME_PLATFORMS.map((platform) => {
            const isWeb = platform.id === "web";
            return (
              <div
                key={platform.id}
                className="flex flex-col justify-between rounded-xl border border-[#e6e5e0] bg-white p-7 transition-all hover:border-[#cfcdc4]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#807d72]">{platform.badge}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#1f8a65] font-medium">
                      <span className="size-1.5 rounded-full bg-[#1f8a65]" /> Live Client
                    </span>
                  </div>

                  <h3 className="text-2xl font-normal text-[#26251e] mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5a5852] mb-6 font-normal">
                    {platform.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e6e5e0] flex items-center justify-between">
                  {isWeb ? (
                    <a
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#26251e] px-4 py-2 font-sans text-sm font-medium text-white hover:bg-[#383730] transition-colors"
                    >
                      <span>{platform.cta}</span>
                      <IconExternalLink className="size-3.5" />
                    </a>
                  ) : (
                    <SurfaceButton to="/download" tone="dark" size="md">
                      <IconDownload className="size-4" />
                      <span>{platform.cta}</span>
                    </SurfaceButton>
                  )}
                  <span className="font-mono text-xs text-[#807d72]">
                    {isWeb ? "Zero installation" : "macOS 12.0+ · Apple Silicon"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* MCP Server Banner */}
        <div className="mt-6 rounded-xl border border-[#e6e5e0] bg-[#fafaf7] p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#dfa88f]/40 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#26251e] mb-2 uppercase">
                <IconSparkles className="size-3" /> Model Context Protocol
              </div>
              <h3 className="text-xl font-normal text-[#26251e]">
                Connect Cursor & Claude via MCP
              </h3>
              <p className="mt-1 text-sm text-[#5a5852] font-normal">
                Let your AI coding agents inspect schema trees and execute approved template queries securely.
              </p>
            </div>
            <div className="w-full lg:w-auto min-w-[340px]">
              <InstallCommand command="npx -y @glassql/mcp-server" />
            </div>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
