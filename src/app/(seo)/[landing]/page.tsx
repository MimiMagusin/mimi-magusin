import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Products } from "@/components/products";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { courses } from "@/app/courses/courses";
import { trialLessonRoute } from "@/app/navigation-vars";
import {
  landingPageBySlug,
  landingPages,
  selectCoursesByIds,
} from "./landing-content";

type PageProps = {
  params: Promise<{ landing: string }>;
};

export async function generateStaticParams() {
  return landingPages.map((page) => ({ landing: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { landing } = await params;
  const config = landingPageBySlug.get(landing);

  if (!config) {
    return buildMetadata({
      title: "Pagina niet gevonden",
      description: "Deze pagina kon niet worden gevonden.",
      path: `/${landing}`,
    });
  }

  return buildMetadata({
    title: config.title,
    description: config.description,
    path: `/${config.slug}`,
    keywords: config.keywords,
    image: "/groepsfoto.jpg",
  });
}

export default async function LandingPage({ params }: PageProps) {
  const { landing } = await params;
  const config = landingPageBySlug.get(landing);

  if (!config) {
    notFound();
  }

  const relevantCourses = selectCoursesByIds(config.courseIds, courses);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: config.title,
    url: absoluteUrl(`/${config.slug}`),
    description: config.description,
    inLanguage: "nl-NL",
    about: config.keywords,
  };

  return (
    <main className="w-full bg-white pb-20">
      <StructuredData data={[webPageSchema, faqSchema]} />
      <div className="relative w-screen h-64 md:h-80">
        <Image
          src={config.image}
          alt={config.imageAlt}
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-indigo-950/40" />
      </div>
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
          {config.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-indigo-950 sm:text-5xl">
          {config.h1}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">{config.intro}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-indigo-900/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-950">Voor wie dit past</h2>
            <p className="mt-3 leading-7 text-slate-700">{config.forWhom}</p>
          </div>
          <div className="rounded-2xl border border-indigo-900/10 bg-amber-50/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-950">Mijn aanpak</h2>
            <p className="mt-3 leading-7 text-slate-700">{config.personalNote}</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-indigo-50 p-6">
          <h2 className="text-2xl font-semibold text-indigo-950">
            Wat je kunt verwachten
          </h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {config.focus.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={trialLessonRoute}
              className="rounded-full bg-indigo-950 px-5 py-3 text-sm font-semibold text-white"
            >
              Plan een proefles
            </Link>
            <Link
              href="/choir-academy"
              className="rounded-full border border-indigo-900/20 px-5 py-3 text-sm font-semibold text-indigo-900"
            >
              Bekijk Choir Academy
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <Products
          products={relevantCourses}
          withTitle
          title={config.coursesTitle}
        />
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-indigo-950">Veelgestelde vragen</h2>
        <div className="mt-6 space-y-5">
          {config.faqs.map((faq) => (
            <article key={faq.question} className="rounded-xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-indigo-950">{faq.question}</h3>
              <p className="mt-2 text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
