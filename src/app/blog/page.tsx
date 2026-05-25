import type { Metadata } from "next";
import { BlogHeroSection } from "@/components/blog-hero-section";
import { BlogPostsSection } from "@/components/blog-posts-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Blog | Heatwave Plumbing & Heating",
  description: "Recent plumbing and heating blog posts.",
};

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#eff6ff]">
      <SiteNav activePath="/blog" />
      <BlogHeroSection />
      <BlogPostsSection />
      <SiteFooter />
    </main>
  );
}
