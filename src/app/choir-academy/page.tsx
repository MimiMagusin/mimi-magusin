"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero, Slide } from "@/components/hero";

import {
  choirAcademyCourses,
  choirAcademyOverviewCourses,
  choirAcademySchoolYearPricing,
  getCourseSessions,
} from "../courses/courses";

import { MapPinIcon } from "@heroicons/react/24/outline";
import {
  CheckCircleIcon,
  MusicalNoteIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import ChoirLineSection from "@/components/choir-pathway";
import { Products } from "@/components/products";
import { CoursePricingDetails } from "@/components/course-pricing";
import { trialLessonRoute } from "../navigation-vars";

export default function ChoirAcademy() {
  const slides: Slide[] = [
    {
      id: 1,
      image: "25kca-bb-2.jpeg",
      alt: "Concert Bolderburen",
    },
    {
      id: 2,
      image: "25kk-bb-1.jpeg",
      alt: "Choir Academy zingt Matilda bij de Bolderburen",
    },
    {
      id: 3,
      image: "kca-appelboom.jpg",
      alt: "Singing Games bij de Naitonale Opera",
    },
    {
      id: 4,
      image: "25kk-bb-2.jpeg",
      alt: "Choir Academy zingt Het lied van Djamaloka bij de Bolderburen",
    },
    {
      id: 5,
      image: "kca-groepsfoto-2.jpg",
      alt: "Groepsfoto van de koren",
    },
  ];

  const heroProps = {
    eyebrow: "Zing. Speel. Groei.",
    firstWord: "Choir",
    secondWord: "Academy",
    thirdWord: "",
    subtitle:
      "Bij de Choir Academy groeien kinderen en jongeren in zang en muzikaliteit. Van speels ontdekken tot zuiver en meerstemmig zingen, noten lezen en optreden met vertrouwen.",
    secondCTA: {
      label: "Plan een proefles",
      href: trialLessonRoute,
    },
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <Hero slides={slides} {...heroProps} />
      </section>

      {/* PROGRAMMA */}
      <section className="mt-32 bg-linear-to-t from-indigo-900/70 to-transparent">
        <div className="max-w-screen mx-auto overflow-visible">
          <ChoirLineSection />
        </div>
      </section>

      <section className="bg-linear-to-b from-yellow-300 to-yellow-300/20 py-32 px-8">
        <div className="container mx-auto my-8 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="rounded-lg bg-indigo-300 p-8">
            <h2 className="text-3xl font-bold mb-6">Praktische informatie</h2>
            <ul className="text-lg text-gray-800 space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircleIcon className="h-5 w-5 text-gray-600" />
                1 repetitie per week, in een groep die past bij leeftijd en
                niveau.
              </li>
              <li className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 text-gray-600" />
                In het lesrooster hieronder zie je per koor welk lesmoment en
                welke locatie je kunt kiezen.
              </li>
              <li className="flex items-center gap-3">
                <MusicalNoteIcon className="h-5 w-5 text-gray-600" />
                Optredens: Alle groepen treden op, met meer uitdaging en vaker
                optreden in de oudere groepen.
              </li>
              <li className="flex items-center gap-3">
                <PencilSquareIcon className="h-5 w-5 text-gray-600" />
                Inschrijven kan het hele jaar door. Altijd twee gratis
                proeflessen!
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-white/80 p-8 shadow-sm">
            <CoursePricingDetails
              pricing={choirAcademySchoolYearPricing}
              title="Kosten voor jaarlijkse cursussen"
            />
          </div>
        </div>
      </section>

      <section className="bg-linear-to-b from-yellow-300/20 to-white py-24 px-6 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-indigo-950">
              Lesrooster
            </h2>
            <p className="mt-4 text-lg leading-8 text-indigo-950/80">
              Elk koor repeteert één keer per week. Per koor kies je het
              lesmoment dat bij jullie past.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {choirAcademyCourses.map((course) => {
              const sessions = getCourseSessions(course);

              return (
                <div
                  key={course.id}
                  className="rounded-lg border border-indigo-100 bg-white/85 p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-indigo-950">
                        {course.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-indigo-700/80">
                        {course.targetAudience}
                      </p>
                      <p className="mt-3 text-sm text-slate-700">
                        1 repetitie per week. Kies één lesmoment.
                      </p>
                    </div>
                    <a
                      href={course.href}
                      className="shrink-0 text-sm font-semibold text-indigo-700 underline underline-offset-4"
                    >
                      Meer info
                    </a>
                  </div>

                  <div className="mt-6 space-y-4">
                    {sessions.map((session) => {
                      return (
                        <div
                          key={session.id}
                          className="rounded-lg bg-indigo-50/70 px-4 py-3"
                        >
                          <p className="font-semibold text-indigo-950">
                            {session.label ? `${session.label}groep` : session.dayAndTime}
                          </p>
                          <p className="mt-1 text-sm font-medium text-indigo-800/85">
                            {session.dayAndTime}
                          </p>
                          <p className="mt-1 text-sm text-slate-700">
                            {session.location}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-t from-yellow-300 to-yellow-300/20 py-32 px-8">
        <div className="mx-auto max-w-3xl pb-10 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-indigo-950">
            Vier koren, één lijn
          </h2>
          <p className="pt-4 text-lg leading-8 text-indigo-950/85">
            Van ontdekken naar verdiepen: in elke groep bouwen kinderen stap
            voor stap aan muzikaliteit, zelfvertrouwen en podiumervaring.
          </p>
        </div>
        <Products
          products={choirAcademyOverviewCourses}
          withTitle
          title="Kies het koor dat past"
        />
      </section>

      {/* OVER MIMI */}
      <section className="bg-linear-to-t from-indigo-900/70 to-transparent">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Image
              src="/mimi-magusin.jpg"
              alt="Mimi Magusin"
              width={400}
              height={400}
              className="w-full max-w-[320px] sm:max-w-[400px] aspect-square rounded-2xl object-cover shadow-lg mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 max-w-6xl mx-auto px-4"
          >
            <h2 className="text-3xl font-bold mb-4">Over Mimi Magusin</h2>
            <p className="text-lg text-gray-900 mb-4">
              Mimi Magusin is een ervaren koordirigent en muziekdocent. Met haar
              energieke en toegankelijke stijl weet ze kinderen en jongeren te
              inspireren om het beste uit zichzelf te halen, zowel muzikaal als
              persoonlijk.
            </p>
            <p className="text-lg text-gray-900">
              Ze helpt haar leerlingen hun talenten te ontdekken en ontwikkelen,
              met veel aandacht voor zelfstandigheid, samenwerking en
              muzikaliteit.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
