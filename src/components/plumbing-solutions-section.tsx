import { SolutionsShowcase } from "@/components/ui/solutions-showcase";

const solutionBlocks = [
  {
    title: "Comprehensive Plumbing Solutions",
    description:
      "At Heat Wave Plumbing & Heating, we offer a wide range of plumbing services to meet all your needs. Our team of experienced plumbers is dedicated to providing high-quality workmanship and exceptional customer service.",
    accent: true,
  },
  {
    title: "Leak Repairs and Detection",
    description:
      "Our skilled plumbers are experts in detecting and repairing leaks in your plumbing system. We use advanced techniques and equipment to quickly identify the source of the leak and provide efficient solutions.",
  },
  {
    title: "Pipe Installation and Repair",
    description:
      "Whether you need new pipes installed or existing ones repaired, our team can handle it all. We ensure proper installation and use high-quality materials to ensure the longevity and efficiency of your plumbing system.",
  },
];

export function PlumbingSolutionsSection() {
  return (
    <SolutionsShowcase
      blocks={solutionBlocks}
      accentClassName="bg-[#bfdbfe]"
      image={{
        src: "/plumbing-solutions-figma.jpg",
        alt: "Plumber repairing pipework below a sink",
      }}
    />
  );
}
