/**
 * @file TermsPage.tsx
 * @description GlasSQL Terms of Service.
 */
import { TERMS } from "@/content/legal";
import { LegalDocumentPage } from "./LegalDocumentPage";

export function TermsPage() {
  return <LegalDocumentPage document={TERMS} />;
}
