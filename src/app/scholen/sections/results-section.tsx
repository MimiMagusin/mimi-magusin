import { results } from "@/app/scholen/content";
import { BulletList, SectionHeading } from "@/app/scholen/shared";

export function ResultsSection() {
  return (
    <section className="w-full bg-linear-to-b from-white to-indigo-50/60 px-4 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Resultaat"
          title="Wat levert het op?"
          intro="Muziekonderwijs krijgt meer waarde wanneer het iets oplevert voor leerlingen, leerkrachten en de school als geheel."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {results.map((column) => (
            <article
              key={column.title}
              className="rounded-[1.75rem] border border-indigo-100 bg-white p-6 shadow-sm sm:p-7"
            >
              <h3 className="text-2xl font-bold text-indigo-950">{column.title}</h3>
              <div className="mt-6">
                <BulletList items={column.items} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
