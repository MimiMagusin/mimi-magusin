import { Hero } from "../components/hero";
import { Products } from "../components/products";
import { AboutMe } from "../components/about-me";
import { courses } from "./courses/courses";
import { aboutMeId, coursesId } from "./navigation-vars";
import Link from "next/link";

const ActionsHeroHome = () => (
  <section className="mt-10 flex items-center justify-center gap-x-6">
    <Link
      href={`/courses`}
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Kies een cursus
    </Link>
    <Link
      href={`#${aboutMeId}`}
      className="text-sm font-semibold leading-6 text-gray-900"
    >
      Over mij <span aria-hidden="true">→</span>
    </Link>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero
        title="Mimi Magusin"
        subtitle="Muziek, Onderwijs & Code"
        ActionComponent={ActionsHeroHome}
      />
      <section id={coursesId} className="min-h-screen py-16 sm:py-24 px-4">
        <Products products={courses} withTitle />
      </section>
      <section className="min-h-screen w-full">
        <AboutMe id={aboutMeId} />
      </section>
    </>
  );
}
