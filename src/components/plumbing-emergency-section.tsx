import Image from "next/image";

import { EmergencyShowcase } from "@/components/ui/emergency-showcase";

export function PlumbingEmergencySection() {
  return (
    <EmergencyShowcase
      media={
        <Image
          src="/plumbing-emergency-figma.jpg"
          alt="Plumber preparing pipe fittings"
          fill
          sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
          className="object-cover object-[48%_44%] lg:object-[48%_52%]"
        />
      }
      label={
        <>
          Emergency Plumbing Services
          <br />
          with Fast Response Times
        </>
      }
    >
      At Heat Wave Plumbing &amp; Heating,
      <br />
      we understand the urgency of plumbing emergencies. Our team of experienced
      plumbers is available 24/7 to provide fast and reliable solutions to your
      plumbing problems. Whether it&apos;s a burst pipe, a blocked drain,
      <br />
      or a leaking faucet, we have the expertise to fix it quickly and
      efficiently.
    </EmergencyShowcase>
  );
}
