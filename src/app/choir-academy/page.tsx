import type { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import ChoirAcademyPage from "./choir-academy-page";

export const metadata: Metadata = buildMetadata({
  title: "Kinderkoor en Jongerenkoor in Culemborg",
  description:
    "De Choir Academy in Culemborg helpt kinderen en jongeren groeien in zang, muzikaliteit, noten lezen en optreden met vertrouwen.",
  path: "/choir-academy",
  keywords: [
    "kinderkoor culemborg",
    "jongerenkoor culemborg",
    "zingen kinderen culemborg",
    "zingen jongeren culemborg",
    "muziekles kinderen culemborg",
  ],
  image: "/groepsfoto.jpg",
});

const choirAcademySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Kinderkoor en Jongerenkoor in Culemborg",
  url: absoluteUrl("/choir-academy"),
  description:
    "Choir Academy in Culemborg voor kinderen en jongeren die willen groeien in zang, muzikaliteit en optreden.",
  inLanguage: "nl-NL",
  about: ["Kinderkoor Culemborg", "Jongerenkoor Culemborg"],
};

export default function Page() {
  return (
    <>
      <StructuredData data={choirAcademySchema} />
      <ChoirAcademyPage />
    </>
  );
}
