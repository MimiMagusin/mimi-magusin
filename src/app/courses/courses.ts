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
