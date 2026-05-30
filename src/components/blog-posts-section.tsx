import { BadgeChip } from "@/components/ui/badge-chip";
import { BlogCard } from "@/components/ui/blog-card";
import { PrimaryPillButton } from "@/components/ui/primary-pill-button";
import { getBlogPosts } from "@/lib/cms";

export async function BlogPostsSection() {
  const posts = await getBlogPosts();

  return (
    <section className="site-container pb-6">
      <div className="overflow-hidden rounded-[30px] bg-[#bfdbfe] px-4 py-4 sm:px-5 sm:py-5">
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <BadgeChip variant="filled" tone="blue" size="sm">
              All
            </BadgeChip>
            <BadgeChip variant="outlined" tone="blue" size="sm" className="bg-white">
              Plumbing
            </BadgeChip>
            <BadgeChip variant="outlined" tone="blue" size="sm" className="bg-white">
              Heating
            </BadgeChip>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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

          <div className="flex justify-center">
            <PrimaryPillButton
              href="#"
              size="md"
              className="!rounded-[50px] lg:!rounded-3xl"
            >
              View all
            </PrimaryPillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
