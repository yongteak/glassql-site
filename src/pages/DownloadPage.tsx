/**
 * @file DownloadPage.tsx
 * @description GlasSQL client downloads and MCP integration page in Cursor style.
 */
import { DOWNLOADS } from "@/config/downloads";
import { trackEvent } from "@/lib/analytics";
import { DocumentTitle } from "@/components/layout/DocumentTitle";
import { PageIntro, PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { IconCheck, IconDownload, IconExternalLink, IconSparkles } from "@/components/ui/Icons";
import { InstallCommand } from "@/components/ui/InstallCommand";
import { SurfaceButton } from "@/components/ui/SurfaceButton";

export function DownloadPage() {
  const handleDownloadClick = (platformId: string) => {
    trackEvent("platform_download_click", { platform: platformId });
  };

  return (
    <>
      <DocumentTitle
        title="Download GlasSQL"
        description="Get GlasSQL Web, macOS Desktop, Windows, Linux, or install the MCP Workspace Bridge for Cursor."
      />

      <PageShell>
        <PageIntro
          title="Download GlasSQL for every environment."
          lead="Access your workspace data operations directly in the browser with zero installation, or run the high-performance native desktop app for full offline air-gap workflows."
        />

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
          {DOWNLOADS.map((item) => {
            const isWeb = item.id === "web";
            const isMac = item.id === "macos";
            const isMcp = item.id === "mcp";

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-xl border border-[#e6e5e0] bg-white p-7 transition-all hover:border-[#cfcdc4]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#807d72] font-medium">
                      {item.badge ?? item.name}
                    </span>
                    {item.available ? (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#1f8a65] font-medium">
                        <span className="size-1.5 rounded-full bg-[#1f8a65]" />
                        Available
                      </span>
                    ) : (
                      <span className="rounded-full bg-[#efeee8] px-2.5 py-0.5 font-mono text-[10.5px] text-[#807d72]">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-normal text-[#26251e] mb-2">{item.name}</h2>
                  <p className="text-sm leading-relaxed text-[#5a5852] mb-6 font-normal">
                    {item.description}
                  </p>

                  {item.command && (
                    <div className="mb-6">
                      <InstallCommand command={item.command} />
                    </div>
                  )}

                  {item.soonHint && (
                    <p className="text-xs text-[#807d72] mb-6 italic">{item.soonHint}</p>
                  )}
                </div>

                <div className="pt-4 border-t border-[#e6e5e0] flex items-center justify-between">
                  {isWeb ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleDownloadClick("web")}
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#f54e00] px-4 py-2 font-sans text-sm font-medium text-white hover:bg-[#d04200] transition-colors"
                    >
                      <span>{item.cta}</span>
                      <IconExternalLink className="size-3.5" />
                    </a>
                  ) : isMac ? (
                    <SurfaceButton
                      href={item.href}
                      disabled={item.stub}
                      tone="dark"
                      size="md"
                      onClick={() => handleDownloadClick("macos")}
                    >
                      <IconDownload className="size-4" />
                      <span>{item.cta}</span>
                    </SurfaceButton>
                  ) : isMcp ? (
                    <SurfaceButton to={item.href} tone="secondary" size="md">
                      <IconSparkles className="size-3.5 text-[#f54e00]" />
                      <span>{item.cta}</span>
                    </SurfaceButton>
                  ) : (
                    <span className="text-xs font-mono text-[#807d72]">Build in progress</span>
                  )}

                  <span className="font-mono text-xs text-[#807d72]">
                    {isWeb ? "Any Modern Browser" : isMac ? "macOS 12.0+" : item.available ? "Live" : "In Queue"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Local Mode Deep Dive */}
        <div className="rounded-xl border border-[#e6e5e0] bg-white p-8 md:p-10 mb-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-normal text-[#26251e] tracking-tight">
              GlasSQL Desktop Local Mode
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#5a5852] font-normal">
              GlasSQL Desktop functions as a fully offline SQL client even without an active internet connection. Explore local schema trees, query cached snapshots, connect to intranet database gateways, and backup workspace queries as encrypted <code className="text-[#26251e] bg-[#efeee8] px-1.5 py-0.5 rounded text-xs font-mono">.glassql-pack</code> files.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-[#5a5852]">
              <div className="flex items-center gap-2.5">
                <IconCheck className="size-4 text-[#1f8a65]" />
                <span>Zero cloud login required for local analysis</span>
              </div>
              <div className="flex items-center gap-2.5">
                <IconCheck className="size-4 text-[#1f8a65]" />
                <span>Native DuckDB & PGlite-Oxide embedded engines</span>
              </div>
              <div className="flex items-center gap-2.5">
                <IconCheck className="size-4 text-[#1f8a65]" />
                <span>Intranet Gateway for Postgres, MySQL, SQLite, Mongo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <IconCheck className="size-4 text-[#1f8a65]" />
                <span>6-digit browser authorization for cloud sync</span>
              </div>
            </div>
          </div>
        </div>
      </PageShell>

      <ClosingCta />
    </>
  );
}
