import Image from "next/image";

import { SectionShell } from "@/components/ui/section-shell";
import { TestimonialBlock } from "@/components/ui/testimonial-block";
import { getFeaturedTestimonial, getTestimonialAvatars } from "@/lib/cms";

export async function TestimonialSection() {
  const testimonial = await getFeaturedTestimonial();
  const testimonialAvatars = await getTestimonialAvatars();

  return (
    <SectionShell
      as="section"
      tone="white"
      radius="lg"
      padding="md"
      className="pb-6"
      innerClassName="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-6 min-[744px]:max-[1023px]:flex-row min-[744px]:max-[1023px]:items-start min-[744px]:max-[1023px]:justify-between lg:flex-row lg:items-start lg:justify-between lg:gap-[153px]">
        <div className="min-w-0 flex-1 overflow-hidden">
          <h2 className="text-[2rem] leading-[1.3] font-medium text-black">
            Client Stories
          </h2>
        </div>

        <div className="flex w-full items-center justify-start min-[744px]:max-[1023px]:w-auto min-[744px]:max-[1023px]:justify-end lg:w-auto lg:justify-end">
          <div className="flex gap-4">
            {testimonialAvatars.map((avatar) => (
              <div
                key={avatar.src}
                className="relative size-12 overflow-hidden rounded-full border-2 border-white"
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <TestimonialBlock
        image={testimonial.image}
        alt={testimonial.alt}
        rating={testimonial.rating}
        quote={
          <>
            {testimonial.quoteLines.map((line, index) => (
              <span key={line}>
                {index > 0 ? " " : null}
                {line}
                {index < testimonial.quoteLines.length - 1 ? (
                  <br aria-hidden="true" className="hidden min-[744px]:block" />
                ) : null}
              </span>
            ))}
          </>
        }
        name={testimonial.name}
        title={testimonial.title}
        layout="horizontal"
      />
    </SectionShell>
  );
}
