/**
 * @file Hero.tsx
 * @description Cursor-styled hero band with 72px 400-weight editorial typography,
 *   Ink primary CTA, and white IDE mockup on warm cream canvas.
 */
import { Link } from "react-router-dom";
import { APP_ORIGIN, PRODUCT_GA_VERSION, PRODUCT_VERSION } from "@/config/site";
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
        <Link
          to="/roadmap"
          className="group inline-flex items-center gap-2 rounded-full border border-[#e6e5e0] bg-white px-3.5 py-1 text-xs text-[#5a5852] hover:border-[#cfcdc4] transition-all mb-8 shadow-none"
        >
          <span className="inline-flex items-center gap-1 rounded-full bg-[#f54e00] px-2 py-0.5 text-[10px] font-medium text-white">
            <IconSparkles className="size-2.5 text-white" />
            Roadmap
          </span>
          <span className="font-mono text-[11px] font-semibold text-[#26251e]">
            v{PRODUCT_VERSION}
          </span>
          <span className="text-[#cfcdc4]">·</span>
          <span>{PRODUCT_GA_VERSION} GA in October</span>
          <IconArrowRight className="size-3 text-[#807d72] group-hover:text-[#26251e]" />
        </Link>

        {/* Big Editorial Headline (weight 400, negative tracking) */}
        <h1 className="mx-auto max-w-3xl text-4xl font-normal tracking-[-0.035em] text-[#26251e] sm:text-6xl sm:leading-[1.1] lg:text-7xl">
          Query snapshots—
          <span className="block text-[#5a5852]">
            not production.
          </span>
        </h1>

        {/* Subhead */}
        <p className="mx-auto mt-6 max-w-xl text-base text-[#5a5852] sm:text-lg sm:leading-relaxed font-normal">
          Open source and free forever. Publish a scoped snapshot, then run SQL in the browser or on desktop.
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
          <DeviceFrame kind="web" title="GlasSQL Workbench" subtitle="Acme Analytics">
            <ProductMock variant="hero-workbench" />
          </DeviceFrame>
        </div>
      </div>
    </section>
  );
}
