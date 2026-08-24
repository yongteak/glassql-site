/**
 * @file LegalDocumentPage.tsx
 * @description Shared renderer for Terms and Privacy documents in Cursor style.
 */
import { DocumentTitle } from "@/components/layout/DocumentTitle";
import { PageShell } from "@/components/layout/PageShell";
import type { LegalDocument } from "@/content/legal";

type LegalDocumentPageProps = {
  document: LegalDocument;
};

export function LegalDocumentPage({ document }: LegalDocumentPageProps) {
  return (
    <>
      <DocumentTitle title={document.title} />

      <PageShell>
        <div className="pt-20 pb-28 max-w-3xl">
          <div className="border-b border-[#e6e5e0] pb-8 mb-10">
            <span className="font-mono text-xs text-[#807d72] font-medium">
              {document.effectiveDateLabel}
            </span>
            <h1 className="mt-2 text-4xl font-normal text-[#26251e] tracking-tight">
              {document.title}
            </h1>
            <p className="mt-4 text-sm text-[#5a5852] leading-relaxed font-normal">
              {document.intro}
            </p>
          </div>

          <div className="space-y-8 text-sm text-[#26251e] leading-relaxed">
            {document.sections.map((sec, i) => (
              <section key={i} className="space-y-3">
                <h2 className="text-lg font-medium text-[#26251e] tracking-tight">
                  {sec.heading}
                </h2>
                {sec.blocks.map((block, j) => {
                  if (block.type === "ul") {
                    return (
                      <ul key={j} className="list-disc list-inside space-y-1.5 text-[#5a5852] pl-2 font-normal">
                        {block.items.map((item, k) => (
                          <li key={k}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={j} className="text-[#5a5852] font-normal">
                      {block.text}
                    </p>
                  );
                })}
              </section>
            ))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
