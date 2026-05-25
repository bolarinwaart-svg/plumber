import Image from "next/image";

const blogHeroImage = "https://www.figma.com/api/mcp/asset/8abf96e8-2a68-47db-8bb2-715b2900fd9b";

export function BlogHeroSection() {
  return (
    <section className="site-container pb-6 pt-1 sm:pt-2 xl:pb-10 xl:pt-0">
      <div className="relative min-h-[421px] overflow-hidden rounded-[30px] bg-[#1d3eb0]">
        <div className="absolute inset-0 overflow-hidden rounded-[30px]">
          <Image
            alt=""
            src={blogHeroImage}
            fill
            sizes="100vw"
            className="absolute object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(90deg,rgba(29,93,236,0.98)_2.8%,rgba(29,62,176,0)_65.784%)]" />

        <div className="relative z-10 flex min-h-[421px] items-end px-4 py-8 text-white sm:items-center sm:px-8 sm:py-10">
          <div className="max-w-[26rem] sm:max-w-[34rem]">
            <p className="mb-4 text-sm leading-none font-semibold sm:mb-5">
              Latest
            </p>
            <h1 className="max-w-[11ch] text-[2rem] leading-[1.15] font-medium sm:max-w-none sm:text-[3rem] sm:leading-[1.1]">
              Discover Our Recent Blog Posts
            </h1>
            <p className="mt-4 max-w-[22rem] text-base leading-[1.5] font-normal sm:mt-5 sm:max-w-[30rem] sm:text-lg">
              Stay updated with our informative and engaging blog content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
