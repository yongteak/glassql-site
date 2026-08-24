/**
 * @file SiteHeader.tsx
 * @description Cursor-styled navigation bar with warm cream canvas (#f7f7f4) and Cursor Orange CTA.
 */
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { APP_ORIGIN, NAV_LINKS } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { IconArrowRight, IconExternalLink } from "@/components/ui/Icons";
import { SocialLinks } from "./SocialLinks";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenAppClick = () => {
    trackEvent("sign_up_click", { location: "header", text: "Open app" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e6e5e0] bg-[#f7f7f4]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand Lockup */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          aria-label="GlasSQL Home"
        >
          <BrandWordmark height={24} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 font-sans text-[14px]">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md transition-colors ${
                  isActive
                    ? "text-[#26251e] font-medium bg-[#efeee8]"
                    : "text-[#5a5852] hover:text-[#26251e] hover:bg-[#efeee8]/60"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <SocialLinks className="mr-2" />
          
          <Link
            to="/download"
            className="rounded-md px-3.5 py-1.5 font-sans text-[14px] font-medium text-[#5a5852] hover:text-[#26251e] hover:bg-[#efeee8] transition-colors"
          >
            Download
          </Link>

          <a
            href={APP_ORIGIN}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOpenAppClick}
            className="inline-flex items-center gap-1.5 rounded-md bg-[#f54e00] px-4 py-1.5 font-sans text-[14px] font-medium text-white hover:bg-[#d04200] transition-colors"
          >
            <span>Open App</span>
            <IconExternalLink className="size-3 text-white/90" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={APP_ORIGIN}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOpenAppClick}
            className="inline-flex items-center gap-1 rounded-md bg-[#f54e00] px-3 py-1 font-sans text-xs font-medium text-white"
          >
            <span>Open App</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 text-[#5a5852] hover:text-[#26251e] hover:bg-[#efeee8]"
            aria-label="Toggle navigation menu"
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#e6e5e0] bg-[#fafaf7] px-6 py-4 sm:hidden">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm ${
                    isActive ? "bg-[#efeee8] text-[#26251e] font-medium" : "text-[#5a5852] hover:text-[#26251e]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3 mt-2 border-t border-[#e6e5e0] flex items-center justify-between">
              <SocialLinks />
              <a
                href={APP_ORIGIN}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleOpenAppClick}
                className="inline-flex items-center gap-1 text-sm text-[#f54e00] font-medium"
              >
                <span>Launch Web Workbench</span>
                <IconArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
