import Link from "next/link";
import Image from "next/image";
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
    <article className={["flex min-w-0 h-full flex-col overflow-hidden rounded-[24px] bg-white", className ?? ""].filter(Boolean).join(" ")}>
      <div className="relative h-[220px] overflow-hidden rounded-[24px] bg-[#bfdbfe] sm:h-[280px] xl:h-[500px]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, calc(100vw - 32px)"
          className={["object-cover", imageClassName ?? "object-center"].filter(Boolean).join(" ")}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 px-4 py-5 sm:px-5 sm:py-6 xl:h-[297px] xl:gap-6 xl:px-4 xl:py-6">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              {category ? (
                <span className="inline-flex items-center justify-center rounded-[20px] bg-[#1d3eb0] px-4 py-2 text-sm leading-[1.5] font-medium text-white">
                  {category}
                </span>
              ) : null}
            </div>
            {author || date ? (
              <div className="flex items-center gap-3 text-sm leading-[1.5] font-medium text-[#282828]">
                {author ? <span className="whitespace-nowrap">{author}</span> : null}
                {date ? <span className="whitespace-nowrap">{date}</span> : null}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-2 leading-[1.5]">
            <h3 className="text-xl font-semibold text-[#282828]">{title}</h3>
            <p className="text-lg font-normal text-[#3d3d3d]">{excerpt}</p>
          </div>
        </div>

        <Link href={href} className="mt-auto inline-flex items-center gap-2 text-lg leading-[1.5] font-normal text-[#282828]">
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
