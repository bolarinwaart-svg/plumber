import { MediaCard } from "@/components/ui/media-card";
import { getServicesByCategory } from "@/lib/cms";

export async function HeatingServicesSection() {
  const services = await getServicesByCategory("heating");

  return (
    <section className="site-container pb-6">
      <div className="rounded-2xl bg-white px-2 py-4 lg:rounded-[32px] lg:px-4 lg:py-[50px]">
        <div className="flex flex-col gap-8 lg:gap-20">
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-20">
            <h2 className="max-w-[34rem] text-[1.75rem] leading-[1.12] font-medium text-black lg:text-[2.5rem] lg:leading-[1.2]">
              Expert Heating Services for Your Home or Business
            </h2>
            <p className="max-w-[40rem] text-sm leading-[1.55] font-normal text-[#282828] lg:text-xl lg:leading-[1.35]">
              At Heat Wave Plumbing &amp; Heating, we offer a wide range of
              heating services to meet all your needs. Whether you need a
              boiler replacement, underfloor heating installation, or radiator
              repair, our experienced team has got you covered. We pride
              ourselves on delivering high-quality workmanship and exceptional
              customer service. Contact us today to discuss your heating
              requirements.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-3 lg:gap-4">
            {services.map((service) => (
              <MediaCard
                key={service.slug}
                variant="feature"
                image={service.image}
                alt={service.alt}
                imageClassName="object-contain object-center"
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
