import { SolutionsShowcase } from "@/components/ui/solutions-showcase";

const solutionBlocks = [
  {
    title: "Heating Installation and Replacement",
    description:
      "We specialise in the installation and replacement of heating systems, ensuring optimal performance and energy efficiency.",
    accent: true,
  },
  {
    title: "Heating Repair and Maintenance Services",
    description:
      "Our experienced technicians are equipped to handle all types of heating repairs and provide regular maintenance to keep your system running smoothly.",
  },
  {
    title: "Thermostat Installation and Upgrades",
    description:
      "Upgrade your heating system with a new thermostat installation or take advantage of our thermostat upgrade services for improved control and energy savings.",
  },
];

export function HeatingSolutionsSection() {
  return (
    <SolutionsShowcase
      blocks={solutionBlocks}
      accentClassName="bg-white"
      image={{
        src: "/heating-solutions-figma.jpg",
        alt: "Technician servicing a heating system by a window",
      }}
    />
  );
}
