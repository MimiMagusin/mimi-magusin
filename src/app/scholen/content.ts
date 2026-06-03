import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const schoolsMetadata: Metadata = buildMetadata({
  title: "Muziekonderwijs voor basisscholen",
  description:
    "Binnenschools muziekonderwijs en structurele begeleiding voor basisscholen in Culemborg en omgeving. Van korte projecten tot duurzaam muziekonderwijs op maat.",
  path: "/scholen",
  keywords: [
    "muziekonderwijs basisschool culemborg",
    "muziekdocent school culemborg",
    "muziekles basisschool culemborg",
  ],
});

export const contactLink =
  "mailto:info@mimimagusin.com?subject=Kennismaking%20muziekonderwijs%20op%20school";

export const mailLink = "mailto:info@mimimagusin.com";
export const offersId = "aanbod";
export const projectsId = "projecten";

export const heroContent = {
  eyebrow: "Voor basisscholen",
  title: "Muziekonderwijs dat wel werkt op school",
  intro:
    "Structurele muzieklessen, inspirerende projecten en leerlingen die zelfstandig leren zingen, spelen en samenwerken. Voor scholen die meer willen dan af en toe een losse muziekles.",
  primaryCta: "Plan een kennismakingsgesprek",
  secondaryCta: "Bekijk het aanbod",
  trustBullets: [
    "2-4 lessen of structurele samenwerking",
    "Voor leerlingen en leerkrachten",
    "Aansluiting op thema's, jaarfeesten en schoolcultuur",
  ],
  spotlightTitle: "Praktisch, haalbaar en zichtbaar in de schooldag",
  spotlightBody:
    "Van korte trajecten tot duurzame samenwerking: muziekonderwijs krijgt een vorm die past bij jullie team, planning en onderwijsvisie.",
};

export const problemSection = {
  title: "Voor scholen die muziek betekenisvol willen inzetten",
  intro:
    "Veel scholen willen meer met muziek, maar lopen in de praktijk tegen tijdgebrek, handelingsverlegenheid of losse ad-hocoplossingen aan. Juist daar kan Mimi in ondersteunen.",
  items: [
    "Geen structureel muziekonderwijs",
    "Leerkrachten die zich onzeker voelen in muziek",
    "Behoefte aan thema- of projectkoppeling",
    "Toewerken naar vieringen, musicals of presentaties",
  ],
  solution:
    "Mimi helpt scholen om muziek praktisch, haalbaar en zichtbaar onderdeel te maken van de schooldag.",
};

export const offers = [
  {
    title: "Korte projecten",
    badge: "Gesubsidieerd",
    eyebrow: "Via Doe mee in Culemborg",
    description:
      "Twee tot vier lessen per klas, direct inzetbaar tijdens schooltijd. Kies een project rond Sinterklaas, Koningsdag, de Kindermuziekweek of Maestro.",
    bullets: [
      "In principe 100% gesubsidieerd",
      "2–4 lessen per klas van 30–45 minuten",
      "Geen extra werk voor de leerkrachten",
      "Optioneel: doorstroom naar optredens in de stad",
    ],
    note: "Beperkt aantal plekken per schooljaar. Bekijk de projecten hieronder.",
    ctas: [{ label: "Bekijk de projecten", href: `#${projectsId}`, variant: "secondary" as const }],
    theme: "light" as const,
  },
  {
    title: "Muziek in de Klas",
    badge: "Op maat",
    eyebrow: "Structurele samenwerking",
    price: "EUR250 per dagdeel",
    priceLabel: "€250 per dagdeel",
    description:
      "Wekelijkse lessen, coaching en afstemming op jullie schoolcultuur en -thema's. Muziek als vaste, zichtbare plek in de school.",
    bullets: [
      "Wekelijkse lessen per groep",
      "Koppeling aan thema's, vieringen of musical",
      "Coaching van leerkrachten",
      "Deels te financieren via CMK",
    ],
    note: "Voor scholen die muziek structureel willen opbouwen — stap voor stap, passend bij het team.",
    ctas: [
      {
        label: "Plan een kennismakingsgesprek",
        href: contactLink,
        variant: "primary" as const,
      },
    ],
    theme: "dark" as const,
  },
];

export const results = [
  {
    title: "Voor leerlingen",
    items: [
      "Zelfstandig zingen en musiceren",
      "Meer ritmegevoel, samenspel en muzikaal zelfvertrouwen",
      "Plezier, betrokkenheid en podiumervaring",
    ],
  },
  {
    title: "Voor leerkrachten",
    items: [
      "Concrete muzikale werkvormen",
      "Meer vertrouwen in het geven van muziek",
      "Aansluiting op thema's en projecten",
    ],
  },
  {
    title: "Voor de school",
    items: [
      "Muziek krijgt een zichtbare plek in de school",
      "Meer samenhang tussen lessen, vieringen en cultuur",
      "Minder losse ad-hocoplossingen",
    ],
  },
];

export const steps = [
  {
    title: "Kennismaken",
    description: "We bespreken jullie wensen, visie en praktische mogelijkheden.",
  },
  {
    title: "Kiezen",
    description:
      "Samen kiezen we een passend traject: een kort project of structurele samenwerking.",
  },
  {
    title: "Uitvoeren en opbouwen",
    description:
      "Mimi verzorgt lessen, stemt af met leerkrachten en helpt muziek zichtbaar te verankeren in de school.",
  },
];

export const strengths = [
  "Ervaring als muziekdocent en koordirigent",
  "Sterk in zingen, samenspel en muzikaal leren",
  "Verbindt muziek aan thema's, presentaties en schoolcontext",
  "Houdt oog voor kwaliteit en haalbaarheid",
];

export const premiumDaypart = [
  "Lessen aan meerdere groepen",
  "Afstemming met leerkrachten",
  "Coaching of inspiratie voor het team",
  "Koppeling aan themaweken, jaarfeesten of repertoire",
  "Voorbereiding van optredens of schoolbrede presentaties",
];

export const faqs = [
  {
    question: "Is het aanbod alleen voor scholen in Culemborg?",
    answer:
      "De focus ligt op basisscholen in Culemborg en omgeving. Buiten Culemborg? Stuur een mail — dan kijken we wat praktisch mogelijk is.",
  },
  {
    question: "Is Muziek in de Klas ook geschikt als we nog weinig met muziek doen?",
    answer:
      "Juist dan. Het traject helpt om muziek stap voor stap op te bouwen op een manier die past bij het team en de school.",
  },
  {
    question: "Kunnen jullie ook toewerken naar een musical of viering?",
    answer:
      "Ja. Mimi denkt mee over repertoire, repetities en de muzikale voorbereiding van vieringen, seizoensmomenten of een musical.",
  },
  {
    question: "Hoe plan je een kennismaking?",
    answer:
      "Via de contactknoppen op deze pagina. Een korte mail is genoeg om een eerste gesprek in te plannen.",
  },
];

export const shortProjects = [
  {
    title: "Maestro",
    when: "September – Oktober",
    targetGroup: "Groep 1 t/m 8",
    image: "/kca-groepsfoto-2.jpg",
    lessonsLabel: "Reeks – 3 lessen per klas",
    description:
      "Leerlingen ontdekken hoe een orkest werkt van binnenuit. Ze leren dirigeren, spelen samen ritmes en bouwen stap voor stap een eigen klassenorkest.",
    href: "https://www.doemeeinculemborg.nl/activiteit/623214/maestro-in-de-klas",
  },
  {
    title: "Sinterklaas!",
    when: "Oktober – November",
    targetGroup: "Groep 1 t/m 5",
    image: "/sinterklaas-concert-2025.jpg",
    lessonsLabel: "Reeks – 3 lessen per klas",
    description:
      "Zingen met herkenbare Sinterklaasliedjes en nieuwe variaties. Focus op samenklang en zelfvertrouwen — ook bij groepen die zingen spannend vinden.",
    href: "https://www.doemeeinculemborg.nl/activiteit/623218/sinterklaas",
  },
  {
    title: "Kindermuziekweek",
    when: "Februari – Maart",
    targetGroup: "Groep 3 t/m 8",
    image: "/mm24-winterconcert-1.jpg",
    lessonsLabel: "Reeks – 4 lessen per klas",
    description:
      "Kennismaken met het symfonieorkest en hoe muziek is opgebouwd. Toewerken naar repertoire van de Culemborgse Schoolorkesten.",
    href: "https://www.doemeeinculemborg.nl/activiteit/623304/kindermuziekweek",
  },
  {
    title: "Koningsdag",
    when: "Maart – April",
    targetGroup: "Groep 1 t/m 6",
    image: "/kk24-kerstconcert.jpg",
    lessonsLabel: "Reeks – 2 lessen per klas",
    description:
      "Energiek project met zang, beweging en ritme. Jongere groepen zingen en bewegen; oudere leerlingen werken aan een schoolrap of ritmische presentatie.",
    href: "https://www.doemeeinculemborg.nl/activiteit/623307/klaar-voor-koningsdag",
  },
];

export const ctaContent = {
  title: "Verkennen wat muziek op jullie school kan opleveren?",
  intro:
    "Of je nu zoekt naar een kort kennismakingstraject of een duurzame samenwerking: Mimi denkt graag mee over een vorm die werkt voor jullie school.",
  primaryCta: "Plan een kennismakingsgesprek",
  secondaryCta: "Mail Mimi",
};
