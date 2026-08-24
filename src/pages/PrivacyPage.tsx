/**
 * @file PrivacyPage.tsx
 * @description GlasSQL Privacy Policy.
 */
import { PRIVACY } from "@/content/legal";
import { LegalDocumentPage } from "./LegalDocumentPage";

export function PrivacyPage() {
  return <LegalDocumentPage document={PRIVACY} />;
}
