/**
 * @file blog.ts
 * @description Product announcement and engineering blog posts for GlasSQL.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  body: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "introducing-glassql",
    title: "Introducing GlasSQL: Workspace Data Operations",
    excerpt: "Stop handing out direct database credentials. A new platform to curate snapshots, run SQL, and ship results collaboratively.",
    date: "2026-08-24",
    dateLabel: "August 24, 2026",
    body: [
      {
        type: "p",
        text: "For decades, database collaboration has been stuck in a false binary: either you hand over live database credentials and VPN access to analysts, partners, and AI tools—or you dump static, stale CSV files into spreadsheets and chat channels.",
      },
      {
        type: "h2",
        text: "The Power of Queryable Replicas",
      },
      {
        type: "p",
        text: "GlasSQL introduces a third path: scoped, queryable replicas. Data owners extract bounded slices of data into encrypted snapshots. Consumers open them in browser or desktop using Workspace PG (WASM). Everyone operates on the same reproducible context with zero production database risk.",
      },
      {
        type: "h2",
        text: "A Unified Execution and Delivery Chain",
      },
      {
        type: "p",
        text: "GlasSQL brings query templates, commit history, dynamic variable binding, schema exploration, REST query endpoints, and Model Context Protocol (MCP) bridges into one cohesive workflow. You no longer need five disconnected tools to analyze, automate, and share data.",
      },
    ],
  },
  {
    slug: "why-queryable-replicas",
    title: "Why Queryable Replicas Beat Database Credentials",
    excerpt: "How client-side PostgreSQL engines solve security, performance, and reproducibility for distributed teams.",
    date: "2026-08-16",
    dateLabel: "August 16, 2026",
    body: [
      {
        type: "p",
        text: "When you give someone read-only database credentials, you inherit three intractable problems: connection pool exhaustion, unindexed runaway queries locking production tables, and credential sprawl across personal laptops.",
      },
      {
        type: "h2",
        text: "Isolated Local Execution",
      },
      {
        type: "p",
        text: "With GlasSQL snapshots, queries run entirely on the recipient's machine using Workspace PG (WASM) or DuckDB. If an analyst writes an expensive triple-nested JOIN, it consumes only local CPU cycles. The production cluster never notices.",
      },
      {
        type: "h2",
        text: "Deterministic Time Travel",
      },
      {
        type: "p",
        text: "Because snapshots represent an exact point in time, everyone looking at a snapshot sees the identical numbers. Debates over whether numbers shifted between 9:00 AM and 10:00 AM disappear completely.",
      },
    ],
  },
  {
    slug: "bridging-ai-agents-with-mcp",
    title: "Connecting AI Coding Agents via Model Context Protocol",
    excerpt: "How Cursor, VS Code, and Claude can write and test verified SQL queries without ever touching production credentials.",
    date: "2026-08-08",
    dateLabel: "August 8, 2026",
    body: [
      {
        type: "p",
        text: "AI models write great SQL, but they lack awareness of your actual schema, foreign key relations, and custom enum definitions. Pasting entire DDLs into prompt windows is tedious and insecure.",
      },
      {
        type: "h2",
        text: "Safe Context via MCP",
      },
      {
        type: "p",
        text: "The GlasSQL MCP server provides AI tools like Cursor and Claude with real-time access to workspace schema trees and query templates. Agents can draft queries, test them against local snapshots, and save them as team templates—all governed by strict token scopes.",
      },
    ],
  },
];
