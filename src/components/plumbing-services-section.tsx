import { MediaCard } from "@/components/ui/media-card";

const services = [
  {
    title: "Leak Repairs Done Right",
    description:
      "Don't let a leak cause further damage. Our expert plumbers will quickly identify and fix any leaks in your plumbing system, ensuring that your home remains dry and safe.",
    image: "/service-emergency.png",
    alt: "Leaking copper pipe",
    imageClassName: "object-cover object-[42%_56%]",
  },
  {
    title: "Professional Installations",
    description:
      "Whether you need a new faucet, toilet, or shower installed, our team has the expertise to handle any plumbing installation with precision and care.",
    image: "/service-installation.png",
    alt: "Copper and white pipe connector",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Reliable Plumbing Maintenance Services",
    description:
      "Regular maintenance is key to preventing plumbing issues. Our maintenance services will keep your plumbing system in top condition, saving you time and money in the long run.",
    image: "/service-maintenance.png",
    alt: "Open plumber toolkit",
    imageClassName: "object-cover object-[72%_50%]",
  },
];

export function PlumbingServicesSection() {
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
                key={service.title}
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
