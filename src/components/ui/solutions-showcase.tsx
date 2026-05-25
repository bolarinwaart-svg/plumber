import Image from "next/image";

export type SolutionBlock = {
  title: string;
  description: string;
  accent?: boolean;
};

type SolutionsShowcaseProps = {
  blocks: SolutionBlock[];
  image: {
    src: string;
    alt: string;
  };
  /** Tailwind class for the accent bar fill, e.g. "bg-[#bfdbfe]" or "bg-white". */
  accentClassName?: string;
};

export function SolutionsShowcase({
  blocks,
  image,
  accentClassName = "bg-[#bfdbfe]",
}: SolutionsShowcaseProps) {
  return (
    <section className="site-container pb-6">
      <div className="flex flex-col gap-4 overflow-hidden rounded-[30px] p-4 lg:flex-row lg:items-stretch">
        <div className="flex flex-1 items-center rounded-[32px] bg-[#1d3eb0] px-4 py-8">
          <div className="flex w-full flex-col gap-10">
            {blocks.map((block) => (
              <div key={block.title} className="flex gap-8">
                <div
                  className={[
                    "w-[3px] shrink-0 self-stretch rounded-full",
                    block.accent ? accentClassName : "bg-transparent",
                  ].join(" ")}
                />
                <div className="flex flex-col gap-4">
                  <h2 className="text-[2.0625rem] leading-[2.5rem] font-medium tracking-[-0.02em] text-white">
                    {block.title}
                  </h2>
                  <p className="text-base leading-[1.5] font-normal text-[#f6f6f6]">
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[240px] shrink-0 overflow-hidden rounded-[32px] lg:h-auto lg:w-[55%] lg:self-stretch">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 55vw, calc(100vw - 32px)"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
