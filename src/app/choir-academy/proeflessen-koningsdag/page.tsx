import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDaysIcon,
  InformationCircleIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";
import { quickLinks, practicalItems, trialLessonGroups } from "./page-content";
import { QuickLinks } from "./quick-links";
import { TallyForm } from "./tally-form";

export const metadata: Metadata = {
  title: "Proeflessen Koningsdag | Mimi Magusin",
  description:
    "Meld je aan om mee te zingen met het Koningsdagconcert van Choir Academy.",
};

export default function ProeflessenKoningsdagPage() {
  return (
    <div className="w-full bg-linear-to-b from-yellow-300 via-yellow-100 to-white text-slate-900">
      <section className="w-full px-4 pb-12 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[2rem] bg-white/70 px-6 py-10 shadow-sm ring-1 ring-white/80 backdrop-blur sm:px-10 sm:py-14">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-900">
              Choir Academy
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-indigo-950 sm:text-5xl">
                Zing mee met ons Koningsdagconcert!
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                Wil je ontdekken hoe leuk het is om samen te zingen? Op deze
                pagina meld je je eenvoudig aan en vind je snel de belangrijkste
                informatie over deze Koningsdag-editie.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <QuickLinks links={quickLinks} />
            <Link
              href="/choir-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-indigo-900 px-5 py-3 text-sm font-semibold text-indigo-900 transition hover:bg-indigo-900 hover:text-white"
            >
              Bekijk Choir Academy
            </Link>
          </div>
        </div>
      </section>

      <section id="aanmelden" className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.45fr]">
          <div className="space-y-6 rounded-[2rem] bg-indigo-950 px-6 py-8 text-white shadow-lg sm:px-8">
            <h2 className="text-2xl font-bold">Aanmelden</h2>
            <p className="text-base leading-7 text-indigo-100">
              Gebruik het formulier om je aanmelding door te geven. Dat is de
              snelste route om mee te doen.
            </p>
            <div className="space-y-4 text-sm leading-7 text-indigo-100">
              <div className="flex items-start gap-3">
                <MusicalNoteIcon className="mt-1 h-5 w-5 shrink-0" />
                <p>
                  Deze pagina is speciaal ingericht voor het
                  Koningsdagconcert, zodat je niet hoeft te zoeken.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CalendarDaysIcon className="mt-1 h-5 w-5 shrink-0" />
                <p>
                  Na je aanmelding ontvang je aanvullende praktische informatie.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <InformationCircleIcon className="mt-1 h-5 w-5 shrink-0" />
                <p>
                  Eerst meer weten? Scroll door naar de praktische informatie of
                  open de Choir Academy-pagina in een nieuw tabblad.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-3 shadow-xl ring-1 ring-black/5 sm:p-5">
            <TallyForm />
          </div>
        </div>
      </section>

      <section id="praktische-info" className="w-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] bg-white px-6 py-8 shadow-sm ring-1 ring-indigo-100 sm:px-8">
            <h2 className="text-2xl font-bold text-indigo-950">
              Praktische informatie
            </h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-slate-700">
              {practicalItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-indigo-50 px-4 py-4 ring-1 ring-indigo-100"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {trialLessonGroups.map((group) => (
                <section
                  key={group.title}
                  className="rounded-2xl bg-yellow-50 px-5 py-5 ring-1 ring-yellow-200"
                >
                  <h3 className="text-lg font-bold text-indigo-950">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Kies een moment voor de proeflessen:
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                    {group.lessons.map((lesson) => (
                      <li
                        key={lesson}
                        className="rounded-xl bg-white px-4 py-3 ring-1 ring-yellow-100"
                      >
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>

          <aside
            id="meer-info"
            className="rounded-[2rem] bg-linear-to-br from-indigo-900 to-indigo-700 px-6 py-8 text-white shadow-sm sm:px-8"
          >
            <h2 className="text-2xl font-bold">Meer info</h2>
            <p className="mt-4 text-base leading-7 text-indigo-100">
              Wil je eerst meer lezen over de koren, lessen en docent? Gebruik
              deze snelle links.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/choir-academy"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                Naar Choir Academy
              </Link>
              <Link
                href="/courses"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                Bekijk alle cursussen
              </Link>
              <Link
                href="mailto:info@mimimagusin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                Stel een vraag via e-mail
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
