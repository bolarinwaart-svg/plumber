import { BlogSection } from "@/components/blog-section";
import { HeroSection } from "@/components/hero-section";
import { MissionSection } from "@/components/mission-section";
import { SiteFooter } from "@/components/site-footer";
import { ServicesSection } from "@/components/services-section";
import { SiteNav } from "@/components/site-nav";
import { SolutionSection } from "@/components/solution-section";
import { TestimonialSection } from "@/components/testimonial-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-sky">
      <SiteNav activePath="/" />
      <HeroSection />
      <MissionSection />
      <SolutionSection />
      <ServicesSection />
      <TestimonialSection />
      <BlogSection />
      <SiteFooter />
    </main>
  );
}
