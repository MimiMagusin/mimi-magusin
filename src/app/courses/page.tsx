import type { Metadata } from "next";
import Link from "next/link";
import { Products } from "@/components/products";
import { courses } from "./courses";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cursussen Muziekles in Culemborg",
  description:
    "Bekijk alle muziekcursussen van Mimi Magusin in Culemborg voor kinderen, jongeren en volwassenen.",
  path: "/courses",
  keywords: [
    "muziekcursus culemborg",
    "muziekles culemborg",
    "kinderkoor culemborg",
    "jongerenkoor culemborg",
  ],
});

const landingLinks = [
  { href: "/muziekles-culemborg", label: "Alle muzieklessen" },
  { href: "/muziekles-kinderen-culemborg", label: "Voor kinderen" },
  { href: "/kinderkoor-culemborg", label: "Kinderkoor" },
  { href: "/muziekles-jongeren-culemborg", label: "Voor jongeren" },
  { href: "/amv-culemborg", label: "AMV" },
];

export default function Courses() {
  return(
    <div className="w-full px-4 pb-8 pt-28 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
        Leer mee!
      </h1>
      <p className="text-xl leading-8 text-gray-600 text-center pt-4">Iedereen kan groeien.</p>
      <p className="mx-auto max-w-2xl rounded-md py-8 text-center">
        Wat je achtergrond ook is, of je veel ervaring hebt of net begint en of het nou gaat om <b>ritmegevoel</b>, <b>luistervaardigheden</b>,
        <b> zangkunsten</b> of <b>digitaal inzicht</b>, je ben nooit te jong of te oud om iets nieuws te leren.
        Samen werken we toe naar een steeds <b>hoger niveau</b>.
      </p>
      <Products products={courses} />
      <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-2 border-t border-indigo-900/10 pt-8">
        {landingLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-indigo-900/10 px-3 py-1.5 text-xs text-indigo-900/60 hover:border-indigo-900/20 hover:text-indigo-900"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
