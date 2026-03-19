import { schoolsMetadata } from "@/app/scholen/content";
import { CtaSection } from "@/app/scholen/sections/cta-section";
import { FaqSection } from "@/app/scholen/sections/faq-section";
import { HeroSection } from "@/app/scholen/sections/hero-section";
import { OffersSection } from "@/app/scholen/sections/offers-section";
import { PremiumDaypartSection } from "@/app/scholen/sections/premium-daypart-section";
import { SchoolTypesSection } from "@/app/scholen/sections/school-types-section";
import { StepsSection } from "@/app/scholen/sections/steps-section";
import { StrengthsSection } from "@/app/scholen/sections/strengths-section";

export const metadata = schoolsMetadata;

export default function SchoolsPage() {
  return (
    <div className="-mt-8 w-full bg-white text-slate-900">
      <HeroSection />
      <OffersSection />
      <SchoolTypesSection />
      <StepsSection />
      <StrengthsSection />
      <PremiumDaypartSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
