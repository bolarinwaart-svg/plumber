import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText, type PortableTextComponents } from "next-sanity";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { BlogCard } from "@/components/ui/blog-card";
import {
  getBlogPost,
  getBlogPostSlugs,
  getBlogPosts,
  type BlogPost,
} from "@/lib/cms";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const DEFAULT_AUTHOR = "John Smith";

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

const POST_FAQS: { question: string; answer: string }[] = [
  {
    question: "How do I schedule a service?",
    answer:
      "Use the Contact Us button on this page or call our team and we’ll arrange a visit at a time that works for you.",
  },
  {
    question: "What are your service areas?",
    answer:
      "We cover Leicester and the surrounding area for plumbing and heating installs, repairs, and servicing.",
  },
  {
    question: "Do you offer emergency services?",
    answer:
      "Yes. Burst pipes, no-heat callouts, and water leaks are handled as priority jobs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Bank transfer, debit and credit cards. Payment is taken once the work is complete and you’re happy with it.",
  },
  {
    question: "Are your plumbers licensed?",
    answer:
      "All of our engineers are Gas Safe registered where relevant and fully insured.",
  },
];

export async function generateStaticParams() {
  const slugs = await getBlogPostSlugs();

  return slugs.map((slug) => ({
    slug,
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
    title: `${post.seoTitle ?? post.title} | Heatwave Plumbing & Heating`,
    description: post.seoDescription ?? post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const author = post.author ?? DEFAULT_AUTHOR;
  const authorImage = post.authorImage;

  return (
    <main className="min-h-screen bg-sky">
      <SiteNav activePath="/blog" />
      <div className="w-full max-w-[1512px] mx-auto">
      {/* Hero — matches Figma 6415:12384 */}
      <section className="site-container pt-2 pb-6">
        <div className="relative h-[444px] overflow-hidden rounded-[32px] bg-ink">
          <Image
            src={post.image}
            alt={post.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(15,18,23,0.35)",
              backgroundImage:
                "radial-gradient(ellipse at center, rgba(15,18,23,0.45) 0%, rgba(15,18,23,0.15) 70%)",
            }}
          />
          <div className="relative flex h-full flex-col items-center justify-center gap-20 px-6 py-8 text-center text-white">
            <div className="flex flex-col items-center gap-4">
              <p className="text-base leading-[1.5] font-normal text-white/95">
                {post.category}
              </p>
              <h1
                className="max-w-[768px] text-[clamp(2.25rem,4.8vw,3rem)] leading-[1.167] font-medium tracking-[0.02em] text-white"
                style={{ textShadow: "0 1px 24px rgba(15,18,23,0.45)" }}
              >
                {post.title}
              </h1>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative flex size-12 items-center justify-center overflow-hidden rounded-full bg-brand text-sm font-semibold text-white">
                {authorImage ? (
                  <Image
                    src={authorImage}
                    alt={author}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                ) : (
                  <span aria-hidden>{getInitials(author)}</span>
                )}
              </div>
              <div className="flex flex-col items-center text-white">
                <p className="text-sm leading-[1.5] font-semibold">{author}</p>
                <div className="flex items-center gap-2 text-sm">
                  {post.publishedAt ? (
                    <>
                      <span className="leading-[17px]">{formatDate(post.publishedAt)}</span>
                      <span aria-hidden className="text-lg leading-[1.5]">•</span>
                    </>
                  ) : null}
                  <span className="leading-[17px]">{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article body — Figma 6415:12398: single centered column inside white card */}
      <section className="site-container pt-2 pb-10 lg:pt-4 lg:pb-16">
        <article className="overflow-hidden rounded-[32px] bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-[50px]">
          <div className="mx-auto flex w-full max-w-[768px] flex-col gap-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-base leading-[1.5] text-black"
              >
                <Link
                  href="/blog"
                  className="font-normal transition-colors duration-200 ease-out hover:text-brand"
                >
                  Blog
                </Link>
                <ChevronRightIcon className="size-4 text-black" />
                <span className="font-semibold">{post.category}</span>
              </nav>
              <div className="flex items-center gap-2">
                <ShareButton aria-label="Copy link">
                  <LinkIcon />
                </ShareButton>
                <ShareButton aria-label="Share on LinkedIn">
                  <LinkedInIcon />
                </ShareButton>
                <ShareButton aria-label="Share on Twitter">
                  <TwitterIcon />
                </ShareButton>
                <ShareButton aria-label="Share on Facebook">
                  <FacebookIcon />
                </ShareButton>
              </div>
            </div>

            <div className="min-w-0">
              <PortableText
                value={getRenderableBody(post)}
                components={portableTextComponents}
              />
            </div>
          </div>
        </article>
      </section>

      {/* Featured / related posts */}
      {related.length ? (
        <section className="site-container pb-10 lg:pb-16">
          <div className="overflow-hidden rounded-[32px] bg-sky-200 px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-12">
              <div className="flex max-w-[36ch] flex-col gap-4">
                <span className="inline-flex w-fit items-center justify-center rounded-full border border-brand-bright bg-white px-4 py-1.5 text-xs leading-none font-semibold tracking-[0.18em] text-brand uppercase">
                  Latest
                </span>
                <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] font-semibold text-ink">
                  Featured posts
                </h2>
                <p className="text-base leading-[1.55] text-ink-soft">
                  More from the team on plumbing, heating, and keeping a home
                  running well.
                </p>
              </div>
              <Link
                href="/blog"
                className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm leading-[1.4] font-semibold text-ink transition-colors duration-200 ease-out hover:border-brand hover:text-brand sm:self-end"
              >
                View all posts
                <ChevronRightIcon className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
              {related.map((p, idx) => (
                <BlogCard
                  key={p.slug}
                  image={p.image}
                  alt={p.alt}
                  category={p.category}
                  date={p.readTime}
                  title={p.title}
                  excerpt={p.excerpt}
                  href={`/blog/${p.slug}`}
                  className={
                    idx === 0
                      ? "md:col-span-2 lg:col-span-1"
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Contact CTA strip — asymmetric: heading left, action right on lg */}
      <section className="site-container pb-10 lg:pb-16">
        <div className="overflow-hidden rounded-[32px] bg-white px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="flex max-w-[34ch] flex-col gap-4">
              <h2 className="text-[clamp(1.875rem,3.8vw,2.75rem)] leading-[1.1] font-medium tracking-[-0.005em] text-ink">
                Expert heating services
                <br className="hidden md:block" />
                <span className="md:hidden"> </span>
                in Leicester.
              </h2>
              <p className="text-base leading-[1.55] text-ink-soft">
                Reliable, efficient heating for your home or business. We’ll talk
                through your setup and recommend the right next step.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full bg-brand px-6 py-3 text-base leading-[1.4] font-semibold text-white transition-colors duration-200 ease-out hover:bg-brand-bright lg:shrink-0"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="site-container pb-10 lg:pb-16">
        <div className="rounded-[32px] bg-white p-4 lg:p-6">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-16">
            <div className="relative h-[22rem] w-full overflow-hidden rounded-[24px] bg-sky-200 sm:h-[28rem] lg:sticky lg:top-24 lg:h-[34rem]">
              <Image
                src={post.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 520px, calc(100vw - 32px)"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-10 py-2 lg:py-4">
              <div className="flex max-w-[44ch] flex-col gap-4 text-ink">
                <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                  FAQs
                </span>
                <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-medium tracking-[-0.005em]">
                  Common questions
                </h2>
                <p className="text-base leading-[1.55] text-ink-soft">
                  Quick answers to the things customers ask most often before
                  booking a visit.
                </p>
              </div>

              <div className="flex flex-col">
                {POST_FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border-b border-ink/10 last:border-b-0"
                  >
                    <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-base leading-[1.4] font-semibold text-ink transition-colors duration-200 ease-out hover:text-brand">
                      <span className="flex-1">{faq.question}</span>
                      <span className="relative inline-flex size-7 shrink-0 items-center justify-center rounded-full text-ink-soft transition-transform duration-200 ease-out group-open:rotate-45 group-hover:text-brand">
                        <PlusCircleIcon />
                      </span>
                    </summary>
                    <p className="pr-10 pb-6 text-[15px] leading-[1.6] text-ink-soft">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>

              <div className="flex flex-col items-start gap-5 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <div className="flex max-w-[36ch] flex-col gap-2 text-ink">
                  <h3 className="text-xl leading-[1.3] font-semibold">
                    Still have questions?
                  </h3>
                  <p className="text-sm leading-[1.55] text-ink-soft">
                    Contact us for more information or to schedule a service.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm leading-[1.4] font-semibold text-white transition-colors duration-200 ease-out hover:bg-brand-bright"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
      <SiteFooter />
    </main>
  );
}

function ShareButton({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center overflow-hidden rounded-full bg-[#f4f4f4] p-1 text-black transition-colors duration-200 ease-out hover:bg-brand hover:text-white"
      {...props}
    >
      <span className="inline-flex size-6 items-center justify-center">
        {children}
      </span>
    </button>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      fill="none"
      className={className ?? "size-4"}
    >
      <path
        d="m6 4 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" className="size-full">
      <path
        d="M10.5 13.5a4 4 0 0 0 5.66 0l2.83-2.83a4 4 0 1 0-5.66-5.66l-1.41 1.41M13.5 10.5a4 4 0 0 0-5.66 0L5.01 13.33a4 4 0 1 0 5.66 5.66l1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="size-full">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9.75h4v11.25H3V9.75ZM9.5 9.75h3.84v1.55h.05c.54-.95 1.86-1.95 3.83-1.95 4.1 0 4.86 2.55 4.86 5.86V21h-4v-4.95c0-1.18-.02-2.7-1.66-2.7-1.66 0-1.92 1.27-1.92 2.61V21h-4V9.75Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="size-full">
      <path d="M18.244 3H21l-6.51 7.44L22 21h-6.828l-4.78-6.28L4.8 21H2.04l6.96-7.96L2 3h6.91l4.32 5.71L18.244 3Zm-1.197 16.18h1.52L7.05 4.74H5.41l11.637 14.44Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="size-full">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.77l-.44 2.9h-2.33V22c4.78-.78 8.43-4.94 8.43-9.94Z" />
    </svg>
  );
}

function PlusCircleIcon() {
  return (
    <svg aria-hidden viewBox="0 0 28 28" fill="none" className="size-6">
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14 9v10M9 14h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="pb-4 text-base leading-[1.5] text-black last:pb-0">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="py-6 text-[40px] leading-[1.2] font-bold text-black first:pt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="pt-6 pb-5 text-[32px] leading-[1.3] font-bold text-black first:pt-0">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="pt-5 pb-4 text-[20px] leading-[1.4] font-bold text-black first:pt-0">
        {children}
      </h4>
    ),
    lead: ({ children }) => (
      <p className="pb-4 text-base leading-[1.5] text-black">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <figure className="flex items-stretch gap-6 overflow-hidden pt-5 pb-8">
        <div aria-hidden className="w-0.5 shrink-0 self-stretch bg-black" />
        <blockquote className="flex-1 font-['Inter'] text-[20px] leading-[28px] text-black italic">
          {children}
        </blockquote>
      </figure>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 list-none space-y-3 text-base leading-[1.5] text-black">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 ml-5 list-decimal space-y-3 text-base leading-[1.5] text-black marker:font-semibold">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="relative pl-8 before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-4 before:bg-brand">
        {children}
      </li>
    ),
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-black">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      return (
        <Link
          href={href}
          className="font-semibold text-brand underline-offset-4 hover:underline"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const imageUrl = typeof value?.url === "string" ? value.url : null;
      const alt = typeof value?.alt === "string" ? value.alt : "";
      const caption = typeof value?.caption === "string" ? value.caption : null;

      if (!imageUrl) {
        return null;
      }

      return (
        <figure className="flex flex-col items-center gap-4 py-12">
          <div className="relative h-[550px] w-full overflow-hidden rounded-[24px] bg-sky-200">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 768px, calc(100vw - 32px)"
              className="object-cover"
            />
          </div>
          {caption ? (
            <figcaption className="flex w-full items-stretch gap-2">
              <span aria-hidden className="w-0.5 shrink-0 self-stretch bg-black" />
              <span className="flex-1 text-sm leading-[1.5] text-black">
                {caption}
              </span>
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

function getRenderableBody(post: BlogPost) {
  if (post.body?.length) {
    return post.body;
  }

  return [
    portableTextBlock(
      "lead",
      "lead",
      post.excerpt,
    ),
    portableTextBlock(
      "intro",
      "normal",
      "Good plumbing and heating decisions are usually small, practical steps taken early. A quick check, a clear photo, or a timely call can prevent a minor issue becoming a disruptive repair.",
    ),
    portableTextBlock("checks-heading", "h2", "What to keep an eye on"),
    portableTextBlock(
      "body-1",
      "normal",
      "If you are unsure what to do next, avoid forcing fittings, switching appliances back on repeatedly, or ignoring signs of water damage. Heat Wave Plumbing & Heating can inspect the issue and advise on a safe next step.",
    ),
    portableTextBlock("conclusion-heading", "h2", "When to call us"),
    portableTextBlock(
      "conclusion",
      "normal",
      "Stay ahead of plumbing and heating problems by booking a routine check with a qualified engineer. Small issues are far cheaper to fix than emergencies.",
    ),
  ];
}

function portableTextBlock(key: string, style: string, text: string) {
  return {
    _key: key,
    _type: "block",
    style,
    markDefs: [],
    children: [
      {
        _key: `${key}-span`,
        _type: "span",
        marks: [],
        text,
      },
    ],
  };
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}
