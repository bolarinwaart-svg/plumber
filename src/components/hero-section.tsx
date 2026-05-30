import Image from "next/image";

import { PrimaryPillButton } from "@/components/ui/primary-pill-button";
import { SplitContentSection } from "@/components/ui/split-content-section";

export function HeroSection() {
  return (
    <SplitContentSection
      as="section"
      tone="lightBlue"
      mediaPosition="right"
      mediaFirstOnMobile
      twoColumnAt="1000px"
      align="start"
      className="pb-6 pt-1 sm:pt-2 min-[1000px]:pb-10 min-[1000px]:pt-0"
      innerClassName="min-[1000px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] min-[1000px]:items-stretch"
      textClassName="rounded-2xl bg-white px-4 py-6 sm:p-8 md:max-[999px]:gap-8 md:max-[999px]:px-4 md:max-[999px]:pb-14 md:max-[999px]:pt-14 min-[1000px]:gap-6 min-[1000px]:rounded-[30px] min-[1000px]:px-4 min-[1000px]:py-14"
      mediaClassName="relative h-[13.75rem] overflow-hidden rounded-2xl sm:h-[18rem] md:h-[24rem] min-[1000px]:h-auto min-[1000px]:rounded-[30px]"
      title={
        <h1 className="text-[clamp(2.125rem,4.4vw,4.75rem)] leading-[1.1] font-semibold text-ink md:max-[999px]:text-[3.5rem] md:max-[999px]:leading-[1.08] min-[1000px]:max-w-none min-[1000px]:text-[clamp(2.25rem,3.5vw,3.5rem)] min-[1000px]:leading-[1.2]">
          Welcome to Heat Wave
          <br className="hidden min-[1000px]:block" />
          <span className="min-[1000px]:hidden"> </span>
          Plumbing &amp; Heating
        </h1>
      }
      description={
        <p className="max-w-[62ch] text-[clamp(0.875rem,1.4vw,1.25rem)] leading-[1.5] font-normal text-ink-soft md:max-[999px]:max-w-[44rem] md:max-[999px]:text-[1.25rem] min-[1000px]:max-w-none">
          We are a trusted plumbing and heating company in Leicester,
          <br className="hidden min-[1000px]:block" />
          <span className="min-[1000px]:hidden"> </span>
          offering a wide range of services to meet all your needs.
        </p>
      }
      cta={
        <PrimaryPillButton
          href="#contact"
          className="text-[clamp(1rem,1.1vw,1.125rem)] md:max-lg:text-[1.125rem] lg:mt-5"
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
          sizes="(min-width: 1000px) 50vw, calc(100vw - 32px)"
          className="object-cover object-[52%_50%]"
        />
      }
    />
  );
}
