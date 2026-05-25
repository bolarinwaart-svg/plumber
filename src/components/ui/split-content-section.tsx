import type { ReactNode } from "react";

import { SectionShell } from "@/components/ui/section-shell";

type SplitContentSectionProps = {
  as?: "section" | "div" | "article";
  tone?: "white" | "blue" | "lightBlue";
  mediaPosition?: "left" | "right";
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
  const layoutClasses = stackOnMobile ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-2";

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
          mediaFirst ? "order-1" : "order-2",
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
          mediaFirst ? "order-2" : "order-1",
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
