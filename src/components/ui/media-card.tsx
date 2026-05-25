import Image from "next/image";
import type { ReactNode } from "react";

type MediaCardVariant = "service" | "blog" | "feature";

export type MediaCardProps = {
  image: string;
  alt: string;
  title: ReactNode;
  description?: ReactNode;
  badge?: ReactNode;
  footer?: ReactNode;
  imageClassName?: string;
  contentClassName?: string;
  variant?: MediaCardVariant;
  className?: string;
};

const variantStyles: Record<
  MediaCardVariant,
  {
    article: string;
    media: string;
    content: string;
    title: string;
    description: string;
    footer: string;
  }
> = {
  service: {
    article: "overflow-hidden rounded-lg bg-[#eff6ff] lg:rounded-[24px]",
    media: "relative h-[162px] overflow-hidden bg-[#bfdbfe] lg:h-[280px]",
    content:
      "flex flex-col items-start bg-[#1d3eb0] px-3 py-3 text-white lg:bg-[#1d5dec] lg:p-4",
    title:
      "w-full text-center text-xl leading-[1.4] font-semibold text-white lg:text-[1.5rem] lg:text-[#f6f6f6]",
    description:
      "mt-2 text-center text-sm leading-[1.5] font-normal text-white/95 lg:text-base",
    footer: "mt-4",
  },
  feature: {
    article: "overflow-hidden rounded-lg bg-[#eff6ff] lg:rounded-[24px]",
    media: "relative h-[162px] overflow-hidden bg-[#bfdbfe] lg:h-[280px]",
    content: "bg-[#eff6ff] px-3 py-4 lg:px-4",
    title:
      "text-lg leading-[1.25] font-semibold text-black lg:text-xl lg:leading-[1.35]",
    description:
      "mt-4 text-sm leading-[1.5] font-normal text-black lg:text-lg lg:leading-[1.5]",
    footer: "mt-4",
  },
  blog: {
    article: "flex min-w-0 h-full flex-col overflow-hidden rounded-[24px] bg-white",
    media:
      "relative h-[220px] overflow-hidden rounded-[24px] bg-[#bfdbfe] sm:h-[280px] xl:h-[500px]",
    content:
      "flex flex-1 flex-col gap-4 px-4 py-5 sm:px-5 sm:py-6 xl:h-[297px] xl:gap-6 xl:px-4 xl:py-6",
    title: "text-xl font-semibold text-[#282828]",
    description: "text-lg font-normal text-[#3d3d3d]",
    footer: "mt-auto",
  },
};

export function MediaCard({
  image,
  alt,
  title,
  description,
  badge,
  footer,
  imageClassName,
  contentClassName,
  variant = "feature",
  className,
}: Readonly<MediaCardProps>) {
  const styles = variantStyles[variant];

  return (
    <article className={[styles.article, className ?? ""].filter(Boolean).join(" ")}>
      <div className={styles.media}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 31vw, calc(100vw - 32px)"
          className={[
            "object-cover",
            imageClassName ?? "object-center",
          ]
            .filter(Boolean)
            .join(" ")}
        />

        {badge ? <div className="absolute left-2 top-4 z-10">{badge}</div> : null}
      </div>

      <div className={[styles.content, contentClassName ?? ""].filter(Boolean).join(" ")}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          {description ? <div className={styles.description}>{description}</div> : null}
        </div>
        {footer ? <div className={styles.footer}>{footer}</div> : null}
      </div>
    </article>
  );
}
