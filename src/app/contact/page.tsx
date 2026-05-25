import type { Metadata } from "next";
import { ContactFormSection } from "@/components/contact-form-section";
import { ContactHeroSection } from "@/components/contact-hero-section";
import { ContactInfoStrip } from "@/components/contact-info-strip";
import { ContactVisualSection } from "@/components/contact-visual-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Contact Us | Heatwave Plumbing & Heating",
  description: "Contact Heatwave Plumbing & Heating.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#eff6ff]">
      <SiteNav activePath="/contact" />
      <ContactHeroSection />
      <ContactInfoStrip />
      <ContactVisualSection />
      <ContactFormSection />
      <SiteFooter />
    </main>
  );
}
