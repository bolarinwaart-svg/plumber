import Image from "next/image";

const testimonialAvatars = [
  { src: "/testimonial-avatar-1.png", alt: "Client story avatar 1" },
  { src: "/testimonial-avatar-2.png", alt: "Client story avatar 2" },
  { src: "/testimonial-avatar-3.png", alt: "Client story avatar 3" },
  { src: "/testimonial-avatar-4.png", alt: "Client story avatar 4" },
];

export function TestimonialSection() {
  return (
    <section className="site-container pb-6">
      <div className="rounded-2xl bg-white px-2 py-4 lg:rounded-[32px] lg:p-4">
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between lg:gap-[153px]">
            <div className="min-w-0 flex-1 overflow-hidden">
              <h2 className="text-2xl leading-[1.4] font-medium text-black lg:text-[2rem] lg:leading-[1.3]">
                Client Stories
              </h2>
            </div>

            <div className="flex w-full items-center lg:w-auto lg:justify-center">
              <div className="flex gap-4">
                {testimonialAvatars.map((avatar) => (
                  <div
                    key={avatar.src}
                    className="relative size-8 overflow-hidden rounded-full border-2 border-white lg:size-12"
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      sizes="(min-width: 1024px) 48px, 32px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-6 lg:flex-row lg:items-center lg:gap-[90px]">
            <div className="w-full overflow-hidden rounded-lg bg-white lg:w-[444px] lg:shrink-0 lg:rounded-3xl">
              <div className="relative h-[300px] w-full overflow-hidden rounded-bl-[20px] rounded-br-[20px] lg:size-[444px] lg:rounded-3xl">
                <Image
                  src="/testimonial-client.png"
                  alt="John Doe testimonial portrait"
                  fill
                  sizes="(min-width: 1024px) 444px, calc(100vw - 32px)"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-6 overflow-hidden lg:w-[561px] lg:items-start">
              <div
                aria-label="5 out of 5 stars"
                className="text-[1.3125rem] leading-none tracking-[1px] text-black"
              >
                ★★★★★
              </div>
              <blockquote className="text-center text-base leading-[1.5] font-normal text-[#3d3d3d] lg:text-left lg:text-lg">
                I had a great experience with Heat Wave Plumbing &amp; Heating.
                They were prompt, professional, and fixed my plumbing issue
                quickly. Highly recommended!
              </blockquote>
              <div className="flex flex-col items-center justify-center leading-[1.5] whitespace-nowrap text-black lg:items-start">
                <p className="text-xl font-bold">John Doe</p>
                <p className="text-base font-normal">CEO, ABC Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
