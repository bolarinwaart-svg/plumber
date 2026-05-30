import Image from "next/image";

export function HeatingHeroSection() {
  return (
    <section className="site-container pb-6 pt-1 sm:pt-2 lg:pb-10 lg:pt-0">
      <div className="relative h-[421px] overflow-hidden rounded-[32px] bg-[#1d3eb0]">
        <Image
          src="/heating-hero.jpg"
          alt="Heating technician working on a radiator"
          fill
          priority
          sizes="(min-width: 1024px) 1440px, calc(100vw - 32px)"
          className="object-cover object-[48%_50%]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,#1d5dec_2.824%,rgba(29,62,176,0)_65.784%)]" />

        <div className="relative z-10 flex h-full items-end px-4 pb-8 text-white sm:px-8">
          <div className="flex flex-col gap-4 max-w-[42rem]">
            <p className="text-sm leading-[1.5] font-semibold">
              Efficient
            </p>
            <h1 className="text-[2rem] leading-[1.2] font-medium sm:text-[3rem]">
              Reliable Heating Services
            </h1>
            <p className="text-lg leading-[1.5] font-normal">
              Stay warm and comfortable with our professional heating services.
              We ensure quality and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
