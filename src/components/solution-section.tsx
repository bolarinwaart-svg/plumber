import Image from "next/image";

import { BadgeChip } from "@/components/ui/badge-chip";
import { SplitContentSection } from "@/components/ui/split-content-section";

const solutionItems = [
  "High Quality Equipment",
  "Advanced Services and Support",
  "Qualified Staff",
];

export function SolutionSection() {
  return (
    <SplitContentSection
      as="section"
      tone="lightBlue"
      mediaPosition="right"
      mediaFirstOnMobile
      twoColumnAt="1000px"
      align="start"
      className="pb-6"
      innerClassName="min-[1000px]:items-stretch min-[1000px]:gap-[18px] min-[1000px]:grid-cols-[2.2fr_3fr]"
      textClassName=""
      mediaClassName="relative h-[300px] overflow-hidden rounded-2xl min-[768px]:h-[400px] min-[768px]:rounded-3xl min-[1000px]:h-auto min-[1000px]:self-stretch min-[1000px]:rounded-[32px]"
      title={
        <div className="flex flex-col gap-4 rounded-2xl bg-sky-200 px-2 py-4 md:rounded-3xl md:px-4 md:py-[30px] min-[1000px]:rounded-[32px]">
          <BadgeChip variant="outlined" tone="blue" size="sm" className="self-start bg-white">
            Value
          </BadgeChip>
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-2xl leading-[1.4] font-medium text-black md:text-[2rem] md:leading-[1.3]">
              We Offer The Perfect Solution
              <br className="hidden md:max-[999px]:block" />
              <span className="md:max-[999px]:hidden"> </span>
              For Your Home Problem
            </h2>
            <p className="text-base leading-[1.5] font-normal text-ink-soft md:text-[1.125rem]">
              Our plumbing services cover everything from minor repairs to major
              installations. Our skilled plumbers are dedicated to ensuring your
              plumbing works seamlessly, providing peace of mind.
            </p>
          </div>
        </div>
      }
      media={
        <Image
          src="/solution-plumber.jpg"
          alt="Plumber installing pipework under a sink"
          fill
          sizes="(min-width: 1000px) 58vw, calc(100vw - 32px)"
          className="object-cover object-[57%_50%] min-[1000px]:object-[55%_50%]"
        />
      }
    >
      <div className="flex flex-col gap-2 md:gap-4 min-[1000px]:mt-3.5">
        {solutionItems.map((item) => (
          <div
            key={item}
            className="rounded-[30px] bg-brand px-4 py-2 md:py-4 min-[1000px]:bg-brand-bright"
          >
            <p className="text-base leading-[1.5] font-semibold text-white md:text-xl">
              {item}
            </p>
          </div>
        ))}
      </div>
    </SplitContentSection>
  );
}
