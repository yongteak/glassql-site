/**
 * @file ProductPage.tsx
 * @description Full product tour covering all 8 core GlasSQL feature chapters in Cursor style.
 */
import { DocumentTitle } from "@/components/layout/DocumentTitle";
import { PageIntro, PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FeatureChapter } from "@/components/sections/FeatureChapter";
import { IconArrowDown } from "@/components/ui/Icons";
import { SurfaceButton } from "@/components/ui/SurfaceButton";
import { PRODUCT_CHAPTERS } from "@/content/features";

export function ProductPage() {
  return (
    <>
      <DocumentTitle
        title="Product Tour"
        description="Explore the complete GlasSQL feature tour: Data Snapshots, Query Templates, Schema Explorer, Variables, Query Endpoints, MCP, and Governance."
      />

      <PageShell>
        <PageIntro
          title="Engineered for safe, reproducible data operations."
          lead="GlasSQL replaces loose SQL scratchpads and risky database credentials with versioned query templates, client-side PGlite WASM replicas, and automated query endpoints."
        >
          <SurfaceButton href="#snapshots" tone="primary" size="md">
            <span>Explore Features</span>
            <IconArrowDown className="size-3.5" />
          </SurfaceButton>
          <SurfaceButton to="/download" tone="secondary" size="md">
            <span>Download Clients</span>
          </SurfaceButton>
        </PageIntro>
      </PageShell>

      <div className="space-y-0">
        {PRODUCT_CHAPTERS.map((chapter, idx) => (
          <FeatureChapter key={chapter.id} chapter={chapter} index={idx} />
        ))}
      </div>

      <ClosingCta
        title="Experience the full GlasSQL workbench."
        body="Join teams using GlasSQL to safely publish and analyze data without opening raw production database ports."
      />
    </>
  );
}
