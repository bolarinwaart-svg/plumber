import Image from "next/image";

import { PrimaryPillButton } from "@/components/ui/primary-pill-button";
import { SplitContentSection } from "@/components/ui/split-content-section";

export function HeroSection() {
  return (
    <SplitContentSection
      as="section"
      tone="lightBlue"
      mediaPosition="right"
      align="start"
      className="pb-6 pt-1 sm:pt-2 xl:pb-10 xl:pt-0"
      innerClassName="xl:min-h-[28.625rem] xl:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] xl:items-stretch"
      textClassName="rounded-2xl bg-white px-4 py-6 sm:p-8 md:p-10 xl:rounded-[30px] xl:px-4 xl:py-14"
      mediaClassName="relative h-[13.75rem] overflow-hidden rounded-2xl sm:h-[18rem] md:h-[24rem] lg:h-[28rem] xl:h-auto xl:rounded-[30px]"
      title={
        <h1 className="max-w-[14ch] text-[clamp(2.125rem,5.6vw,4.25rem)] leading-[1.1] font-semibold text-[#282828] sm:max-w-[16ch] md:max-w-[18ch] lg:max-w-[20ch] xl:max-w-[760px]">
          Welcome to Heat Wave Plumbing &amp; Heating
        </h1>
      }
      description={
        <p className="max-w-[58ch] text-[clamp(1.125rem,1.6vw,1.875rem)] leading-[1.45] font-normal text-[#3d3d3d] xl:max-w-[760px]">
          We are a trusted plumbing and heating company in Leicester,
          <br className="hidden xl:block" />
          offering a wide range of services to meet all your needs.
        </p>
      }
      cta={
        <PrimaryPillButton
          href="#contact"
          className="text-[clamp(1rem,1.1vw,1.125rem)]"
        >
          Contact us
        </PrimaryPillButton>
      }
      media={
        <Image
          src="/hero-plumber.jpg"
          alt="Plumber repairing pipework under a sink"
          fill
          priority
          sizes="(min-width: 1280px) 50vw, calc(100vw - 32px)"
          className="object-cover object-[52%_50%] xl:object-[50%_50%]"
        />
      }
    />
  );
}
