import Image from "next/image";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { strengths } from "@/app/scholen/content";
import { SectionHeading } from "@/app/scholen/shared";

export function StrengthsSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Waarom Mimi"
            title="Vakdocent muziek én educatief partner"
            intro="Mimi combineert muzikaliteit, didactiek en praktijkervaring in het onderwijs. Daardoor ontstaat muziekonderwijs dat inspirerend is voor leerlingen en werkbaar blijft voor de school."
          />
          <div className="mt-8 grid gap-4">
            {strengths.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-5"
              >
                <CheckBadgeIcon className="mt-1 h-6 w-6 shrink-0 text-indigo-700" />
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] shadow-lg">
          <Image
            src="/foto-mimi-magusin-breed.jpg"
            alt="Mimi Magusin – vakleerkracht muziek"
            width={800}
            height={600}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
