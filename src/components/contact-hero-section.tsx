import Image from "next/image";

const contactHeroImage = "https://www.figma.com/api/mcp/asset/1c681f95-ac92-4425-a24d-df165117f9a0";

export function ContactHeroSection() {
  return (
    <section className="site-container pb-6">
      <div className="relative min-h-[444px] overflow-hidden rounded-[30px] bg-[#1d3eb0]">
        <Image
          src={contactHeroImage}
          alt="Plumber standing in a bathroom"
          fill
          priority
          sizes="(min-width: 1280px) 100vw, calc(100vw - 32px)"
          className="object-cover object-[52%_50%]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(29,93,236,0.98)_2.824%,rgba(29,62,176,0)_65.784%)]" />

        <div className="relative z-10 flex min-h-[444px] items-end px-4 py-8 text-white sm:items-center sm:px-8 sm:py-10">
          <div className="max-w-[26rem] sm:max-w-[34rem]">
            <h1 className="text-[2rem] leading-[1.2] font-medium sm:text-[3rem]">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-[21rem] text-base leading-[1.5] font-normal sm:mt-5 sm:max-w-[30rem] sm:text-lg">
              We would love to hear from you. Contact us for any inquiries or
              to schedule an appointment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
