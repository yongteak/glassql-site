/**
 * @file BlogPage.tsx
 * @description GlasSQL engineering and product blog index in Cursor style.
 */
import { Link } from "react-router-dom";
import { DocumentTitle } from "@/components/layout/DocumentTitle";
import { PageIntro, PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { IconArrowRight } from "@/components/ui/Icons";
import { BLOG_POSTS } from "@/content/blog";

export function BlogPage() {
  return (
    <>
      <DocumentTitle
        title="Engineering Blog"
        description="Engineering insights, architecture deep-dives, and announcements from the GlasSQL team."
      />

      <PageShell>
        <PageIntro
          title="Insights on data operations & local SQL engines."
          lead="Read about our design decisions, PGlite WASM performance benchmarks, and zero-risk data collaboration patterns."
        />

        <div className="space-y-6 pb-24 max-w-4xl">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group rounded-xl border border-[#e6e5e0] bg-white p-7 transition-all hover:border-[#cfcdc4]"
            >
              <div className="flex items-center gap-3 text-xs font-mono text-[#807d72] mb-3">
                <time dateTime={post.date}>{post.dateLabel}</time>
                <span>·</span>
                <span>Architecture</span>
              </div>

              <h2 className="text-2xl font-normal text-[#26251e] group-hover:text-[#f54e00] transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-[#5a5852] font-normal">
                {post.excerpt}
              </p>

              <div className="mt-6 pt-4 border-t border-[#e6e5e0] flex items-center">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#26251e] group-hover:text-[#f54e00]"
                >
                  <span>Read full post</span>
                  <IconArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </PageShell>

      <ClosingCta />
    </>
  );
}
