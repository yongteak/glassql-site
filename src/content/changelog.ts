/**
 * @file changelog.ts
 * @description Product release timeline for GlasSQL.
 */

export type ChangelogEntry = {
  version: string;
  dateLabel: string;
  title: string;
  items: string[];
};

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "v0.1.0",
    dateLabel: "August 2026",
    title: "Initial Public Preview: Web & Desktop Runtimes",
    items: [
      "Public marketing origin at glassql.app and web workbench at my.glassql.app",
      "Embedded Workspace PG (WASM) client engine with instant snapshot hydration",
      "Query Templates with commit history, folder hierarchy, and owner locks",
      "Variable binding syntax {{key}} with workspace and query scopes",
      "Schema Explorer with interactive DDL generation and data preview",
      "Query Endpoints: publish approved SQL queries as authenticated HTTP APIs",
      "Model Context Protocol (MCP) server for Cursor and Claude integration",
      "3-tier audit logs (Workspace, Platform, Share/Export) and Access Entry queue",
      "GlasSQL Desktop preview build for macOS (Tauri v2)",
    ],
  },
  {
    version: "v0.0.9",
    dateLabel: "July 2026",
    title: "Shared Datasets & Gateway Expansion",
    items: [
      "S3 Parquet Shared Datasets with DuckDB zero-copy remote querying",
      "Local Gateway connections for PostgreSQL, MySQL, SQLite, MongoDB, and Redis",
      "Schema document public share links with password and expiry protections",
      "CSV, JSON, and INSERT SQL export serialization utilities",
    ],
  },
];
