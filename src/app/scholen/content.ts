import type { Metadata } from "next";

export const schoolsMetadata: Metadata = {
  title: "Muziekonderwijs voor basisscholen | Mimi Magusin",
  description:
    "Binnenschools muziekonderwijs en structurele begeleiding voor basisscholen in Culemborg en omgeving. Van korte projecten tot duurzaam muziekonderwijs op maat.",
};

export const contactLink =
  "mailto:info@mimimagusin.com?subject=Kennismaking%20muziekonderwijs%20op%20school";

export const mailLink = "mailto:info@mimimagusin.com";
export const offersId = "aanbod";

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
    title: "Binnenschools aanbod via Doe Mee in Culemborg",
    badge: "Laagdrempelig",
    eyebrow: "Korte kennismaking",
    description:
      "Een korte en speelse kennismaking op school. In 2 tot 4 lessen maken leerlingen kennis met zingen, ritme, samenspel en presentatie.",
    bullets: [
      "2 tot 4 lessen per groep",
      "Op school, onder schooltijd",
      "Koppelbaar aan thema's of evenementen",
      "Zichtbaar resultaat in korte tijd",
      "Goede opstap naar naschools aanbod",
    ],
    note: "Doe Mee is bedoeld als laagdrempelige kennismaking: kort, praktisch en direct inzetbaar binnen schooltijd.",
    ctas: [{ label: "Interesse via Doe Mee", href: contactLink, variant: "secondary" as const }],
    theme: "light" as const,
  },
  {
    title: "Muziek in de Klas",
    badge: "Premium",
    eyebrow: "Structurele samenwerking",
    price: "EUR250 per dagdeel",
    priceLabel: "€250 per dagdeel",
    description:
      "Een structureel traject voor scholen die muziek duurzaam willen opbouwen. Wekelijkse lessen, coaching en afstemming in een samenwerking.",
    bullets: [
      "Wekelijkse muzieklessen",
      "Co-creatie met leerkrachten",
      "Aansluiting op thema's en identiteit",
      "Coaching van leerkrachten",
      "Ondersteuning bij presentaties, vieringen of musical",
    ],
    note: "Voor scholen die muziek een vaste, zichtbare plek willen geven in lessen, projecten en schoolmomenten.",
    ctas: [
      {
        label: "Plan een kennismakingsgesprek",
        href: contactLink,
        variant: "primary" as const,
      },
      {
        label: "Bespreek Muziek in de Klas",
        href: contactLink,
        variant: "secondary" as const,
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
      "De focus ligt op basisscholen in Culemborg en omgeving. Werk je buiten Culemborg, dan kun je altijd mailen om te bespreken wat praktisch mogelijk is.",
  },
  {
    question: "Kan het aanbod aansluiten bij ons schoolthema?",
    answer:
      "Ja. Vooral binnen Muziek in de Klas kunnen lessen gekoppeld worden aan thema's, jaarfeesten, projecten en cultuuronderwijs.",
  },
  {
    question: "Is Muziek in de Klas ook geschikt als we nog weinig met muziek doen?",
    answer:
      "Juist dan. Het traject helpt om muziek stap voor stap op te bouwen op een manier die past bij het team en de school.",
  },
  {
    question: "Kunnen jullie ook toewerken naar een musical of viering?",
    answer:
      "Ja. Mimi kan meedenken over repertoire, repetities, presentatie en de muzikale voorbereiding van vieringen, seizoensmomenten of een musical.",
  },
  {
    question: "Is het aanbod geschikt als niet elke klas graag zingt?",
    answer:
      "Ja. Zingen is een belangrijke basis, maar de lessen bevatten ook ritme, bewegen, spel en samenspel. Zo sluiten ze aan bij verschillende talenten en leerstijlen.",
  },
  {
    question: "Geeft Mimi alleen les, of ook coaching aan leerkrachten?",
    answer:
      "Beide. Naast het lesgeven kan Mimi leerkrachten coachen en ondersteunen bij het vormgeven van eigen muziekonderwijs.",
  },
  {
    question: "Hoe plan je een kennismaking?",
    answer:
      "Via de contactknoppen op deze pagina. Een korte mail is genoeg om een eerste gesprek in te plannen.",
  },
];

export const ctaContent = {
  title: "Verkennen wat muziek op jullie school kan opleveren?",
  intro:
    "Of je nu zoekt naar een kort kennismakingstraject of een duurzame samenwerking: Mimi denkt graag mee over een vorm die werkt voor jullie school.",
  primaryCta: "Plan een kennismakingsgesprek",
  secondaryCta: "Mail Mimi",
};
