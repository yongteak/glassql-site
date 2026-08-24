/**
 * @file ChangelogPage.tsx
 * @description GlasSQL product release timeline in Cursor style.
 */
import { DocumentTitle } from "@/components/layout/DocumentTitle";
import { PageIntro, PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { IconCheck } from "@/components/ui/Icons";
import { CHANGELOG } from "@/content/changelog";

export function ChangelogPage() {
  return (
    <>
      <DocumentTitle
        title="Changelog"
        description="Release history, product updates, and improvements to GlasSQL."
      />

      <PageShell>
        <PageIntro
          title="What’s new in GlasSQL"
          lead="Follow our weekly progress as we build the premier workspace data operations platform."
        />

        <div className="space-y-10 pb-24 max-w-4xl">
          {CHANGELOG.map((entry) => (
            <div
              key={entry.version}
              className="rounded-xl border border-[#e6e5e0] bg-white p-8 sm:p-9"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e6e5e0] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#efeee8] px-3 py-1 font-mono text-xs font-semibold text-[#26251e]">
                    {entry.version}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-normal text-[#26251e]">
                    {entry.title}
                  </h2>
                </div>
                <time className="font-mono text-xs text-[#807d72]">{entry.dateLabel}</time>
              </div>

              <ul className="space-y-3 text-sm text-[#5a5852]">
                {entry.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <IconCheck className="size-4 shrink-0 text-[#1f8a65] mt-0.5" />
                    <span className="leading-relaxed font-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageShell>

      <ClosingCta />
    </>
  );
}
