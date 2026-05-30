import { BadgeChip } from "@/components/ui/badge-chip";
import { BlogCard } from "@/components/ui/blog-card";
import { getBlogPosts } from "@/lib/cms";

export async function BlogSection() {
  const posts = await getBlogPosts({ featuredOnly: true, limit: 3 });

  return (
    <section className="site-container pb-6">
      <div className="overflow-hidden rounded-2xl bg-sky-200 p-4 sm:p-5 lg:rounded-[32px] lg:p-4">
        <div className="flex flex-col items-start justify-center gap-8 lg:px-4">
          <div className="w-full">
            <BadgeChip variant="outlined" tone="blue" size="sm" className="bg-white">
              Blog
            </BadgeChip>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-10 sm:gap-12">
            <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  image={post.image}
                  alt={post.alt}
                  category={post.category}
                  date={post.readTime}
                  title={post.title}
                  excerpt={post.excerpt}
                  href={`/blog/${post.slug}`}
                />
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-[50px] bg-brand-accent px-6 py-3 text-lg leading-[1.5] font-semibold whitespace-nowrap text-white transition-colors duration-200 ease-out hover:bg-brand lg:rounded-3xl"
            >
              View all
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
