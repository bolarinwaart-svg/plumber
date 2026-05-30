import Image from "next/image";
import type { ReactNode } from "react";

export type TestimonialBlockProps = {
  image: string;
  alt: string;
  rating: number;
  quote: ReactNode;
  name: ReactNode;
  title: ReactNode;
  avatars?: Array<{ src: string; alt: string }>;
  starCount?: number;
  layout?: "horizontal" | "vertical";
  className?: string;
};

export function TestimonialBlock({
  image,
  alt,
  rating,
  quote,
  name,
  title,
  avatars,
  starCount = 5,
  layout = "horizontal",
  className,
}: Readonly<TestimonialBlockProps>) {
  const isHorizontal = layout === "horizontal";
  const stars = "★".repeat(Math.max(0, starCount));

  return (
    <div className={["flex flex-col gap-6", className ?? ""].filter(Boolean).join(" ")}>
      {avatars?.length ? (
        <div className="flex justify-end">
          <div className="flex gap-4">
            {avatars.map((avatar) => (
              <div
                key={avatar.src}
                className="relative size-12 overflow-hidden rounded-full border-2 border-white"
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div
        className={[
          "flex flex-col",
          isHorizontal ? "gap-8 lg:flex-row lg:items-center lg:gap-[90px]" : "gap-6",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div
          className={[
            "relative overflow-hidden rounded-[30px]",
            isHorizontal
              ? "h-[452px] w-full lg:w-[444px] lg:shrink-0"
              : "h-[452px] w-full",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <Image
            src={image}
            alt={alt}
            fill
            sizes={isHorizontal ? "(min-width: 1024px) 444px, calc(100vw - 32px)" : "calc(100vw - 32px)"}
            className="object-cover object-center"
          />
        </div>

        <div
          className={[
            "flex w-full flex-col items-start gap-6 overflow-hidden text-left min-[744px]:max-[1023px]:max-w-none min-[744px]:max-[1023px]:items-center min-[744px]:max-[1023px]:text-center",
            isHorizontal ? "max-w-[561px]" : "max-w-none",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div aria-label={`${rating} out of 5 stars`} className="text-[1.125rem] leading-none tracking-[0.0625rem] text-black min-[744px]:max-[1023px]:text-[1.25rem]">
            {stars}
          </div>

          <blockquote className="text-[1rem] leading-[1.55] font-normal text-ink-soft min-[744px]:text-[1.125rem] min-[744px]:leading-[1.5] min-[744px]:max-[1023px]:mx-auto min-[744px]:max-[1023px]:max-w-full">
            {quote}
          </blockquote>

          <div className="flex flex-col items-start leading-[1.5] whitespace-nowrap text-black min-[744px]:max-[1023px]:items-center">
            <p className="text-[1.25rem] font-bold">{name}</p>
            <p className="text-[1rem] font-normal">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
