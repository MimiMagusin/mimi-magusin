import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRightIcon,
  MusicalNoteIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { TallyFormEmbed } from "@/components/tally-form-embed";
import { coursesRoute } from "../navigation-vars";

const tallySrc =
  "https://tally.so/embed/9qOYGK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export const metadata: Metadata = {
  title: "Plan een proefles | Mimi Magusin",
  description:
    "Plan eenvoudig een proefles voor een van de cursussen van Mimi Magusin.",
};

const reassurancePoints = [
  "Laagdrempelig kennismaken met de les en de sfeer",
  "Snel duidelijkheid over dag, tijd en locatie",
  "Ook geschikt als je nog niet precies weet welke cursus past",
];

export default function ProeflesPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,230,7,0.92),_rgba(255,247,206,0.82)_32%,_rgba(255,255,255,1)_72%)] text-slate-900">
      <div className="absolute left-[-8rem] top-32 h-72 w-72 rounded-full bg-yellow-300/40 blur-3xl" />
      <div className="absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

      <section className="relative w-full px-4 pb-8 pt-28 sm:px-6 sm:pb-10 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-semibold text-indigo-900 shadow-sm backdrop-blur">
            <SparklesIcon className="h-4 w-4" />
            Proefles aanvragen
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-indigo-950 sm:text-5xl lg:text-6xl">
            Plan een proefles
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            Vul het formulier in en je ontvangt alle praktische informatie over
            de mogelijkheden. Nog niet zeker welke cursus het beste past? Dan
            denken we graag even mee!
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#formulier"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-indigo-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/15 transition hover:bg-indigo-800"
            >
              Ga naar het formulier
            </Link>
            <Link
              href={coursesRoute}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-indigo-900/15 bg-white/70 px-5 py-3 text-sm font-semibold text-indigo-900 transition hover:bg-white"
            >
              Bekijk alle cursussen
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-600">
            Eerst een vraag stellen? Mail naar{" "}
            <a
              href="mailto:info@mimimagusin.com"
              className="font-semibold text-indigo-900 underline underline-offset-4"
            >
              info@mimimagusin.com
            </a>
            .
          </p>
        </div>
      </section>

      <section
        id="formulier"
        className="relative w-full px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
      >
        <div className="mx-auto max-w-5xl">
          <div className="relative">
            <div className="absolute inset-x-8 top-6 h-full rounded-[2rem] bg-yellow-200/60 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/80 bg-white/88 p-3 shadow-2xl shadow-slate-900/10 ring-1 ring-black/5 backdrop-blur sm:p-5 lg:p-6">
              <TallyFormEmbed
                src={tallySrc}
                title="Plan een proefles!"
                minHeight={900}
                className="rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2rem] border border-white/70 bg-white/65 px-6 py-8 shadow-sm backdrop-blur sm:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Goed om te weten
              </p>
              <h2 className="mt-3 text-2xl font-bold text-indigo-950">
                Eerst ervaren, daarna beslissen.
              </h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {reassurancePoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl bg-white/80 px-5 py-5 text-sm leading-7 text-slate-700 ring-1 ring-white/90"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-200 text-indigo-900">
                    <MusicalNoteIcon className="h-5 w-5" />
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
