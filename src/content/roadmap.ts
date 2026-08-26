/**
 * @file roadmap.ts
 * @description Public product roadmap through 1.0 GA.
 */
import { PRODUCT_GA_VERSION, PRODUCT_VERSION } from "@/config/site";

export type RoadmapStatus = "now" | "next" | "planned";

export type RoadmapMilestone = {
  id: string;
  status: RoadmapStatus;
  when: string;
  title: string;
  summary: string;
  items: string[];
};

export const ROADMAP_STATUS_LABEL: Record<RoadmapStatus, string> = {
  now: "Now",
  next: "Next",
  planned: "1.0 GA",
};

export const ROADMAP: RoadmapMilestone[] = [
  {
    id: "now",
    status: "now",
    when: "August 2026",
    title: "Web workbench and macOS desktop",
    summary: `Shipping today as v${PRODUCT_VERSION}. Scoped snapshots, SQL in the browser, and a native macOS preview.`,
    items: [
      "Web workbench at my.glassql.app",
      "macOS Desktop preview (Tauri v2)",
      "Query templates, snapshots, schema explorer, and query endpoints",
      "3-tier audit logs and MCP workspace bridge (preview)",
    ],
  },
  {
    id: "september-clients",
    status: "next",
    when: "September 2026",
    title: "Windows, Linux, and public MCP",
    summary: "The same workspace on more desktops, plus a public MCP listing for Cursor and Claude.",
    items: [
      "GlasSQL Desktop for Windows",
      "GlasSQL Desktop for Linux",
      "Public MCP setup and connector listing",
    ],
  },
  {
    id: "october-ga",
    status: "planned",
    when: "October 2026",
    title: `${PRODUCT_GA_VERSION} general availability`,
    summary: `GlasSQL ${PRODUCT_GA_VERSION} GA. Preview ends. Open source core and official channels go public.`,
    items: [
      `GlasSQL ${PRODUCT_GA_VERSION} GA on web and desktop`,
      "Open source core goes public on GitHub",
      "Official X account for release notes",
      "Self-hosted Docker images and deployment guides",
    ],
  },
];
