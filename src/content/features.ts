/**
 * @file features.ts
 * @description GlasSQL product feature chapters for the Home landing page and Product Tour.
 */

export type ProductMockVariant =
  | "query-editor"
  | "schema-explorer"
  | "data-snapshot"
  | "query-endpoints"
  | "mcp-bridge"
  | "audit-governance"
  | "shared-dataset"
  | "dual-runtime";

export type FeatureChapterContent = {
  /** URL hash and React key */
  id: string;
  /** Section kicker */
  kicker: string;
  /** Short headline */
  title: string;
  /** 2–3 sentences */
  body: string;
  /** Sub-feature pills */
  pills?: string[];
  /** Product chrome mock shown in the device frame */
  mock: ProductMockVariant;
  /** Device chrome around the mock */
  frame: "web" | "mac" | "terminal";
  /** Reverse text/media on large screens */
  reverse?: boolean;
};

/** Home highlights core pillars */
export const HOME_CHAPTERS: FeatureChapterContent[] = [
  {
    id: "data-snapshot",
    kicker: "Zero-Risk Data Sharing",
    title: "Share queryable replicas instead of production DB credentials.",
    body: "Extract only the necessary tables and date ranges into compressed, encrypted snapshots. Recipients query reproducible local instances in their browser or desktop with zero production database exposure.",
    pills: ["Scoped Extraction", "PGlite WASM Engine", "No VPN Required", "Reproducible Replicas"],
    mock: "data-snapshot",
    frame: "web",
  },
  {
    id: "query-workbench",
    kicker: "Collaborative SQL Workbench",
    title: "Versioned query templates with dynamic variable binding.",
    body: "Build reusable SQL assets with {{parameter}} interpolation, Monaco code editor, query commit history, and owner locking. Temporary query tabs seamlessly graduate into team assets.",
    pills: ["Commit-based Versioning", "Variable {{key}} Binding", "Schema DDL Generator", "Monaco Editor"],
    mock: "query-editor",
    frame: "web",
    reverse: true,
  },
  {
    id: "query-endpoints",
    kicker: "Query Endpoints & Automation",
    title: "Turn approved SQL queries into secure HTTP APIs.",
    body: "Expose parametrized queries as authenticated JSON and CSV endpoints with rate limiting, server-side parameter validation, and per-minute usage analytics. Arbitrary SQL execution is strictly forbidden.",
    pills: ["HTTP API Generator", "JSON & CSV Streaming", "Server-side Validation", "Slack Integration"],
    mock: "query-endpoints",
    frame: "web",
  },
  {
    id: "mcp-ai",
    kicker: "MCP & Dual Client Runtimes",
    title: "Connect AI coding agents to scoped workspace data.",
    body: "Stream workspace schemas, query templates, and execution capabilities directly to Cursor, VS Code, and Claude via the Model Context Protocol (MCP). Work in browser or fully offline with desktop.",
    pills: ["Cursor & Claude MCP", "Tauri v2 Desktop", "Air-Gapped Local Mode", "DuckDB & Native Drivers"],
    mock: "mcp-bridge",
    frame: "web",
    reverse: true,
  },
];

/** Full Product Tour chapters */
export const PRODUCT_CHAPTERS: FeatureChapterContent[] = [
  {
    id: "snapshots",
    kicker: "Data Snapshots & Distribution",
    title: "Safe data pipelines for internal teams and external partners",
    body: "Curate data slices directly from production or staging, bundle them into verifiable snapshots, and load them into embedded PostgreSQL WASM instances. Your production database stays completely isolated.",
    pills: ["Client-Side WASM", "Instant Hydration", "Granular Masking Ready", "ZIP Storage Cache"],
    mock: "data-snapshot",
    frame: "web",
  },
  {
    id: "query-templates",
    kicker: "Query Templates & History",
    title: "Full-featured SQL assets with version history and owner lock",
    body: "Organize queries in hierarchical folders with favorites, commit-level diffs, and execution memos. Never lose context on why a query was written or how its parameters should be configured.",
    pills: ["Tree Organization", "Commit Timeline", "Owner Lock", "Shared Memos"],
    mock: "query-editor",
    frame: "web",
    reverse: true,
  },
  {
    id: "schema-explorer",
    kicker: "Schema Explorer & Documentation",
    title: "Interactive schema inspection with one-click shareable links",
    body: "Explore tables, columns, indexes, foreign keys, and DDL definitions. Generate SELECT, INSERT, UPDATE, DELETE, and JOIN templates instantly or share read-only schema documentation with teammates.",
    pills: ["Schema Tree", "DDL Generator", "Column Statistics", "Shareable Schema Docs"],
    mock: "schema-explorer",
    frame: "web",
  },
  {
    id: "variables-endpoints",
    kicker: "Dynamic Variables & Query Endpoints",
    title: "Bridge SQL analysis into automated workflows and APIs",
    body: "Define workspace-scoped and query-scoped {{variable}} tokens with type enforcement. Publish query templates as production-grade REST APIs accessible via simple Bearer tokens.",
    pills: ["Workspace Variables", "Query Endpoints", "API Token Scope", "CSV & JSON Export"],
    mock: "query-endpoints",
    frame: "web",
    reverse: true,
  },
  {
    id: "mcp-workspace-bridge",
    kicker: "AI & Model Context Protocol",
    title: "Give Cursor and LLMs real-time context without security risks",
    body: "Use the GlasSQL MCP server to let AI assistants read schema definitions, generate verified query templates, and inspect execution results inside an auditable perimeter.",
    pills: ["MCP Stdio & HTTP", "Cursor Deep Link", "Token-scoped Access", "Audit Trail for AI"],
    mock: "mcp-bridge",
    frame: "web",
  },
  {
    id: "shared-dataset",
    kicker: "Shared Datasets & Big Data",
    title: "Query multi-million row Parquet datasets without replication",
    body: "Publish analytical datasets to S3-compatible object storage as columnar Parquet files. Query large-scale data using DuckDB engine without copying full database snapshots to individual clients.",
    pills: ["Parquet Columnar", "S3 Storage", "DuckDB Engine", "Zero-Replication Queries"],
    mock: "shared-dataset",
    frame: "web",
    reverse: true,
  },
  {
    id: "governance-audit",
    kicker: "3-Tier Audit & Governance",
    title: "Complete compliance and accountability across all workspaces",
    body: "Track every query execution, data export, and share link access. Role-based access control (Admin, Editor, Viewer), access entry queues, and SAML SSO keep enterprise data governance intact.",
    pills: ["3-Tier Audit Logs", "Access Entry Queue", "SAML SSO / OIDC", "BYO S3 Storage"],
    mock: "audit-governance",
    frame: "web",
  },
  {
    id: "dual-runtime",
    kicker: "Web & Desktop Dual Runtimes",
    title: "Browser convenience meets desktop native power",
    body: "GlasSQL Web requires zero installation and runs in any modern browser. GlasSQL Desktop (Tauri v2) offers native database connections, air-gapped offline mode, and encrypted .glassql-pack backups.",
    pills: ["Tauri v2 Native", "PGlite & DuckDB", "Air-Gapped Local Mode", "Encrypted Backup Packs"],
    mock: "dual-runtime",
    frame: "mac",
    reverse: true,
  },
];
