/**
 * @file SiteLayout.tsx
 * @description Master layout wrapper for all routes with warm cream canvas (#f7f7f4).
 */
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";
import { ScrollToTop } from "./ScrollToTop";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f4] text-[#26251e]">
      <ScrollToTop />
      <SiteHeader />
      <main id="content" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
