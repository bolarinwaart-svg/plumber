import type { ReactNode } from "react";

type BadgeChipProps = {
  variant?: "filled" | "outlined";
  tone?: "blue" | "white";
  size?: "sm" | "md";
  className?: string;
  children: ReactNode;
};

const toneClasses = {
  blue: {
    filled: "bg-brand-accent text-white",
    outlined: "border border-brand-accent text-brand",
  },
  white: {
    filled: "bg-white text-brand",
    outlined: "border border-sky text-sky",
  },
} as const;

const sizeClasses = {
  sm: "px-3 py-1 text-sm leading-[1.4] font-medium",
  md: "px-4 py-2 text-base leading-[1.5] font-semibold",
} as const;

export function BadgeChip({
  variant = "filled",
  tone = "blue",
  size = "md",
  className,
  children,
}: Readonly<BadgeChipProps>) {
  const classes = [
    "inline-flex items-center justify-center rounded-full whitespace-nowrap",
    sizeClasses[size],
    toneClasses[tone][variant],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
