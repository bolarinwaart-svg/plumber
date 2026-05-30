import type { HTMLAttributes, ReactNode } from "react";

type SectionShellTone = "white" | "blue" | "lightBlue";
type SectionShellRadius = "sm" | "md" | "lg";
type SectionShellPadding = "sm" | "md" | "lg";

type SectionShellProps = {
  as?: "section" | "div" | "article";
  tone?: SectionShellTone;
  radius?: SectionShellRadius;
  padding?: SectionShellPadding;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

const toneClasses: Record<SectionShellTone, string> = {
  white: "bg-white text-ink",
  blue: "bg-brand text-sky",
  lightBlue: "bg-sky text-ink",
};

const radiusClasses: Record<SectionShellRadius, string> = {
  sm: "rounded-[16px]",
  md: "rounded-[24px]",
  lg: "rounded-[30px]",
};

const paddingClasses: Record<SectionShellPadding, string> = {
  sm: "p-2 min-[1000px]:p-4",
  md: "px-4 py-4",
  lg: "px-4 py-8 sm:px-5 sm:py-10",
};

export function SectionShell({
  as,
  tone = "white",
  radius = "lg",
  padding = "md",
  className,
  innerClassName,
  children,
  ...rest
}: Readonly<SectionShellProps>) {
  const Component = as ?? "div";
  const outerClasses = ["site-container", className].filter(Boolean).join(" ");
  const shellClasses = [
    "overflow-hidden",
    toneClasses[tone],
    radiusClasses[radius],
    paddingClasses[padding],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={outerClasses} {...rest}>
      <div className={shellClasses}>
        <div className={innerClassName}>{children}</div>
      </div>
    </Component>
  );
}
