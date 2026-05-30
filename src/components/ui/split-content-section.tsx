import type { ReactNode } from "react";

import { SectionShell } from "@/components/ui/section-shell";

type SplitContentSectionProps = {
  as?: "section" | "div" | "article";
  tone?: "white" | "blue" | "lightBlue";
  mediaPosition?: "left" | "right";
  /**
   * When stacked, render the media above the text regardless of
   * `mediaPosition`. The side-by-side order still follows `mediaPosition`.
   */
  mediaFirstOnMobile?: boolean;
  /**
   * Width at which the layout switches from stacked to side-by-side.
   * `"lg"` (default) = 1024px. `"1000px"` triggers slightly earlier so a
   * 1024px-wide device reliably gets the side-by-side desktop view.
   */
  twoColumnAt?: "lg" | "1000px";
  align?: "start" | "center" | "end";
  stackOnMobile?: boolean;
  className?: string;
  innerClassName?: string;
  textClassName?: string;
  mediaClassName?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  cta?: ReactNode;
  media: ReactNode;
  children?: ReactNode;
};

const alignClasses: Record<NonNullable<SplitContentSectionProps["align"]>, string> =
  {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  };

export function SplitContentSection({
  as,
  tone = "white",
  mediaPosition = "right",
  mediaFirstOnMobile = false,
  twoColumnAt = "lg",
  align = "start",
  stackOnMobile = true,
  className,
  innerClassName,
  textClassName,
  mediaClassName,
  eyebrow,
  title,
  description,
  cta,
  media,
  children,
}: Readonly<SplitContentSectionProps>) {
  const ContentWrapper = as ?? "section";
  const mediaFirst = mediaPosition === "left";

  // Static class strings per breakpoint so Tailwind can scan them.
  const twoColPreset =
    twoColumnAt === "1000px"
      ? {
          grid: "grid-cols-1 min-[1000px]:grid-cols-2",
          order1: "min-[1000px]:order-1",
          order2: "min-[1000px]:order-2",
        }
      : {
          grid: "grid-cols-1 lg:grid-cols-2",
          order1: "lg:order-1",
          order2: "lg:order-2",
        };

  const layoutClasses = stackOnMobile ? twoColPreset.grid : "grid-cols-2";

  // Stacked order is media-on-top when requested; side-by-side order follows mediaPosition.
  const sideBySideMediaOrder = mediaFirst ? twoColPreset.order1 : twoColPreset.order2;
  const sideBySideTextOrder = mediaFirst ? twoColPreset.order2 : twoColPreset.order1;
  const mediaOrderClass =
    mediaFirstOnMobile && !mediaFirst
      ? `order-1 ${sideBySideMediaOrder}`
      : mediaFirst
        ? "order-1"
        : "order-2";
  const textOrderClass =
    mediaFirstOnMobile && !mediaFirst
      ? `order-2 ${sideBySideTextOrder}`
      : mediaFirst
        ? "order-2"
        : "order-1";

  return (
    <SectionShell
      as={ContentWrapper}
      tone={tone}
      radius="lg"
      padding="sm"
      className={className}
      innerClassName={[
        "grid gap-4",
        layoutClasses,
        alignClasses[align],
        innerClassName ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          mediaOrderClass,
          mediaClassName ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {media}
      </div>

      <div
        className={[
          "flex flex-col gap-4",
          textOrderClass,
          textClassName ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {eyebrow ? <div>{eyebrow}</div> : null}
        {title ? <div>{title}</div> : null}
        {description ? <div>{description}</div> : null}
        {cta ? <div>{cta}</div> : null}
        {children ? <div>{children}</div> : null}
      </div>
    </SectionShell>
  );
}
