import { faqs } from "@/app/scholen/content";
import { SectionHeading } from "@/app/scholen/shared";

export function FaqSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Veelgestelde vragen"
          intro="Korte antwoorden op vragen van schoolleiders, ICC'ers en leerkrachten."
        />
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-indigo-950">
                {faq.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
