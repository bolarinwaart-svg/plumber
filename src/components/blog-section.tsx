import Image from "next/image";

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
      <div className="overflow-hidden rounded-2xl bg-[#bfdbfe] px-2 py-4 lg:rounded-[32px] lg:p-4">
        <div className="flex flex-col items-start justify-center gap-8 px-0.5 lg:px-4">
          <div className="w-full lg:w-[768px]">
            <div className="inline-flex w-[86px] items-start justify-center rounded-[20px] border-[1.5px] border-[#1d5dec] bg-white px-4 py-2 lg:rounded-3xl lg:border">
              <span className="text-sm leading-[1.5] font-medium whitespace-nowrap text-black">
                Blog
              </span>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-12">
            <div className="grid w-full gap-6 lg:grid-cols-3 lg:gap-8">
              {posts.map((post) => (
                <article
                  key={post.image}
                  className="flex min-w-0 flex-col items-start rounded-lg border-2 border-[#1d5dec] bg-white lg:rounded-3xl lg:border-[3px]"
                >
                  <div className="relative h-[250px] w-full overflow-hidden rounded-lg lg:h-[500px] lg:rounded-3xl">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, calc(100vw - 32px)"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex w-full flex-col items-start gap-4 px-2 py-4 lg:h-[297px] lg:gap-6 lg:px-4 lg:py-6">
                    <div className="flex w-full flex-col gap-4 lg:min-h-0 lg:flex-1">
                      <div className="flex w-full items-center justify-between gap-4">
                        <span className="rounded-[20px] bg-[#1d3eb0] px-4 py-2 text-sm leading-[1.5] font-medium whitespace-nowrap text-white lg:border lg:border-[#1d5dec] lg:bg-white lg:text-[#1d5dec]">
                          {post.category}
                        </span>
                        <span className="text-sm leading-[1.5] font-medium whitespace-nowrap text-[#282828]">
                          5 min read
                        </span>
                      </div>

                      <div className="flex w-full flex-col gap-2 leading-[1.5]">
                        <h3 className="text-xl font-semibold text-[#282828]">
                          Top Plumbing Tips for Homeowners
                        </h3>
                        <p className="text-lg font-normal text-[#3d3d3d]">
                          Maintaining a smooth-running household involves more
                          than just décor and design
                        </p>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 text-lg leading-[1.5] font-normal whitespace-nowrap text-[#282828]"
                    >
                      Read more
                      <ChevronRightIcon />
                    </a>
                  </div>
                </article>
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

function ChevronRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m7.5 5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
