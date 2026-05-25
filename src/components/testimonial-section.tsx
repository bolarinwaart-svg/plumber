import Image from "next/image";

import { SectionShell } from "@/components/ui/section-shell";
import { TestimonialBlock } from "@/components/ui/testimonial-block";

const testimonialAvatars = [
  { src: "/testimonial-avatar-1-fresh.png", alt: "Client story avatar 1" },
  { src: "/testimonial-avatar-2-fresh.png", alt: "Client story avatar 2" },
  { src: "/testimonial-avatar-3-fresh.png", alt: "Client story avatar 3" },
  { src: "/testimonial-avatar-4-fresh.png", alt: "Client story avatar 4" },
];

export function TestimonialSection() {
  return (
    <SectionShell
      as="section"
      tone="white"
      radius="lg"
      padding="md"
      className="pb-6"
      innerClassName="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-[153px]">
        <div className="min-w-0 flex-1 overflow-hidden">
          <h2 className="text-[2rem] leading-[1.3] font-medium text-black">
            Client Stories
          </h2>
        </div>

        <div className="flex w-full items-center justify-start lg:w-auto lg:justify-end">
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
        image="/testimonial-client-portrait.png"
        alt="John Doe testimonial portrait"
        rating={5}
        quote={
          <>
            I had a great experience with Heat Wave Plumbing &amp; Heating.
            <br aria-hidden="true" />
            They were prompt, professional, and fixed my plumbing issue
            quickly. Highly recommended!
          </>
        }
        name="John Doe"
        title="CEO, ABC Company"
        layout="horizontal"
      />
    </SectionShell>
  );
}
