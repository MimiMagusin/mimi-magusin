import {
  CalendarDaysIcon,
  HeartIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { problemSection } from "@/app/scholen/content";
import { SectionHeading } from "@/app/scholen/shared";

const icons = [CalendarDaysIcon, UserGroupIcon, HeartIcon, TrophyIcon];

export function ProblemSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Werkt in de praktijk"
          title={problemSection.title}
          intro={problemSection.intro}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problemSection.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item}
                className="rounded-[1.5rem] border border-indigo-100 bg-indigo-50/35 p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-300 text-indigo-950">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-lg font-semibold leading-7 text-indigo-950">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-4xl text-center text-lg font-medium leading-8 text-slate-700">
          {problemSection.solution}
        </p>
      </div>
    </section>
  );
}
