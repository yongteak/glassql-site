/**
 * @file legal.ts
 * @description English Terms and Privacy for the GlasSQL marketing site.
 */
import { OPERATOR, SITE_NAME } from "@/config/site";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  path: string;
  effectiveDateLabel: string;
  intro: string;
  sections: LegalSection[];
};

const contact = OPERATOR.email;
const product = SITE_NAME;
const operator = OPERATOR.nameEn;

export const TERMS: LegalDocument = {
  title: "Terms of Service",
  path: "/terms",
  effectiveDateLabel: `Effective date: ${OPERATOR.effectiveDateIso}`,
  intro: `${product} Web, Desktop, and API services share the same terms. These Terms apply to all clients and integrations.`,
  sections: [
    {
      heading: "1. Purpose",
      blocks: [
        {
          type: "p",
          text: `These Terms set forth the conditions for using ${product} (the “Service”), establishing the rights, duties, and responsibilities of the operator and registered users.`,
        },
      ],
    },
    {
      heading: "2. Operator Information",
      blocks: [
        {
          type: "ul",
          items: [
            `Service: ${product}`,
            `Operator: ${operator}`,
            `Contact: ${contact}`,
          ],
        },
      ],
    },
    {
      heading: "3. Accounts and Workspaces",
      blocks: [
        {
          type: "p",
          text: `Users authenticate via Supabase Auth (email, Google, SAML SSO). Workspace owners are responsible for maintaining the security of their workspace access tokens, credentials, and member invitations.`,
        },
        {
          type: "p",
          text: `The operator reserves the right to suspend accounts that abuse API endpoints or attempt unauthorized access to shared platform resources.`,
        },
      ],
    },
    {
      heading: "4. Data Sovereignty and Client Execution",
      blocks: [
        {
          type: "p",
          text: `Data snapshots and query computations run client-side on user machines via embedded engines (Workspace PG (WASM), DuckDB). ${product} does not inspect or retain private analytical data payloads beyond necessary metadata and audit logs.`,
        },
      ],
    },
    {
      heading: "5. Intellectual Property and Queries",
      blocks: [
        {
          type: "p",
          text: `All SQL query templates, documentation, and database schemas created within your workspace remain your exclusive property.`,
        },
      ],
    },
    {
      heading: "6. Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: `The Service is provided “as is”. The operator is not liable for indirect or consequential damages arising from database connection failures, network interruptions, or data losses.`,
        },
      ],
    },
  ],
};

export const PRIVACY: LegalDocument = {
  title: "Privacy Policy",
  path: "/privacy",
  effectiveDateLabel: `Effective date: ${OPERATOR.effectiveDateIso}`,
  intro: `This Privacy Policy describes how ${product} collects, processes, and protects personal information.`,
  sections: [
    {
      heading: "1. Information Collected",
      blocks: [
        {
          type: "ul",
          items: [
            "Account data: Email address, name, authentication identifiers (Google/SSO ID).",
            "Workspace metadata: Workspace names, member roles, query titles, and variable keys.",
            "Audit logs: Timestamps of query executions, export operations, and share link accesses.",
          ],
        },
      ],
    },
    {
      heading: "2. Purpose of Collection",
      blocks: [
        {
          type: "p",
          text: "Information is used solely to authenticate users, manage workspace collaboration, enforce access control policies, and provide audit trails for regulatory compliance.",
        },
      ],
    },
    {
      heading: "3. Client-Side Data Privacy",
      blocks: [
        {
          type: "p",
          text: "Database query results generated within local Workspace PG (WASM) or DuckDB instances are processed locally in the user's browser or desktop client and are not transmitted to GlasSQL servers unless explicitly published as a shared dataset.",
        },
      ],
    },
    {
      heading: "4. Third-Party Services",
      blocks: [
        {
          type: "p",
          text: "We use Supabase for authentication and database management, and Cloudflare for edge infrastructure delivery. All providers comply with modern security and privacy standards.",
        },
      ],
    },
    {
      heading: "5. Inquiries",
      blocks: [
        {
          type: "p",
          text: `For questions regarding privacy, data deletion, or compliance audits, contact ${contact}.`,
        },
      ],
    },
  ],
};
