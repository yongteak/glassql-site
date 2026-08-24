/**
 * @file downloads.ts
 * @description Client and integration destinations for GlasSQL (Web, macOS, Windows, Linux, MCP).
 */

import { APP_ORIGIN } from "@/config/site";

export type DownloadTarget = {
  /** Stable id used in keys and anchors */
  id: "web" | "macos" | "windows" | "linux" | "mcp";
  /** Platform label */
  name: string;
  /** One-line status copy */
  description: string;
  /** Destination. Empty string means stub — button visible, disabled or prevented */
  href: string;
  /** Live destination vs coming soon */
  available: boolean;
  /** True when the button is shown but the href is not a real public file yet */
  stub: boolean;
  /** Visible CTA label */
  cta: string;
  /** Secondary CTA or badge */
  badge?: string;
  /** Optional code or config snippet */
  command?: string;
  /** Copy for the empty preview well when Soon */
  soonHint?: string;
};

export const DOWNLOADS: DownloadTarget[] = [
  {
    id: "web",
    name: "Web Workbench",
    description: "Zero-install full SQL workbench in modern browsers. Powered by PGlite WASM.",
    href: APP_ORIGIN,
    available: true,
    stub: false,
    cta: "Open web app",
    badge: "Cloud & Web",
  },
  {
    id: "macos",
    name: "macOS Desktop",
    description: "Native Tauri v2 desktop app. Full offline mode, air-gap support, tray menu, and native drivers.",
    href: "",
    available: true,
    stub: true,
    cta: "Download for macOS",
    badge: "v0.1.0 Apple Silicon / Intel",
  },
  {
    id: "windows",
    name: "Windows Desktop",
    description: "GlasSQL Desktop for Windows x64 & ARM64 with native database connectors.",
    href: "",
    available: false,
    stub: false,
    cta: "Soon",
    soonHint: "Windows desktop binary builds will be published soon.",
    badge: "Coming Soon",
  },
  {
    id: "linux",
    name: "Linux Desktop",
    description: "GlasSQL Desktop for Linux distributions (.deb, .rpm, and AppImage).",
    href: "",
    available: false,
    stub: false,
    cta: "Soon",
    soonHint: "Linux desktop package builds will be published soon.",
    badge: "Coming Soon",
  },
  {
    id: "mcp",
    name: "MCP Workspace Bridge",
    description: "Streamable HTTP & stdio Model Context Protocol for Cursor, VS Code, and Claude.",
    href: "/docs/mcp-workspace-bridge",
    available: false,
    stub: false,
    cta: "View MCP Setup",
    badge: "Coming Soon",
    command: "npx @glassql/mcp-server --workspace <workspace-id>",
  },
];

/** Featured device platforms on the home row */
export type HomePlatformId = "web" | "macos";

export const HOME_PLATFORMS = DOWNLOADS.filter(
  (item): item is DownloadTarget & { id: HomePlatformId } =>
    item.id === "web" || item.id === "macos",
);

/** Secondary integrations row on home */
export type HomeIntegrationId = "mcp" | "windows" | "linux";

export const HOME_INTEGRATIONS = DOWNLOADS.filter(
  (item): item is DownloadTarget & { id: HomeIntegrationId } =>
    item.id === "mcp" || item.id === "windows" || item.id === "linux",
);
