import { Hero, Slide } from "@/components/hero";
import { contactLink, projectsId } from "@/app/scholen/content";

const slides: Slide[] = [
  { id: 1, image: "sinterklaas-concert-2025.jpg", alt: "Sinterklaas concert in Culemborg" },
  { id: 2, image: "kca-groepsfoto-2.jpg", alt: "Leerlingen zingen en spelen samen" },
  { id: 3, image: "mm24-winterconcert-1.jpg", alt: "Optreden tijdens het winterconcert" },
  { id: 4, image: "kk24-kerstconcert.jpg", alt: "Optreden op een echt podium" },
];

export function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <Hero
        slides={slides}
        eyebrow="Muziek op school · Culemborg"
        firstWord="Muziek"
        secondWord="op School"
        thirdWord=""
        subtitle="Korte projecten en structureel muziekonderwijs voor basisscholen in Culemborg. Laagdrempelig, gesubsidieerd en direct inzetbaar."
        firstCTA={{ label: "Bekijk de projecten", href: `#${projectsId}` }}
        secondCTA={{ label: "Plan een kennismaking", href: contactLink }}
      />
    </section>
  );
}
