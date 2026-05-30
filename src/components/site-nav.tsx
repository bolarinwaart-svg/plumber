import Link from "next/link";

import { PrimaryPillButton } from "@/components/ui/primary-pill-button";
import { getSiteSettings } from "@/lib/cms";

type NavItem = {
  label: string;
  href: string;
};

export async function SiteNav({
  activePath = "/",
}: Readonly<{
  activePath?: string;
}>) {
  const siteSettings = await getSiteSettings();
  const navItems = siteSettings.navItems;

  return (
    <header className="relative z-50 w-full bg-sky py-2 sm:py-3 lg:py-4">
      <nav
        aria-label="Main navigation"
        className="site-container grid min-w-0 grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-4"
      >
        <Link
          href="/"
          className="min-w-0 rounded-md text-2xl leading-[1.2] font-semibold whitespace-nowrap text-ink transition-colors duration-200 ease-out hover:text-brand sm:text-[1.75rem] lg:text-[2rem]"
        >
          {siteSettings.brandName}
        </Link>

        <div className="hidden h-[66px] min-w-0 items-center gap-4 overflow-hidden rounded-[60px] bg-white lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              activePath={activePath}
              className={[
                "flex h-full min-w-0 flex-1 items-center justify-center rounded-[60px] px-2 py-3 text-[1.125rem] leading-[1.5] font-semibold whitespace-nowrap transition-colors duration-200 ease-out",
                isCurrentItem(item, activePath)
                  ? "bg-brand-accent text-white"
                  : "text-ink hover:bg-sky",
              ].join(" ")}
            />
          ))}
        </div>

        <div className="flex shrink-0 items-center justify-end gap-3.5 lg:hidden">
          <a
            href="/contact"
            aria-label="Request a call back from Heatwave"
            className="flex size-11 items-center justify-center rounded-[30px] bg-brand text-white transition-colors duration-200 ease-out hover:bg-brand-bright md:hidden"
          >
            <PhoneIcon />
          </a>

          <a
            href="/contact"
            className="hidden items-center justify-center rounded-[30px] bg-brand px-4 py-2 text-[1.125rem] leading-[1.5] font-semibold whitespace-nowrap text-white transition-colors duration-200 ease-out hover:bg-brand-bright md:inline-flex"
          >
            Contact Us
          </a>

          <details className="group relative">
            <summary
              aria-label="Toggle navigation menu"
              className="flex size-11 cursor-pointer list-none items-center justify-center rounded-[30px] bg-white text-ink shadow-sm transition-colors duration-200 ease-out hover:bg-sky [&::-webkit-details-marker]:hidden"
            >
              <MenuIcon />
            </summary>

            <div className="absolute top-[calc(100%+12px)] right-0 w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_18px_50px_rgba(25,45,85,0.16)]">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    item={item}
                    activePath={activePath}
                    className={[
                      "rounded-[18px] px-4 py-3 text-base leading-normal font-semibold transition-colors duration-200 ease-out",
                      isCurrentItem(item, activePath)
                        ? "bg-brand-accent text-white"
                        : "text-ink hover:bg-sky",
                    ].join(" ")}
                  />
                ))}
                <a
                  href="/contact"
                  className="mt-1 rounded-[18px] bg-brand px-4 py-3 text-center text-base leading-normal font-semibold text-white transition-colors duration-200 ease-out hover:bg-brand-bright"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </details>
        </div>

        <div className="hidden shrink-0 lg:block">
          <PrimaryPillButton
            href="/contact"
            className="h-[66px] rounded-[50px] px-7 text-[1.125rem] leading-[1.5] font-semibold"
          >
            Contact Us
          </PrimaryPillButton>
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  item,
  activePath,
  className,
}: Readonly<{
  item: NavItem;
  activePath: string;
  className: string;
}>) {
  const active = isCurrentItem(item, activePath);

  if (item.href.startsWith("/")) {
    return (
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={className}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <a
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={className}
    >
      {item.label}
    </a>
  );
}

function isCurrentItem(item: NavItem, activePath: string) {
  return item.href === "/" ? activePath === "/" : activePath.startsWith(item.href);
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.2 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 .3 4.1 2 2 0 0 1 2.3 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L6.3 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
        fill="currentColor"
        transform="translate(1.75 0)"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
