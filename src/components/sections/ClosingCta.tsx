/**
 * @file ClosingCta.tsx
 * @description Cursor-styled closing CTA band with 36px 400-weight headline and ink primary CTA.
 */
import { APP_ORIGIN } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { PageShell } from "@/components/layout/PageShell";
import { IconDownload, IconExternalLink } from "@/components/ui/Icons";
import { SurfaceButton } from "@/components/ui/SurfaceButton";

type ClosingCtaProps = {
  title?: string;
  body?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
};

export function ClosingCta({
  title = "Start operating data with confidence today.",
  body = "Launch the web workbench instantly with Workspace PG (WASM), or download the native desktop application for offline air-gap workflows.",
  primaryCtaText = "Open Web App",
  secondaryCtaText = "Download Desktop",
}: ClosingCtaProps) {
  const handleOpenApp = () => {
    trackEvent("sign_up_click", { location: "closing_cta", text: primaryCtaText });
  };

  return (
    <section className="relative py-24 border-t border-[#e6e5e0] bg-[#f7f7f4]">
      <PageShell>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-normal tracking-[-0.035em] text-[#26251e] sm:text-5xl sm:leading-[1.15]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#5a5852] font-normal leading-relaxed">
            {body}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={APP_ORIGIN}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOpenApp}
              className="inline-flex items-center gap-2 rounded-md bg-[#26251e] px-5 py-2.5 font-sans text-sm font-medium text-white hover:bg-[#383730] transition-colors"
            >
              <span>{primaryCtaText}</span>
              <IconExternalLink className="size-3.5 text-white/90" />
            </a>

            <SurfaceButton to="/download" tone="secondary" size="md">
              <IconDownload className="size-4" />
              <span>{secondaryCtaText}</span>
            </SurfaceButton>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
