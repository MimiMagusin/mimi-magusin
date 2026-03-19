import Link from "next/link";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { yellowButton } from "@/components/styling-strings";
import { contactLink, premiumDaypart } from "@/app/scholen/content";
import { BulletList } from "@/app/scholen/shared";

const daypartMoments = [
  {
    title: "Groepslessen",
    description:
      "Praktische muzieklessen met zingen, ritme, bewegen en samenspel.",
  },
  {
    title: "Afstemming",
    description: "Korte lijnen met leerkrachten over thema's, planning en doelen.",
  },
  {
    title: "Schoolmomenten",
    description:
      "Toewerken naar presentaties, vieringen of repertoire in de school.",
  },
  {
    title: "Teamondersteuning",
    description:
      "Coaching en inspiratie die helpt om muziek duurzaam te verankeren.",
  },
];

export function PremiumDaypartSection() {
  return (
    <section className="w-full bg-linear-to-br from-indigo-950 via-indigo-900 to-indigo-800 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            Muziek in de Klas uitgelicht
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Wat houdt een dagdeel Muziek in de Klas in?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Een dagdeel kan verschillende vormen aannemen, afhankelijk van de
            vraag van de school. Denk aan uitvoerende lessen, inhoudelijke
            afstemming en teamondersteuning binnen hetzelfde dagdeel.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
            De precieze invulling verschilt per school en wordt altijd in
            overleg afgestemd. Juist daardoor sluit het traject aan bij de
            onderwijspraktijk, de jaarplanning en de ambitie van het team.
          </p>
          <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/10 p-5 shadow-xl sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300">
                  Voorbeeld dagdeel
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Een combinatie van lesgeven, afstemmen en opbouwen
                </h3>
              </div>
              <p className="max-w-sm text-sm leading-6 text-white/70">
                De precieze mix verschilt per school, maar een dagdeel kan
                meerdere soorten waarde opleveren binnen dezelfde ochtend of
                middag.
              </p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {daypartMoments.map((moment, index) => (
                <div
                  key={moment.title}
                  className="rounded-2xl border border-white/10 bg-indigo-950/55 p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yellow-300">
                    Blok {index + 1}
                  </p>
                  <h4 className="mt-3 text-lg font-semibold text-white">
                    {moment.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    {moment.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur-sm sm:p-8">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-yellow-300 px-4 py-2 text-sm font-bold text-indigo-950">
            <CalendarDaysIcon className="h-5 w-5" />
            €250 per dagdeel
          </div>
          <BulletList
            items={premiumDaypart}
            textClassName="text-white/85"
            iconClassName="text-yellow-300"
          />
          <div className="mt-8">
            <Link href={contactLink} className={`${yellowButton} w-full sm:w-auto`}>
              Vraag een kennismaking aan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
