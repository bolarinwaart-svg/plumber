import Image from "next/image";

const contactHeroImage = "https://www.figma.com/api/mcp/asset/1c681f95-ac92-4425-a24d-df165117f9a0";

export function ContactHeroSection() {
  return (
    <section className="site-container pb-6">
      <div className="relative h-[421px] overflow-hidden rounded-[32px] bg-[#1d3eb0]">
        <Image
          src={contactHeroImage}
          alt="Plumber standing in a bathroom"
          fill
          priority
          sizes="(min-width: 1440px) 1440px, calc(100vw - 32px)"
          className="object-cover object-[52%_50%]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,#1d5dec_2.824%,rgba(29,62,176,0)_65.784%)]" />

        <div className="relative z-10 flex h-full items-end px-4 pb-8 text-white sm:px-8">
          <div className="flex flex-col gap-4 max-w-[42rem]">
            <h1 className="text-[2rem] leading-[1.2] font-medium sm:text-[3rem]">
              Get in Touch
            </h1>
            <p className="text-lg leading-[1.5] font-normal">
              We would love to hear from you. Contact us for any inquiries or
              to schedule an appointment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
