import { Hero } from "../components/hero";
import { AboutMe } from "../components/about-me";
import { courses } from "./courses/courses";
import { aboutMeId, coursesId } from "./navigation-vars";
import IntroSection from "@/components/intro-section";
import { Products } from "@/components/products";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <section id={coursesId} className="min-h-screen py-16 sm:py-24 px-4">
        <Products products={courses} withTitle />
      </section>
      <section className="min-h-screen w-full">
        <AboutMe id={aboutMeId} />
      </section>
    </>
  );
}
