/**
 * @file ProductMock.tsx
 * @description Cursor-styled IDE and workbench mockups with warm-cream panes, crisp syntax highlighting,
 *   and signature AI timeline pastel pills (Thinking, Grep, Read, Edit, Done).
 */
import { cn } from "@/lib/cn";
import type { ProductMockVariant } from "@/content/features";
import {
  IconCheck,
  IconCode,
  IconCpu,
  IconDatabase,
  IconLayers,
  IconLock,
  IconPlay,
  IconShield,
  IconSparkles,
  IconTable,
  IconTerminal,
} from "./Icons";

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
 * Hero Workbench — Multi-pane IDE mockup (Sidebar + Editor + Agent Timeline + Results)
 */
function HeroWorkbenchMock({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col text-left font-sans text-xs select-none bg-white", className)}>
      {/* Top Workspace Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e6e5e0] bg-[#fafaf7] px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="flex size-2 rounded-full bg-[#1f8a65]" />
          <span className="font-medium text-[#26251e]">Acme Analytics Workspace</span>
          <span className="rounded bg-[#e6e5e0] px-1.5 py-0.5 font-mono text-[10px] text-[#5a5852]">
            ws_prod_8492
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="text-[#807d72]">Engine:</span>
          <span className="rounded bg-[#efeee8] border border-[#e6e5e0] px-2 py-0.5 text-[#26251e] font-medium">
            PGlite WASM · Client-Side
          </span>
          <span className="hidden sm:inline-block text-[#cfcdc4]">|</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[#1f8a65] font-medium">
            <IconSparkles className="size-3" /> MCP Connected
          </span>
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
        {/* Left Sidebar */}
        <div className="hidden md:flex md:col-span-3 flex-col border-r border-[#e6e5e0] bg-[#fafaf7] p-3 text-[#5a5852] font-mono text-[11px]">
          <div className="mb-2 px-2 text-[10px] font-semibold tracking-wider text-[#807d72] uppercase">
            Query Templates
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 rounded bg-white border border-[#e6e5e0] px-2 py-1.5 text-[#26251e] font-medium">
              <IconCode className="size-3.5 text-[#f54e00]" />
              <span className="truncate">monthly_revenue.sql</span>
              <span className="ml-auto rounded bg-[#efeee8] px-1 text-[9px] text-[#5a5852]">v3</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1.5 text-[#5a5852] hover:text-[#26251e] hover:bg-white/60 rounded">
              <IconCode className="size-3.5 text-[#a09c92]" />
              <span className="truncate">cohort_retention.sql</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1.5 text-[#5a5852] hover:text-[#26251e] hover:bg-white/60 rounded">
              <IconCode className="size-3.5 text-[#a09c92]" />
              <span className="truncate">churn_risk_score.sql</span>
            </div>
          </div>

          <div className="mt-4 mb-2 px-2 text-[10px] font-semibold tracking-wider text-[#807d72] uppercase">
            Data Snapshots
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center justify-between rounded px-2 py-1.5 text-[#26251e] bg-white border border-[#e6e5e0]">
              <span className="truncate text-[10.5px]">v2026.08_q3_clean.zip</span>
              <span className="text-[10px] text-[#807d72]">4.2 MB</span>
            </div>
          </div>

          <div className="mt-4 mb-2 px-2 text-[10px] font-semibold tracking-wider text-[#807d72] uppercase">
            Agent Action Pipeline
          </div>
          <div className="space-y-1.5 text-[10.5px]">
            <div className="flex items-center gap-1.5">
              <span className="rounded-full bg-[#dfa88f] px-2 py-0.5 font-mono text-[9px] font-semibold text-[#26251e] uppercase">
                Thinking
              </span>
              <span className="text-[#5a5852] truncate">Parse {"{{start_date}}"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="rounded-full bg-[#9fc9a2] px-2 py-0.5 font-mono text-[9px] font-semibold text-[#26251e] uppercase">
                Grep
              </span>
              <span className="text-[#5a5852] truncate">orders schema</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="rounded-full bg-[#c08532] px-2 py-0.5 font-mono text-[9px] font-semibold text-white uppercase">
                Done
              </span>
              <span className="text-[#1f8a65] font-medium">14ms · 12,480 rows</span>
            </div>
          </div>
        </div>

        {/* Center/Right Workbench Editor & Grid */}
        <div className="col-span-12 md:col-span-9 flex flex-col bg-white">
          {/* Tab Bar & Actions */}
          <div className="flex items-center justify-between border-b border-[#e6e5e0] bg-[#fafaf7] px-3">
            <div className="flex items-center">
              <div className="flex items-center gap-2 border-r border-[#e6e5e0] bg-white px-3 py-2 text-[#26251e] font-mono text-[11px] font-medium border-t-2 border-t-[#f54e00]">
                <span>monthly_revenue.sql</span>
                <span className="rounded bg-[#efeee8] px-1 text-[9px] text-[#5a5852]">commit: 94ab2f</span>
              </div>
              <div className="px-3 py-2 text-[#807d72] font-mono text-[11px] hover:text-[#26251e] cursor-pointer">
                + New Query
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-md bg-[#f54e00] px-3 py-1 font-sans text-[11px] font-medium text-white hover:bg-[#d04200] transition-colors"
              >
                <IconPlay className="size-2.5" />
                <span>Run (⌘Enter)</span>
              </button>
            </div>
          </div>

          {/* Monaco SQL Editor Area */}
          <div className="p-4 font-mono text-[12px] leading-relaxed text-[#26251e] bg-white">
            <div className="flex gap-4">
              <div className="flex flex-col text-[#a09c92] select-none text-right w-5">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
              </div>
              <div className="flex-1 overflow-x-auto">
                <div>
                  <span className="text-[#9333ea] font-medium">SELECT</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#0284c7]">date_trunc</span>
                  <span className="text-[#5a5852]">(</span>
                  <span className="text-[#d97706]">'month'</span>
                  <span className="text-[#5a5852]">, o.created_at) </span>
                  <span className="text-[#9333ea]">AS</span>
                  <span className="text-[#26251e]"> cohort_month,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#0284c7]">count</span>
                  <span className="text-[#5a5852]">(</span>
                  <span className="text-[#9333ea]">DISTINCT</span>
                  <span className="text-[#5a5852]"> o.user_id) </span>
                  <span className="text-[#9333ea]">AS</span>
                  <span className="text-[#26251e]"> active_buyers,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#0284c7]">sum</span>
                  <span className="text-[#5a5852]">(o.amount_usd) </span>
                  <span className="text-[#9333ea]">AS</span>
                  <span className="text-[#26251e]"> net_revenue</span>
                </div>
                <div>
                  <span className="text-[#9333ea] font-medium">FROM</span>
                  <span className="text-[#26251e]"> orders o</span>
                </div>
                <div>
                  <span className="text-[#9333ea] font-medium">WHERE</span>
                  <span className="text-[#26251e]"> o.created_at &gt;= </span>
                  <span className="inline-flex rounded bg-[#efeee8] border border-[#cfcdc4] px-1.5 py-0.2 text-[#26251e] font-semibold">
                    {"{{start_date}}"}
                  </span>
                  <span className="text-[#9333ea] font-medium"> AND</span>
                  <span className="text-[#26251e]"> o.tier = </span>
                  <span className="inline-flex rounded bg-[#efeee8] border border-[#cfcdc4] px-1.5 py-0.2 text-[#26251e] font-semibold">
                    {"{{tier_filter}}"}
                  </span>
                </div>
                <div>
                  <span className="text-[#9333ea] font-medium">GROUP BY</span>
                  <span className="text-[#26251e]"> 1 </span>
                  <span className="text-[#9333ea] font-medium">ORDER BY</span>
                  <span className="text-[#26251e]"> 1 </span>
                  <span className="text-[#9333ea] font-medium">DESC</span>
                  <span className="text-[#5a5852]">;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Table Panel */}
          <div className="flex-1 border-t border-[#e6e5e0] bg-[#fafaf7] flex flex-col">
            <div className="flex items-center justify-between border-b border-[#e6e5e0] bg-[#efeee8]/60 px-3 py-1.5">
              <div className="flex items-center gap-2">
                <span className="font-sans font-semibold text-[#26251e] text-[11px]">Results Grid</span>
                <span className="rounded bg-[#1f8a65]/10 px-1.5 py-0.2 font-mono text-[10px] text-[#1f8a65] font-medium">
                  ⚡ 14ms · 12,480 rows
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="rounded border border-[#e6e5e0] bg-white px-2 py-0.5 font-mono text-[10px] text-[#5a5852] hover:text-[#26251e] cursor-pointer">
                  Export CSV
                </span>
                <span className="rounded border border-[#e6e5e0] bg-white px-2 py-0.5 font-mono text-[10px] text-[#5a5852] hover:text-[#26251e] cursor-pointer">
                  Export JSON
                </span>
                <span className="rounded border border-[#cfcdc4] bg-white px-2 py-0.5 font-mono text-[10px] text-[#f54e00] font-medium hover:bg-[#fafaf7] cursor-pointer">
                  Share Link 🔗
                </span>
              </div>
            </div>

            <div className="overflow-x-auto font-mono text-[11px] bg-white">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#e6e5e0] bg-[#fafaf7] text-[#5a5852]">
                    <th className="px-3 py-2 font-medium">cohort_month</th>
                    <th className="px-3 py-2 font-medium">active_buyers</th>
                    <th className="px-3 py-2 font-medium">net_revenue</th>
                    <th className="px-3 py-2 font-medium">status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#efeee8] text-[#26251e]">
                  <tr>
                    <td className="px-3 py-1.5 text-[#0284c7]">2026-08-01</td>
                    <td className="px-3 py-1.5">3,492</td>
                    <td className="px-3 py-1.5 text-[#1f8a65] font-medium">$184,920.00</td>
                    <td className="px-3 py-1.5 text-[#807d72]">settled</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-1.5 text-[#0284c7]">2026-07-01</td>
                    <td className="px-3 py-1.5">3,120</td>
                    <td className="px-3 py-1.5 text-[#1f8a65] font-medium">$162,400.00</td>
                    <td className="px-3 py-1.5 text-[#807d72]">settled</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-1.5 text-[#0284c7]">2026-06-01</td>
                    <td className="px-3 py-1.5">2,980</td>
                    <td className="px-3 py-1.5 text-[#1f8a65] font-medium">$148,850.00</td>
                    <td className="px-3 py-1.5 text-[#807d72]">settled</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
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
            <li>PGlite WASM client DB</li>
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
