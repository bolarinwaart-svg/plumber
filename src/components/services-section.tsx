import Image from "next/image";

const services = [
  {
    title: "Installation and Maintenance Services",
    image: "/service-installation.png",
    alt: "Copper pipe installation detail",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Emergency Plumbing Solutions",
    image: "/service-emergency.png",
    alt: "Burst copper pipe leaking water",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Efficient Water Heater Installations",
    image: "/service-water-heater.png",
    alt: "Wall mounted water heater system",
    imageClassName: "object-cover object-top",
  },
];

export function ServicesSection() {
  return (
    <section className="site-container pb-6">
      <div className="rounded-2xl bg-white py-4 lg:rounded-[32px]">
        <div className="flex flex-col gap-8 lg:gap-12">
          <div className="flex flex-col gap-6 px-2 lg:flex-row lg:justify-between lg:gap-[153px] lg:px-4">
            <div className="min-w-0 flex-1 overflow-hidden">
              <h2 className="max-w-[549px] text-2xl leading-[1.4] font-medium text-[#282828] lg:text-[2rem] lg:leading-[1.3]">
                Choose Heat Wave Plumbing &amp; Heating for reliable and
                professional plumbing services.
              </h2>
            </div>
            <div className="min-w-0 flex-1 overflow-hidden">
              <p className="max-w-[580px] text-base leading-[1.5] font-normal text-[#3d3d3d] lg:text-lg">
                Whether you need a leak repaired or a new installation, we have
                the expertise to handle it all. Trust Heat Wave Plumbing &amp;
                Heating for all your plumbing needs.
              </p>
            </div>
          </div>

          <div className="grid gap-4 px-2 lg:grid-cols-3 lg:px-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="relative flex h-[300px] min-w-0 flex-col overflow-hidden rounded-lg bg-[#bfdbfe] lg:h-[440px] lg:rounded-3xl"
              >
                <div className="relative min-h-0 flex-1">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, calc(100vw - 32px)"
                    className={service.imageClassName}
                  />
                </div>

                <div className="bg-[#1d3eb0] p-2 lg:bg-[#1d5dec] lg:p-4">
                  <h3 className="text-center text-xl leading-[1.4] font-medium text-white lg:text-2xl lg:font-semibold lg:text-[#f6f6f6]">
                    {service.title}
                  </h3>
                </div>

                <div className="absolute left-0 top-4 px-2 lg:px-4">
                  <span className="inline-flex h-[38px] items-center justify-center rounded-[20px] border border-[#1d5dec] bg-white px-4 text-sm leading-[1.5] font-medium whitespace-nowrap text-[#1d5dec]">
                    Services
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
