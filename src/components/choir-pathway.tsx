import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { choirAcademyPathwaySteps } from "@/app/courses/courses";

function ChoirEditorialCard({
  step,
}: {
  step: (typeof choirAcademyPathwaySteps)[number];
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`group relative w-full ${step.offset}`}
    >
      <div className="relative mb-3 flex w-full items-center gap-3 md:mb-4">
        <div className="text-xs font-semibold tracking-[0.22em] text-indigo-500/80 md:text-sm md:tracking-[0.28em]">
          {step.id}
        </div>
        <div className="h-px flex-1 bg-indigo-200/60" />
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-indigo-500/70 md:text-[11px] md:tracking-[0.28em]">
          {step.chapter}
        </div>
      </div>

      <div
        className={`relative overflow-hidden rounded-[1.4rem] border border-white/60 p-5 shadow-sm md:rounded-[1.6rem] md:p-7 ${step.tone} `}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/35 to-transparent" />
        <div className="max-w-[38rem]">
          <h3 className="text-3xl font-semibold tracking-tight text-indigo-950 md:text-[2.45rem]">
            {step.name}
          </h3>
          <p className="mt-2 text-sm font-semibold text-indigo-600/90">
            {step.age}
          </p>

          <div className="mt-5 space-y-3 text-base leading-7 text-slate-700 md:mt-7 md:text-[17px] md:leading-8">
            <p className="max-w-[40ch] text-slate-800">{step.intro}</p>
            <p className="max-w-[42ch] italic text-slate-600/95">{step.focus}</p>
          </div>

          <div className="mt-6 pt-1 md:mt-8 md:pt-2">
            <a
              href={step.href}
              className="inline-flex items-center gap-2 h-auto px-0 text-sm font-semibold text-indigo-700 hover:bg-transparent hover:text-indigo-900"
            >
              Meer informatie
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ChoirLineSection() {
  return (
    <section className="relative overflow-visible bg-[linear-gradient(180deg,#fbfaff_0%,#f1effb_48%,#c3bde8_100%)] pt-4 pb-16 md:pt-6 md:pb-28 lg:pt-0 lg:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-16 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute right-[10%] top-40 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-300/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_minmax(0,0.9fr)] lg:gap-10 xl:grid-cols-[1.35fr_minmax(0,0.88fr)] xl:gap-12">
          <div className="max-w-3xl lg:pr-10 xl:pr-14">
            <div className="lg:sticky lg:top-16 lg:min-h-[calc(100vh-4rem)]">
              <div className="py-8 md:py-10 lg:pt-0 lg:pb-16">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.30em] text-indigo-500/80">
                  Onze koorlijn
                </p>
                <h2 className="max-w-[12ch] text-4xl font-semibold leading-[0.95] tracking-tight text-indigo-950 md:text-6xl">
                  Een muzikale lijn waar elke stem in meebeweegt
                </h2>
                <p className="mt-8 max-w-[36rem] text-lg leading-9 text-slate-700 md:text-[1.15rem]">
                  Van speels ontdekken tot zingen met meer zelfstandigheid: elke
                  groep heeft een eigen karakter, met ruimte voor plezier,
                  podiumervaring en muzikale groei.
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:pb-8">
            <div className="absolute left-2 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-200/20 via-indigo-200/60 to-indigo-200/10 lg:block" />

            <div className="space-y-6 pl-0 lg:space-y-10 lg:pl-6 xl:space-y-12">
              {choirAcademyPathwaySteps.map((step) => {
                return <ChoirEditorialCard key={step.id} step={step} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
