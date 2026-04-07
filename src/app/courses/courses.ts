type Theme = "amv" | 'koor' | 'digitale vaardigheden' | 'korte cursus' | 'zingen' | 'noten lezen' | 'muziek' | 'games' | 'optreden' | 'instrumenten' | 'samenspel'

export type CoursePricingBlock = {
  label: string;
  period: string;
}

export type CoursePricing = {
  summary: {
    primary: string;
    secondary?: string;
  };
  schoolYearFee?: string;
  installmentFee?: string;
  blocks?: CoursePricingBlock[];
  lateJoinPricePerLesson?: string;
}

export type CourseSession = {
  id: string;
  aliases?: string[];
  label?: string;
  dayAndTime: string;
  location: string;
  startDate?: Date[];
  signUpLink?: string;
}

export type ChoirStep = {
  chapter: string;
  intro: string;
  focus: string;
  tone: string;
  offset: string;
}

export type Course = {
  introduction?: string;
  learningGoals?: string[];
  location?: string;
  dayAndTime?: string;
  startDate?: Date[];
  signUp?: boolean;
  themes: Theme[];
  signUpLink?: string;
  id: string;
  aliases?: string[];
  name: string;
  imageSrc: string;
  imageAlt: string;
  targetAudience: string;
  href: string;
  price: string;
  pricing?: CoursePricing;
  shortIntro?: string;
  sessions?: CourseSession[];
  choirStep?: ChoirStep;
}

export const choirAcademySchoolYearPricing: CoursePricing = {
  summary: {
    primary: "€225 per schooljaar",
    secondary: "of €135 per halfjaar",
  },
  schoolYearFee: "€225 per schooljaar",
  installmentFee: "€135 per halfjaar",
  blocks: [
    {
      label: "Blok 1",
      period: "3 september t/m 18 februari",
    },
    {
      label: "Blok 2",
      period: "25 februari t/m 30 juni",
    },
  ],
  lateJoinPricePerLesson: "€7,50 per resterende les",
}

const zangMakersIntro = "Zangmakers is de warme en speelse start van onze koorlijn. Kinderen zingen, spelen, bewegen en ontdekken muziek stap voor stap. We werken aan plezier, luisteren, samenzang en een eerste muzikale basis. Ook maken we spelenderwijs kennis met het notenschrift. Deze groep treedt af en toe op: laagdrempelig, feestelijk en een eerste ervaring op het podium."
const zangCrewIntro = "Zangcrew is er voor kinderen die verder willen groeien in zingen. We werken aan stemgebruik, samenzang en muzikaliteit, en bouwen aan zelfvertrouwen op het podium. Je leert noten lezen, zodat je steeds zelfstandiger kunt zingen en optreden."
const stageCrewIntro = "Stagecrew is voor zangers die toe zijn aan extra uitdaging in presentatie, meerstemmigheid, ensembleklank en een sterkere podiumperformance. Oudere en verder gevorderde zangers treden meestal vaker op en werken met meer muzikale uitdaging."
const voxNextInro = "VoxNext is voor tieners die met meer diepgang willen zingen en performen, met aandacht voor expressie, ensemblezang en eigenaarschap. We werken aan muzikaliteit, expressie, zelfstandigheid en samen zingen op niveau. VoxNext combineert ensemblezang, podiumervaring en meer eigenaarschap binnen het koor."

export const courses: Course[] = [
  // {
  //   id: "zomerzangdagen",
  //   name: "Zomerzangdagen",
  //   imageSrc: "/summer-singing-games.png",
  //   imageAlt: "children with music parachute",
  //   targetAudience: "7 t/m 12 jaar",
  //   href: "/courses/zomerzangdagen",  
  //   price: "Gratis, vrijwillige bijdrage",
  //   learningGoals: ["Heel veel liedjes en spelletjes", "Samen zingen", 'Toneel', 'Dans'],
  //   introduction: "Zing en speel deze zomer mee met de Zomerzangdagen! Drie dagen zingen, dansen en toneelspelen, met een spetterend optreden op de laatste dag! Of je nou veel zangervaring hebt of helemaal geen, iedereen is van harte welkom! Op basis van een vrijwillige bijdrage.",
  //   signUp: true,
  //   dayAndTime: "26, 27 & 28 augustus, 09:30-15:30",
  //   startDate: [new Date('August 26, 2025')],
  //   themes: ['zingen', 'games', 'korte cursus', 'optreden'],
  //   location: "Brede School West, Zijderupsvlinderlaan 8, 4105 TC Culemborg",
  //   signUpLink:"https://docs.google.com/forms/d/e/1FAIpQLSdT2vSTAa-pJS8HXbBAxtwKFSvu2JTKtihwIFd_mJB0s573iQ/viewform?usp=header",
  //   shortIntro: "Drie dagen zingen, dansen en toneelspelen, met een spetterend optreden op de laatste dag!"
  // },
  // {
  //   id: "choir-academy-speelklas",
  //   name: "Speelklas (woensdag)",
  //   imageSrc: "/speelklas.png",
  //   imageAlt: "Flyer Speelklas",
  //   targetAudience: "Vanaf (bijna) 4 jaar",
  //   href: "/courses/choir-academy-speelklas",
  //   price: "€75,- voor 10 lessen",
  //   learningGoals: ["Samen zingen", "Ritmegevoel", "Spelen op schoolinstrumenten", "Heel veel liedjes en spelletjes"],
  //   introduction: "In deze cursus gaan we op muzikale ontdekkingstocht! Al zingend, dansend en luisterend ontdekken we de wereld om ons heen. Ondertussen leren hoe we onze stem goed gebruiken, naar elkaar kunnen luisteren en ontwikkelen we ons ritmegevoel.",
  //   signUp: true,
  //   dayAndTime: "woensdag, 14:45-15:25",
  //   startDate: [new Date('April 1, 2025')],
  //   themes: ["zingen", 'koor', 'korte cursus', 'amv'],
  //   location: "Open Hof, zaal 6, Beethovenlaan 2, Culemborg",
  //   signUpLink: "https://docs.google.com/forms/d/e/1FAIpQLSeTPwe1944dDA8TyBWpU_i_nUR7UyiZ6BekuHVNUYGoM6NfzQ/viewform?usp=header",
  //   shortIntro: "Ga op muzikale ontdekkingstocht! Kom zingen, spelen op instrumenten beleef allerlei muzikale avonturen."
  // },
  {
    id:"choir-academy-zangmakers",
    aliases: [
      "choir-academy-zangmakers-woensdag",
      "choir-academy-zangmakers-vrijdag",
      "choir-academy-level-1",
      "choir-academy-level-1-woensdag",
      "choir-academy-level-1-vrijdag",
    ],
    name: "Zangmakers",
    imageSrc: "/sinterklaas-concert-2025.jpg",
    imageAlt: "Schubert concert in gelderlandfabriek",
    targetAudience: "Groep 2 t/m 4 (5 t/m 8 jaar)",
    href: "/courses/choir-academy-zangmakers",
    price: choirAcademySchoolYearPricing.summary.primary,
    pricing: choirAcademySchoolYearPricing,
    learningGoals: ["Spelenderwijs zingen en bewegen", "Goed leren luisteren", "Samen zingen", "Ritme en muzikale basis", "Eerste podiumervaring opdoen"],
    introduction: zangMakersIntro,
    signUp: true,
    themes:['zingen', 'koor', 'noten lezen', 'amv'],
    shortIntro: "Voor jonge kinderen die spelenderwijs willen zingen, bewegen en muziek ontdekken, met een eerste basis voor optreden.",
    sessions: [
      {
        id: "choir-academy-zangmakers-woensdag",
        aliases: ["choir-academy-level-1-woensdag"],
        label: "Woensdag",
        dayAndTime: "Woensdag, 15:15-16:55",
        startDate: [new Date('September 3, 2025')],
        location: "Open Hof, Zaal 6, Beethovenlaan 2, Culemborg",
        signUpLink: "https://docs.google.com/forms/d/e/1FAIpQLSeTPwe1944dDA8TyBWpU_i_nUR7UyiZ6BekuHVNUYGoM6NfzQ/viewform?usp=header",
      },
      {
        id: "choir-academy-zangmakers-vrijdag",
        aliases: ["choir-academy-level-1-vrijdag"],
        label: "Vrijdag",
        dayAndTime: "Vrijdag, 15:15-16:55",
        startDate: [new Date('September 5, 2025')],
        location: "Brede School West, Zijderupsvlinderlaan 8, 4105 TC Culemborg",
        signUpLink: "https://docs.google.com/forms/d/e/1FAIpQLSeTPwe1944dDA8TyBWpU_i_nUR7UyiZ6BekuHVNUYGoM6NfzQ/viewform?usp=header",
      },
    ],
    choirStep: {
      chapter: "Ontdekken",
      intro:
        "Voor jonge kinderen die spelenderwijs willen zingen, bewegen en muziek ontdekken.",
      focus:
        "We werken aan plezier, luisteren, samenzang en een eerste muzikale basis.",
      tone: "bg-white/90",
      offset: "lg:mt-8",
    },
  },
  {
    id:"choir-academy-zangcrew",
    aliases: [
      "choir-academy-zangcrew-woensdag",
      "choir-academy-zangcrew-vrijdag",
      "choir-academy-level-2",
    ],
    name: "Zangcrew",
    imageSrc: "/groepsfoto.jpg",
    imageAlt: "Concert Gelderlandfabriek 2023",
    targetAudience: "Groep 5 t/m 8 (8 t/m 12 jaar)",
    href: "/courses/choir-academy-zangcrew",
    price: choirAcademySchoolYearPricing.summary.primary,
    pricing: choirAcademySchoolYearPricing,
    learningGoals: ["Goede zangbasis opbouwen", "Samen zingen met meer zelfstandigheid", "Muzikaliteit en luistervaardigheid verdiepen", "Zelfvertrouwen op het podium ontwikkelen", "Zingen van blad (Noten lezen!)"],
    introduction: zangCrewIntro,
    signUp: true,
    themes: ['zingen', 'koor', 'noten lezen'],
    shortIntro: "Voor kinderen die willen groeien in stemgebruik, samenzang, muzikaliteit en zelfvertrouwen, met regelmatige optredens.",
    sessions: [
      {
        id: "choir-academy-zangcrew-woensdag",
        label: "Woensdag",
        dayAndTime: "Woensdag, 16:00-17:00",
        startDate: [new Date('September 3, 2025')],
        location: "Open Hof, zaal 6, Beethovenlaan 2, Culemborg",
        signUpLink: "https://docs.google.com/forms/d/e/1FAIpQLSeTPwe1944dDA8TyBWpU_i_nUR7UyiZ6BekuHVNUYGoM6NfzQ/viewform?usp=header",
      },
      {
        id: "choir-academy-zangcrew-vrijdag",
        label: "Vrijdag",
        dayAndTime: "Vrijdag, 16:00-17:00",
        startDate: [new Date('September 5, 2025')],
        location: "Brede School West, Zijderupsvlinderlaan 8, 4105 TC Culemborg",
        signUpLink: "https://docs.google.com/forms/d/e/1FAIpQLSeTPwe1944dDA8TyBWpU_i_nUR7UyiZ6BekuHVNUYGoM6NfzQ/viewform?usp=header",
      },
    ],
    choirStep: {
      chapter: "Groeien",
      intro: "Voor kinderen die verder willen groeien in zingen.",
      focus:
        "We werken aan stemgebruik, samenzang, muzikaliteit en zelfvertrouwen op het podium.",
      tone: "bg-indigo-50/90",
      offset: "lg:mt-16",
    },
  },
  {
    id:"choir-academy-stagecrew",
    aliases: ["choir-academy-level-3"],
    name: "Stagecrew",
    imageSrc: "/bolderburen.jpeg",
    imageAlt: "Concert Gelderlandfabriek 2023",
    targetAudience: "Groep 5 t/m 8 (8 t/m 12 jaar), met zangervaring",
    href: "/courses/choir-academy-stagecrew",
    price: choirAcademySchoolYearPricing.summary.primary,
    pricing: choirAcademySchoolYearPricing,
    learningGoals: ["Meer uitdaging in samenzang", "Muzikale presentatie versterken", "Meerstemmig zingen", "Ensembleklank en podiumpresence verfijnen", "Zingen van blad (Noten lezen!)"],
    introduction: stageCrewIntro,
    signUp: true,
    themes: ['zingen', 'koor', 'noten lezen'],
    shortIntro: "Voor zangers die toe zijn aan extra uitdaging in presentatie, meerstemmigheid, ensemblezang en frequenter optreden.",
    sessions: [
      {
        id: "choir-academy-stagecrew-woensdag",
        aliases: ["choir-academy-stagecrew"],
        label: "Woensdag",
        dayAndTime: "Woensdag, 17:00-18:00",
        startDate: [new Date('September 5, 2025')],
        location: "Open Hof, zaal 6, Beethovenlaan 2, Culemborg",
        signUpLink: "https://docs.google.com/forms/d/e/1FAIpQLSeTPwe1944dDA8TyBWpU_i_nUR7UyiZ6BekuHVNUYGoM6NfzQ/viewform?usp=header",
      },
    ],
    choirStep: {
      chapter: "Verdiepen",
      intro: "Voor zangers die toe zijn aan extra uitdaging.",
      focus:
        "We werken aan presentatie, meerstemmigheid, ensembleklank en een sterkere podiumperformance.",
      tone: "bg-white/85",
      offset: "lg:mt-4",
    },
  },
  {
    id:"choir-academy-voxnext",
    aliases: ["choir-academy-level-4"],
    name: "VoxNext",
    imageSrc: "https://images.unsplash.com/photo-1669901529599-20a128702da8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "VoxNext 2023",
    targetAudience: "Middelbare school (vanaf 12 jaar)",
    href: "/courses/choir-academy-voxnext",
    price: choirAcademySchoolYearPricing.summary.primary,
    pricing: choirAcademySchoolYearPricing,
    learningGoals: ["Met meer diepgang zingen en performen", "Ensemblezang op niveau", "Expressie en muzikaal eigenaarschap ontwikkelen", "Zelfstandig werken aan repertoire en presentatie", "Zingen van blad (Noten lezen!)"],
    introduction: voxNextInro,
    signUp: true,
    themes: ['zingen', 'koor', 'noten lezen'],
    shortIntro: "Voor tieners die met meer diepgang willen zingen en performen, met aandacht voor expressie, ensemblezang en eigenaarschap.",
    sessions: [
      {
        id: "choir-academy-voxnext-woensdag",
        aliases: ["choir-academy-voxnext", "choir-academy-level-4"],
        label: "Woensdag",
        dayAndTime: "Woensdag, 18:30-19:30",
        startDate: [new Date('September 3, 2025')],
        location: "Open Hof, zaal 6, Beethovenlaan 2, Culemborg",
        signUpLink: "https://docs.google.com/forms/d/e/1FAIpQLSeTPwe1944dDA8TyBWpU_i_nUR7UyiZ6BekuHVNUYGoM6NfzQ/viewform?usp=header",
      },
    ],
    choirStep: {
      chapter: "Verfijnen",
      intro: "Voor tieners die met meer diepgang willen zingen en performen.",
      focus:
        "We werken aan muzikaliteit, expressie, zelfstandigheid en samen zingen op niveau.",
      tone: "bg-indigo-100/80",
      offset: "lg:mt-20",
    },
  },
  // {
  //   id:"algemene-muzikale-vorming",
  //   name: "Intro - Maak kennis met instrumenten!",
  //   imageSrc: "/wes-hicks-gitaren.jpg",
  //   imageAlt: "Gitaren - By Hes Wick",
  //   targetAudience: "Vanaf 8 jaar",
  //   href: "/courses/algemene-muzikale-vorming",
  //   price: "10 lessen + optreden voor €100,-",
  //   learningGoals: ["Verschillende instrumenten uitproberen", "Noten lezen", "Podiumpresentatie"],
  //   introduction: "Wil jij misschien wel op muziekles, maar weet je nog niet precies wat je zou willen doen? In deze lessen maak je kennis met verschillende instrumenten en leer je alvast de basis van het notenschrift, zodat je meteen aan de slag kan als je een instrument gekozen hebt!",
  //   signUp: true,
  //   location: "Brede School West, Zijderupsvlinderlaan 8, 4105 TC Culemborg",
  //   dayAndTime: "Maandag, 15:30-16:30",
  //   startDate: [new Date('March 11, 2024')],
  //   themes: ['instrumenten', 'noten lezen']
  // },
  // {
  //   id:"kec-project-orchestra",
  //   name: "KEC Project Orchestra",
  //   imageSrc: "/kec-winterconcert-twee.jpeg",
  //   imageAlt: "Gitaren - By Hes Wick",
  //   targetAudience: "Vanaf 9 jaar",
  //   href: "/courses/kec-project-orchestra",
  //   price: "€50,- voor 6 lessen + optreden",
  //   learningGoals: ["Spelen in een orkest", "Spelen met een dirigent", "Optreden"],
  //   introduction: "Speel je minimaal één jaar een instrument en lijkt het je leuk op te treden met anderen? In deze cursus bereiden we je in zes lessen voor op een spetterend optreden! We spelen partijen op verschillende niveaus, zodat iedereen voldoende wordt uitgedaagd.",
  //   signUp: true,
  //   location: "Brede School West, Zijderupsvlinderlaan 8, 4105 TC Culemborg",
  //   dayAndTime: "Maandag, 16:30-17:30",
  //   startDate: [new Date('March 4, 2024')],
  //   themes: ['samenspel']
  // },
  // {
  //   id:"vu-luisteren-naar-klassieke-muziek",
  //   name: "Klassieke Muziek: van luisteren naar begrijpen",
  //   imageSrc: "https://images.unsplash.com/photo-1607998803461-4e9aef3be418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  //   imageAlt: "Violin and sheet music",
  //   targetAudience: "Volwassenen",
  //   href: "/courses/vu-luisteren-naar-klassieke-muziek",
  //   price: "",
  //   learningGoals: ["Kennismaken met verschillende soorten klassieke muziek", "De verhalen achter de muziek leren kennen", "Kenmerken en patronen leren herkennen in muziek"],
  //   introduction: "Iedereen kan genieten van klassieke muziek! In deze cursus leer je hoe je (nog) meer van klassieke muziek kan genieten. Ook duiken we in de spannende, verrassende en ontroerende verhalen en componisten achter de muziekstukken.",
  //   signUp: true,
  //   themes: ['muziek', 'korte cursus']
  // },
  // {
  //   id:"vu-digitale-vaardigheden",
  //   name: "Digitale Vaardigheden 101",
  //   imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  //   imageAlt: "Working on a computer",
  //   targetAudience: "Volwassenen",
  //   href: "/courses/vu-digitale-vaardigheden",
  //   price: "",
  //   learningGoals: ["Whatssapp gebruiken om elkaar berichten te sturen", "Videobellen", "Muziek luisteren of films kijken","Veiligheid online"],
  //   introduction: "Contact houden met je (klein)kinderen? Op de hoogte blijven van nieuws? Genieten van mooie muziek of grappige video's? Veilig online gaan? In deze cursus komt het allemaal aan bod. Neem je eigen laptop en smartphone mee en ga aan de slag! Heb je een specifieke vraag, of wil je iets leren wat nog niet in het programma zit? Laat het even weten!",
  //   signUp: true,
  //   themes: ['digitale vaardigheden', 'korte cursus']
  // },
  // {
  //   id:"amv-kleuters-een-muzikale-ontdekkingstocht",
  //   name: "Een muzikale ontdekkingstocht",
  //   imageSrc: "https://images.unsplash.com/photo-1674049406265-76479a8ad498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGNoaWxkJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  //   imageAlt: "young children singing",
  //   targetAudience: "Groep 1/2",
  //   href: "/courses/amv-kleuters-een-muzikale-ontdekkingstocht",
  //   price: "",
  //   learningGoals: ['Actief luisteren', 'Bewegen op de maat van de muziek', 'Uitbreiden (muzikale) woordenschat', 'Samen zingen'],
  //   introduction: 'In deze cursus gaan we op muzikale ontdekkingstocht! Al zingend, dansend en luisterend ontdekken we de wereld om ons heen. Ondertussen leren we luisteren, ontwikkelen we ons ritmegevoel, trainen we onze zangstem en maken we kennis met allerlei ritme-instrumenten',
  //   signUp: false,
  //   themes: ['muziek', 'korte cursus', 'amv']
  // },
  // {
  //   id:"amv-bovenbouw-talent-klas",
  //   name: "All about music",
  //   imageSrc: "https://images.unsplash.com/photo-1572870014793-c39267e4d1ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80",
  //   imageAlt: "teenager singing",
  //   targetAudience: "Groep 7/8",
  //   href: "/courses/amv-bovenbouw-talent-klas",
  //   price: "",
  //   learningGoals: ["De 'beat' in een muziekstuk identificeren", "Een lied of rap uitvoeren","Eenvoudige ritmes (kwart- en achtste noten, max vier tellen) kunnen herkennen, uitvoeren en opschrijven", "Een (ritmisch) stuk componeren"],
  //   introduction: "Deze cursus gaat over het ontdekken van jouw muzikale talenten! We gaan aan de slag met (body)percussie, ritmes, zang en rap. Aan het eind van de cursus maken we een mooie show met alles wat we geleerd hebben.",
  //   signUp: false,
  //   themes: ['muziek', 'korte cursus', 'amv'],
  // },
  // {
  //   id:"summer-singing-games",
  //   name: "Summer Singing Games",
  //   imageSrc: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //   imageAlt: "children with music parachute",
  //   targetAudience: "7 t/m 12 jaar",
  //   href: "/courses/summer-singing-games",
  //   price: "Gratis!",
  //   learningGoals: ["Heel veel liedjes en spelletjes","Samen zingen", 'Ritmegevoel'],
  //   introduction: "Zing en speel deze zomer mee met de Summer Singing Games! Spelenderwijs leer je alerlei liedjes en spelletjes, train je je stem en ontwikkel je ritmegevoel. Of je nou veel zangervaring hebt of helemaal geen, iedereen is van harte welkom!",
  //   signUp: true,
  //   dayAndTime: "Vrijdag, 15:00-16:00, je mag één of beide dagen langskomen!",
  //   startDate: [new Date('August 11, 2023'), new Date('August 18, 2023')],
  //   themes: ['zingen', 'games', 'korte cursus'],
  //   location: "Brede School West, Culemborg"
  // },
]

export const choirAcademyCourses: Course[] = courses.filter(
  (course) => Boolean(course.choirStep),
);

export const choirAcademyOverviewCourses: Course[] = choirAcademyCourses.map(
  (course) => ({
    ...course,
    id: `choir-academy-overview-${course.id}`,
    shortIntro: `${course.choirStep?.intro ?? ""} ${course.choirStep?.focus ?? ""}`.trim(),
  }),
);

export const choirAcademyPathwaySteps = choirAcademyCourses.map((course, index) => {
  if (!course.choirStep) {
    throw new Error(`Missing choir step config for ${course.id}`);
  }

  return {
    id: String(index + 1).padStart(2, "0"),
    name: course.name,
    age: course.targetAudience,
    href: course.href,
    ...course.choirStep,
  };
});

export function getCourseSessions(course: Course): CourseSession[] {
  if (course.sessions && course.sessions.length > 0) {
    return course.sessions;
  }

  if (course.dayAndTime && course.location) {
    return [
      {
        id: `${course.id}-default`,
        dayAndTime: course.dayAndTime,
        location: course.location,
        startDate: course.startDate,
        signUpLink: course.signUpLink,
      },
    ];
  }

  return [];
}

export function findCourseById(id: string) {
  return courses.find(
    (course) =>
      course.id === id ||
      course.aliases?.includes(id) ||
      getCourseSessions(course).some(
        (session) => session.id === id || session.aliases?.includes(id),
      ),
  );
}
