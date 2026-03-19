import Link from "next/link";
import { blueButton, yellowButton } from "@/components/styling-strings";
import { contactLink } from "@/app/scholen/content";

export function CtaSection() {
  return (
    <section className="w-full bg-linear-to-b from-yellow-300 to-yellow-200/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm sm:p-12">
        <h2 className="text-3xl font-bold tracking-tight text-indigo-950 sm:text-4xl">
          Wil je verkennen wat muziek op jullie school kan betekenen?
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          Of je nu op zoek bent naar een kort binnenschools traject of een
          duurzame samenwerking: ik denk graag mee.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href={contactLink} className={`${blueButton} w-full sm:w-auto`}>
            Plan een kennismaking
          </Link>
          <Link href="mailto:info@mimimagusin.com" className={`${yellowButton} w-full sm:w-auto`}>
            Mail Mimi
          </Link>
        </div>
      </div>
    </section>
  );
}
