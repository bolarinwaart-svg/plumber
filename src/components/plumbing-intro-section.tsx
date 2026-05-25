export function PlumbingIntroSection() {
  return (
    <section className="site-container pb-6">
      <div className="rounded-[32px] bg-white p-4">
        <div className="rounded-[32px] bg-white px-4 py-12 lg:py-[50px]">
          <div className="flex w-full max-w-[676px] flex-col items-start gap-4">
            <h2 className="max-w-[12ch] text-[clamp(2.5rem,5vw,3rem)] leading-[1.1667] font-medium tracking-[0.02em] text-black sm:max-w-none">
              Expert Plumbing
              <br />
              Services in Leicester
            </h2>
            <p className="text-[1.125rem] leading-[1.5] font-normal text-black">
              Contact us today for a free quote or to schedule a service
            </p>
            <div className="pt-2 lg:pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-[30px] bg-[#1d3eb0] px-6 py-3 text-[1.125rem] leading-[1.5] font-semibold whitespace-nowrap text-white"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
