import type { Metadata } from "next";
import { PlumbingEmergencySection } from "@/components/plumbing-emergency-section";
import { PlumbingFaqSection } from "@/components/plumbing-faq-section";
import { PlumbingHeroSection } from "@/components/plumbing-hero-section";
import { PlumbingIntroSection } from "@/components/plumbing-intro-section";
import { PlumbingServicesSection } from "@/components/plumbing-services-section";
import { PlumbingSolutionsSection } from "@/components/plumbing-solutions-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { TestimonialSection } from "@/components/testimonial-section";

export const metadata: Metadata = {
  title: "Plumbing | Heatwave Plumbing & Heating",
  description: "Heatwave plumbing services page.",
};

export default function PlumbingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#eff6ff]">
      <SiteNav activePath="/plumbing" />
      <PlumbingHeroSection />
      <PlumbingServicesSection />
      <PlumbingSolutionsSection />
      <TestimonialSection />
      <PlumbingEmergencySection />
      <PlumbingIntroSection />
      <PlumbingFaqSection />
      <div className="flex-1" />
      <SiteFooter />
    </main>
  );
}
