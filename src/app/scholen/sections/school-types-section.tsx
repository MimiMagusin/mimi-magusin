import { schoolTypes } from "@/app/scholen/content";
import { SectionHeading } from "@/app/scholen/shared";

export function SchoolTypesSection() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Voor welke scholen?"
            title="Voor scholen die muziek niet incidenteel, maar betekenisvol willen inzetten"
            intro="Mimi werkt met scholen die zoeken naar kwaliteit, haalbaarheid en een vorm die echt past bij hun onderwijs."
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {schoolTypes.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <p className="font-medium leading-7 text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
