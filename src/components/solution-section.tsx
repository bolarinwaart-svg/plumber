import Image from "next/image";

const solutionItems = [
  "High Quality Equipment",
  "Advance Services and Support",
  "Qualified Staffs",
];

export function SolutionSection() {
  return (
    <section className="site-container pb-6">
      <div className="rounded-[24px] bg-white p-2 lg:bg-[#eff6ff] lg:p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-[18px]">
          <div className="relative h-[300px] overflow-hidden rounded-2xl lg:order-2 lg:h-auto lg:min-h-[406px] lg:flex-1 lg:rounded-[32px]">
            <Image
              src="/solution-plumber.jpg"
              alt="Plumber installing pipework under a sink"
              fill
              sizes="(min-width: 1024px) 58vw, calc(100vw - 32px)"
              className="object-cover object-[57%_50%] lg:object-[55%_50%]"
            />
          </div>

          <div className="flex flex-col justify-center lg:order-1 lg:w-[564px] lg:shrink-0">
            <div className="rounded-2xl bg-[#bfdbfe] px-2 py-4 lg:rounded-[32px] lg:px-4 lg:py-[30px]">
              <div className="flex flex-col gap-4">
                <div className="inline-flex w-fit items-start rounded-[20px] border border-[#3a81f7] px-4 py-1 lg:rounded-[30px]">
                  <span className="text-center text-base leading-[1.5] font-semibold whitespace-nowrap text-[#3d3d3d]">
                    Value
                  </span>
                </div>

                <div className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="text-2xl leading-[1.4] font-medium text-[#282828] lg:text-[2rem] lg:leading-[1.3] lg:text-black">
                    We Offer The Perfect Solution For Your Home Problem
                  </h2>
                  <p className="text-base leading-[1.5] font-normal text-[#3d3d3d] lg:text-lg">
                    Our plumbing services cover everything from minor repairs to
                    major installations. Our skilled plumbers are dedicated to
                    ensuring your plumbing works seamlessly, providing peace of
                    mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-2 lg:py-[30px]">
              <div className="flex flex-col gap-2 py-1 lg:gap-4 lg:py-0">
                {solutionItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[30px] bg-[#1d3eb0] px-4 py-2 lg:bg-[#1d5dec] lg:p-4"
                  >
                    <p className="text-base leading-[1.5] font-semibold text-white lg:text-xl">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
