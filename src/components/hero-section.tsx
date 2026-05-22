import Image from "next/image";

export function HeroSection() {
  return (
    <section className="site-container pb-6 pt-1 sm:pt-2 xl:pb-10 xl:pt-0">
      <div className="rounded-2xl bg-[#eff6ff] p-2 xl:rounded-[30px] xl:p-4">
        <div className="grid min-w-0 gap-4 md:gap-5 xl:min-h-[28.625rem] xl:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] xl:items-stretch">
          <div className="relative order-1 h-[13.75rem] overflow-hidden rounded-2xl sm:h-[18rem] md:h-[24rem] lg:h-[28rem] xl:order-2 xl:h-auto xl:rounded-[30px]">
            <Image
              src="/hero-plumber.jpg"
              alt="Plumber repairing pipework under a sink"
              fill
              priority
              sizes="(min-width: 1280px) 50vw, calc(100vw - 32px)"
              className="object-cover object-[52%_50%] xl:object-[50%_50%]"
            />
          </div>

          <div className="order-2 flex rounded-2xl bg-white xl:order-1 xl:rounded-[30px]">
            <div className="flex min-w-0 flex-1 flex-col items-start px-4 py-6 sm:p-8 md:p-10 xl:px-4 xl:py-14">
              <div className="flex w-full flex-col gap-4 md:gap-6 xl:gap-8">
                <h1 className="max-w-[14ch] text-[clamp(2.125rem,5.6vw,4.25rem)] leading-[1.1] font-semibold text-[#282828] sm:max-w-[16ch] md:max-w-[18ch] lg:max-w-[20ch] xl:max-w-[760px]">
                  Welcome to Heat Wave Plumbing &amp; Heating
                </h1>
                <p className="max-w-[58ch] text-[clamp(1.125rem,1.6vw,1.875rem)] leading-[1.45] font-normal text-[#3d3d3d] xl:max-w-[760px]">
                  We are a trusted plumbing and heating company in Leicester,
                  <br className="hidden xl:block" />
                  offering a wide range of services to meet all your needs.
                </p>
              </div>

              <div className="pt-6 md:pt-8 xl:pt-12">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-[30px] bg-[#1d3eb0] px-6 py-3 text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.5] font-semibold whitespace-nowrap text-white"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
