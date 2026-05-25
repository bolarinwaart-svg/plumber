import Image from "next/image";
import type { ReactNode } from "react";

export type FaqPanelProps = {
  image: string;
  alt: string;
  title: ReactNode;
  description: ReactNode;
  items: Array<{ question: string; answer: ReactNode }>;
  cta?: ReactNode;
  mediaPosition?: "left" | "right";
  className?: string;
};

export function FaqPanel({
  image,
  alt,
  title,
  description,
  items,
  cta,
  mediaPosition = "left",
  className,
}: Readonly<FaqPanelProps>) {
  const mediaFirst = mediaPosition === "left";

  return (
    <div
      className={[
        "overflow-hidden rounded-2xl bg-white p-2 lg:grid lg:grid-cols-2 lg:gap-20 lg:rounded-[30px] lg:p-4",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          "relative h-[200px] overflow-hidden rounded-2xl lg:h-auto lg:min-h-[736px] lg:rounded-[24px]",
          mediaFirst ? "order-1" : "order-2",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
          className="object-cover object-[55%_38%] lg:object-[52%_50%]"
        />
      </div>

      <div
        className={[
          "px-2 py-8 lg:flex lg:flex-col lg:justify-center lg:px-0 lg:py-6",
          mediaFirst ? "order-2" : "order-1",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="max-w-[39rem]">
          <h2 className="text-[2.5rem] leading-[1.15] font-normal text-black lg:text-[3rem]">
            {title}
          </h2>
          <p className="mt-6 max-w-[31rem] text-lg leading-[1.45] font-normal text-black lg:text-xl lg:leading-[1.35]">
            {description}
          </p>

          <div className="mt-10 lg:mt-14">
            {items.map((item) => (
              <details key={item.question} className="group border-b border-black py-5">
                <summary className="flex list-none cursor-pointer items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <p className="text-base leading-[1.4] font-semibold text-black lg:text-lg">
                    {item.question}
                  </p>
                  <span
                    aria-hidden="true"
                    className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#3a81f7] text-lg leading-none font-semibold text-white transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="pt-4 text-base leading-[1.5] font-normal text-[#3d3d3d] lg:text-lg">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>

          {cta ? <div className="mt-8 lg:mt-9">{cta}</div> : null}
        </div>
      </div>
    </div>
  );
}
