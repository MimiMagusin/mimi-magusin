import Link from "next/link";
import {
  ClockIcon,
  MusicalNoteIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { yellowButton } from "@/components/styling-strings";
import { contactLink, heroHighlights, offersId } from "@/app/scholen/content";

const quickFacts = [
  {
    label: "Vorm",
    value: "2-4 lessen of structureel",
    icon: ClockIcon,
  },
  {
    label: "Focus",
    value: "Zingen, ritme en samenspel",
    icon: MusicalNoteIcon,
  },
  {
    label: "Samen",
    value: "Met leerlingen en leerkrachten",
    icon: UserGroupIcon,
  },
];

const featuredHighlights = [
  heroHighlights.find((item) => item.title === "Kennismaken"),
  heroHighlights.find((item) => item.title === "Verdiepen"),
].filter((item) => item !== undefined);

export function HeroSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-linear-to-br from-indigo-950 via-indigo-900 to-indigo-700 px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-64 bg-radial from-yellow-300/30 to-transparent blur-3xl" />
      <div className="absolute -right-16 top-24 h-56 w-56 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start md:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
        <div className="relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-yellow-300">
            Zing. Speel. Groei.
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Muziekonderwijs voor basisscholen
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 sm:mt-6 sm:text-xl sm:leading-8">
            Praktische muzieklessen voor basisscholen, van een korte
            kennismaking tot structurele samenwerking met groepen,
            leerkrachten en schoolthema&apos;s.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href={contactLink} className={`${yellowButton} w-full sm:w-auto`}>
              Plan een kennismaking
            </Link>
            <Link
              href={`#${offersId}`}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/85 transition hover:border-white/35 hover:bg-white/8 hover:text-white sm:w-auto"
            >
              Bekijk het aanbod
            </Link>
          </div>
        </div>

        <div className="relative z-10 rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-sm sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-indigo-950/65 p-5 text-white shadow-lg sm:col-span-2 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">
                Op schoolniveau
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight">
                Muziek krijgt een zichtbare plek in de schooldag
              </h2>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {quickFacts.map((fact) => {
                  const Icon = fact.icon;

                  return (
                    <div
                      key={fact.label}
                      className="rounded-2xl border border-white/10 bg-white/10 p-4 sm:min-h-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-yellow-300 p-2 text-indigo-950">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
                          {fact.label}
                        </p>
                      </div>
                      <p className="mt-4 text-base font-medium leading-8 text-white/90">
                        {fact.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {featuredHighlights.map((item) => {
              const Icon =
                item.iconName === "sparkles" ? SparklesIcon : MusicalNoteIcon;
              const cardClasses =
                item.tone === "accent"
                  ? "rounded-2xl bg-yellow-300 p-4 sm:p-5"
                  : "rounded-2xl bg-white/95 p-4 sm:p-5";
              const iconClasses =
                item.tone === "accent"
                  ? "h-8 w-8 text-indigo-950"
                  : "h-8 w-8 text-indigo-700";
              const bodyClasses =
                item.tone === "accent"
                  ? "mt-2 text-sm leading-6 text-indigo-950/80"
                  : "mt-2 text-sm leading-6 text-slate-700";

              return (
                <div key={item.title} className={cardClasses}>
                  <Icon className={iconClasses} />
                  <h2 className="mt-4 text-lg font-semibold text-indigo-950">
                    {item.title}
                  </h2>
                  <p className={bodyClasses}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
