import Image from "next/image";

import { BadgeChip } from "@/components/ui/badge-chip";
import { SplitContentSection } from "@/components/ui/split-content-section";

const solutionItems = [
  "High Quality Equipment",
  "Advance Services and Support",
  "Qualified Staffs",
];

export function SolutionSection() {
  return (
    <SplitContentSection
      as="section"
      tone="lightBlue"
      mediaPosition="right"
      align="start"
      className="pb-6"
      innerClassName="lg:items-stretch lg:gap-[18px] lg:grid-cols-[2fr_3fr]"
      textClassName=""
      mediaClassName="relative h-[300px] overflow-hidden rounded-2xl lg:h-auto lg:min-h-[406px] lg:rounded-[32px]"
      title={
        <div className="flex flex-col gap-4 rounded-2xl bg-[#bfdbfe] px-2 py-4 lg:rounded-[32px] lg:px-4 lg:py-[30px]">
          <BadgeChip variant="outlined" tone="blue" size="sm" className="self-start bg-white">
            Value
          </BadgeChip>
          <div className="flex flex-col gap-4 lg:gap-6">
            <h2 className="text-2xl leading-[1.3] font-medium text-black lg:text-[2rem]">
              We Offer The Perfect Solution For Your Home Problem
            </h2>
            <p className="text-base leading-[1.5] font-normal text-[#3d3d3d] lg:text-[1.125rem]">
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
          sizes="(min-width: 1024px) 58vw, calc(100vw - 32px)"
          className="object-cover object-[57%_50%] lg:object-[55%_50%]"
        />
      }
    >
      <div className="flex flex-col gap-2 lg:gap-4">
        {solutionItems.map((item) => (
          <div
            key={item}
            className="rounded-[30px] bg-[#1d5dec] px-4 py-4"
          >
            <p className="text-base leading-[1.5] font-semibold text-white lg:text-xl">
              {item}
            </p>
          </div>
        ))}
      </div>
    </SplitContentSection>
  );
}
