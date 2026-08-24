/**
 * @file BlogPostPage.tsx
 * @description Single blog post reader in Cursor style.
 */
import { Link, useParams } from "react-router-dom";
import { DocumentTitle } from "@/components/layout/DocumentTitle";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { BLOG_POSTS } from "@/content/blog";
import { NotFoundPage } from "./NotFoundPage";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <>
      <DocumentTitle title={post.title} description={post.excerpt} />

      <PageShell>
        <article className="pt-16 pb-24 max-w-3xl mx-auto">
          <div className="border-b border-[#e6e5e0] pb-8 mb-10">
            <div className="flex items-center gap-3 text-xs font-mono text-[#807d72] mb-3">
              <time dateTime={post.date}>{post.dateLabel}</time>
              <span>·</span>
              <span>GlasSQL Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-normal text-[#26251e] tracking-tight leading-[1.15]">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-[#5a5852] font-normal leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="space-y-6 text-base text-[#26251e] leading-relaxed font-normal">
            {post.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="text-2xl font-normal text-[#26251e] pt-6 tracking-tight">
                    {block.text}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-[#5a5852] leading-relaxed font-normal">
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-14 pt-8 border-t border-[#e6e5e0] flex items-center justify-between">
            <Link to="/blog" className="text-sm font-medium text-[#5a5852] hover:text-[#26251e]">
              ← Back to all blog posts
            </Link>
            <Link to="/download" className="text-sm font-medium text-[#f54e00] hover:underline">
              Download GlasSQL →
            </Link>
          </div>
        </article>
      </PageShell>

      <ClosingCta />
    </>
  );
}
