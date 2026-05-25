import Image from "next/image";

import { EmergencyShowcase } from "@/components/ui/emergency-showcase";

export function HeatingInstallationSection() {
  return (
    <EmergencyShowcase
      media={
        <>
          <Image
            src="/heating-system-installation-mobile.jpg"
            alt="Technician servicing a heating system"
            fill
            sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
            className="object-cover object-[52%_20%] lg:hidden"
          />
          <Image
            src="/heating-system-installation-desktop.jpg"
            alt="Technician servicing a heating system"
            fill
            sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
            className="hidden object-cover object-[38%_50%] lg:block"
          />
        </>
      }
      label="Expert Heating System Installation and Maintenance Services"
    >
      At Heat Wave Plumbing &amp; Heating, we specialize in the installation and
      maintenance of heating systems. Our team of experienced professionals is
      dedicated to providing top-quality service and ensuring the optimal
      performance of your heating system. Whether you need a new heating system
      installed or require regular maintenance to keep your current system
      running smoothly, we have the expertise and resources to meet your needs.
    </EmergencyShowcase>
  );
}
