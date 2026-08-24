/**
 * @file DocsArticlePage.tsx
 * @description Single documentation article page in Cursor style.
 */
import { Link, useParams } from "react-router-dom";
import { DocumentTitle } from "@/components/layout/DocumentTitle";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { IconArrowRight } from "@/components/ui/Icons";
import { DOC_ARTICLES } from "@/content/docs";
import { NotFoundPage } from "./NotFoundPage";

export function DocsArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = DOC_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <DocumentTitle title={article.title} description={article.summary} />

      <PageShell wide>
        <div className="pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Nav */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 space-y-1">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#807d72] mb-3 px-3">
                All Documentation
              </div>
              {DOC_ARTICLES.map((a) => (
                <Link
                  key={a.slug}
                  to={`/docs/${a.slug}`}
                  className={`block rounded-md px-3 py-2 text-xs font-medium transition-colors ${
                    a.slug === slug
                      ? "bg-[#efeee8] text-[#26251e]"
                      : "text-[#5a5852] hover:text-[#26251e] hover:bg-[#efeee8]/60"
                  }`}
                >
                  {a.title}
                </Link>
              ))}
            </div>
          </aside>

          {/* Main Article Content */}
          <article className="lg:col-span-9 max-w-3xl">
            <div className="border-b border-[#e6e5e0] pb-8 mb-8">
              <h1 className="text-3xl sm:text-4xl font-normal text-[#26251e] tracking-tight">
                {article.title}
              </h1>
              <p className="mt-3 text-base text-[#5a5852] font-normal leading-relaxed">
                {article.summary}
              </p>
            </div>

            <div className="space-y-6 text-sm text-[#26251e] leading-relaxed">
              {article.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="text-xl font-normal text-[#26251e] pt-4 tracking-tight">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "code") {
                  return (
                    <div key={i} className="rounded-xl border border-[#e6e5e0] bg-white p-4 font-mono text-xs overflow-x-auto text-[#26251e]">
                      <pre className="text-[#26251e]">{block.text}</pre>
                    </div>
                  );
                }
                return (
                  <p key={i} className="font-normal text-[#5a5852]">
                    {block.text}
                  </p>
                );
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-[#e6e5e0] flex items-center justify-between">
              <Link to="/docs" className="text-xs font-medium text-[#5a5852] hover:text-[#26251e]">
                ← Back to Docs Catalogue
              </Link>
              <Link to="/product" className="inline-flex items-center gap-1 text-xs font-medium text-[#f54e00] hover:underline">
                Explore Product Tour <IconArrowRight className="size-3" />
              </Link>
            </div>
          </article>
        </div>
      </PageShell>

      <ClosingCta />
    </>
  );
}
