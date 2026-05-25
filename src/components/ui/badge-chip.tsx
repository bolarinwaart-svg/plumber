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
    filled: "bg-[#3a81f7] text-white",
    outlined: "border border-[#3a81f7] text-[#1d3eb0]",
  },
  white: {
    filled: "bg-white text-[#1d3eb0]",
    outlined: "border border-[#eff6ff] text-[#eff6ff]",
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
