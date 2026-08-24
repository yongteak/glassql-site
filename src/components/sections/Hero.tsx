/**
 * @file Hero.tsx
 * @description Cursor-styled hero band with 72px 400-weight editorial typography,
 *   Ink primary CTA, and white IDE mockup on warm cream canvas.
 */
import { Link } from "react-router-dom";
import { APP_ORIGIN } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { IconArrowRight, IconDownload, IconExternalLink, IconSparkles } from "@/components/ui/Icons";
import { ProductMock } from "@/components/ui/ProductMock";
import { SurfaceButton } from "@/components/ui/SurfaceButton";

export function Hero() {
  const handleOpenAppClick = () => {
    trackEvent("sign_up_click", { location: "hero", text: "Open App" });
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-[#f7f7f4]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
        {/* Release Announcement Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#e6e5e0] bg-white px-3.5 py-1 text-xs text-[#5a5852] hover:border-[#cfcdc4] transition-all mb-8 shadow-none">
          <span className="flex size-1.5 rounded-full bg-[#f54e00]" />
          <span className="font-mono text-[11px] font-semibold text-[#f54e00]">GlasSQL 0.9.0</span>
          <span className="text-[#cfcdc4]">·</span>
          <span>Web & Desktop Runtimes</span>
          <Link to="/changelog" className="font-medium text-[#26251e] hover:underline inline-flex items-center gap-0.5 ml-1">
            Changelog <IconArrowRight className="size-3" />
          </Link>
        </div>

        {/* Big Editorial Headline (weight 400, negative tracking) */}
        <h1 className="mx-auto max-w-3xl text-4xl font-normal tracking-[-0.035em] text-[#26251e] sm:text-6xl sm:leading-[1.1] lg:text-7xl">
          Query snapshots—
          <span className="block text-[#5a5852]">
            not production.
          </span>
        </h1>

        {/* Subhead */}
        <p className="mx-auto mt-6 max-w-xl text-base text-[#5a5852] sm:text-lg sm:leading-relaxed font-normal">
          Publish a scoped snapshot. Run SQL in the browser or on desktop.
        </p>

        {/* Action CTAs: Orange Primary + Ink Download + Secondary MCP */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={APP_ORIGIN}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOpenAppClick}
            className="inline-flex items-center gap-2 rounded-md bg-[#26251e] px-5 py-2.5 font-sans text-sm font-medium text-white hover:bg-[#383730] transition-colors"
          >
            <span>Open Web App</span>
            <IconExternalLink className="size-3.5 text-white/90" />
          </a>

          <SurfaceButton to="/download" tone="secondary" size="md">
            <IconDownload className="size-4" />
            <span>Download Desktop</span>
          </SurfaceButton>

          <SurfaceButton to="/docs/mcp-workspace-bridge" tone="secondary" size="md">
            <IconSparkles className="size-4 text-[#f54e00]" />
            <span>Cursor MCP Setup</span>
          </SurfaceButton>
        </div>

        {/* Centered IDE Mockup Card */}
        <div className="mt-14 sm:mt-18">
          <DeviceFrame kind="web" title="GlasSQL Workbench — Acme Analytics" subtitle="PGlite WASM Active">
            <ProductMock variant="hero-workbench" />
          </DeviceFrame>
        </div>
      </div>
    </section>
  );
}
