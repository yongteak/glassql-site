/**
 * @file analytics.ts
 * @description dataLayer helpers for GTM/GA4. Safe to call unconditionally.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function push(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/**
 * Push a virtual page_view on SPA route change. Call from a useLocation effect.
 */
export function trackPageView(path: string, title: string) {
  push({
    event: "page_view",
    page_path: path,
    page_title: title,
    page_location: typeof window !== "undefined" ? `${window.location.origin}${path}` : path,
  });
}

/**
 * Push a custom event with arbitrary parameters.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  push({ event: name, ...params });
}
