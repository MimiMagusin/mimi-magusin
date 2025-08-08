import { Hero, Slide } from "../components/hero";
import { AboutMe } from "../components/about-me";
import { courses } from "./courses/courses";
import { aboutMeId, choirAcademyRoute, coursesId } from "./navigation-vars";
import IntroSection from "@/components/intro-section";
import { Products } from "@/components/products";

export default function Home() {
  const slides: Slide[] = [
    {
      id: 1,
      image: "25kca-bb-2.jpeg",
      alt: "Concert Bolderburen",
    },
    {
      id: 2,
      image: "mm24-winterconcert-1.jpg",
      alt: "Mimi dirigeert het Winterconcert",
    },
    {
      id: 3,
      image: "kca-appelboom.jpg",
      alt: "Singing Games bij de Naitonale Opera",
    },
  ];

  const heroProps = {
    firstWord: "Zing.",
    secondWord: "Speel.",
    thirdWord: "Groei.",
    subtitle: "Muziekonderwijs voor kinderen, jongeren en volwassenen.",
    firstCTA: {
      label: "Choir Academy",
      href: choirAcademyRoute,
    },
    secondCTA: {
      label: "Plan een proefles",
      href: "https://forms.gle/ujGWSyBH1zWhLoir7",
    },
    thirdCTA: {
      label: "Bekijk al het aanbod →",
      href: `#${coursesId}`,
    },
  };

  return (
    <>
      <Hero slides={slides} {...heroProps} />
      <div className="w-screen bg-linear-to-t from-indigo-900/70 to-transparent">
        <IntroSection />
      </div>

      <section
        id={coursesId}
        className="min-h-screen w-screen bg-linear-to-b from-yellow-300 to-yellow-300/20 py-16 sm:py-24 px-4"
      >
        <Products products={courses} withTitle />
      </section>
      <section className="min-h-screen w-screen bg-linear-to-t from-indigo-900 via-indigo-900/70 via-80% to-yellow-300/20 py-16 sm:py-24 px-4">
        <AboutMe id={aboutMeId} />
      </section>
    </>
  );
}
