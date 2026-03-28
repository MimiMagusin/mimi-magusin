import { steps } from "@/app/scholen/content";
import { SectionHeading } from "@/app/scholen/shared";

export function StepsSection() {
  return (
    <section className="w-full bg-linear-to-b from-indigo-50 to-white px-4 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Werkwijze"
          title="Hoe werkt het?"
          intro="Drie duidelijke stappen van eerste afstemming naar muziekonderwijs dat echt landt in de school."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[1.75rem] border border-indigo-100 bg-white p-6 shadow-sm sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-300 text-lg font-bold text-indigo-950">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-indigo-950">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
