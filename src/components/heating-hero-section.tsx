import Image from "next/image";

export function HeatingHeroSection() {
  return (
    <section className="site-container pb-6 pt-1 sm:pt-2 xl:pb-10 xl:pt-0">
      <div className="relative min-h-[414px] overflow-hidden rounded-[16px] bg-[#1d3eb0] sm:min-h-[453px] sm:rounded-[24px] xl:rounded-[32px]">
        <Image
          src="/heating-hero.jpg"
          alt="Heating technician working on a radiator"
          fill
          priority
          sizes="(min-width: 1280px) 50vw, calc(100vw - 32px)"
          className="object-cover object-[48%_50%]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,93,236,0)_0%,rgba(29,62,176,0.96)_100%)] sm:bg-[linear-gradient(90deg,rgba(29,93,236,0.94)_2.8%,rgba(29,62,176,0.78)_34%,rgba(29,62,176,0)_66%)]" />

        <div className="relative z-10 flex min-h-[414px] items-end px-4 py-8 text-white sm:min-h-[453px] sm:items-center sm:px-8 sm:py-10">
          <div className="max-w-[22rem] sm:max-w-[34rem]">
            <p className="mb-4 text-sm leading-none font-semibold sm:mb-5 sm:text-[0.875rem]">
              Efficient
            </p>
            <h1 className="max-w-[10ch] text-[2rem] leading-[1.12] font-medium sm:max-w-[13ch] sm:text-[3rem] sm:leading-[1.1]">
              Reliable Heating Services
            </h1>
            <p className="mt-4 max-w-[22ch] text-base leading-[1.5] font-normal sm:mt-5 sm:max-w-[32ch] sm:text-lg">
              Stay warm and comfortable with our professional heating services.
              We ensure quality and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
