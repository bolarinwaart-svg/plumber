import Image from "next/image";

import { SplitContentSection } from "@/components/ui/split-content-section";

export function HeatingInstallationSection() {
  return (
    <SplitContentSection
      as="section"
      tone="lightBlue"
      mediaPosition="left"
      align="start"
      className="pb-6"
      innerClassName="gap-4 lg:items-end"
      textClassName="rounded-[16px] bg-[#1d3eb0] px-4 py-6 text-white lg:min-h-[640px] lg:rounded-[30px] lg:px-4 lg:py-8 lg:justify-end"
      mediaClassName="relative overflow-hidden rounded-[16px] bg-[#bfdbfe] lg:min-h-[640px] lg:flex-1 lg:rounded-[30px] lg:p-4"
      media={
        <>
          <Image
            src="/heating-system-installation-mobile.jpg"
            alt="Technician servicing a heating system"
            fill
            sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
            className="object-cover object-[52%_20%] lg:hidden"
          />
          <Image
            src="/heating-system-installation-desktop.jpg"
            alt="Technician servicing a heating system"
            fill
            sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
            className="hidden object-cover object-[38%_50%] lg:block"
          />

          <div className="px-2 pb-2 pt-4 lg:absolute lg:inset-x-4 lg:bottom-4 lg:p-0">
            <div className="rounded-[16px] bg-[#bfdbfe] px-3 py-4 lg:max-w-[616px] lg:rounded-[30px] lg:px-4 lg:py-8">
              <h2 className="text-[1.5rem] leading-[1.4] font-medium text-black lg:text-[2rem] lg:leading-[1.3]">
                Expert Heating System Installation and Maintenance Services
              </h2>
            </div>
          </div>
        </>
      }>
      <p className="text-[1rem] leading-[1.25] font-medium sm:text-[1.125rem] lg:text-[2rem] lg:leading-[1.2]">
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
