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
      <div className="rounded-2xl bg-[#eff6ff] p-2 xl:rounded-[30px] xl:p-4">
        <div className="grid gap-4 md:gap-5 xl:grid-cols-[minmax(0,27rem)_minmax(0,1fr)] xl:items-stretch">
          <div className="flex rounded-2xl bg-[#1d3eb0] px-4 sm:px-6 xl:rounded-[30px] xl:bg-[#1d5dec] xl:px-4">
            <div className="flex w-full flex-col items-start justify-end gap-4 py-8 sm:py-10 xl:justify-center">
              <h2 className="text-[clamp(3rem,10vw,4.5rem)] leading-[1.1] font-medium text-white">
                30k +
              </h2>
              <p className="max-w-[34ch] text-base leading-[1.5] font-normal text-white sm:max-w-[42ch] sm:text-lg">
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

          <div className="flex rounded-2xl bg-white px-4 sm:px-6 xl:min-h-[12.8125rem] xl:rounded-[30px] xl:px-4">
            <div className="flex min-w-0 flex-1 flex-col items-start justify-center py-6 sm:py-8 md:py-10 xl:px-[2.8125rem] xl:py-8">
              <div className="flex w-full flex-col gap-4 md:gap-5">
                <h2 className="text-[clamp(2.5rem,8vw,4rem)] leading-[1.15] font-medium text-[#282828] xl:text-black">
                  Our mission
                </h2>
                <p className="max-w-[60ch] text-base leading-[1.5] font-normal text-[#3d3d3d] sm:text-lg">
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
