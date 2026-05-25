import { SectionShell } from "@/components/ui/section-shell";

export function ContactInfoStrip() {
  return (
    <section className="site-container pb-6">
      <SectionShell
        as="div"
        tone="white"
        radius="lg"
        padding="md"
        innerClassName="grid gap-6 sm:grid-cols-2"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.25rem] leading-[1.4] font-semibold text-black">
            Email
          </h2>
          <a
            href="mailto:hello@relume.io"
            className="text-[1rem] leading-[1.5] font-normal underline text-black"
          >
            hello@relume.io
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[1.25rem] leading-[1.4] font-semibold text-black">
            Phone
          </h2>
          <a
            href="tel:+15550000000"
            className="text-[1rem] leading-[1.5] font-normal underline text-black"
          >
            +1 (555) 000-0000
          </a>
        </div>
      </SectionShell>
    </section>
  );
}
