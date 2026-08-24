/**
 * @file DocumentTitle.tsx
 * @description Dynamic page title and meta description updater.
 */
import { useEffect } from "react";
import { SITE_DESCRIPTION, SITE_NAME } from "@/config/site";

type DocumentTitleProps = {
  title?: string;
  description?: string;
};

export function DocumentTitle({ title, description = SITE_DESCRIPTION }: DocumentTitleProps) {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} — Workspace Data Operations`;
    document.title = fullTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
