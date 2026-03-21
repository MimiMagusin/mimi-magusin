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
    <section className="flex min-h-[100svh] w-full items-center bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
      <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-indigo-100 bg-linear-to-br from-white via-indigo-50/50 to-yellow-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <SectionHeading
          eyebrow="Werkt in de praktijk"
          title={problemSection.title}
          intro={problemSection.intro}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problemSection.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white bg-white p-5 shadow-sm"
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
        <p className="mt-8 max-w-4xl text-lg font-medium leading-8 text-slate-700 text-center mx-auto">
          {problemSection.solution}
        </p>
      </div>
    </section>
  );
}
