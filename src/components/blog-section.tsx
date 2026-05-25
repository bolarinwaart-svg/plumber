import { BadgeChip } from "@/components/ui/badge-chip";
import { BlogCard } from "@/components/ui/blog-card";

const posts = [
  {
    category: "Plumbing",
    image: "/blog-plumbing-1.jpg",
    alt: "Plumber repairing pipes under a sink",
  },
  {
    category: "Heating",
    image: "/blog-heating.jpg",
    alt: "Heating technician working with tools",
  },
  {
    category: "Plumbing",
    image: "/blog-plumbing-2.jpg",
    alt: "Plumber preparing pipe fittings",
  },
];

export function BlogSection() {
  return (
    <section className="site-container pb-6">
      <div className="overflow-hidden rounded-2xl bg-[#bfdbfe] p-4 sm:p-5 xl:rounded-[32px] xl:p-4">
        <div className="flex flex-col items-start justify-center gap-8 xl:px-4">
          <div className="w-full">
            <BadgeChip variant="outlined" tone="blue" size="sm" className="bg-white">
              Blog
            </BadgeChip>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-10 sm:gap-12">
            <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.image}
                  image={post.image}
                  alt={post.alt}
                  category={post.category}
                  date="5 min read"
                  title="Top Plumbing Tips for Homeowners"
                  excerpt="Maintaining a smooth-running household involves more than just décor and design"
                  href="#"
                />
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-[50px] bg-[#3a81f7] px-6 py-3 text-lg leading-[1.5] font-semibold whitespace-nowrap text-white lg:rounded-3xl"
            >
              View all
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
