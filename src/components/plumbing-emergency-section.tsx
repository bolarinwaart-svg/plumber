import Image from "next/image";

export function PlumbingEmergencySection() {
  return (
    <section className="site-container pb-6">
      <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-[300px] overflow-hidden rounded-2xl lg:min-h-[640px] lg:rounded-[30px]">
          <Image
            src="/plumbing-emergency-figma.jpg"
            alt="Plumber preparing pipe fittings"
            fill
            sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
            className="object-cover object-[48%_44%] lg:object-[48%_52%]"
          />
          <div className="absolute inset-x-2 bottom-4 rounded-lg bg-[#bfdbfe] px-3 py-4 lg:inset-x-4 lg:bottom-4 lg:rounded-[24px] lg:p-8">
            <h2 className="w-full max-w-[616px] text-[2rem] leading-[1.25] font-medium text-black lg:max-w-[616px] lg:text-[2rem] lg:leading-[1.25]">
              Emergency Plumbing Services
              <br />
              with Fast Response Times
            </h2>
          </div>
        </div>

        <div className="flex min-h-[368px] items-end rounded-2xl bg-[#1d3eb0] px-2 py-5 text-white lg:min-h-[640px] lg:rounded-[30px] lg:px-4 lg:py-10">
          <p className="w-full max-w-none text-[2rem] leading-[1.2] font-medium">
            At Heat Wave Plumbing &amp; Heating,
            <br />
            we understand the urgency of plumbing
            <br />
            emergencies. Our team of experienced
            <br />
            plumbers is available 24/7 to provide fast and
            <br />
            reliable solutions to your plumbing problems.
            <br />
            Whether it&apos;s a burst pipe, a blocked drain,
            <br />
            or a leaking faucet, we have the expertise to
            <br />
            fix it quickly and efficiently.
          </p>
        </div>
      </div>
    </section>
  );
}
