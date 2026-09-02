/**
 * @file ProductMock.tsx
 * @description Cursor-styled IDE and workbench mockups with warm-cream panes, crisp syntax highlighting,
 *   and signature AI timeline pastel pills (Thinking, Grep, Read, Edit, Done).
 */
import type { ReactNode } from "react";
import { PRODUCT_VERSION } from "@/config/site";
import { cn } from "@/lib/cn";
import type { ProductMockVariant } from "@/content/features";
import {
  IconCode,
  IconCpu,
  IconDatabase,
  IconLayers,
  IconLock,
  IconPlay,
  IconShield,
  IconTable,
  IconTerminal,
} from "./Icons";

type MockIconProps = {
  className?: string;
};

function MockIconFolders({ className }: MockIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("size-4", className)} aria-hidden>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M3 11h18" />
    </svg>
  );
}

function MockIconHistory({ className }: MockIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("size-4", className)} aria-hidden>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function MockIconPlug({ className }: MockIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("size-4", className)} aria-hidden>
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M7 8h10v3a5 5 0 0 1-10 0z" />
    </svg>
  );
}

function MockIconCamera({ className }: MockIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("size-4", className)} aria-hidden>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="14" r="3.5" />
    </svg>
  );
}

function MockIconHash({ className }: MockIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("size-3.5", className)} aria-hidden>
      <path d="M5 9h14M5 15h14M9 4 7 20M17 4l-2 16" />
    </svg>
  );
}

function MockIconFileCode({ className }: MockIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("size-3.5", className)} aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 13 2 2-2 2" />
    </svg>
  );
}

function MockIconPlus({ className }: MockIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("size-3.5", className)} aria-hidden>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function MockIconStar({ className }: MockIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("size-3.5", className)} aria-hidden>
      <path d="m12 3 2.6 6.3L21 10l-4.7 4.2L17.5 21 12 17.8 6.5 21l1.2-6.8L3 10l6.4-.7z" />
    </svg>
  );
}

function MockIconChevronDown({ className }: MockIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("size-3", className)} aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MockIconX({ className }: MockIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("size-3", className)} aria-hidden>
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

type ProductMockProps = {
  variant: ProductMockVariant | "hero-workbench";
  className?: string;
};

export function ProductMock({ variant, className }: ProductMockProps) {
  switch (variant) {
    case "hero-workbench":
      return <HeroWorkbenchMock className={className} />;
    case "query-editor":
      return <QueryEditorMock className={className} />;
    case "schema-explorer":
      return <SchemaExplorerMock className={className} />;
    case "data-snapshot":
      return <DataSnapshotMock className={className} />;
    case "query-endpoints":
      return <QueryEndpointsMock className={className} />;
    case "mcp-bridge":
      return <McpBridgeMock className={className} />;
    case "audit-governance":
      return <AuditGovernanceMock className={className} />;
    case "shared-dataset":
      return <SharedDatasetMock className={className} />;
    case "dual-runtime":
      return <DualRuntimeMock className={className} />;
    default:
      return <QueryEditorMock className={className} />;
  }
}

/**
 * Hero Workbench — 실제 앱 메인화면(레일 + 쿼리 트리 + 탭/에디터 + 변수 패널 + 푸터)
 */
function HeroWorkbenchMock({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col text-left font-sans text-xs select-none bg-white", className)}>
      <div className="flex min-h-[500px]">
        {/* Left icon rail */}
        <aside className="hidden w-14 shrink-0 flex-col border-r border-[#e6e5e0] bg-[#f7f7f4] md:flex">
          <div className="flex flex-col items-center gap-0.5 px-1 pt-2 pb-3">
            <HeroRailItem icon={<MockIconFolders className="size-[18px]" />} label="Queries" active />
            <HeroRailItem icon={<IconTable className="size-[18px]" />} label="Tables" />
            <HeroRailItem icon={<MockIconHistory className="size-[18px]" />} label="History" />
            <HeroRailItem icon={<MockIconPlug className="size-[18px]" />} label="API" />
            <HeroRailItem icon={<MockIconCamera className="size-[18px]" />} label="Snaps" />
          </div>
          <div className="mt-auto flex flex-col items-center px-1 pb-3">
            <span className="flex size-7 items-center justify-center rounded-full bg-[#e6e5e0] text-[10px] font-medium text-[#5a5852]">
              AK
            </span>
          </div>
        </aside>

        {/* Query tree */}
        <div className="hidden w-[196px] shrink-0 flex-col border-r border-[#e6e5e0] bg-[#fafaf7] md:flex">
          <div className="border-b border-[#e6e5e0] px-2.5 py-2">
            <div className="rounded-md border border-[#e6e5e0] bg-white px-2 py-1.5 text-[11px] text-[#a09c92]">
              Search queries…
            </div>
          </div>
          <div className="flex-1 space-y-3 overflow-hidden px-2 py-3 text-[12px]">
            <HeroTreeSection label="Shared" />
            <div>
              <HeroTreeSection label="Personal" />
              <div className="mt-0.5">
                <div className="flex items-center gap-1 px-1 py-1 text-[#5a5852]">
                  <MockIconChevronDown className="size-3 text-[#a09c92]" />
                  <span className="truncate">Bot Registry</span>
                </div>
                <div className="ml-3 space-y-0.5">
                  <div className="flex items-center gap-1.5 px-1.5 py-1 text-[#5a5852]">
                    <MockIconFileCode className="text-[#a09c92]" />
                    <span className="truncate">ping_plant.sql</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded bg-[#e6e5e0]/70 px-1.5 py-1 font-medium text-[#26251e]">
                    <MockIconFileCode className="text-[#005a9e]" />
                    <span className="truncate">active_units.sql</span>
                  </div>
                </div>
              </div>
            </div>
            <HeroTreeSection label="System" />
          </div>
        </div>

        {/* Editor canvas */}
        <div className="flex min-w-0 flex-1 flex-col bg-white">
          {/* Tabs */}
          <div className="flex h-10 items-center border-b border-[#e6e5e0] bg-[#fafaf7]">
            <div className="relative flex h-full items-center gap-2 border-r border-[#e6e5e0] px-3 text-[#807d72]">
              <MockIconFileCode className="text-[#a09c92]" />
              <span className="text-[12px]">ping_plant.sql</span>
              <MockIconX className="text-[#a09c92]" />
            </div>
            <div className="relative flex h-full items-center gap-2 border-r border-[#e6e5e0] bg-white px-3 text-[#26251e]">
              <span className="absolute inset-x-0 top-0 h-0.5 bg-[#005a9e]" />
              <MockIconFileCode className="text-[#005a9e]" />
              <span className="text-[12px]">active_units.sql</span>
              <MockIconX className="text-[#a09c92]" />
            </div>
            <div className="ml-auto flex h-full items-center px-2 text-[#807d72]">
              <MockIconPlus />
            </div>
          </div>

          {/* Title + Save / Run */}
          <div className="flex items-center justify-between gap-3 border-b border-[#e6e5e0] px-3 py-2">
            <div className="flex min-w-0 items-center gap-1.5">
              <MockIconStar className="text-[#a09c92]" />
              <span className="truncate text-[15px] font-normal text-[#26251e]">active_units</span>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="rounded-sm border border-[#e6e5e0] bg-white px-3 py-1 text-[12px] text-[#26251e]">
                Save
              </span>
              <span className="inline-flex overflow-hidden rounded-sm">
                <span className="inline-flex items-center gap-1.5 bg-[#005a9e] px-3 py-1 text-[12px] font-medium text-white">
                  <IconPlay className="size-2.5" />
                  Run
                </span>
                <span className="inline-flex items-center border-l border-white/20 bg-[#005a9e] px-1.5 text-white">
                  <MockIconChevronDown className="size-3" />
                </span>
              </span>
            </div>
          </div>

          <div className="flex min-h-0 flex-1">
            {/* SQL editor */}
            <div className="min-w-0 flex-1 p-3 font-mono text-[12px] leading-relaxed text-[#26251e]">
              <div className="flex gap-3">
                <div className="flex w-4 shrink-0 flex-col text-right text-[#a09c92] select-none">
                  {["1", "2", "3", "4", "5", "6", "7", "8"].map((n) => (
                    <span key={n}>{n}</span>
                  ))}
                </div>
                <div className="min-w-0 flex-1 overflow-x-auto">
                  <div>
                    <span className="font-medium text-[#9333ea]">SELECT</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#26251e]">u.unit_id, u.display_name,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#26251e]">p.plant_code, u.status</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#9333ea]">FROM</span>
                    <span className="text-[#26251e]"> bot_registry.active_units u</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#9333ea]">JOIN</span>
                    <span className="text-[#26251e]"> plants p</span>
                  </div>
                  <div className="pl-4">
                    <span className="font-medium text-[#9333ea]">ON</span>
                    <span className="text-[#26251e]"> p.id = u.plant_id</span>
                  </div>
                  <div>
                    <span className="font-medium text-[#9333ea]">WHERE</span>
                    <span className="text-[#26251e]"> u.status = </span>
                    <span className="inline-flex rounded border border-[#cfcdc4] bg-[#efeee8] px-1.5 font-semibold text-[#26251e]">
                      {"{{status}}"}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-[#9333ea]">ORDER BY</span>
                    <span className="text-[#26251e]"> u.updated_at </span>
                    <span className="font-medium text-[#9333ea]">DESC</span>
                    <span className="text-[#5a5852]">;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Variables panel */}
            <div className="hidden w-[220px] shrink-0 flex-col border-l border-[#e6e5e0] bg-[#fafaf7] lg:flex">
              <div className="flex border-b border-[#e6e5e0] px-3">
                <span className="border-b-2 border-[#005a9e] px-2 py-2 text-[12px] text-[#26251e]">Query</span>
                <span className="px-2 py-2 text-[12px] text-[#807d72]">Workspace</span>
              </div>
              <div className="px-3 pt-3 text-[10px] leading-relaxed text-[#807d72]">
                Query-only. When a workspace variable shares the name,{" "}
                <span className="text-[#5a5852]">this tab wins</span>.
              </div>
              <div className="mt-3 overflow-hidden border-y border-[#e6e5e0] bg-white">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-[#fafaf7] text-[#807d72]">
                    <tr>
                      <th className="px-2 py-1.5 font-normal">Key</th>
                      <th className="px-2 py-1.5 font-normal">Value</th>
                      <th className="px-2 py-1.5 font-normal">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[#efeee8] text-[#26251e]">
                      <td className="px-2 py-1.5 font-mono">status</td>
                      <td className="px-2 py-1.5 font-mono">active</td>
                      <td className="px-2 py-1.5 text-[#807d72]">string</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Result strip */}
          <div className="border-t border-[#e6e5e0] bg-[#fafaf7]">
            <div className="flex items-center gap-2 border-b border-[#e6e5e0] px-3 py-1.5">
              <span className="text-[11px] font-medium text-[#26251e]">Result</span>
              <span className="rounded bg-[#1f8a65]/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-[#1f8a65]">
                14ms · 3 rows
              </span>
            </div>
            <div className="overflow-x-auto bg-white font-mono text-[11px]">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#e6e5e0] bg-[#fafaf7] text-[#5a5852]">
                    <th className="px-3 py-1.5 font-medium">unit_id</th>
                    <th className="px-3 py-1.5 font-medium">display_name</th>
                    <th className="px-3 py-1.5 font-medium">plant_code</th>
                    <th className="px-3 py-1.5 font-medium">status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#efeee8] text-[#26251e]">
                  <tr>
                    <td className="px-3 py-1 text-[#0284c7]">unit-104</td>
                    <td className="px-3 py-1">Line A Pack</td>
                    <td className="px-3 py-1">PLT-SEOUL</td>
                    <td className="px-3 py-1 text-[#1f8a65]">active</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-1 text-[#0284c7]">unit-218</td>
                    <td className="px-3 py-1">Line B Sort</td>
                    <td className="px-3 py-1">PLT-BUSAN</td>
                    <td className="px-3 py-1 text-[#1f8a65]">active</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Status footer */}
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 border-t border-[#e6e5e0] bg-[#fafaf7] px-2 py-1 text-[11px] text-[#807d72]">
        <span className="inline-flex items-center gap-1 font-medium text-[#26251e]/80">
          <span className="size-1 rounded-full bg-[#1f8a65]" />
          Connected
        </span>
        <span className="text-[#cfcdc4]">|</span>
        <span className="font-medium text-[#26251e]/90">Postgres 18.3</span>
        <span className="text-[#cfcdc4]">|</span>
        <span>
          <span className="font-medium text-[#26251e]/85">Live</span>
          <span> · No base snapshot</span>
        </span>
        <span className="ml-auto tabular-nums text-[10px]">v{PRODUCT_VERSION}</span>
      </div>
    </div>
  );
}

function HeroRailItem({
  icon,
  label,
  active = false,
}: {
  icon: ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-1 py-1.5 text-center">
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-lg",
          active ? "bg-[#26251e]/10 text-[#26251e]" : "text-[#807d72]",
        )}
      >
        {icon}
      </span>
      <span className={cn("text-[10px] leading-none", active ? "text-[#26251e]" : "text-[#807d72]")}>
        {label}
      </span>
    </div>
  );
}

function HeroTreeSection({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5 text-[13px] tracking-tight text-[#26251e]/80">
      <MockIconHash className="text-[#a09c92]" />
      <span>{label}</span>
    </div>
  );
}

/**
 * 1. Query Editor Mock with Variable Binding and Commit Version
 */
function QueryEditorMock({ className }: { className?: string }) {
  return (
    <div className={cn("p-5 font-mono text-xs text-[#26251e] bg-white", className)}>
      <div className="flex items-center justify-between border-b border-[#e6e5e0] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <IconCode className="size-4 text-[#f54e00]" />
          <span className="font-medium text-[#26251e]">customer_churn_risk.sql</span>
          <span className="rounded bg-[#efeee8] px-1.5 py-0.5 text-[10px] text-[#5a5852]">
            commit: 8f20cb
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#5a5852]">
          <IconLock className="size-3 text-[#c08532]" />
          <span>Owner Lock (YongTaek Kwon)</span>
        </div>
      </div>

      <div className="space-y-1.5 leading-relaxed">
        <div>
          <span className="text-[#9333ea] font-medium">WITH</span>
          <span className="text-[#26251e]"> customer_activity </span>
          <span className="text-[#9333ea] font-medium">AS</span>
          <span className="text-[#5a5852]"> (</span>
        </div>
        <div className="pl-4">
          <span className="text-[#9333ea]">SELECT</span>
          <span className="text-[#26251e]"> user_id, max(last_login_at) </span>
          <span className="text-[#9333ea]">AS</span>
          <span className="text-[#26251e]"> latest_ping</span>
        </div>
        <div className="pl-4">
          <span className="text-[#9333ea]">FROM</span>
          <span className="text-[#26251e]"> audit_events</span>
        </div>
        <div className="pl-4">
          <span className="text-[#9333ea]">WHERE</span>
          <span className="text-[#26251e]"> tenant_id = </span>
          <span className="rounded bg-[#efeee8] border border-[#cfcdc4] px-1.5 py-0.5 text-[#26251e] font-semibold">
            {"{{tenant_id}}"}
          </span>
        </div>
        <div>
          <span className="text-[#5a5852]">)</span>
        </div>
        <div>
          <span className="text-[#9333ea] font-medium">SELECT</span>
          <span className="text-[#26251e]"> u.email, u.company_tier, ca.latest_ping</span>
        </div>
        <div>
          <span className="text-[#9333ea] font-medium">FROM</span>
          <span className="text-[#26251e]"> users u </span>
          <span className="text-[#9333ea] font-medium">JOIN</span>
          <span className="text-[#26251e]"> customer_activity ca </span>
          <span className="text-[#9333ea] font-medium">ON</span>
          <span className="text-[#26251e]"> u.id = ca.user_id</span>
        </div>
        <div>
          <span className="text-[#9333ea] font-medium">WHERE</span>
          <span className="text-[#26251e]"> ca.latest_ping &lt; now() - interval </span>
          <span className="rounded bg-[#efeee8] border border-[#cfcdc4] px-1.5 py-0.5 text-[#26251e] font-semibold">
            {"{{inactivity_days}}"}
          </span>
          <span className="text-[#5a5852]">;</span>
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-[#e6e5e0] bg-[#fafaf7] p-3">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-[#807d72] mb-2">
          Variable Bindings & Types
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="flex items-center justify-between rounded bg-white border border-[#e6e5e0] px-2 py-1">
            <span className="text-[#f54e00] font-medium">tenant_id</span>
            <span className="text-[#5a5852]">uuid · Required</span>
          </div>
          <div className="flex items-center justify-between rounded bg-white border border-[#e6e5e0] px-2 py-1">
            <span className="text-[#f54e00] font-medium">inactivity_days</span>
            <span className="text-[#5a5852]">interval · default '30 days'</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Schema Explorer Mock with DDL generation
 */
function SchemaExplorerMock({ className }: { className?: string }) {
  return (
    <div className={cn("p-5 font-mono text-xs text-[#26251e] bg-white", className)}>
      <div className="flex items-center justify-between border-b border-[#e6e5e0] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <IconDatabase className="size-4 text-[#f54e00]" />
          <span className="font-medium text-[#26251e]">Schema Explorer: public.orders</span>
        </div>
        <span className="rounded bg-[#1f8a65]/10 px-2 py-0.5 text-[10px] text-[#1f8a65] font-medium">
          Live Snapshot Hydrated
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg border border-[#e6e5e0] bg-[#fafaf7] p-3">
          <div className="text-[10px] font-semibold uppercase text-[#807d72] mb-2">Table Columns & Types</div>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex justify-between border-b border-[#e6e5e0] pb-1">
              <span className="text-[#26251e]">id (PK)</span>
              <span className="text-[#807d72]">uuid</span>
            </div>
            <div className="flex justify-between border-b border-[#e6e5e0] pb-1">
              <span className="text-[#26251e]">user_id (FK)</span>
              <span className="text-[#807d72]">uuid</span>
            </div>
            <div className="flex justify-between border-b border-[#e6e5e0] pb-1">
              <span className="text-[#26251e]">amount_usd</span>
              <span className="text-[#807d72]">numeric(12,2)</span>
            </div>
            <div className="flex justify-between border-b border-[#e6e5e0] pb-1">
              <span className="text-[#26251e]">status</span>
              <span className="text-[#807d72]">varchar(32)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#26251e]">created_at</span>
              <span className="text-[#807d72]">timestamptz</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-[#e6e5e0] bg-[#fafaf7] p-3">
          <div className="text-[10px] font-semibold uppercase text-[#807d72] mb-2">One-Click Actions</div>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between rounded bg-white border border-[#e6e5e0] px-2 py-1.5 text-[#26251e] hover:border-[#cfcdc4] cursor-pointer">
              <span>Generate SELECT *</span>
              <span className="text-[#f54e00]">→ Editor</span>
            </div>
            <div className="flex items-center justify-between rounded bg-white border border-[#e6e5e0] px-2 py-1.5 text-[#26251e] hover:border-[#cfcdc4] cursor-pointer">
              <span>Generate JOIN with users</span>
              <span className="text-[#f54e00]">→ Editor</span>
            </div>
            <div className="flex items-center justify-between rounded bg-[#fafaf7] border border-[#cfcdc4] px-2 py-1.5 text-[#26251e]">
              <span>Share Schema Doc Link</span>
              <span className="text-[#807d72]">/share/r/84a2...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Data Snapshot Pipeline Mock with AI Timeline Pills
 */
function DataSnapshotMock({ className }: { className?: string }) {
  return (
    <div className={cn("p-5 font-mono text-xs text-[#26251e] bg-white", className)}>
      <div className="flex items-center justify-between border-b border-[#e6e5e0] pb-3 mb-4">
        <span className="font-medium text-[#26251e]">Snapshot Extraction Pipeline</span>
        <span className="rounded bg-[#1f8a65]/10 px-2 py-0.5 text-[10px] text-[#1f8a65] font-medium">
          Production DB Protected
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3 rounded-lg border border-[#e6e5e0] bg-[#fafaf7] p-3">
          <span className="rounded-full bg-[#dfa88f] px-2 py-0.5 font-mono text-[9px] font-semibold text-[#26251e] uppercase shrink-0">
            Thinking
          </span>
          <div>
            <div className="text-[#26251e] font-medium">Curate & Filter Scope</div>
            <div className="text-[#5a5852] text-[11px]">
              Tables: <code className="text-[#26251e]">orders, users, invoices</code>. Predicate: <code className="text-[#26251e]">created_at &gt;= '2026-01-01'</code>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg border border-[#e6e5e0] bg-[#fafaf7] p-3">
          <span className="rounded-full bg-[#9fbbe0] px-2 py-0.5 font-mono text-[9px] font-semibold text-[#26251e] uppercase shrink-0">
            Read
          </span>
          <div>
            <div className="text-[#26251e] font-medium">Encrypted Archive (.zip)</div>
            <div className="text-[#5a5852] text-[11px]">
              Packaged with DDL metadata & row hashes. Size: <strong className="text-[#1f8a65]">4.2 MB</strong> (from 850 MB raw DB)
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg border border-[#cfcdc4] bg-white p-3">
          <span className="rounded-full bg-[#c08532] px-2 py-0.5 font-mono text-[9px] font-semibold text-white uppercase shrink-0">
            Done
          </span>
          <div>
            <div className="text-[#26251e] font-medium">Instant Client Hydration</div>
            <div className="text-[#5a5852] text-[11px]">
              Recipients load and execute SQL locally inside browser WASM or Desktop in &lt; 3 seconds.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. Query Endpoints Mock
 */
function QueryEndpointsMock({ className }: { className?: string }) {
  return (
    <div className={cn("p-5 font-mono text-xs text-[#26251e] bg-white", className)}>
      <div className="flex items-center justify-between border-b border-[#e6e5e0] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <IconTerminal className="size-4 text-[#f54e00]" />
          <span className="font-medium text-[#26251e]">Live HTTP Query Endpoint</span>
        </div>
        <span className="rounded bg-[#1f8a65]/10 px-2 py-0.5 text-[10px] text-[#1f8a65] font-medium">
          Rate-Limit: 120 req/min
        </span>
      </div>

      <div className="rounded-lg border border-[#e6e5e0] bg-[#fafaf7] p-3 space-y-2">
        <div className="text-[10px] text-[#807d72] uppercase font-semibold">HTTP Request Specification</div>
        <div className="text-[11px] text-[#26251e]">
          <span className="text-[#1f8a65] font-bold">POST</span> https://api.glassql.app/v1/workspaces/ws_84920/endpoints/revenue-summary
        </div>
        <div className="text-[11px] text-[#5a5852]">
          Authorization: Bearer <span className="text-[#26251e] font-medium">gk_live_829fa...820</span>
        </div>
      </div>

      <div className="mt-3 rounded-lg border border-[#e6e5e0] bg-[#fafaf7] p-3 space-y-1">
        <div className="text-[10px] text-[#807d72] uppercase font-semibold">Response Payload (200 OK - JSON)</div>
        <pre className="text-[11px] text-[#26251e] overflow-x-auto">
{`{
  "status": "success",
  "execution_time_ms": 12,
  "data": [
    { "cohort": "2026-08", "revenue_usd": 184920.00, "count": 3492 },
    { "cohort": "2026-07", "revenue_usd": 162400.00, "count": 3120 }
  ]
}`}
        </pre>
      </div>
    </div>
  );
}

/**
 * 5. MCP Bridge Mock with Cursor AI Timeline Pills
 */
function McpBridgeMock({ className }: { className?: string }) {
  return (
    <div className={cn("p-5 font-mono text-xs text-[#26251e] bg-white", className)}>
      <div className="flex items-center justify-between border-b border-[#e6e5e0] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <IconCpu className="size-4 text-[#f54e00]" />
          <span className="font-medium text-[#26251e]">MCP Workspace Bridge for Cursor & Claude</span>
        </div>
        <span className="rounded bg-[#efeee8] px-2 py-0.5 text-[10px] text-[#5a5852]">
          Protocol: v2024-11-05
        </span>
      </div>

      <div className="space-y-3">
        <div className="rounded-lg border border-[#e6e5e0] bg-[#fafaf7] p-3">
          <div className="text-[10px] font-semibold text-[#807d72] uppercase mb-2">Agent MCP Tool Call Pipeline</div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-[#dfa88f] px-2.5 py-0.5 text-[10px] font-semibold text-[#26251e] uppercase">
              Thinking
            </span>
            <span className="rounded-full bg-[#9fc9a2] px-2.5 py-0.5 text-[10px] font-semibold text-[#26251e] uppercase">
              Grep
            </span>
            <span className="rounded-full bg-[#9fbbe0] px-2.5 py-0.5 text-[10px] font-semibold text-[#26251e] uppercase">
              Read
            </span>
            <span className="rounded-full bg-[#c0a8dd] px-2.5 py-0.5 text-[10px] font-semibold text-[#26251e] uppercase">
              Edit
            </span>
            <span className="rounded-full bg-[#c08532] px-2.5 py-0.5 text-[10px] font-semibold text-white uppercase">
              Done
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-[#e6e5e0] bg-white p-3 text-[11px] text-[#26251e]">
          <div className="text-[#807d72] font-semibold mb-1">Agent Prompt in Cursor:</div>
          <div className="text-[#26251e]">
            "Analyze our monthly retention using the pre-approved template <code className="text-[#f54e00] font-medium">cohort_retention.sql</code> and pass start_date='2026-01-01'"
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 6. Audit & Governance Mock
 */
function AuditGovernanceMock({ className }: { className?: string }) {
  return (
    <div className={cn("p-5 font-mono text-xs text-[#26251e] bg-white", className)}>
      <div className="flex items-center justify-between border-b border-[#e6e5e0] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <IconShield className="size-4 text-[#f54e00]" />
          <span className="font-medium text-[#26251e]">3-Tier Compliance Audit Trail</span>
        </div>
        <span className="rounded bg-[#efeee8] px-2 py-0.5 text-[10px] text-[#5a5852]">
          SOC 2 / ISO 27001
        </span>
      </div>

      <div className="overflow-x-auto text-[11px]">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#e6e5e0] text-[#807d72]">
              <th className="pb-2">Timestamp</th>
              <th className="pb-2">Actor</th>
              <th className="pb-2">Event Action</th>
              <th className="pb-2">Tier</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#efeee8]">
            <tr>
              <td className="py-2 text-[#807d72]">14:32:05</td>
              <td className="py-2 text-[#26251e]">sarah@acme.com</td>
              <td className="py-2 text-[#1f8a65] font-medium">Export CSV (12,480 rows)</td>
              <td className="py-2 text-[#807d72]">Share / Export</td>
            </tr>
            <tr>
              <td className="py-2 text-[#807d72]">14:15:10</td>
              <td className="py-2 text-[#26251e]">yong@glassql.app</td>
              <td className="py-2 text-[#0284c7] font-medium">Commit Query Template v3</td>
              <td className="py-2 text-[#807d72]">Workspace</td>
            </tr>
            <tr>
              <td className="py-2 text-[#807d72]">13:58:44</td>
              <td className="py-2 text-[#26251e]">Cursor MCP Bridge</td>
              <td className="py-2 text-[#9333ea] font-medium">Schema Read: public.orders</td>
              <td className="py-2 text-[#807d72]">Platform</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * 7. Shared Dataset Mock
 */
function SharedDatasetMock({ className }: { className?: string }) {
  return (
    <div className={cn("p-5 font-mono text-xs text-[#26251e] bg-white", className)}>
      <div className="flex items-center justify-between border-b border-[#e6e5e0] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <IconLayers className="size-4 text-[#f54e00]" />
          <span className="font-medium text-[#26251e]">S3 Parquet & DuckDB Query Engine</span>
        </div>
        <span className="rounded bg-[#1f8a65]/10 px-2 py-0.5 text-[10px] text-[#1f8a65] font-medium">
          Zero Full-Copy Transfer
        </span>
      </div>

      <div className="rounded-lg border border-[#e6e5e0] bg-[#fafaf7] p-3 space-y-2 text-[11px]">
        <div className="text-[#5a5852]">
          <span className="text-[#9333ea] font-bold">SELECT</span> region, sum(revenue) <span className="text-[#9333ea] font-bold">FROM</span> <span className="text-[#f54e00]">'s3://acme-lake/clickstream/*.parquet'</span> <span className="text-[#9333ea] font-bold">GROUP BY</span> 1;
        </div>
        <div className="flex items-center gap-4 text-[10px] text-[#807d72] pt-2 border-t border-[#e6e5e0]">
          <span>Dataset Total: <strong className="text-[#26251e]">10,000,000 rows (4.8 GB)</strong></span>
          <span>Scanned: <strong className="text-[#1f8a65]">18.2 MB</strong></span>
          <span>Speed: <strong className="text-[#0284c7]">142ms</strong></span>
        </div>
      </div>
    </div>
  );
}

/**
 * 8. Dual Runtime Mock (Web vs Desktop)
 */
function DualRuntimeMock({ className }: { className?: string }) {
  return (
    <div className={cn("p-5 font-mono text-xs text-[#26251e] bg-white", className)}>
      <div className="flex items-center justify-between border-b border-[#e6e5e0] pb-3 mb-4">
        <span className="font-medium text-[#26251e]">Dual Runtime Architecture</span>
        <span className="text-[#807d72] text-[11px]">Shared Query Dialect</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px]">
        <div className="rounded-lg border border-[#e6e5e0] bg-[#fafaf7] p-3">
          <div className="font-medium text-[#26251e] mb-1">GlasSQL Web (my.glassql.app)</div>
          <ul className="space-y-1 text-[#5a5852] list-disc list-inside">
            <li>Zero installation in browser</li>
            <li>Workspace PG (WASM) client DB</li>
            <li>One-click link sharing</li>
            <li>Instant team onboarding</li>
          </ul>
        </div>
        <div className="rounded-lg border border-[#e6e5e0] bg-[#fafaf7] p-3">
          <div className="font-medium text-[#26251e] mb-1">GlasSQL Desktop (Tauri v2)</div>
          <ul className="space-y-1 text-[#5a5852] list-disc list-inside">
            <li>100% offline & air-gapped</li>
            <li>Direct MySQL/PG/Mongo gateways</li>
            <li>Encrypted .glassql-pack backups</li>
            <li>Global shortcuts & tray</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
