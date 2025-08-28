type Theme = "amv" | 'koor' | 'digitale vaardigheden' | 'korte cursus' | 'zingen' | 'noten lezen' | 'muziek' | 'games' | 'optreden' | 'instrumenten' | 'samenspel'

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
  name: string;
  imageSrc: string;
  imageAlt: string;
  targetAudience: string;
  href: string;
  price: string;
  shortIntro?: string;
}

export const courses: Course[] = [
  {
    id: "zomerzangdagen",
    name: "Zomerzangdagen",
    imageSrc: "/summer-singing-games.png",
    imageAlt: "children with music parachute",
    targetAudience: "7 t/m 12 jaar",
    href: "/courses/zomerzangdagen",  
    price: "Gratis, vrijwillige bijdrage",
    learningGoals: ["Heel veel liedjes en spelletjes", "Samen zingen", 'Toneel', 'Dans'],
    introduction: "Zing en speel deze zomer mee met de Zomerzangdagen! Drie dagen zingen, dansen en toneelspelen, met een spetterend optreden op de laatste dag! Of je nou veel zangervaring hebt of helemaal geen, iedereen is van harte welkom! Op basis van een vrijwillige bijdrage.",
    signUp: true,
    dayAndTime: "26, 27 & 28 augustus, 09:30-15:30",
    startDate: [new Date('August 26, 2025')],
    themes: ['zingen', 'games', 'korte cursus', 'optreden'],
    location: "Brede School West, Zijderupsvlinderlaan 8, 4105 TC Culemborg",
    signUpLink:"https://docs.google.com/forms/d/e/1FAIpQLSdT2vSTAa-pJS8HXbBAxtwKFSvu2JTKtihwIFd_mJB0s573iQ/viewform?usp=header",
    shortIntro: "Drie dagen zingen, dansen en toneelspelen, met een spetterend optreden op de laatste dag!"
  },
  {
    id: "choir-academy-speelklas",
    name: "Speelklas",
    imageSrc: "/speelklas.png",
    imageAlt: "Flyer Speelklas",
    targetAudience: "Groep 1/2",
    href: "/courses/choir-academy-speelklas",
    price: "€50,- voor 7 lessen",
    learningGoals: ["Samen zingen", "Ritmegevoel", "Spelen op schoolinstrumenten", "Heel veel liedjes en spelletjes"],
    introduction: "In deze cursus gaan we op muzikale ontdekkingstocht! Al zingend, dansend en luisterend ontdekken we de wereld om ons heen. Ondertussen leren hoe we onze stem goed gebruiken, naar elkaar kunnen luisteren en ontwikkelen we ons ritmegevoel.",
    signUp: true,
    dayAndTime: "woensdag, 14:45-15:25",
    startDate: [new Date('September 3, 2025')],
    themes: ["zingen", 'koor', 'korte cursus', 'amv'],
    location: "Open Hof, zaal 6, Beethovenlaan 2, Culemborg",
    signUpLink: "https://docs.google.com/forms/d/e/1FAIpQLSeTPwe1944dDA8TyBWpU_i_nUR7UyiZ6BekuHVNUYGoM6NfzQ/viewform?usp=header",
    shortIntro: "Ga op muzikale ontdekkingstocht! Kom zingen, spelen op instrumenten beleef allerlei muzikale avonturen."
  },
  {
    id:"choir-academy-level-1-woensdag",
    name: "Startkoor (woensdag)",
    imageSrc: "/schubert-2023.jpg",
    imageAlt: "Schubert concert in gelderlandfabriek",
    targetAudience: "Groep 3 t/m 5",
    href: "/courses/choir-academy-level-1-woensdag",
    price: "€225 per schooljaar, of €135 voor blok 1 (3 september tot 18 februari)",
    learningGoals: ["Hoe je je stem gezond gebruikt", "Samen zingen", "Ritmegevoel", "Notatie", "Heel veel liedjes en spelletjes",],
    introduction: "Met de leerlingen van de startklas werken we niet alleen aan onze stemmen, maar gaan we ook aan de slag met muzikale vorming. We oefenen met actief luisteren, muzikale vormen, de betekenis van allerlei soorten muziek en het muzikaal voorstellingvermogen. Spelenderwijs gaan we aan de slag met de basisbegrippen van de muziektheorie. Na deze cursus kan je verder met de Choir Academy van de Jong Talentklas of ben je perfect voorbereid om te beginnen met een instrument!",
    signUp: true,
    dayAndTime: "Woensdag, 15:30-16:25",
    startDate: [new Date('September 3, 2025')],
    themes:['zingen', 'koor', 'noten lezen', 'amv'],
    location: "Open Hof, Zaal 6, Beethovenlaan 2, Culemborg",
    signUpLink: "https://docs.google.com/forms/d/e/1FAIpQLSeTPwe1944dDA8TyBWpU_i_nUR7UyiZ6BekuHVNUYGoM6NfzQ/viewform?usp=header",
    shortIntro: "Ontwikkel je stem en je muzikaliteit. Maak kennis met allerlei soorten muziek en straal op het podium."
  },
  {
    id:"choir-academy-level-1-vrijdag",
    name: "Startkoor (vrijdag)",
    imageSrc: "/choir-academy-startklas.jpg",
    imageAlt: "Concert Buitengewoon Zingen",
    targetAudience: "Groep 3 t/m 5",
    href: "/courses/choir-academy-level-1-vrijdag",
    price: "€225 per schooljaar, of €135 voor blok 1 (3 september tot 18 februari)",
    learningGoals: ["Hoe je je stem gezond gebruikt", "Samen zingen", "Ritmegevoel", "Notatie", "Heel veel liedjes en spelletjes",],
    introduction: "Met de leerlingen van de startklas werken we niet alleen aan onze stemmen, maar gaan we ook aan de slag met muzikale vorming. We oefenen met actief luisteren, muzikale vormen, de betekenis van allerlei soorten muziek en het muzikaal voorstellingvermogen. Spelenderwijs gaan we aan de slag met de basisbegrippen van de muziektheorie. Na deze cursus kan je verder met de Choir Academy van de Jong Talentklas of ben je perfect voorbereid om te beginnen met een instrument!",
    signUp: true,
    dayAndTime: "Vrijdag, 15:30-16:25",
    startDate: [new Date('September 5, 2025')],
    themes:['zingen', 'koor', 'noten lezen', 'amv'],
    location: "Brede School West, Zijderupsvlinderlaan 8, 4105 TC Culemborg",
    signUpLink: "https://docs.google.com/forms/d/e/1FAIpQLSeTPwe1944dDA8TyBWpU_i_nUR7UyiZ6BekuHVNUYGoM6NfzQ/viewform?usp=header",
    shortIntro: "Ontwikkel je stem en je muzikaliteit. Maak kennis met allerlei soorten muziek en straal op het podium."
  },
  {
    id:"choir-academy-level-2",
    name: "Tienerkoor",
    imageSrc: "/groepsfoto.jpg",
    imageAlt: "Concert Gelderlandfabriek 2023",
    targetAudience: "Groep 6 t/m 8",
    href: "/courses/choir-academy-level-2",
    price: "€225 per schooljaar, of €135 voor blok 1 (3 september tot 18 februari)",
    learningGoals: ["Hoe je je stem gezond gebruikt", "Noten lezen", "Podiumpresentatie", "Canons/Meerstemmigheid"],
    introduction: "In de lessen van de Choir Academy zingen we niet alleen, we werken ook aan je stem, muzikaliteit en podiumpresentatie. We gaan heel veel zingen en bewegen, maar gaan ook op speelse wijze aan de slag met allerlei muzikale begrippen en bladmuziek! We treden we ook regelmatig op, bijvoorbeeld op de uitmarkt en rondom kerst.",
    signUp: true,
    location: "Open Hof, zaal 6, Beethovenlaan 2, Culemborg",
    dayAndTime: "Vrijdag, 16:30-17:25",
    startDate: [new Date('September 3, 2025')],
    themes: ['zingen', 'koor', 'noten lezen'],
    signUpLink: "https://docs.google.com/forms/d/e/1FAIpQLSeTPwe1944dDA8TyBWpU_i_nUR7UyiZ6BekuHVNUYGoM6NfzQ/viewform?usp=header",
    shortIntro: "Ontwikkel je stem en podiumpresentatie, leer noten lezen en zing in meerstemmige arrangementen."
  },
  {
    id:"choir-academy-level-3",
    name: "VoxNext",
    imageSrc: "https://images.unsplash.com/photo-1669901529599-20a128702da8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "VoxNext 2023",
    targetAudience: "Vanaf 13 jaar",
    href: "/courses/choir-academy-level-3",
    price: "€225 per schooljaar, of €135 voor blok 1 (3 september tot 18 februari)",
    learningGoals: ["Hoe je je stem gezond gebruikt", "Noten lezen", "Podiumpresentatie", "Canons/Meerstemmigheid"],
    introduction: "In de lessen van de Choir Academy zingen we niet alleen, we werken ook aan je stem, muzikaliteit en podiumpresentatie. We gaan heel veel zingen en bewegen, maar gaan ook op speelse wijze aan de slag met allerlei muzikale begrippen en bladmuziek! We treden we ook regelmatig op, bijvoorbeeld op de uitmarkt en rondom kerst.",
    signUp: true,
    location: "Open Hof, zaal 6, Beethovenlaan 2, Culemborg",
    dayAndTime: "woensdag, 19:00-20:30",
    startDate: [new Date('September 3, 2025')],
    themes: ['zingen', 'koor', 'noten lezen'],
    signUpLink: "https://docs.google.com/forms/d/e/1FAIpQLSeTPwe1944dDA8TyBWpU_i_nUR7UyiZ6BekuHVNUYGoM6NfzQ/viewform?usp=header",
    shortIntro: "Van musical tot klassiek en van volksmuziek tot pop, zing muziek van over de hele wereld. Ontwikkel je stem en leer noten lezen!"
  },
  {
    id:"algemene-muzikale-vorming",
    name: "Intro - Maak kennis met instrumenten!",
    imageSrc: "/wes-hicks-gitaren.jpg",
    imageAlt: "Gitaren - By Hes Wick",
    targetAudience: "Vanaf 8 jaar",
    href: "/courses/algemene-muzikale-vorming",
    price: "10 lessen + optreden voor €100,-",
    learningGoals: ["Verschillende instrumenten uitproberen", "Noten lezen", "Podiumpresentatie"],
    introduction: "Wil jij misschien wel op muziekles, maar weet je nog niet precies wat je zou willen doen? In deze lessen maak je kennis met verschillende instrumenten en leer je alvast de basis van het notenschrift, zodat je meteen aan de slag kan als je een instrument gekozen hebt!",
    signUp: true,
    location: "Brede School West, Zijderupsvlinderlaan 8, 4105 TC Culemborg",
    dayAndTime: "Maandag, 15:30-16:30",
    startDate: [new Date('March 11, 2024')],
    themes: ['instrumenten', 'noten lezen']
  },
  {
    id:"kec-project-orchestra",
    name: "KEC Project Orchestra",
    imageSrc: "/kec-winterconcert-twee.jpeg",
    imageAlt: "Gitaren - By Hes Wick",
    targetAudience: "Vanaf 9 jaar",
    href: "/courses/kec-project-orchestra",
    price: "€50,- voor 6 lessen + optreden",
    learningGoals: ["Spelen in een orkest", "Spelen met een dirigent", "Optreden"],
    introduction: "Speel je minimaal één jaar een instrument en lijkt het je leuk op te treden met anderen? In deze cursus bereiden we je in zes lessen voor op een spetterend optreden! We spelen partijen op verschillende niveaus, zodat iedereen voldoende wordt uitgedaagd.",
    signUp: true,
    location: "Brede School West, Zijderupsvlinderlaan 8, 4105 TC Culemborg",
    dayAndTime: "Maandag, 16:30-17:30",
    startDate: [new Date('March 4, 2024')],
    themes: ['samenspel']
  },
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