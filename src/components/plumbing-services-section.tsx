import { MediaCard } from "@/components/ui/media-card";
import { getServicesByCategory } from "@/lib/cms";

export async function PlumbingServicesSection() {
  const services = await getServicesByCategory("plumbing");

  return (
    <section className="site-container pb-6">
      <div className="rounded-2xl bg-white px-2 py-4 lg:rounded-[32px] lg:px-4 lg:py-[50px]">
        <div className="flex flex-col gap-8 lg:gap-20">
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-20">
            <h2 className="max-w-[34rem] text-[1.75rem] leading-[1.12] font-medium text-black lg:text-[2.5rem] lg:leading-[1.2]">
              Expert Plumbing Services for All Your Needs
            </h2>
            <p className="max-w-[40rem] text-sm leading-[1.55] font-normal text-[#282828] lg:text-xl lg:leading-[1.35]">
              At Heat Wave Plumbing &amp; Heating, we offer a comprehensive
              range of plumbing services to meet all your needs. Our team of
              skilled plumbers is experienced in handling everything from leak
              repairs to installations and maintenance. With our expertise and
              dedication to customer satisfaction, you can trust us to deliver
              high-quality service every time.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-3 lg:gap-4">
            {services.map((service) => (
              <MediaCard
                key={service.slug}
                variant="feature"
                image={service.image}
                alt={service.alt}
                imageClassName={service.imageClassName}
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
