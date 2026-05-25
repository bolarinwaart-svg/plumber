import Image from "next/image";

import { SectionShell } from "@/components/ui/section-shell";

const contactImagePrimary = "https://www.figma.com/api/mcp/asset/c1a0bc01-8d19-4785-bff0-bde502dbf406";

export function ContactVisualSection() {
  return (
    <section className="site-container pb-6">
      <SectionShell
        as="div"
        tone="white"
        radius="lg"
        padding="sm"
        innerClassName="overflow-hidden"
      >
        <div className="relative h-[738px] overflow-hidden rounded-[30px]">
          <Image
            src={contactImagePrimary}
            alt="Plumber standing in a bathroom"
            fill
            sizes="(min-width: 1280px) 100vw, calc(100vw - 32px)"
            className="object-cover object-[50%_45%]"
          />
        </div>
      </SectionShell>
    </section>
  );
}
