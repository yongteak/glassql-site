/**
 * @file AboutPage.tsx
 * @description GlasSQL mission and operator info in Cursor style.
 */
import { CONTACT_EMAIL, OPERATOR } from "@/config/site";
import { DocumentTitle } from "@/components/layout/DocumentTitle";
import { PageIntro, PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { IconShield } from "@/components/ui/Icons";

export function AboutPage() {
  return (
    <>
      <DocumentTitle
        title="About & Mission"
        description="Our mission to make data operations safe, collaborative, and accessible without production database exposure."
      />

      <PageShell>
        <PageIntro
          title="Safe data delivery as an operating system."
          lead="We believe data collaboration should never require sharing raw production database credentials or struggling with stale CSV files."
        />

        <div className="max-w-3xl space-y-10 pb-24">
          <section className="space-y-4 text-base leading-relaxed text-[#5a5852] font-normal">
            <h2 className="text-2xl font-normal text-[#26251e] tracking-tight">The Core Problem</h2>
            <p>
              Most database tools are point-to-point clients designed for a single developer connected directly to a live PostgreSQL or MySQL instance. When teams grow, this model fails: sharing credentials causes security leaks, heavy joins degrade production performance, and context is lost across isolated chat channels.
            </p>
            <p>
              GlasSQL solves this by treating data operations as a workspace-level operating system. Instead of granting database access, data teams curate bounded, verifiable snapshots. Everyone runs identical SQL in client-side PostgreSQL WASM (PGlite) or DuckDB engines.
            </p>
          </section>

          <section className="rounded-xl border border-[#e6e5e0] bg-white p-8 space-y-4">
            <h3 className="text-xl font-normal text-[#26251e]">Project Leadership</h3>
            <p className="text-sm text-[#5a5852] leading-relaxed font-normal">
              GlasSQL is developed and maintained by the GlasSQL Team. For enterprise inquiries, partnership integrations, or security reviews, reach out directly.
            </p>
            <div className="pt-2 text-xs font-mono text-[#807d72]">
              Inquiries: <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#26251e] underline hover:text-[#f54e00]">{CONTACT_EMAIL}</a>
            </div>
          </section>
        </div>
      </PageShell>

      <ClosingCta />
    </>
  );
}
