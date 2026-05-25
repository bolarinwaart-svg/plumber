import { PrimaryPillButton } from "@/components/ui/primary-pill-button";
import { SectionShell } from "@/components/ui/section-shell";

export function PlumbingCtaSection() {
  return (
    <SectionShell
      as="section"
      tone="white"
      radius="lg"
      padding="lg"
      className="pb-6"
      innerClassName="flex min-h-[220px] flex-col justify-center gap-4 px-0 py-0 sm:gap-5"
    >
      <div className="max-w-[30rem]">
        <h2 className="text-[2rem] leading-[1.1] font-medium text-black sm:text-[2.5rem]">
          Expert Plumbing Services in Leicester
        </h2>
      </div>

      <div className="max-w-[32rem]">
        <p className="text-[1.125rem] leading-[1.5] font-normal text-black">
          Contact us today for a free quote or to schedule a service
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
