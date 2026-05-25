import { MediaCard } from "@/components/ui/media-card";

const services = [
  {
    title: "Boiler Replacement and Installation",
    description:
      "Upgrade your old and inefficient boiler with our professional replacement and installation services.",
    image: "/heating-boiler.png",
    alt: "Boiler replacement equipment",
  },
  {
    title: "Underfloor Heating Solutions",
    description:
      "Experience the comfort and energy efficiency of underfloor heating in your home or office.",
    image: "/heating-underfloor.png",
    alt: "Underfloor heating roll",
  },
  {
    title: "Radiator Installation and Repair",
    description:
      "Get professional radiator installation and repair services to keep your space warm and cozy.",
    image: "/heating-radiator.png",
    alt: "Radiator installation equipment",
  },
] as const;

export function HeatingServicesSection() {
  return (
    <section className="site-container pb-6">
      <div className="rounded-2xl bg-white py-4 lg:rounded-[16px]">
        <div className="flex flex-col gap-8 lg:gap-12">
          <div className="flex flex-col gap-5 px-2 lg:px-4">
            <div className="max-w-[760px]">
              <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[1.08] font-medium text-black">
                Expert Heating Services for Your Home or Business
              </h2>
            </div>
            <div className="max-w-[760px]">
              <p className="text-base leading-[1.5] font-normal text-black lg:text-lg">
                At Heat Wave Plumbing &amp; Heating, we offer a wide range of
                heating services to meet all your needs. Whether you need a
                boiler replacement, underfloor heating installation, or radiator
                repair, our experienced team has got you covered. We pride
                ourselves on delivering high-quality workmanship and exceptional
                customer service. Contact us today to discuss your heating
                requirements.
              </p>
            </div>
          </div>

          <div className="grid gap-4 px-2 lg:grid-cols-3 lg:px-4">
            {services.map((service) => (
              <MediaCard
                key={service.title}
                variant="feature"
                image={service.image}
                alt={service.alt}
                imageClassName="object-contain object-center"
                title={service.title}
                description={service.description}
                className="rounded-[8px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
