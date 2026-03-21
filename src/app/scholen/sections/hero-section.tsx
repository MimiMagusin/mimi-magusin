import Link from "next/link";
import {
  BuildingLibraryIcon,
  MusicalNoteIcon,
  UserGroupIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { yellowButton } from "@/components/styling-strings";
import { contactLink, heroContent, offersId } from "@/app/scholen/content";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-linear-to-br from-indigo-950 via-indigo-900 to-indigo-700 px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-64 bg-radial from-yellow-300/30 to-transparent blur-3xl" />
      <div className="absolute -right-16 top-24 h-56 w-56 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start md:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
        <div className="relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-yellow-300">
            {heroContent.eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 sm:mt-6 sm:text-xl sm:leading-8">
            {heroContent.intro}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href={contactLink} className={`${yellowButton} w-full sm:w-auto`}>
              {heroContent.primaryCta}
            </Link>
            <Link
              href={`#${offersId}`}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/85 transition hover:border-white/35 hover:bg-white/8 hover:text-white sm:w-auto"
            >
              {heroContent.secondaryCta}
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroContent.trustBullets.map((bullet, index) => {
              const Icon =
                index === 0
                  ? CalendarDaysIcon
                  : index === 1
                    ? UserGroupIcon
                    : BuildingLibraryIcon;

              return (
                <div
                  key={bullet}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-sm text-white/85 backdrop-blur-sm"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-yellow-300" />
                  <span>{bullet}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
          <div className="absolute inset-x-6 top-6 h-px bg-white/10" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-yellow-300/15 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300">
              <MusicalNoteIcon className="h-4 w-4" />
              Muziek op maat voor school
            </div>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {heroContent.spotlightTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/80">
              {heroContent.spotlightBody}
            </p>
            <div className="mt-8 grid gap-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-indigo-950/55 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300">
                  Doe Mee
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Kort, speels en laagdrempelig binnen schooltijd
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/95 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                  Muziek in de Klas
                </p>
                <p className="mt-3 text-lg font-semibold text-indigo-950">
                  Structureel traject met lessen, coaching en opbouw
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
