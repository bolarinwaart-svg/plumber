import { BadgeChip } from "@/components/ui/badge-chip";
import { BlogCard } from "@/components/ui/blog-card";
import { PrimaryPillButton } from "@/components/ui/primary-pill-button";

type BlogPost = {
  category: "Plumbing" | "Heating";
  readTime: string;
  image: string;
};

const posts: BlogPost[] = [
  { category: "Plumbing", readTime: "5 min read", image: "https://www.figma.com/api/mcp/asset/d7527e98-7779-4a51-9436-3f8561c87307" },
  { category: "Heating", readTime: "1 min read", image: "https://www.figma.com/api/mcp/asset/f120fa89-cd6f-4f2a-9604-605d7c40c825" },
  { category: "Plumbing", readTime: "5 min read", image: "https://www.figma.com/api/mcp/asset/316dede6-f6b5-4480-8ae8-65af0426e105" },
  { category: "Heating", readTime: "15 min read", image: "https://www.figma.com/api/mcp/asset/3fa57a88-a39b-45a9-9d74-3f4bbc9200bf" },
  { category: "Plumbing", readTime: "8 min read", image: "https://www.figma.com/api/mcp/asset/5762a63a-8bd8-4903-a9fe-cd1714f200df" },
  { category: "Plumbing", readTime: "20 min read", image: "https://www.figma.com/api/mcp/asset/131b7330-c40e-48e6-816d-945783627d54" },
  { category: "Plumbing", readTime: "8 min read", image: "https://www.figma.com/api/mcp/asset/bc1d31be-d61c-4c83-b06d-84df3812d1cc" },
  { category: "Plumbing", readTime: "20 min read", image: "https://www.figma.com/api/mcp/asset/bad6ef2c-857a-4f36-9ae8-8b16a98d0e16" },
  { category: "Plumbing", readTime: "5 min read", image: "https://www.figma.com/api/mcp/asset/f387c12c-e279-466a-a94b-42b4ebd7777e" },
];

export function BlogPostsSection() {
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

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.image}
                image={post.image}
                alt="Top Plumbing Tips for Homeowners"
                category={post.category}
                date={post.readTime}
                title="Top Plumbing Tips for Homeowners"
                excerpt="Maintaining a smooth-running household involves more than just decor and design"
                href="#"
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
