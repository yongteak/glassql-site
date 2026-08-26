/**
 * @file FoundationalGrid.tsx
 * @description 3 foundational pillars of GlasSQL in Cursor.com style card grid (white cards, 1px hairline, 12px radius).
 */
import { PageShell } from "@/components/layout/PageShell";
import { IconCode, IconDatabase, IconShield } from "@/components/ui/Icons";

const PILLARS = [
  {
    icon: IconDatabase,
    kicker: "01 / Isolation",
    title: "Queryable Replicas",
    description:
      "Share scoped data snapshots instead of sensitive database credentials. Clients run Workspace PG (WASM) locally with zero performance impact or table locks on production.",
    badge: "Workspace PG (WASM)",
  },
  {
    icon: IconCode,
    kicker: "02 / Collaboration",
    title: "SQL Workbench & Variables",
    description:
      "Organize queries into versioned templates with commit diffs, owner locks, and {{parameter}} interpolation. Transition seamlessly from scratchpad experiments to team-wide assets.",
    badge: "Monaco & Commit Diffs",
  },
  {
    icon: IconShield,
    kicker: "03 / Governance & API",
    title: "Query Endpoints & 3-Tier Audit",
    description:
      "Expose approved SQL templates as secured HTTP REST endpoints. Track all workspace, platform, and share activities with immutable audit logs and access entry approvals.",
    badge: "ISO & SOC 2 Ready",
  },
];

export function FoundationalGrid() {
  return (
    <section className="py-20 md:py-24 border-t border-[#e6e5e0] bg-[#f7f7f4]">
      <PageShell>
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-normal tracking-[-0.03em] text-[#26251e] sm:text-4xl">
            A complete operating system for data delivery.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#5a5852] font-normal">
            From data extraction to client analysis and automated HTTP delivery—built as one unified execution chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col justify-between rounded-xl border border-[#e6e5e0] bg-white p-7 transition-all hover:border-[#cfcdc4]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[11px] font-medium text-[#807d72]">{pillar.kicker}</span>
                    <span className="rounded-full bg-[#efeee8] px-2.5 py-0.5 font-mono text-[10px] font-medium text-[#26251e]">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="flex size-9 items-center justify-center rounded-lg bg-[#fafaf7] border border-[#e6e5e0] text-[#26251e] mb-4">
                    <Icon className="size-4" />
                  </div>

                  <h3 className="text-xl font-normal tracking-tight text-[#26251e] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5a5852] font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </PageShell>
    </section>
  );
}
