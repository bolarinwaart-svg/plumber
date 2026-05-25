import Image from "next/image";

export function PlumbingHeroSection() {
  return (
    <section className="site-container pb-6 pt-1 sm:pt-2 xl:pb-10 xl:pt-0">
      <div className="relative min-h-[430px] overflow-hidden rounded-[18px] bg-[#1d3eb0] sm:min-h-[453px] xl:rounded-[30px]">
        <Image
          src="/plumbing-hero-figma.jpg"
          alt="Plumber repairing pipework under a sink"
          fill
          priority
          sizes="(min-width: 1440px) 1440px, calc(100vw - 32px)"
          className="object-cover object-[50%_36%] sm:object-[50%_36%] xl:object-[50%_36%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,62,176,0)_0%,rgba(37,99,235,0.96)_83%)] sm:bg-[linear-gradient(90deg,rgba(37,99,235,0.97)_0%,rgba(29,62,176,0.82)_27%,rgba(29,62,176,0.16)_58%,rgba(29,62,176,0)_100%)]" />

        <div className="relative z-10 flex min-h-[430px] items-end px-4 py-7 text-white sm:min-h-[453px] sm:items-center sm:px-8 sm:py-10">
          <div className="max-w-[38rem]">
            <p className="mb-5 text-sm leading-none font-semibold sm:mb-7">
              Reliable
            </p>
            <h1 className="max-w-[13ch] text-[2rem] leading-[1.15] font-normal sm:max-w-none sm:text-[3rem] sm:leading-[1.15]">
              Expert Plumbing Services
            </h1>
            <p className="mt-5 max-w-[24ch] text-lg leading-[1.35] font-normal sm:max-w-none sm:text-xl sm:leading-normal">
              Providing top-quality plumbing solutions for all your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
