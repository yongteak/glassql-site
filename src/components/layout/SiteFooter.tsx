/**
 * @file SiteFooter.tsx
 * @description Cursor-styled footer on warm cream canvas (#f7f7f4) with 5-column layout.
 */
import { Link } from "react-router-dom";
import { APP_ORIGIN, CONTACT_EMAIL, OPERATOR, SITE_NAME } from "@/config/site";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e6e5e0] bg-[#f7f7f4] pt-16 pb-12 text-sm text-[#5a5852]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-12">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block" aria-label="GlasSQL Home">
              <BrandWordmark height={24} />
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-[#5a5852]">
              Workspace data operations without opening production databases.
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e6e5e0] bg-white px-2.5 py-0.5 font-mono text-[11px] text-[#26251e]">
                <span className="size-1.5 rounded-full bg-[#1f8a65]" />
                <span>All systems operational</span>
              </span>
            </div>
          </div>

          {/* Platform / Product */}
          <div>
            <div className="font-semibold text-[#26251e] text-xs uppercase tracking-wider mb-3">
              Product
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={APP_ORIGIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#26251e] transition-colors"
                >
                  Web Workbench (my.glassql.app)
                </a>
              </li>
              <li>
                <Link to="/download" className="hover:text-[#26251e] transition-colors">
                  macOS Desktop
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-[#26251e] transition-colors">
                  Product Tour
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#26251e] transition-colors">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link to="/docs/mcp-workspace-bridge" className="hover:text-[#26251e] transition-colors">
                  Cursor & Claude MCP
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="font-semibold text-[#26251e] text-xs uppercase tracking-wider mb-3">
              Resources
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/docs" className="hover:text-[#26251e] transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/docs/data-snapshots" className="hover:text-[#26251e] transition-colors">
                  Data Snapshots Guide
                </Link>
              </li>
              <li>
                <Link to="/docs/query-endpoints" className="hover:text-[#26251e] transition-colors">
                  Query Endpoints API
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#26251e] transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link to="/changelog" className="hover:text-[#26251e] transition-colors">
                  Changelog & Releases
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Security */}
          <div>
            <div className="font-semibold text-[#26251e] text-xs uppercase tracking-wider mb-3">
              Governance
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/pricing#enterprise" className="hover:text-[#26251e] transition-colors">
                  GlasSQL Enterprise
                </Link>
              </li>
              <li>
                <Link to="/docs/security-and-audit" className="hover:text-[#26251e] transition-colors">
                  3-Tier Audit Logs
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#26251e] transition-colors">
                  About & Mission
                </Link>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#26251e] transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="font-semibold text-[#26251e] text-xs uppercase tracking-wider mb-3">
              Legal
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/terms" className="hover:text-[#26251e] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#26251e] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <span className="text-[#807d72]">SOC 2 / ISO 27001 Ready</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#e6e5e0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#807d72]">
          <div>
            © {currentYear} {SITE_NAME}.
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
