import { schoolsMetadata } from "@/app/scholen/content";
import { CtaSection } from "@/app/scholen/sections/cta-section";
import { FaqSection } from "@/app/scholen/sections/faq-section";
import { HeroSection } from "@/app/scholen/sections/hero-section";
import { OffersSection } from "@/app/scholen/sections/offers-section";
import { ProjectsSection } from "@/app/scholen/sections/projects-section";
import { StrengthsSection } from "@/app/scholen/sections/strengths-section";

export const metadata = schoolsMetadata;

export default function SchoolsPage() {
  return (
    <div className="w-full bg-white text-slate-900">
      <HeroSection />
      <ProjectsSection />
      <OffersSection />
      <StrengthsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
