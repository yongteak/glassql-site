/**
 * @file DocsPage.tsx
 * @description GlasSQL documentation index in Cursor style.
 */
import { Link } from "react-router-dom";
import { DocumentTitle } from "@/components/layout/DocumentTitle";
import { PageIntro, PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { IconArrowRight, IconCode } from "@/components/ui/Icons";
import { DOC_ARTICLES } from "@/content/docs";

export function DocsPage() {
  return (
    <>
      <DocumentTitle
        title="Documentation"
        description="Official guides and architectural references for GlasSQL: Snapshots, Query Templates, Endpoints, MCP, and Audits."
      />

      <PageShell>
        <PageIntro
          title="GlasSQL Guides & Architecture"
          lead="Everything you need to configure workspaces, manage data snapshots, publish REST query endpoints, and connect Cursor via MCP."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-24">
          {DOC_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              to={`/docs/${article.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-[#e6e5e0] bg-white p-7 transition-all hover:border-[#cfcdc4]"
            >
              <div>
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e] mb-4 group-hover:text-[#f54e00] transition-colors">
                  <IconCode className="size-4" />
                </div>
                <h2 className="text-xl font-normal text-[#26251e] group-hover:text-[#f54e00] transition-colors">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm text-[#5a5852] leading-relaxed font-normal">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e6e5e0] flex items-center text-xs font-medium text-[#5a5852] group-hover:text-[#26251e] transition-colors">
                <span>Read article</span>
                <IconArrowRight className="size-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </PageShell>

      <ClosingCta />
    </>
  );
}
