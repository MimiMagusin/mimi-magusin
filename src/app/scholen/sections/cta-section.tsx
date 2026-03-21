import Link from "next/link";
import { blueButton, yellowButton } from "@/components/styling-strings";
import { contactLink, ctaContent, mailLink } from "@/app/scholen/content";

export function CtaSection() {
  return (
    <section className="flex min-h-[100svh] w-full items-center bg-linear-to-b from-yellow-300 to-yellow-200/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
      <div className="mx-auto w-full max-w-4xl rounded-[2rem] bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm sm:p-12">
        <h2 className="text-3xl font-bold tracking-tight text-indigo-950 sm:text-4xl">
          {ctaContent.title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          {ctaContent.intro}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href={contactLink} className={`${blueButton} w-full sm:w-auto`}>
            {ctaContent.primaryCta}
          </Link>
          <Link href={mailLink} className={`${yellowButton} w-full sm:w-auto`}>
            {ctaContent.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
