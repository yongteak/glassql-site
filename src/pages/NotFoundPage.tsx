/**
 * @file NotFoundPage.tsx
 * @description 404 Not Found fallback page in Cursor style.
 */
import { APP_ORIGIN } from "@/config/site";
import { DocumentTitle } from "@/components/layout/DocumentTitle";
import { PageShell } from "@/components/layout/PageShell";
import { IconArrowRight, IconExternalLink } from "@/components/ui/Icons";
import { SurfaceButton } from "@/components/ui/SurfaceButton";

export function NotFoundPage() {
  return (
    <>
      <DocumentTitle title="Page Not Found" />

      <PageShell>
        <div className="pt-28 pb-32 max-w-2xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl font-normal text-[#26251e] tracking-tight">
            Page not found.
          </h1>
          <p className="mt-4 text-base text-[#5a5852] font-normal leading-relaxed">
            The page you are looking for doesn’t exist, has been moved, or is part of the workspace application.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <SurfaceButton to="/" tone="secondary" size="md">
              <IconArrowRight className="rotate-180 size-3.5" />
              <span>Back to Home</span>
            </SurfaceButton>
            <a
              href={APP_ORIGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#26251e] px-4 py-2 font-sans text-sm font-medium text-white hover:bg-[#383730] transition-colors"
            >
              <span>Open Web App</span>
              <IconExternalLink className="size-3.5" />
            </a>
          </div>
        </div>
      </PageShell>
    </>
  );
}
