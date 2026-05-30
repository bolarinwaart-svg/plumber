import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

import Link from "next/link";

type PrimaryPillButtonCommonProps = {
  variant?: "primary" | "outlined";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

type PrimaryPillButtonButtonProps = PrimaryPillButtonCommonProps & {
  as?: "button";
  href?: never;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className" | "onClick" | "href">;

type PrimaryPillButtonLinkProps = PrimaryPillButtonCommonProps & {
  as?: "a";
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href" | "onClick">;

type PrimaryPillButtonProps =
  | PrimaryPillButtonButtonProps
  | PrimaryPillButtonLinkProps;

const variantClasses = {
  primary:
    "border border-transparent bg-brand text-white hover:bg-brand-bright active:bg-brand",
  outlined:
    "border border-sky bg-transparent text-sky hover:bg-white/10 active:bg-white/5",
} as const;

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-3.5 text-[1.125rem]",
} as const;

const baseClasses =
  "inline-flex items-center justify-center rounded-[30px] font-semibold leading-[1.5] whitespace-nowrap transition-colors duration-200 ease-out";

export function PrimaryPillButton({
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
  ...rest
}: Readonly<PrimaryPillButtonProps>) {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest) {
    const { href, as, ...anchorProps } = rest as PrimaryPillButtonLinkProps;

    if (as === "a") {
      return (
        <a href={href} className={classes} onClick={onClick} {...anchorProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as PrimaryPillButtonButtonProps;

  return (
    <button type={type} className={classes} onClick={onClick} {...buttonProps}>
      {children}
    </button>
  );
}
