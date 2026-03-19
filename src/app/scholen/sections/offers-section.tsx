import Link from "next/link";
import { blueButton, yellowButton } from "@/components/styling-strings";
import {
  contactLink,
  kennismakingsAanbod,
  kennismakingsVoordelen,
  offersId,
  premiumInhoud,
  premiumVoordelen,
} from "@/app/scholen/content";
import { BulletList, SectionHeading } from "@/app/scholen/shared";

export function OffersSection() {
  return (
    <section
      id={offersId}
      className="w-full bg-linear-to-b from-yellow-300/70 to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-12"
    >
      <SectionHeading
        eyebrow="Aanbod"
        title="Twee manieren om muziek een plek te geven op school"
        intro="Van een laagdrempelige kennismaking tot een duurzame samenwerking: elk traject is gericht op muzikaal leren, plezier en zichtbare ontwikkeling."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-8">
        <article className="rounded-[2rem] border border-indigo-100 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
            Via Doe Mee in Culemborg
          </p>
          <h3 className="mt-3 text-2xl font-bold text-indigo-950">
            Binnenschools aanbod via Doe Mee in Culemborg
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Een laagdrempelig kennismakingsaanbod voor groepen in het
            basisonderwijs. In 2 tot 4 lessen maken leerlingen op school kennis
            met zingen, ritme, samenspel en presentatie.
          </p>
          <div className="mt-6">
            <BulletList items={kennismakingsAanbod} />
          </div>
          <div className="mt-8 rounded-2xl bg-slate-50 p-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Waarom dit werkt
            </h4>
            <div className="mt-4">
              <BulletList items={kennismakingsVoordelen} />
            </div>
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-500">
            Dit aanbod verloopt via Doe Mee in Culemborg en binnen de
            mogelijkheden van dat programma.
          </p>
          <Link
            href={contactLink}
            className={`mt-8 inline-flex w-full justify-center sm:w-auto ${blueButton}`}
          >
            Interesse via Doe Mee
          </Link>
        </article>

        <article className="relative overflow-hidden rounded-[2rem] border border-indigo-200 bg-indigo-950 p-6 text-white shadow-xl sm:p-8">
          <div className="mb-5 inline-flex rounded-full bg-yellow-300 px-4 py-1 text-sm font-bold text-indigo-950 sm:absolute sm:right-6 sm:top-6 sm:mb-0">
            Premium
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-300">
            Structurele samenwerking
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:pr-24">
            <h3 className="text-2xl font-bold">Muziek in de Klas</h3>
            <div className="rounded-2xl bg-white/10 px-4 py-3 text-left sm:text-right">
              <p className="text-xs uppercase tracking-[0.16em] text-white/70">
                Investering
              </p>
              <p className="text-2xl font-bold text-yellow-300">€250 per dagdeel</p>
            </div>
          </div>
          <p className="mt-4 text-base leading-7 text-white/85">
            Een premium traject voor scholen die muziekonderwijs duurzaam
            willen opbouwen. Mimi komt wekelijks op school om samen met
            leerkrachten muziekonderwijs vorm te geven dat past bij de
            thema's, de identiteit en de leerlingen van de school.
          </p>
          <div className="mt-6">
            <BulletList
              items={premiumInhoud}
              textClassName="text-white/85"
              iconClassName="text-yellow-300"
            />
          </div>
          <div className="mt-8 rounded-2xl bg-white/10 p-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              Waarom scholen hiervoor kiezen
            </h4>
            <div className="mt-4">
              <BulletList
                items={premiumVoordelen}
                textClassName="text-white/85"
                iconClassName="text-yellow-300"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href={contactLink} className={`${yellowButton} w-full sm:w-auto`}>
              Plan een kennismakingsgesprek
            </Link>
            <Link href={contactLink} className={`${blueButton} w-full sm:w-auto`}>
              Bespreek Muziek in de Klas
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
