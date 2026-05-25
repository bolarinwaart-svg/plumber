import type { Metadata } from "next";
import { HeatingHeroSection } from "@/components/heating-hero-section";
import { HeatingCtaSection } from "@/components/heating-cta-section";
import { HeatingInstallationSection } from "@/components/heating-installation-section";
import { HeatingServicesSection } from "@/components/heating-services-section";
import { HeatingSolutionsSection } from "@/components/heating-solutions-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { PlumbingFaqSection } from "@/components/plumbing-faq-section";
import { TestimonialSection } from "@/components/testimonial-section";

export const metadata: Metadata = {
  title: "Heating | Heatwave Plumbing & Heating",
  description: "Heating services in Leicester.",
};

export default function HeatingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#eff6ff]">
      <SiteNav activePath="/heating" />
      <HeatingHeroSection />
      <HeatingServicesSection />
      <HeatingSolutionsSection />
      <TestimonialSection />
      <HeatingInstallationSection />
      <HeatingCtaSection />
      <PlumbingFaqSection />
      <SiteFooter />
    </main>
  );
}
