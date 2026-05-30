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
    article:
      "flex flex-col overflow-hidden rounded-lg bg-sky min-[1000px]:rounded-[24px]",
    media:
      "relative h-[162px] overflow-hidden bg-sky-200 min-[1000px]:h-auto min-[1000px]:min-h-[280px] min-[1000px]:flex-1",
    content:
      "flex shrink-0 flex-col items-start bg-brand px-3 py-3 text-white min-[1000px]:bg-brand-bright min-[1000px]:p-4",
    title:
      "w-full text-center text-xl leading-[1.4] font-semibold text-white min-[1000px]:text-[clamp(1rem,1.4vw,1.5rem)] min-[1000px]:leading-[1.35]",
    description:
      "mt-2 text-center text-sm leading-[1.5] font-normal text-white/95 min-[1000px]:text-base",
    footer: "mt-4",
  },
  feature: {
    article: "overflow-hidden rounded-lg bg-sky lg:rounded-[24px]",
    media: "relative h-[162px] overflow-hidden bg-sky-200 lg:h-[280px]",
    content: "bg-sky px-3 py-4 lg:px-4",
    title:
      "text-lg leading-[1.25] font-semibold text-ink lg:text-xl lg:leading-[1.35]",
    description:
      "mt-4 text-sm leading-[1.5] font-normal text-ink lg:text-lg lg:leading-[1.5]",
    footer: "mt-4",
  },
  blog: {
    article: "flex min-w-0 h-full flex-col overflow-hidden rounded-[24px] bg-white",
    media:
      "relative h-[220px] overflow-hidden rounded-[24px] bg-sky-200 sm:h-[280px] lg:h-[500px]",
    content:
      "flex flex-1 flex-col gap-4 px-4 py-5 sm:px-5 sm:py-6 lg:h-[297px] lg:gap-6 lg:px-4 lg:py-6",
    title: "text-xl font-semibold text-ink",
    description: "text-lg font-normal text-ink-soft",
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
          sizes="(min-width: 1024px) 33vw, calc(100vw - 32px)"
          className={imageClassName ?? "object-cover object-center"}
        />

        {badge ? <div className="absolute left-2 top-4 z-10">{badge}</div> : null}
      </div>

      <div className={[styles.content, contentClassName ?? ""].filter(Boolean).join(" ")}>
        <div className="w-full">
          <h3 className={styles.title}>{title}</h3>
          {description ? <div className={styles.description}>{description}</div> : null}
        </div>
        {footer ? <div className={styles.footer}>{footer}</div> : null}
      </div>
    </article>
  );
}
