import Image from "next/image";

import { PrimaryPillButton } from "@/components/ui/primary-pill-button";
import { SplitContentSection } from "@/components/ui/split-content-section";

const contactImageSecondary = "https://www.figma.com/api/mcp/asset/4a0a710e-6093-4d49-be3b-c5522d03c36c";

export function ContactFormSection() {
  return (
    <SplitContentSection
      as="section"
      tone="white"
      mediaPosition="left"
      align="center"
      className="pb-6"
      innerClassName="gap-4 overflow-hidden lg:grid-cols-2 lg:gap-0"
      textClassName="flex flex-col gap-8 px-4 py-6 lg:justify-center lg:px-4 lg:py-4"
      mediaClassName="relative min-h-[420px] overflow-hidden rounded-[30px] lg:min-h-[734px]"
      title={
        <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[1.2] font-medium text-black">
          Contact information
        </h2>
      }
      description={
        <p className="mt-4 text-base leading-[1.5] font-normal text-[#3d3d3d] sm:text-lg">
          Have a question or need assistance? Fill out the form below.
        </p>
      }
      media={
        <Image
          src={contactImageSecondary}
          alt="Plumber writing notes on a clipboard"
          fill
          sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
          className="object-cover object-bottom"
        />
      }
    >
      <form className="flex flex-col gap-6">
        <Field label="Name" placeholder="Enter your name" />
        <Field label="Email" placeholder="Enter your email" />
        <div className="flex flex-col gap-2">
          <label className="text-base leading-[1.5] font-normal text-black">
            Message
          </label>
          <div className="relative">
            <textarea
              className="h-[180px] w-full resize-none rounded-[10px] border border-black bg-white p-3 text-base leading-[1.5] font-normal text-[#3d3d3d] outline-none"
              placeholder="Enter your message"
            />
            <div className="pointer-events-none absolute right-1 bottom-1 flex size-2 items-center justify-center">
              <div className="h-[2px] w-[8px] rotate-45 bg-[#3d3d3d]" />
            </div>
          </div>
        </div>

        <PrimaryPillButton type="submit" className="text-[1.125rem]">
          Submit
        </PrimaryPillButton>
      </form>
    </SplitContentSection>
  );
}

function Field({
  label,
  placeholder,
}: Readonly<{
  label: string;
  placeholder: string;
}>) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base leading-[1.5] font-normal text-black">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-[10px] border border-black bg-white p-3 text-base leading-[1.5] font-normal text-black outline-none"
      />
    </div>
  );
}
