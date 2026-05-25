import { PrimaryPillButton } from "@/components/ui/primary-pill-button";
import { SectionShell } from "@/components/ui/section-shell";

export function HeatingCtaSection() {
  return (
    <SectionShell
      as="section"
      tone="white"
      radius="sm"
      padding="sm"
      className="pb-6"
      innerClassName="flex flex-col gap-6 px-0 py-2 sm:px-2 sm:py-4"
    >
      <div className="max-w-[23rem]">
        <h2 className="text-[1.5rem] leading-[1.4] font-medium text-black">
          Expert Heating Services in Leicester
        </h2>
      </div>

      <div className="max-w-[24rem]">
        <p className="text-[1.125rem] leading-[1.5] font-normal text-black">
          Trust our experienced team to provide reliable and efficient
          heating solutions for your home or business.
        </p>
      </div>

      <div className="pt-2">
        <PrimaryPillButton href="#contact" className="text-[1.125rem]">
          Contact us
        </PrimaryPillButton>
      </div>
    </SectionShell>
  );
}
