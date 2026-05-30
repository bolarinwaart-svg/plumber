import Image from "next/image";

const blogHeroImage = "https://www.figma.com/api/mcp/asset/8abf96e8-2a68-47db-8bb2-715b2900fd9b";

export function BlogHeroSection() {
  return (
    <section className="site-container pb-6 pt-1 sm:pt-2 lg:pb-10 lg:pt-0">
      <div className="relative h-[421px] overflow-hidden rounded-[32px] bg-[#1d3eb0]">
        <Image
          alt="Worker in safety gear examining pipework"
          src={blogHeroImage}
          fill
          sizes="(min-width: 1024px) 1440px, calc(100vw - 32px)"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#1d5dec_2.824%,rgba(29,62,176,0)_65.784%)]" />

        <div className="relative z-10 flex h-full min-w-0 items-end px-4 pb-8 text-white sm:px-8">
          <div className="flex w-full min-w-0 max-w-[42rem] flex-col gap-4">
            <p className="text-sm leading-[1.5] font-semibold">
              Latest
            </p>
            <h1 className="max-w-[18rem] text-[2rem] leading-[1.2] font-medium sm:max-w-[42rem] sm:text-[3rem]">
              Discover Our Recent Blog Posts
            </h1>
            <p className="max-w-[18rem] text-lg leading-[1.5] font-normal sm:max-w-[34rem]">
              Stay updated with our informative and engaging blog content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
