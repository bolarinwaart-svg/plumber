import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { getBlogPost, getBlogPosts } from "@/lib/cms";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Heatwave Plumbing & Heating`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-sky">
      <SiteNav activePath="/blog" />
      <article className="site-container pb-6">
        <div className="overflow-hidden rounded-[30px] bg-white p-4 sm:p-5 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="relative h-[22rem] overflow-hidden rounded-[24px] bg-sky-200 md:h-[32rem] lg:h-[38rem]">
              <Image
                src={post.image}
                alt={post.alt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, calc(100vw - 32px)"
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-col gap-5 py-2 lg:py-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-[20px] bg-brand px-3.5 py-1.5 text-[0.8125rem] leading-[1.35] font-semibold text-white">
                  {post.category}
                </span>
                <span className="text-sm leading-[1.5] font-semibold text-ink-soft">
                  {post.readTime}
                </span>
              </div>

              <h1 className="max-w-[13ch] text-[2.5rem] leading-[1.08] font-semibold text-ink md:text-[4rem] lg:text-[4.75rem]">
                {post.title}
              </h1>
              <p className="max-w-[42rem] text-lg leading-[1.5] text-ink-soft md:text-xl">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
