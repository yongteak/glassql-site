/**
 * @file site.ts
 * @description Marketing site identity, public URLs, and operator constants for GlasSQL.
 */

/** Canonical product display name */
export const SITE_NAME = "GlasSQL";

/** Current public product version shown on marketing surfaces */
export const PRODUCT_VERSION = "0.9.0";

/** Open source and official channels ship with this release */
export const PRODUCT_GA_VERSION = "1.0";

/** Product subtitle / descriptor */
export const SITE_SUBTITLE = "Workspace Data Operations Platform";

/** Home hero line */
export const SITE_TAGLINE = "Query snapshots—not production.";

/** Default meta description */
export const SITE_DESCRIPTION =
  "GlasSQL is an open source, free workspace data operations platform. Publish scoped snapshots, run SQL, explore schemas, and ship queryable replicas with 3-tier audits, MCP AI integration, and query endpoints.";

/** Production app origin. Header CTA, Hero primary CTA, and web download point here */
export const APP_ORIGIN = "https://my.glassql.app";

/** App login deep link */
export const APP_LOGIN_URL = `${APP_ORIGIN}/login`;

/** Marketing origin (root domains: glassql.app & www.glassql.app) */
export const SITE_ORIGIN = "https://glassql.app";

/** Public documentation origin / link */
export const DOCS_ORIGIN = "/docs";

/** MCP Connector spec and URL */
export const MCP_DOCS_URL = "/docs/mcp-workspace-bridge";

/** Support and enterprise email */
export const CONTACT_EMAIL = "hello@glassql.app";
export const ENTERPRISE_EMAIL = "enterprise@glassql.app";

/** Legal / operator info */
export const OPERATOR = {
  nameEn: "GlasSQL Team",
  nameKo: "GlasSQL 팀",
  email: "hello@glassql.app",
  enterpriseEmail: "enterprise@glassql.app",
  effectiveDateIso: "2026-08-24",
} as const;

/** Primary header navigation */
export const NAV_LINKS = [
  { to: "/product", label: "Product" },
  { to: "/download", label: "Download" },
  { to: "/pricing", label: "Pricing" },
  { to: "/docs", label: "Docs" },
  { to: "/blog", label: "Blog" },
  { to: "/roadmap", label: "Roadmap" },
] as const;

/** Social links */
export const SOCIAL_LINKS = [
  { id: "github", label: "GitHub", href: "https://github.com" },
  { id: "x", label: "X", href: "https://x.com" },
] as const;
