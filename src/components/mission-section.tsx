import Image from "next/image";

const avatars = [
  { src: "/avatar-review-1.png", alt: "Customer review avatar 1" },
  { src: "/avatar-review-2.png", alt: "Customer review avatar 2" },
  { src: "/avatar-review-3.png", alt: "Customer review avatar 3" },
  { src: "/avatar-review-4.png", alt: "Customer review avatar 4" },
];

export function MissionSection() {
  return (
    <section className="site-container pb-6">
      <div className="rounded-2xl bg-sky p-2 lg:rounded-[30px] lg:p-4">
        <div className="grid gap-4 md:grid-cols-2 md:items-stretch lg:grid-cols-[minmax(0,449px)_minmax(0,1fr)]">
          <div className="flex rounded-2xl bg-brand px-2 md:px-4 md:rounded-3xl lg:rounded-[30px] lg:bg-brand-bright">
            <div className="flex w-full flex-col items-start justify-end gap-4 py-[30px] lg:justify-center">
              <h2 className="text-[3rem] leading-[1.2] font-medium text-white">
                30k +
              </h2>
              <p className="text-lg leading-[1.5] font-normal text-white">
                Our commitment to delivering top-notch service has earned us a
                loyal clientele and countless positive reviews.
              </p>
              <div className="flex items-center">
                {avatars.map((avatar, index) => (
                  <div
                    key={avatar.src}
                    className={[
                      "relative size-[60px] overflow-hidden rounded-full border-2 border-white",
                      index < avatars.length - 1 ? "-mr-3" : "",
                    ].join(" ")}
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      sizes="60px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex rounded-2xl bg-white px-2 md:px-4 md:rounded-3xl lg:min-h-[12.8125rem] lg:rounded-[30px]">
            <div className="flex min-w-0 flex-1 flex-col items-start py-4 md:py-8 lg:justify-center lg:px-[2.8125rem]">
              <div className="flex w-full flex-col gap-4">
                <h2 className="text-[2.25rem] leading-[1.2] font-medium text-ink md:text-[3rem] lg:text-black">
                  Our mission
                </h2>
                <p className="text-base leading-[1.5] font-normal text-ink-soft md:text-lg">
                  At Heat Wave Plumbing &amp; Heating, we are dedicated to
                  providing top-notch leak repair services. Our experienced team
                  of plumbers is equipped with the skills and knowledge to
                  quickly identify and fix any leaks in your plumbing system.
                  With our expertise, you can have peace of mind knowing that
                  your home is protected from water damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
