import { BadgeChip } from "@/components/ui/badge-chip";
import { MediaCard } from "@/components/ui/media-card";

const services = [
  {
    titleLines: ["Installation and Maintenance", "Services"],
    image: "/service-installation.png",
    alt: "Copper pipe installation detail",
    imageClassName: "object-cover object-center",
  },
  {
    titleLines: ["Emergency Plumbing", "Solutions"],
    image: "/service-emergency.png",
    alt: "Burst copper pipe leaking water",
    imageClassName: "object-cover object-center",
  },
  {
    titleLines: ["Efficient Water Heater", "Installations"],
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
              <MediaCard
                key={service.titleLines.join(" ")}
                variant="service"
                image={service.image}
                alt={service.alt}
                imageClassName={service.imageClassName}
                title={
                  <>
                    {service.titleLines.map((line, index) => (
                      <span key={`${line}-${index}`}>
                        {line}
                        {index < service.titleLines.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </>
                }
                badge={
                  <BadgeChip
                    variant="outlined"
                    tone="blue"
                    size="sm"
                    className="bg-white"
                  >
                    Services
                  </BadgeChip>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
