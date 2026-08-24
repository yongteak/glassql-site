/**
 * @file docs.ts
 * @description GlasSQL product documentation articles and guides.
 */

export type DocBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "code"; text: string };

export type DocArticle = {
  slug: string;
  title: string;
  summary: string;
  body: DocBlock[];
};

export const DOC_ARTICLES: DocArticle[] = [
  {
    slug: "getting-started",
    title: "Getting started with GlasSQL",
    summary: "Open the web app, set up your workspace, and run queries instantly without installing database drivers.",
    body: [
      {
        type: "p",
        text: "GlasSQL operates around workspaces rather than raw database connections. Start by opening the web app at my.glassql.app, create a workspace for your team or project, and invite members with scoped roles.",
      },
      {
        type: "h2",
        text: "Web vs Desktop Runtimes",
      },
      {
        type: "p",
        text: "GlasSQL provides two coordinated client experiences: GlasSQL Web (runs client-side via PGlite WASM with zero installation) and GlasSQL Desktop (built with Tauri v2 for offline local execution, native DB drivers, and air-gapped environments). Both share identical query templates, variable definitions, and snapshot replay capabilities.",
      },
      {
        type: "h2",
        text: "Your First Query and Snapshot",
      },
      {
        type: "p",
        text: "In your workspace, open the Schema Explorer or click '+ New Query'. You can run SQL directly against an imported data snapshot, connect to external databases through the local gateway, or query remote Parquet datasets using DuckDB.",
      },
      {
        type: "code",
        text: "-- Example parameterized query in GlasSQL\nSELECT \n  date_trunc('day', created_at) AS date,\n  count(*) AS total_orders,\n  sum(amount) AS total_revenue\nFROM orders\nWHERE created_at >= {{start_date}}\n  AND status = 'completed'\nGROUP BY 1\nORDER BY 1 DESC;",
      },
    ],
  },
  {
    slug: "data-snapshots",
    title: "Data Snapshots & Queryable Replicas",
    summary: "Curate scoped data slices and share verifiable, queryable replicas without opening production DB credentials.",
    body: [
      {
        type: "p",
        text: "Instead of granting direct network or credential access to production databases, data owners use GlasSQL to capture targeted tables and date ranges into compressed snapshot archives. The snapshot is stored in secure workspace object storage.",
      },
      {
        type: "h2",
        text: "Embedded PGlite Engine",
      },
      {
        type: "p",
        text: "When a team member or client opens a snapshot, GlasSQL hydrates an in-memory PostgreSQL instance powered by PGlite WASM (or pglite-oxide in desktop mode). All queries execute locally with 100% PostgreSQL SQL dialect compatibility.",
      },
      {
        type: "h2",
        text: "Zero VPN and Zero Credential Leaks",
      },
      {
        type: "p",
        text: "Because data consumers interact with the reproducible replica rather than the live database, there is zero risk of accidental table locks, performance degradation, or credential leakage across corporate boundaries.",
      },
    ],
  },
  {
    slug: "query-templates-and-variables",
    title: "Query Templates & Variable Binding",
    summary: "Build reusable, versioned SQL assets with {{key}} parameter interpolation and owner locking.",
    body: [
      {
        type: "p",
        text: "Query Templates are first-class assets in GlasSQL. Unlike throwaway scratchpads in standard SQL editors, templates support hierarchical folder organization, git-like commit history, execution memos, and owner locks to prevent accidental modifications.",
      },
      {
        type: "h2",
        text: "Variable Syntax and Scope",
      },
      {
        type: "p",
        text: "Use double-curly syntax {{variable_name}} to define parameters. GlasSQL supports both workspace-scoped variables (shared defaults across all queries) and query-scoped variables with strict type validation (text, number, date, boolean, and enum lists).",
      },
      {
        type: "code",
        text: "SELECT user_id, email, plan, created_at\nFROM users\nWHERE tenant_id = {{tenant_id}}\n  AND plan IN ({{selected_plans}})\nLIMIT {{limit_rows}};",
      },
    ],
  },
  {
    slug: "query-endpoints",
    title: "Query Endpoints & HTTP APIs",
    summary: "Publish approved SQL queries as secured REST endpoints with automatic JSON and CSV serialization.",
    body: [
      {
        type: "p",
        text: "Turn any saved Query Template into an HTTP API with a single click. GlasSQL Query Endpoints generate a unique workspace slug and URL, enforcing server-side parameter checks and rate limits.",
      },
      {
        type: "h2",
        text: "Calling an Endpoint",
      },
      {
        type: "p",
        text: "Requests to Query Endpoints are authenticated using workspace API tokens. Callers pass parameters in query strings or JSON request bodies. Arbitrary SQL injection is architecturally impossible because only the pre-approved template query is executed.",
      },
      {
        type: "code",
        text: "curl -X POST https://api.glassql.app/v1/workspaces/ws_84920/endpoints/revenue-summary \\\n  -H 'Authorization: Bearer gk_live_920fba...84' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"start_date\": \"2026-01-01\", \"status\": \"completed\"}'",
      },
    ],
  },
  {
    slug: "mcp-workspace-bridge",
    title: "Model Context Protocol (MCP) Integration",
    summary: "Connect Cursor, VS Code, and Claude directly to your workspace data and schema context safely.",
    body: [
      {
        type: "p",
        text: "GlasSQL includes built-in support for Anthropic's Model Context Protocol (MCP). Through Streamable HTTP and stdio connectors, AI coding agents can inspect schema trees, list verified query templates, and safely execute approved queries.",
      },
      {
        type: "h2",
        text: "Configuring Cursor / Claude",
      },
      {
        type: "p",
        text: "Add the GlasSQL MCP server to your Cursor or Claude Desktop configuration. The bridge operates strictly within the permissions of your generated workspace access token.",
      },
      {
        type: "code",
        text: "{\n  \"mcpServers\": {\n    \"glassql\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@glassql/mcp-server\"],\n      \"env\": {\n        \"GLASSQL_WORKSPACE_ID\": \"ws_your_workspace_id\",\n        \"GLASSQL_MCP_TOKEN\": \"gkt_your_token_here\"\n      }\n    }\n  }\n}",
      },
    ],
  },
  {
    slug: "shared-datasets",
    title: "Shared Datasets & Parquet Analytics",
    summary: "Query multi-gigabyte analytical datasets hosted on S3 using embedded DuckDB.",
    body: [
      {
        type: "p",
        text: "For large-scale analytical tables with millions of rows, full snapshot downloads can become inefficient. GlasSQL Shared Datasets allow administrators to publish columnar Parquet files directly to S3-compatible storage.",
      },
      {
        type: "h2",
        text: "Zero-Replication Querying",
      },
      {
        type: "p",
        text: "The web and desktop clients use an embedded DuckDB engine to perform column-pruned range requests over HTTP, streaming and aggregating only the necessary data blocks. 1 million rows of Parquet require as little as ~16MB of transferred data.",
      },
    ],
  },
  {
    slug: "security-and-audit",
    title: "Security, Governance & 3-Tier Auditing",
    summary: "Enterprise data sovereignty with row-level security, access entry queues, and comprehensive audit trails.",
    body: [
      {
        type: "p",
        text: "GlasSQL is engineered for regulated environments where data access must be strictly verified and audited. All backend operations utilize Supabase Row Level Security (RLS) and server-enforced RPC functions.",
      },
      {
        type: "h2",
        text: "3-Tier Audit Logging",
      },
      {
        type: "p",
        text: "GlasSQL maintains three distinct audit streams: Workspace Audit (membership changes, template edits, variable updates), Platform Audit (credential rotations, authentication, gateway events), and Share/Export Audit (CSV/JSON downloads, public link views, ticket generation).",
      },
      {
        type: "h2",
        text: "Access Entry Approval Queue",
      },
      {
        type: "p",
        text: "Public workspace invite links and email invites route into a single unified Access Entry queue. Team admins must approve each request before any data or schema access is granted.",
      },
    ],
  },
];
