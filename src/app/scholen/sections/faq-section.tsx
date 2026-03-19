import { faqs } from "@/app/scholen/content";
import { SectionHeading } from "@/app/scholen/shared";

export function FaqSection() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
      <SectionHeading
        eyebrow="FAQ"
        title="Veelgestelde vragen"
        intro="Praktische vragen van schoolleiders, ICC'ers en leerkrachten."
      />
      <div className="mx-auto mt-14 max-w-4xl space-y-4">
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
    </section>
  );
}
