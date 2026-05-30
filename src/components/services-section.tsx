import { BadgeChip } from "@/components/ui/badge-chip";
import { MediaCard } from "@/components/ui/media-card";
import { getServicesByCategory } from "@/lib/cms";

export async function ServicesSection() {
  const services = await getServicesByCategory("home");

  return (
    <section className="site-container pb-6">
      <div className="rounded-2xl bg-white py-4 min-[1000px]:rounded-[32px]">
        <div className="flex flex-col gap-8 min-[1000px]:gap-12">
          <div className="flex flex-col gap-6 px-2 min-[1000px]:flex-row min-[1000px]:justify-between min-[1000px]:gap-[153px] min-[1000px]:px-4">
            <div className="min-w-0 flex-1 overflow-hidden">
              <h2 className="max-w-[549px] text-2xl leading-[1.4] font-medium text-ink md:max-[999px]:max-w-none lg:text-[2rem] lg:leading-[1.3]">
                Choose Heat Wave Plumbing &amp; Heating for
                <br className="hidden md:max-[999px]:block" />
                <span className="md:max-[999px]:hidden"> </span>
                reliable and professional plumbing services.
              </h2>
            </div>
            <div className="min-w-0 flex-1 overflow-hidden">
              <p className="max-w-[580px] text-base leading-[1.5] font-normal text-ink-soft md:max-[999px]:max-w-none lg:text-lg">
                Whether you need a leak repaired or a new installation, we have
                the expertise to
                <br className="hidden md:max-[999px]:block" />
                <span className="md:max-[999px]:hidden"> </span>
                handle it all. Trust Heat Wave Plumbing &amp; Heating for all
                your plumbing needs.
              </p>
            </div>
          </div>

          <div className="grid gap-4 px-2 min-[1000px]:grid-cols-3 min-[1000px]:px-4">
            {services.map((service) => (
              <MediaCard
                key={service.slug}
                variant="service"
                image={service.image}
                alt={service.alt}
                imageClassName={service.imageClassName}
                title={
                  <>
                    {(service.titleLines ?? [service.title]).map((line, index, lines) => (
                      <span key={`${line}-${index}`}>
                        {line}
                        {index < lines.length - 1 ? <br /> : null}
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
