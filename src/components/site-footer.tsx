import { PrimaryPillButton } from "@/components/ui/primary-pill-button";
import { getSiteSettings } from "@/lib/cms";

const socialIconMap = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
  LinkedIn: LinkedInIcon,
} as const;

export async function SiteFooter() {
  const siteSettings = await getSiteSettings();
  const navigationLinks = [
    ...siteSettings.navItems,
    { label: "Contact", href: "/contact" },
  ];
  const socialLinks = siteSettings.footer.socialLinks.map((label) => ({
    label,
    icon: socialIconMap[label as keyof typeof socialIconMap] ?? SocialIcon,
  }));

  return (
    <footer className="site-container pb-4">
      <div className="overflow-hidden rounded-[30px] bg-brand px-4 py-8 text-sky sm:px-5 sm:py-10">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-20 lg:px-4 lg:py-8">
        <div>
          <p className="max-w-full text-[clamp(3rem,14vw,9.375rem)] leading-none font-medium text-white">
            {siteSettings.footer.headline}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,31.25rem)_minmax(0,1fr)] lg:gap-[8.75rem]">
          <div className="flex flex-col gap-6">
            <p className="text-base leading-[1.5] font-normal">
              {siteSettings.footer.enquiryCopy}
            </p>

            <div className="flex flex-col gap-4">
              <form className="flex flex-col gap-4 sm:flex-row sm:items-center" action="#">
                <label className="sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-[30px] border border-sky bg-white px-5 py-3 text-base leading-[1.5] font-normal text-ink-soft transition-colors duration-200 ease-out focus:border-brand-accent"
                />
                <PrimaryPillButton
                  type="submit"
                  variant="outlined"
                  size="md"
                  className="sm:min-w-[11rem] lg:font-normal"
                >
                  Send enquiry
                </PrimaryPillButton>
              </form>

              <p className="max-w-[44rem] text-xs leading-[1.5] font-normal">
                {siteSettings.footer.privacyCopy.split("Privacy Policy")[0]}
                <a href="#" className="underline transition-colors duration-200 ease-out hover:text-white">
                  Privacy Policy
                </a>
                {siteSettings.footer.privacyCopy.split("Privacy Policy")[1]}
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:flex lg:justify-between lg:gap-10">
            <FooterColumn title="Navigation">
              <ul className="flex flex-col gap-1 lg:gap-0">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block py-0 text-sm leading-[1.5] font-normal transition-colors duration-200 ease-out hover:text-white lg:py-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Contact">
              <ul className="flex flex-col">
                <li>
                  <span className="block py-2 text-sm leading-[1.5] font-normal">
                    {siteSettings.contact.label}
                  </span>
                </li>
                <li>
                  <a
                    href={`mailto:${siteSettings.contact.email}`}
                    className="block py-2 text-sm leading-[1.5] font-normal break-all transition-colors duration-200 ease-out hover:text-white sm:break-normal"
                  >
                    {siteSettings.contact.email}
                  </a>
                </li>
              </ul>
            </FooterColumn>

            <FooterColumn title="Social Media">
              <ul className="flex flex-col">
                {socialLinks.map(({ label, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="flex items-center gap-3 py-2 text-sm leading-[1.5] font-normal whitespace-nowrap transition-colors duration-200 ease-out hover:text-white"
                    >
                      <Icon />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="h-px w-full bg-sky/30" />
          <div className="flex flex-col gap-6 text-sm leading-[1.5] font-normal md:flex-row md:items-start md:justify-between">
            <p>© {new Date().getFullYear()} {siteSettings.companyName}. All rights reserved.</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6 md:justify-end">
              {siteSettings.footer.legalLinks.map((link) => (
                <a key={link} href="#" className="underline transition-colors duration-200 ease-out hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function FooterColumn({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <h2 className="text-base leading-[1.5] font-semibold">{title}</h2>
      {children}
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.4 18v-7.3h2.4l.4-2.8h-2.8V6.1c0-.8.2-1.4 1.4-1.4h1.5V2.2c-.7-.1-1.5-.2-2.2-.2-2.2 0-3.8 1.4-3.8 3.9v2H5.8v2.8h2.5V18h3.1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="12"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="10" cy="10" r="2.8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="13.8" cy="6.2" r="1" fill="currentColor" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.4 5.8v.5c0 5.2-4 11.1-11.1 11.1-2.2 0-4.3-.6-6-1.8h.9c1.8 0 3.5-.6 4.8-1.7-1.7 0-3.1-1.1-3.6-2.6.2 0 .5.1.7.1.4 0 .7 0 1-.1-1.8-.4-3.1-1.9-3.1-3.8.5.3 1.1.5 1.7.5-1-.7-1.7-1.9-1.7-3.2 0-.7.2-1.4.5-2 1.9 2.3 4.7 3.8 7.9 4-.1-.3-.1-.6-.1-.9 0-2.1 1.7-3.8 3.8-3.8 1.1 0 2.1.5 2.8 1.2.9-.2 1.7-.5 2.4-.9-.3.9-.9 1.7-1.7 2.1.8-.1 1.5-.3 2.1-.6-.4.7-1.1 1.3-1.9 1.8Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5 shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.3 6.8h3V16h-3V6.8ZM5.8 2.3a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM9.1 6.8H12v1.3h.1c.4-.8 1.4-1.6 2.8-1.6 3 0 3.6 2 3.6 4.6V16h-3v-4.4c0-1.1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3V16h-3V6.8Z" />
    </svg>
  );
}
