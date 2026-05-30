import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type BlogCardProps = {
  image: string;
  alt: string;
  category?: ReactNode;
  title: ReactNode;
  excerpt: ReactNode;
  href: string;
  author?: ReactNode;
  date?: ReactNode;
  ctaLabel?: ReactNode;
  imageClassName?: string;
  className?: string;
};

export function BlogCard({
  image,
  alt,
  category,
  title,
  excerpt,
  href,
  author,
  date,
  ctaLabel = "Read more",
  imageClassName,
  className,
}: Readonly<BlogCardProps>) {
  return (
    <article className={["group flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[24px] bg-white", className ?? ""].filter(Boolean).join(" ")}>
      <div className="relative h-[220px] overflow-hidden rounded-[24px] bg-sky-200 sm:h-[280px] lg:h-[500px]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, calc(100vw - 32px)"
          className={["object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]", imageClassName ?? "object-center"].filter(Boolean).join(" ")}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-5 px-4 py-5 sm:px-5 sm:py-6 lg:min-h-[19rem] lg:gap-7 lg:px-5 lg:py-7">
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <div className="flex min-w-0 items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              {category ? (
                <span className="inline-flex items-center justify-center rounded-[20px] bg-brand px-3.5 py-1.5 text-[0.8125rem] leading-[1.35] font-semibold text-white">
                  {category}
                </span>
              ) : null}
            </div>
            {author || date ? (
              <div className="flex min-w-0 shrink-0 items-center gap-3 text-[0.8125rem] leading-[1.35] font-semibold text-ink-soft">
                {author ? <span className="whitespace-nowrap">{author}</span> : null}
                {date ? <span className="whitespace-nowrap">{date}</span> : null}
              </div>
            ) : null}
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <h3 className="text-[1.25rem] leading-[1.5] font-semibold text-ink transition-colors duration-200 ease-out group-hover:text-brand">
              {title}
            </h3>
            <p className="max-w-[42ch] text-base leading-[1.5] font-normal text-ink-soft sm:text-[1.0625rem]">
              {excerpt}
            </p>
          </div>
        </div>

        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 text-base leading-[1.5] font-semibold text-ink transition-colors duration-200 ease-out hover:text-brand [&:hover_svg]:translate-x-1 [&_svg]:transition-transform [&_svg]:duration-200 [&_svg]:ease-out"
        >
          {ctaLabel}
          <ChevronRightIcon />
        </Link>
      </div>
    </article>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m7.5 5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
