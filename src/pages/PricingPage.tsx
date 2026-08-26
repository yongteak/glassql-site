/**
 * @file PricingPage.tsx
 * @description Cursor-styled pricing tiers (100% Free Workbench, Open Source Soon, Enterprise Governance).
 */
import { APP_ORIGIN, ENTERPRISE_EMAIL, PRODUCT_GA_VERSION } from "@/config/site";
import { useToast } from "@/context/ToastContext";
import { trackEvent } from "@/lib/analytics";
import { DocumentTitle } from "@/components/layout/DocumentTitle";
import { PageIntro, PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { IconArrowRight, IconCheck, IconExternalLink } from "@/components/ui/Icons";
import { SurfaceButton } from "@/components/ui/SurfaceButton";

const TIERS = [
  {
    id: "workbench",
    name: "GlasSQL Workbench",
    price: "$0",
    period: "free forever",
    description: "Full-featured SQL operations workbench for web and native desktop. Free for everyone.",
    cta: "Start Free in Web",
    ctaHref: APP_ORIGIN,
    isExternal: true,
    highlight: true,
    badge: "100% Free",
    features: [
      "Zero-install Web workbench (Workspace PG (WASM))",
      "Native Desktop app (macOS, Windows, Linux)",
      "Unlimited workspaces & collaborators",
      "Scoped snapshot extraction & queryable replicas",
      "Query Templates with commit versioning & owner lock",
      "Dynamic {{variable}} parameter binding",
      "Schema Explorer with interactive DDL generation",
      "Query Endpoints (authenticated HTTP REST API)",
      "Model Context Protocol (MCP) server for Cursor & Claude",
      "Community & Discord support",
    ],
  },
  {
    id: "opensource",
    name: "Open Source Core",
    price: "$0",
    period: "open source",
    description: "Self-hostable core engine and container distribution for complete infrastructure ownership.",
    cta: "Coming Soon",
    ctaHref: "",
    isExternal: false,
    disabled: true,
    highlight: false,
    badge: "Soon",
    features: [
      "Public source code repository",
      "Docker Compose & single-container deployments",
      "Self-hosted database gateway connectors",
      "Offline air-gapped local mode",
      "Encrypted .glassql-pack backup & export",
      "Permissive open source licensing (planned)",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Governance",
    price: "$0",
    period: "free during preview",
    description: "For regulated organizations requiring SAML SSO, 3-tier compliance auditing, and BYO storage.",
    cta: "Contact Enterprise Sales",
    ctaHref: `mailto:${ENTERPRISE_EMAIL}?subject=GlasSQL%20Enterprise%20Inquiry`,
    isExternal: false,
    disabled: false,
    highlight: false,
    badge: "Enterprise SKU",
    features: [
      "Everything in Workbench, plus:",
      "SAML 2.0 / OIDC Single Sign-On (SSO)",
      "3-Tier immutable compliance audit logs",
      "Access Entry request queues & auto-allow rules",
      "Bring-Your-Own S3 Storage (AWS / Cloudflare R2)",
      "Dedicated VPC database connection gateways",
      "Custom SLA (99.9%) & Security Review",
      "Dedicated technical account manager",
    ],
  },
];

const FAQS = [
  {
    q: "Is GlasSQL really completely free?",
    a: "Yes. GlasSQL is 100% free for both Web and Desktop workbenches. You can create workspaces, extract data snapshots, run Workspace PG (WASM) queries, publish Query Endpoints, and connect AI coding agents via MCP with zero cost.",
  },
  {
    q: `When will the Open Source core be available?`,
    a: `The open source repository, Docker images, and self-hosted deployment guides ship with GlasSQL ${PRODUCT_GA_VERSION} general availability.`,
  },
  {
    q: "Does GlasSQL require connecting my live production database to the cloud?",
    a: "No. GlasSQL operates by extracting scoped data snapshots which are hydrated inside Workspace PG (WASM) or DuckDB engines. Your live production database credentials are never shared with collaborators or external partners.",
  },
  {
    q: "How does the Model Context Protocol (MCP) work with Cursor?",
    a: "The GlasSQL MCP server allows AI assistants like Cursor and Claude to safely inspect your workspace schema definitions and run verified Query Templates within token-scoped perimeters.",
  },
];

export function PricingPage() {
  const { showComingSoon } = useToast();

  const handleCtaClick = (tierName: string) => {
    trackEvent("sign_up_click", { location: "pricing_card", text: tierName });
  };

  return (
    <>
      <DocumentTitle
        title="Pricing & Plans"
        description="GlasSQL is completely free to use. Explore our Web, Desktop, Open Source (Soon), and Enterprise capabilities."
      />

      <PageShell wide>
        <PageIntro
          title="Free and accessible for every data team."
          lead="Collaborate across workspaces, share live queryable replicas, and ship authenticated query endpoints with zero database credential exposure."
        />

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
          {TIERS.map((tier) => {
            const isFeatured = tier.highlight;
            const isDisabled = tier.disabled;

            return (
              <div
                key={tier.id}
                id={tier.id}
                className={`relative flex flex-col justify-between rounded-xl p-8 transition-all ${
                  isFeatured
                    ? "bg-[#26251e] text-[#f7f7f4] border border-[#26251e] shadow-none"
                    : "bg-white text-[#26251e] border border-[#e6e5e0] hover:border-[#cfcdc4]"
                }`}
              >
                <div>
                  {tier.badge && (
                    <div
                      className={`mb-4 inline-block rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-wider ${
                        isFeatured
                          ? "bg-white/10 text-white"
                          : "bg-[#efeee8] text-[#26251e]"
                      }`}
                    >
                      {tier.badge}
                    </div>
                  )}

                  <h2 className={`text-2xl font-normal ${isFeatured ? "text-white" : "text-[#26251e]"}`}>
                    {tier.name}
                  </h2>
                  <p className={`mt-2 text-xs leading-relaxed font-normal ${isFeatured ? "text-[#a09c92]" : "text-[#5a5852]"}`}>
                    {tier.description}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className={`text-4xl font-normal tracking-tight ${isFeatured ? "text-white" : "text-[#26251e]"}`}>
                      {tier.price}
                    </span>
                    <span className={`text-xs font-mono ml-1 ${isFeatured ? "text-[#a09c92]" : "text-[#807d72]"}`}>
                      {tier.period}
                    </span>
                  </div>

                  <div className={`mt-8 pt-6 border-t ${isFeatured ? "border-white/10" : "border-[#e6e5e0]"}`}>
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-4 ${isFeatured ? "text-[#a09c92]" : "text-[#807d72]"}`}>
                      Included Capabilities
                    </div>
                    <ul className={`space-y-3 text-xs font-normal ${isFeatured ? "text-zinc-200" : "text-[#5a5852]"}`}>
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <IconCheck className={`size-4 shrink-0 mt-0.5 ${isFeatured ? "text-[#f54e00]" : "text-[#1f8a65]"}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  {isDisabled ? (
                    <button
                      type="button"
                      onClick={() => showComingSoon("github")}
                      className="w-full text-center py-2.5 font-sans text-sm font-medium rounded-md bg-[#efeee8] text-[#807d72] hover:bg-[#e6e5e0] hover:text-[#26251e] transition-colors"
                    >
                      <span>{tier.cta}</span>
                    </button>
                  ) : tier.isExternal ? (
                    <a
                      href={tier.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleCtaClick(tier.name)}
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-md py-2.5 font-sans text-sm font-medium transition-colors ${
                        isFeatured
                          ? "bg-[#f54e00] text-white hover:bg-[#d04200]"
                          : "border border-[#e6e5e0] bg-white text-[#26251e] hover:bg-[#fafaf7] hover:border-[#cfcdc4]"
                      }`}
                    >
                      <span>{tier.cta}</span>
                      <IconExternalLink className="size-3.5" />
                    </a>
                  ) : (
                    <a
                      href={tier.ctaHref}
                      onClick={() => handleCtaClick(tier.name)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#26251e] py-2.5 font-sans text-sm font-medium text-[#f7f7f4] hover:bg-[#383730] transition-colors"
                    >
                      <span>{tier.cta}</span>
                      <IconArrowRight className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise & Security Inquiry Box */}
        <div id="enterprise" className="rounded-xl border border-[#e6e5e0] bg-white p-8 md:p-10 mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-normal text-[#26251e]">
                GlasSQL Enterprise Partner SKU
              </h3>
              <p className="mt-3 text-sm text-[#5a5852] font-normal leading-relaxed">
                Available directly or through software catalog vendor onboarding. We provide custom Master Service Agreements (MSA), SOC 2 compliance documentation, and dedicated VPC database gateway setup.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <SurfaceButton href={`mailto:${ENTERPRISE_EMAIL}`} tone="primary" size="md">
                <span>Inquire with Enterprise Team</span>
                <IconArrowRight className="size-3.5" />
              </SurfaceButton>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-normal text-[#26251e]">Frequently asked questions</h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-[#e6e5e0] bg-white p-6">
                <h3 className="text-base font-medium text-[#26251e]">{faq.q}</h3>
                <p className="mt-2 text-sm text-[#5a5852] font-normal leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </PageShell>

      <ClosingCta />
    </>
  );
}
