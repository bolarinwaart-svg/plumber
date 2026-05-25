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
  white: "bg-white text-[#282828]",
  blue: "bg-[#1d3eb0] text-[#eff6ff]",
  lightBlue: "bg-[#eff6ff] text-[#282828]",
};

const radiusClasses: Record<SectionShellRadius, string> = {
  sm: "rounded-[16px]",
  md: "rounded-[24px]",
  lg: "rounded-[30px]",
};

const paddingClasses: Record<SectionShellPadding, string> = {
  sm: "p-2",
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
  const shellClasses = [
    "site-container overflow-hidden",
    toneClasses[tone],
    radiusClasses[radius],
    paddingClasses[padding],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={className} {...rest}>
      <div className={shellClasses}>
        <div className={innerClassName}>{children}</div>
      </div>
    </Component>
  );
}
