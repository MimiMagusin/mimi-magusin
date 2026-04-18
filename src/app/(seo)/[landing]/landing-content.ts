import type { Course } from "@/app/courses/courses";

export type LandingPageConfig = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  h1: string;
  intro: string;
  forWhom: string;
  personalNote: string;
  focus: string[];
  keywords: string[];
  courseIds: string[];
  coursesTitle: string;
  faqs: Array<{ question: string; answer: string }>;
};

export const landingPages: LandingPageConfig[] = [
  {
    slug: "muziekles-culemborg",
    title: "Muziekles Culemborg",
    description:
      "Muziekles in Culemborg voor kinderen en jongeren. Ontdek het aanbod van Mimi Magusin, van speels starten tot verdiepend koorwerk.",
    eyebrow: "Choir Academy · Culemborg",
    image: "/groepsfoto.jpg",
    imageAlt: "Groepsfoto van de Choir Academy in Culemborg",
    h1: "Muziekles in Culemborg",
    intro:
      "Zoek je muziekles in Culemborg waar kinderen niet alleen veel zingen, maar zich ook echt muzikaal ontwikkelen? Binnen de Choir Academy groeien kinderen stap voor stap in luisteren, samenzang, noten lezen, podiumervaring en zelfvertrouwen.",
    forWhom:
      "Fijn voor ouders die een muzikale plek zoeken waar hun kind écht mag groeien — serieus, maar zonder dat het schools of prestatiegericht aanvoelt.",
    personalNote:
      "In mijn lessen werk ik graag vanuit aandacht en opbouw. Kinderen mogen speels beginnen, maar ik neem hun muzikaliteit wel serieus. Zo ontstaat er plezier, focus en steeds meer eigenaarschap.",
    focus: [
      "Leslocaties in Culemborg, onder andere Open Hof en Brede School West",
      "Doorlopende lijn van jonge starters tot jongeren",
      "Instromen via proefles zodat je eerst kunt ervaren wat past",
    ],
    keywords: [
      "muziekles culemborg",
      "muziekles kinderen culemborg",
      "zangles culemborg kinderen",
    ],
    courseIds: [
      "choir-academy-zangmakers",
      "choir-academy-zangcrew",
      "choir-academy-stagecrew",
      "choir-academy-voxnext",
    ],
    coursesTitle: "Het aanbod",
    faqs: [
      {
        question: "Is dit alleen voor kinderen die al kunnen zingen?",
        answer:
          "Nee. Er zijn groepen voor beginners en voor kinderen met meer ervaring. Je kiest een groep op leeftijd en niveau.",
      },
      {
        question: "Kan ik eerst kennismaken?",
        answer:
          "Ja. Je kunt altijd een proefles plannen zodat je kind de sfeer en lesvorm kan ervaren.",
      },
    ],
  },
  {
    slug: "muziekles-kinderen-culemborg",
    title: "Muziekles Kinderen Culemborg",
    description:
      "Muziekles voor kinderen in Culemborg met aandacht voor zang, luisteren, ritme en podiumpresentatie.",
    eyebrow: "Voor kinderen · Culemborg",
    image: "/kca-groepsfoto-2.jpg",
    imageAlt: "Kinderen zingen samen in de Choir Academy",
    h1: "Muziekles voor kinderen in Culemborg",
    intro:
      "Voor kinderen die graag zingen en muziek willen ontdekken, is er een duidelijke opbouw in kleine stappen. We beginnen bij plezier en nieuwsgierigheid, en bouwen van daaruit aan stemgebruik, ritmegevoel, samenzang en muzikaal zelfvertrouwen.",
    forWhom:
      "Geschikt voor kinderen die graag meedoen, maar ook voor kinderen die nog wat tijd nodig hebben om zich veilig te voelen in een groep.",
    personalNote:
      "Ik let in mijn lessen niet alleen op wat kinderen al kunnen, maar vooral op hoe ze leren. Sommige kinderen zingen meteen voluit, anderen bloeien juist op als ze rustig vertrouwen kunnen opbouwen.",
    focus: [
      "Leeftijdsgerichte groepen in de basisschoolleeftijd",
      "Werken aan stemgebruik, samenzang en muzikale basis",
      "Regelmatige optredens passend bij leeftijd en groep",
    ],
    keywords: [
      "muziekles kinderen culemborg",
      "kinder muziekles culemborg",
      "zingen kinderen culemborg",
    ],
    courseIds: [
      "choir-academy-zangmakers",
      "choir-academy-zangcrew",
      "choir-academy-stagecrew",
    ],
    coursesTitle: "Groepen voor kinderen",
    faqs: [
      {
        question: "Vanaf welke leeftijd kan mijn kind beginnen?",
        answer:
          "Binnen het huidige aanbod starten kinderen vanaf ongeveer 5 jaar in de jongste groep.",
      },
      {
        question: "Wat leren kinderen in de lessen?",
        answer:
          "Ze werken aan zingen, luisteren, ritme, noten lezen en samen presenteren op het podium.",
      },
    ],
  },
  {
    slug: "amv-culemborg",
    title: "AMV Culemborg",
    description:
      "AMV in Culemborg: een brede muzikale basis met zingen, ritme, luisteren en noten lezen, vertaald naar het huidige Choir Academy aanbod.",
    eyebrow: "Muzikale vorming · Culemborg",
    image: "/choir-academy-startklas.jpg",
    imageAlt: "Kinderen in de startklas van de Choir Academy",
    h1: "AMV in Culemborg",
    intro:
      "Zoek je AMV in Culemborg? In het huidige aanbod komen de belangrijkste onderdelen van algemene muzikale vorming terug: zingen, luisteren, ritme, bewegen, noten lezen en samen muziek maken.",
    forWhom:
      "Fijn voor kinderen die een brede muzikale basis nodig hebben, en voor ouders die meer zoeken dan alleen leuke liedjes zingen.",
    personalNote:
      "Voor mij is AMV vooral leren door doen. Kinderen begrijpen muziek beter als ze die eerst mogen ervaren in hun lijf, stem en aandacht, en pas daarna in woorden of noten.",
    focus: [
      "AMV-principes geïntegreerd in wekelijkse groepslessen",
      "Spelenderwijs starten en daarna verdiepen",
      "Praktisch aanbod met duidelijke lesmomenten in Culemborg",
    ],
    keywords: [
      "amv culemborg",
      "algemene muzikale vorming culemborg",
      "muzikale vorming kinderen culemborg",
    ],
    courseIds: ["choir-academy-zangmakers", "choir-academy-zangcrew"],
    coursesTitle: "Groepen met AMV-basis",
    faqs: [
      {
        question: "Bieden jullie een losse cursus met alleen AMV in de naam?",
        answer:
          "Niet als apart label. De AMV-doelen zijn geïntegreerd in de bestaande kinderkoorlessen.",
      },
      {
        question: "Is dit ook geschikt als brede muzikale basis?",
        answer:
          "Ja. Juist in de jongere groepen ligt de nadruk op brede muzikale ontwikkeling.",
      },
    ],
  },
  {
    slug: "algemene-muzikale-vorming-culemborg",
    title: "Algemene Muzikale Vorming Culemborg",
    description:
      "Algemene muzikale vorming in Culemborg met focus op basisvaardigheden zoals ritme, zang, luistervaardigheid en noten lezen.",
    eyebrow: "Muzikale vorming · Culemborg",
    image: "/choir-academy-startklas.jpg",
    imageAlt: "Kinderen werken aan muzikale vorming in Culemborg",
    h1: "Algemene Muzikale Vorming in Culemborg",
    intro:
      "Algemene muzikale vorming draait om een stevige basis. In mijn lessen krijgen kinderen die basis niet los aangeboden, maar verweven in wekelijkse koorlessen waarin zingen, luisteren, ritme en noten lezen elkaar versterken.",
    forWhom:
      "Fijn voor ouders die zoeken naar lessen waarin kinderen muzikaal breed worden gevormd, en niet alleen een repertoire instuderen.",
    personalNote:
      "Ik vind het belangrijk dat kinderen voelen dat muziek iets levends is. Daarom wisselen we concentratie en spel af, zodat begrip en plezier samen kunnen groeien.",
    focus: [
      "Leren door doen: zingen, bewegen, luisteren en samenzingen",
      "Noten lezen en muzikaal begrip passend bij de groep",
      "Van basis naar presentatie met vertrouwen",
    ],
    keywords: [
      "algemene muzikale vorming culemborg",
      "amv culemborg kinderen",
      "muzikale basis culemborg",
    ],
    courseIds: ["choir-academy-zangmakers", "choir-academy-zangcrew"],
    coursesTitle: "Groepen met brede muzikale vorming",
    faqs: [
      {
        question: "Welke leeftijd past bij algemene muzikale vorming?",
        answer:
          "Vooral de jongere basisschoolgroepen sluiten hier goed op aan, met later verdieping in de oudere groepen.",
      },
      {
        question: "Werken jullie ook toe naar optreden?",
        answer:
          "Ja. Podiumervaring is onderdeel van de leerlijn, afgestemd op leeftijd en niveau.",
      },
    ],
  },
  {
    slug: "muziekles-kleuters-culemborg",
    title: "Muziekles Kleuters Culemborg",
    description:
      "Muziekles voor kleuters en jonge kinderen in Culemborg met speelse werkvormen, zang, ritme en beweging.",
    eyebrow: "Voor kleuters · Culemborg",
    image: "/speelklas.png",
    imageAlt: "Kleuters in een speelse muziekles in Culemborg",
    h1: "Muziekles voor kleuters in Culemborg",
    intro:
      "Voor kleuters en jonge kinderen ligt de nadruk op spelenderwijs ontdekken. Door zingen, bewegen, herhalen en goed luisteren bouwen kinderen aan een muzikale basis die past bij hun leeftijd.",
    forWhom:
      "Fijn voor jonge kinderen die graag zingen en bewegen, maar ook voor kinderen die via structuur, herhaling en kleine stapjes tot bloei komen.",
    personalNote:
      "Bij kleuters gaat het mij niet om presteren, maar om wakker maken: de stem, het ritmegevoel, het luisteren en het plezier om samen muziek te maken. Vanuit die basis kan later veel ontstaan.",
    focus: [
      "Speelse werkvormen met veel herhaling en plezier",
      "Ontwikkeling van ritmegevoel, luistervaardigheid en stemgebruik",
      "Doorstroom naar volgende groepen binnen dezelfde leerlijn",
    ],
    keywords: [
      "muziekles kleuters culemborg",
      "kleuter muziek culemborg",
      "zingen kleuters culemborg",
    ],
    courseIds: ["choir-academy-zangmakers"],
    coursesTitle: "Startgroepen voor kleuters",
    faqs: [
      {
        question: "Is dit geschikt voor verlegen kinderen?",
        answer:
          "Ja. De lessen zijn laagdrempelig en gericht op veiligheid, plezier en stap-voor-stap meedoen.",
      },
      {
        question: "Hoe weet ik of de groep past?",
        answer:
          "Via een proefles kun je direct ervaren of het niveau, tempo en de groep passen.",
      },
    ],
  },
  {
    slug: "muziekles-jongeren-culemborg",
    title: "Muziekles Jongeren Culemborg",
    description:
      "Muziekles voor jongeren in Culemborg met verdieping in zang, meerstemmigheid, expressie en performance.",
    eyebrow: "Voor jongeren · Culemborg",
    image: "/25kca-bb-2.jpeg",
    imageAlt: "Jongeren optreden met de Choir Academy in Culemborg",
    h1: "Muziekles voor jongeren in Culemborg",
    intro:
      "Voor jongeren is er aanbod met meer diepgang in samenzang, expressie en performance. We werken aan muzikaal eigenaarschap, meerstemmigheid en de vrijheid om steeds zelfstandiger samen te zingen.",
    forWhom:
      "Past bij jongeren die graag zingen en toe zijn aan meer uitdaging, maar ook bij tieners die een groep zoeken waarin muzikaliteit en expressie samenkomen.",
    personalNote:
      "Bij jongeren vind ik het belangrijk dat er ruimte is voor hun eigen stem, letterlijk en figuurlijk. We werken serieus, maar wel in een sfeer waarin je mag experimenteren, fouten maken en groeien.",
    focus: [
      "Verdieping in ensemblezang en meerstemmigheid",
      "Werken aan performance en expressie",
      "Heldere route naar optreden met zelfvertrouwen",
    ],
    keywords: [
      "muziekles jongeren culemborg",
      "zingen jongeren culemborg",
      "jongerenkoor culemborg",
    ],
    courseIds: ["choir-academy-voxnext", "choir-academy-stagecrew"],
    coursesTitle: "Groepen voor jongeren",
    faqs: [
      {
        question: "Is ervaring nodig voor jongerenaanbod?",
        answer:
          "Voor sommige groepen helpt ervaring, maar via proefles bekijken we welke groep het best aansluit.",
      },
      {
        question: "Welke vaardigheden worden extra ontwikkeld?",
        answer:
          "Vooral expressie, zelfstandigheid, meerstemmigheid en samen optreden.",
      },
    ],
  },
  {
    slug: "kinderkoor-culemborg",
    title: "Kinderkoor Culemborg",
    description:
      "Kinderkoor in Culemborg met leeftijdsgroepen, wekelijkse repetities en optredens binnen de Choir Academy.",
    eyebrow: "Choir Academy · Culemborg",
    image: "/kca-groepsfoto-2.jpg",
    imageAlt: "Kinderkoor in Culemborg zingt samen op het podium",
    h1: "Kinderkoor in Culemborg",
    intro:
      "Het kinderkooraanbod in Culemborg is opgebouwd in meerdere groepen, zodat kinderen zingen op een niveau dat echt bij hen past. Zo groeien techniek, muzikaliteit, concentratie en plezier rustig mee met de leeftijd.",
    forWhom:
      "Een goede keuze voor kinderen die graag samen zingen en voor ouders die zoeken naar een koor met aandacht voor ontwikkeling, muzikaliteit en plezier.",
    personalNote:
      "In mijn koren draait het niet alleen om mooi zingen. Ik werk ook aan luisteren, samenwerken, durven optreden en voelen dat je als kind echt onderdeel bent van een muzikaal geheel.",
    focus: [
      "Wekelijkse koorlessen in Culemborg",
      "Vaste groep met leeftijdsgerichte opbouw",
      "Optredens als motiverend onderdeel van het leertraject",
    ],
    keywords: [
      "kinderkoor culemborg",
      "koor kinderen culemborg",
      "zingen kinderkoor culemborg",
    ],
    courseIds: [
      "choir-academy-zangmakers",
      "choir-academy-zangcrew",
      "choir-academy-stagecrew",
    ],
    coursesTitle: "De kinderkoren",
    faqs: [
      {
        question: "Zingen alle kinderen in hetzelfde kinderkoor?",
        answer:
          "Nee. Er zijn meerdere groepen, zodat leeftijd en niveau goed aansluiten.",
      },
      {
        question: "Hoe vaak is er repetitie?",
        answer:
          "Elke groep repeteert wekelijks op een vast lesmoment in Culemborg.",
      },
    ],
  },
];

export const landingPageBySlug = new Map(
  landingPages.map((page) => [page.slug, page]),
);

export function selectCoursesByIds(courseIds: string[], allCourses: Course[]) {
  return allCourses.filter((course) => courseIds.includes(course.id));
}
