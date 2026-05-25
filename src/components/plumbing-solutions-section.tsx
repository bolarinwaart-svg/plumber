import Image from "next/image";

const solutionBlocks = [
  {
    title: "Comprehensive Plumbing Solutions",
    lines: [
      "At Heat Wave Plumbing & Heating, we offer a comprehensive range of plumbing services to meet all your needs. Our team of skilled plumbers is experienced in handling everything from leak repairs to installations and maintenance. With our expertise and dedication to customer satisfaction, you can trust us to deliver high-quality service every time.",
    ],
  },
  {
    title: "Leak Repairs and Detection",
    lines: [
      "Our skilled plumbers are experts in detecting and repairing leaks in your plumbing",
      "system. We use advanced techniques and equipment to quickly identify the source",
      "of the leak and provide efficient solutions.",
    ],
  },
  {
    title: "Pipe Installation and Repair",
    lines: [
      "Whether you need new pipes installed or existing ones repaired, our team can handle it",
      "all. We ensure proper installation and use high-quality materials to ensure the longevity",
      "and efficiency of your plumbing system.",
    ],
  },
];

export function PlumbingSolutionsSection() {
  return (
    <section className="site-container pb-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.98fr)] lg:items-stretch">
        <div className="relative order-1 h-[200px] overflow-hidden rounded-2xl lg:order-2 lg:h-auto lg:min-h-[528px] lg:rounded-[30px]">
          <Image
            src="/plumbing-solutions-figma.jpg"
            alt="Plumber repairing pipework below a sink"
            fill
            sizes="(min-width: 1024px) 47vw, calc(100vw - 32px)"
            className="object-cover object-[45%_50%] lg:object-[50%_50%]"
          />
        </div>

        <div className="relative order-2 overflow-hidden rounded-2xl bg-[#1d3eb0] px-3 py-7 text-white lg:order-1 lg:rounded-[30px] lg:px-4 lg:py-8">
          <div className="absolute left-4 top-8 hidden h-32 w-[3px] rounded-full bg-[#bfdbfe] lg:block" />
          <div className="flex max-w-none flex-col gap-8 lg:gap-11">
            {solutionBlocks.map((block) => (
              <div key={block.title} className="flex flex-col gap-4">
                <h2 className="text-[2.0625rem] leading-[2.5rem] font-medium tracking-[-0.02em]">
                  {block.title}
                </h2>
                <p className="text-[1rem] leading-[1.5] font-normal text-[#f6f6f6]">
                  {block.lines.map((line, index) => (
                    <span key={`${block.title}-${index}`}>
                      {line}
                      {index < block.lines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
