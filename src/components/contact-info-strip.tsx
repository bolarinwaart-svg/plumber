import Image from "next/image";

const contactImagePrimary =
  "https://www.figma.com/api/mcp/asset/d75ba5b9-16c4-4d82-af5a-b16a1fb6ca42";

export function ContactInfoStrip() {
  return (
    <section className="site-container pb-6">
      <div className="flex flex-col gap-8 rounded-[30px] bg-white p-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:flex lg:gap-20">
          <div className="flex flex-col gap-2 lg:flex-1">
            <h2 className="text-[1.25rem] leading-[1.4] font-semibold text-black">
              Email
            </h2>
            <a
              href="mailto:hello@relume.io"
              className="text-[1rem] leading-[1.5] font-normal underline text-black"
            >
              hello@relume.io
            </a>
          </div>

          <div className="flex flex-col gap-2 lg:flex-1">
            <h2 className="text-[1.25rem] leading-[1.4] font-semibold text-black">
              Phone
            </h2>
            <a
              href="tel:+15550000000"
              className="text-[1rem] leading-[1.5] font-normal underline text-black"
            >
              +1 (555) 000-0000
            </a>
          </div>
        </div>

        <div className="relative h-[738px] overflow-hidden rounded-[30px]">
          <Image
            src={contactImagePrimary}
            alt="Plumber standing in a bathroom"
            fill
            sizes="(min-width: 1280px) 100vw, calc(100vw - 32px)"
            className="object-cover object-[50%_45%]"
          />
        </div>
      </div>
    </section>
  );
}
