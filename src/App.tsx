/**
 * @file App.tsx
 * @description GlasSQL root router definition.
 */
import { Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { AboutPage } from "@/pages/AboutPage";
import { BlogPage } from "@/pages/BlogPage";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { ChangelogPage } from "@/pages/ChangelogPage";
import { DocsArticlePage } from "@/pages/DocsArticlePage";
import { DocsPage } from "@/pages/DocsPage";
import { DownloadPage } from "@/pages/DownloadPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PricingPage } from "@/pages/PricingPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { ProductPage } from "@/pages/ProductPage";
import { TermsPage } from "@/pages/TermsPage";

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="download" element={<DownloadPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="docs" element={<DocsPage />} />
        <Route path="docs/:slug" element={<DocsArticlePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="changelog" element={<ChangelogPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />

        {/* Shorthand / legacy aliases */}
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="enterprise" element={<Navigate to="/pricing#enterprise" replace />} />
        <Route path="contact" element={<Navigate to="/pricing#enterprise" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
