/**
 * @file RoadmapPage.tsx
 * @description Public path to 1.0 GA — more clients in September, general availability in October.
 */
import { DocumentTitle } from "@/components/layout/DocumentTitle";
import { PageIntro, PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PRODUCT_GA_VERSION } from "@/config/site";
import { ROADMAP, ROADMAP_STATUS_LABEL } from "@/content/roadmap";
import { cn } from "@/lib/cn";

export function RoadmapPage() {
  return (
    <>
      <DocumentTitle
        title="Roadmap"
        description={`GlasSQL path to ${PRODUCT_GA_VERSION} GA: Windows, Linux, and public MCP in September, general availability in October 2026.`}
      />
      <PageShell>
        <PageIntro
          title="More clients in September. 1.0 GA in October."
          lead="The web workbench and macOS preview are live today. Native Windows and Linux ship next, then GlasSQL graduates to general availability."
        />

        <div className="space-y-0 border-t border-[#e6e5e0] pb-24">
          {ROADMAP.map((milestone) => (
            <article
              key={milestone.id}
              className="grid gap-6 border-b border-[#e6e5e0] py-12 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-4">
                <p
                  className={cn(
                    "font-mono text-[12px] font-semibold uppercase tracking-wider",
                    milestone.status === "planned" ? "text-[#f54e00]" : "text-[#807d72]",
                  )}
                >
                  {ROADMAP_STATUS_LABEL[milestone.status]}
                </p>
                <p className="mt-2 text-[15px] text-[#26251e]">{milestone.when}</p>
              </div>
              <div className="md:col-span-8">
                <h2 className="text-xl font-normal text-[#26251e]">{milestone.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5a5852]">
                  {milestone.summary}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {milestone.items.map((item) => (
                    <li key={item} className="text-[14px] leading-relaxed text-[#5a5852]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </PageShell>
      <ClosingCta />
    </>
  );
}
