import { Hero, Slide } from "../components/hero";
import type { Metadata } from "next";
import { AboutMe } from "../components/about-me";
import { courses } from "./courses/courses";
import {
  aboutMeId,
  choirAcademyRoute,
  coursesId,
  trialLessonRoute,
} from "./navigation-vars";
import IntroSection from "@/components/intro-section";
import { Products } from "@/components/products";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Muziekles Culemborg",
  description:
    "Muziekles in Culemborg voor kinderen, jongeren en volwassenen. Ontdek koorlessen, proeflessen en muziekonderwijs van Mimi Magusin.",
  path: "/",
  keywords: [
    "muziekles culemborg",
    "muziekles kinderen culemborg",
    "muziekles jongeren culemborg",
    "zingen culemborg",
    "koor culemborg",
  ],
  image: "/foto-mimi-magusin-breed.jpg",
});

export default function Home() {
  const popularLandingPages = [
    {
      href: "/muziekles-culemborg",
      label: "Alle muzieklessen",
      description:
        "Een overzicht van het aanbod voor kinderen, jongeren en volwassenen.",
    },
    {
      href: "/muziekles-kinderen-culemborg",
      label: "Voor kinderen",
      description:
        "Lessen en groepen voor jonge muzikanten die willen zingen, spelen en groeien.",
    },
    {
      href: "/muziekles-kleuters-culemborg",
      label: "Voor kleuters",
      description: "Een speelse start met zingen, bewegen, luisteren en ritme.",
    },
    {
      href: "/muziekles-jongeren-culemborg",
      label: "Voor jongeren",
      description:
        "Meer uitdaging, zelfstandigheid en ruimte om je stem verder te ontwikkelen.",
    },
    {
      href: "/kinderkoor-culemborg",
      label: "Kinderkoor",
      description:
        "Samen zingen, optreden en groeien in muzikaliteit en zelfvertrouwen.",
    },
    {
      href: "/amv-culemborg",
      label: "AMV",
      description:
        "Algemene muzikale vorming als brede basis voor luisteren, ritme en samenspel.",
    },
    {
      href: "/algemene-muzikale-vorming-culemborg",
      label: "Meer over algemene muzikale vorming",
      description:
        "Praktische uitleg over wat AMV inhoudt en voor wie het geschikt is.",
    },
  ];

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
      href: trialLessonRoute,
    },
    thirdCTA: {
      label: "Bekijk al het aanbod →",
      href: `#${coursesId}`,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Muziekles Culemborg",
    url: absoluteUrl("/"),
    description:
      "Muziekles in Culemborg voor kinderen, jongeren en volwassenen, met aandacht voor zingen, muzikaliteit en zelfvertrouwen.",
    inLanguage: "nl-NL",
    about: [
      "Muziekles Culemborg",
      "Kinderkoor Culemborg",
      "Jongerenkoor Culemborg",
    ],
  };

  return (
    <>
      <StructuredData data={websiteSchema} />
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
      <section className="w-screen bg-white px-4 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl border-t border-indigo-900/10 pt-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-indigo-950 sm:text-3xl">
              Waar ben je naar op zoek?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Of je nu op zoek bent naar een kinderkoor, een startgroep voor
              kleuters of verdieping voor jongeren — er is een plek voor
              iedereen.
            </p>
          </div>

          <nav
            aria-label="Extra pagina's over muziekles in Culemborg"
            className="mt-6 flex flex-wrap gap-3"
          >
            {popularLandingPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="rounded-full border border-indigo-900/10 px-4 py-2 text-sm font-medium text-indigo-900 transition hover:border-indigo-900/20 hover:bg-indigo-50"
                title={page.description}
              >
                {page.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}
