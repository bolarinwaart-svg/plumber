import Image from "next/image";

import { SplitContentSection } from "@/components/ui/split-content-section";

export function HeatingBlueSection() {
  return (
    <SplitContentSection
      as="section"
      tone="lightBlue"
      mediaPosition="left"
      align="start"
      className="pb-6"
      innerClassName="gap-[15px] lg:items-end"
      textClassName="rounded-[16px] bg-[#1d3eb0] px-2 py-4 text-white lg:rounded-[30px] lg:px-4 lg:py-8"
      mediaClassName="relative h-[300px] overflow-hidden rounded-[16px] lg:flex-[1_0_0] lg:rounded-[30px]"
      media={
        <>
          <Image
            src="/heating-system-installation-desktop.jpg"
            alt="Technician working on a heating system"
            fill
            sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
            className="object-cover object-[54%_36%]"
          />
          <div className="absolute inset-0 rounded-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(29,62,176,0.08)_100%)]" />

          <div className="absolute inset-x-2 bottom-4 rounded-[8px] bg-[#bfdbfe] p-4 lg:inset-x-4 lg:bottom-4 lg:rounded-[30px] lg:p-4">
            <h2 className="text-[1.5rem] leading-[1.4] font-medium text-black">
              Expert Heating System Installation and Maintenance Services
            </h2>
          </div>
        </>
      }>
      <p className="text-[1.25rem] leading-[1.4] font-medium lg:text-[2rem] lg:leading-[1.2]">
        At Heat Wave Plumbing &amp; Heating, we specialize in the installation
        and maintenance of heating systems. Our team of experienced
        professionals is dedicated to providing top-quality service and ensuring
        the optimal performance of your heating system. Whether you need a new
        heating system installed or require regular maintenance to keep your
        current system running smoothly, we have the expertise and resources to
        meet your needs.
      </p>
    </SplitContentSection>
  );
}
