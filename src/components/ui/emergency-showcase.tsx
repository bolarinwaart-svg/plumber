import type { ReactNode } from "react";

type EmergencyShowcaseProps = {
  /** Image element(s) — rendered as an absolute-fill background of the left panel. */
  media: ReactNode;
  /** Heading shown in the light-blue label overlaying the image. */
  label: ReactNode;
  /** Paragraph content shown in the blue panel on the right. */
  children: ReactNode;
};

export function EmergencyShowcase({
  media,
  label,
  children,
}: EmergencyShowcaseProps) {
  return (
    <section className="site-container pb-6">
      <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-[300px] overflow-hidden rounded-2xl lg:min-h-[640px] lg:rounded-[30px]">
          {media}
          <div className="absolute inset-x-2 bottom-4 rounded-lg bg-[#bfdbfe] px-3 py-4 lg:inset-x-4 lg:bottom-4 lg:rounded-[24px] lg:p-8">
            <h2 className="w-full max-w-[616px] text-[2rem] leading-[1.25] font-medium text-black">
              {label}
            </h2>
          </div>
        </div>

        <div className="flex min-h-[368px] items-end rounded-2xl bg-[#1d3eb0] px-2 py-5 text-white lg:min-h-[640px] lg:rounded-[30px] lg:px-4 lg:py-10">
          <p className="w-full max-w-none text-[1.5rem] leading-[1.3] font-medium sm:text-[1.75rem] lg:text-[2rem] lg:leading-[1.2]">
            {children}
          </p>
        </div>
      </div>
    </section>
  );
}
