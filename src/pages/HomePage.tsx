/**
 * @file HomePage.tsx
 * @description Cursor-styled home landing page for GlasSQL on warm cream canvas.
 */
import { DocumentTitle } from "@/components/layout/DocumentTitle";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FeatureChapter } from "@/components/sections/FeatureChapter";
import { FoundationalGrid } from "@/components/sections/FoundationalGrid";
import { Hero } from "@/components/sections/Hero";
import { IntegrationsGrid } from "@/components/sections/IntegrationsGrid";
import { PlatformRow } from "@/components/sections/PlatformRow";
import { IconArrowRight, IconLock, IconShield } from "@/components/ui/Icons";
import { SurfaceButton } from "@/components/ui/SurfaceButton";
import { HOME_CHAPTERS } from "@/content/features";

export function HomePage() {
  return (
    <>
      <DocumentTitle />
      <Hero />
      <IntegrationsGrid />
      <FoundationalGrid />
      
      {HOME_CHAPTERS.map((chapter, idx) => (
        <FeatureChapter key={chapter.id} chapter={chapter} index={idx} />
      ))}
      
      <PlatformRow />

      {/* Enterprise & Governance Section */}
      <section className="py-20 md:py-24 border-t border-[#e6e5e0] bg-[#f7f7f4]">
        <PageShell>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-normal tracking-[-0.03em] text-[#26251e] sm:text-4xl">
                Enterprise sovereignty without infrastructure sprawl.
              </h2>
              <p className="mt-3 text-base text-[#5a5852] font-normal">
                Deploy GlasSQL across team boundaries with SAML SSO, immutable 3-tier audit logs, Access Entry approval queues, and BYO S3 object storage.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <SurfaceButton to="/pricing#enterprise" tone="primary" size="md">
                <span>Enterprise Inquiries</span>
                <IconArrowRight className="size-3.5" />
              </SurfaceButton>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-[#e6e5e0] bg-white p-6 shadow-none">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e] mb-4">
                <IconShield className="size-4" />
              </div>
              <h3 className="text-lg font-normal text-[#26251e] mb-2">3-Tier Audit Logging</h3>
              <p className="text-sm text-[#5a5852] font-normal leading-relaxed">
                Platform, Workspace, and Export audits track who executed which query, what data was exported, and when public share links were accessed.
              </p>
            </div>

            <div className="rounded-xl border border-[#e6e5e0] bg-white p-6 shadow-none">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e] mb-4">
                <IconLock className="size-4" />
              </div>
              <h3 className="text-lg font-normal text-[#26251e] mb-2">Access Entry Queue</h3>
              <p className="text-sm text-[#5a5852] font-normal leading-relaxed">
                Invite links do not grant automatic access. All join requests queue for workspace admin approval with optional domain auto-allow policies.
              </p>
            </div>

            <div className="rounded-xl border border-[#e6e5e0] bg-white p-6 shadow-none">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e] mb-4">
                <IconLock className="size-4" />
              </div>
              <h3 className="text-lg font-normal text-[#26251e] mb-2">BYO S3 Storage</h3>
              <p className="text-sm text-[#5a5852] font-normal leading-relaxed">
                Store all snapshots and Parquet shared datasets in your own enterprise AWS S3 or Cloudflare R2 bucket with client-side encryption.
              </p>
            </div>
          </div>
        </PageShell>
      </section>

      <ClosingCta />
    </>
  );
}
