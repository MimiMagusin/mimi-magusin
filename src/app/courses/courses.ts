import { ProductPreview } from "@/components/product";

type Theme = "amv" | 'koor' | 'digitale vaardigheden' | 'korte cursus' | 'zingen' | 'noten lezen' | 'muziek' | 'games' | 'optreden'

export type Course = ProductPreview & {
  introduction?: string;
  learningGoals?: string[];
  location?: string;
  dayAndTime?: string;
  startDate?: Date[];
  signUp?: boolean;
  themes: Theme[];
}

export const courses: Course[] = [
  {
    id:"choir-academy-lente-projecten",
    name: "Lenteprojecten",
    imageSrc: "/lente-projecten-2024.png",
    imageAlt: "children with music parachute",
    targetAudience: "4 t/m 12 jaar",
    href: "/courses/choir-academy-lente-projecten",
    price: "€35,-",
    learningGoals: ["Optreden","Samen zingen", 'Ritmegevoel'],
    introduction: "Zing mee met één van de lenteprojecten van de Choir Academy! Bereid een optreden voor in een groep kinderen van je eigen leeftijd en leer hoe je je stem gezond gebruikt, je jezelf goed kan presenteren op een podium en zelf een beetje notenschrift. Of je nou veel zangervaring hebt of helemaal geen, iedereen is van harte welkom!",
    signUp: true,
    dayAndTime: "Donderdag 15:30-16:15 en vrijdag, 15:00-15:45 (groep 3 t/m 5) of 16:00-17:00 (groep 6 t/m 8)",
    startDate: [new Date('May 16, 2024'), new Date('May 17, 2024')],
    themes: ['zingen', 'optreden', 'korte cursus'],
    location: "Brede School West, Culemborg"
  },
  {
    id: "choir-academy-speelklas",
    name: "Speelklas",
    imageSrc: "/speelklas.png",
    imageAlt: "young children singing",
    targetAudience: "Groep 1/2",
    href: "/courses/choir-academy-speelklas",
    price: "€35,- voor 7 lessen van 45 minuten",
    learningGoals: ["Samen zingen", "Ritmegevoel", "Spelen op schoolinstrumenten", "Heel veel liedjes en spelletjes"],
    introduction: "In deze cursus gaan we op muzikale ontdekkingstocht! Al zingend, dansend en luisterend ontdekken we de wereld om ons heen. Ondertussen leren hoe we onze stem goed gebruiken, naar elkaar kunnen luisteren en ontwikkelen we ons ritmegevoel.",
    signUp: true,
    dayAndTime: "donderdag, 15:30",
    startDate: [new Date('May 16, 2024')],
    themes: ["zingen", 'koor', 'korte cursus', 'amv'],
    location: "Brede School West, Zijderupsvlinderlaan 8, 4105 TC Culemborg"
  },
  //   {
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
  {
    id:"choir-academy-level-1",
    name: "Startklas (algemene muzikale vorming)",
    imageSrc: "https://images.unsplash.com/photo-1559671902-3bdecacfdf7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbGRyZW4lMjBzaW5naW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    imageAlt: "boy singing in microphone",
    targetAudience: "Groep 3/4",
    href: "/courses/choir-academy-level-1",
    price: "€160,- voor een jaar lang wekelijkse les, met uitzondering van de schoolvakanties",
    learningGoals: ["Hoe je je stem gezond gebruikt", "Samen zingen", "Ritmegevoel", "Notatie", "Heel veel liedjes en spelletjes",],
    introduction: "Met de leerlingen van de startklas werken we niet alleen aan onze stemmen, maar gaan we ook aan de slag met muzikale vorming. We oefenen met actief luisteren, muzikale vormen, de betekenis van allerlei soorten muziek en het muzikaal voorstellingvermogen. Spelenderwijs gaan we aan de slag met de basisbegrippen van de muziektheorie. Na deze cursus kan je verder met de Choir Academy van de Jong Talentklas of ben je perfect voorbereid om te beginnen met een instrument!",
    signUp: true,
    dayAndTime: "Vrijdag, 15:00-15:45",
    startDate: [new Date('September 1, 2023')],
    themes:['zingen', 'koor', 'noten lezen', 'amv'],
    location: "Brede School West, Zijderupsvlinderlaan 8, 4105 TC Culemborg"
  },
  {
    id:"choir-academy-level-2",
    name: "Jong Talentklas",
    imageSrc: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "boy singing in microphone",
    targetAudience: "Groep 5/6",
    href: "/courses/choir-academy-level-2",
    price: "€180,- voor een jaar lang wekelijkse les, met uitzondering van de schoolvakanties",
    learningGoals: ["Hoe je je stem gezond gebruikt", "Noten lezen", "Podiumpresentatie", "Canons/Meerstemmigheid"],
    introduction: "In de lessen van de Choir Academy zingen we niet alleen, we werken ook aan je stem, muzikaliteit en podiumpresentatie. We gaan heel veel zingen en bewegen, maar gaan ook op speelse wijze aan de slag met allerlei muzikale begrippen en bladmuziek! We treden we ook regelmatig op, bijvoorbeeld op de uitmarkt en rondom kerst.",
    signUp: true,
    location: "Brede School West, Zijderupsvlinderlaan 8, 4105 TC Culemborg",
    dayAndTime: "Vrijdag, 16:00-17:00",
    startDate: [new Date('September 1, 2023')],
    themes: ['zingen', 'koor', 'noten lezen']
  },
  // {
  //   id:"choir-academy-level-3",
  //   name: "Choir Academy - Level 3",
  //   imageSrc: "https://images.unsplash.com/photo-1551980349-75d992b49c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
  //   imageAlt: "woman singing, raising hands",
  //   targetAudience: " 13 t/m 18",
  //   href: "/courses/choir-academy-level-1",
  //   price: "",
  //   learningGoals: ["Hoe je je stem gezond gebruikt", "Noten lezen", "Podiumpresentatie", "Samen zingen"],
  //   introduction: "In de lessen van de Choir Academy zingen we niet alleen, we werken ook aan je stem, muzikaliteit en podiumpresentatie. In deze cursussen"
  // },
  {
    id:"vu-luisteren-naar-klassieke-muziek",
    name: "Klassieke Muziek: van luisteren naar begrijpen",
    imageSrc: "https://images.unsplash.com/photo-1607998803461-4e9aef3be418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    imageAlt: "Violin and sheet music",
    targetAudience: "Volwassenen",
    href: "/courses/vu-luisteren-naar-klassieke-muziek",
    price: "",
    learningGoals: ["Kennismaken met verschillende soorten klassieke muziek", "De verhalen achter de muziek leren kennen", "Kenmerken en patronen leren herkennen in muziek"],
    introduction: "Iedereen kan genieten van klassieke muziek! In deze cursus leer je hoe je (nog) meer van klassieke muziek kan genieten. Ook duiken we in de spannende, verrassende en ontroerende verhalen en componisten achter de muziekstukken.",
    signUp: true,
    themes: ['muziek', 'korte cursus']
  },
  {
    id:"vu-digitale-vaardigheden",
    name: "Digitale Vaardigheden 101",
    imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    imageAlt: "Working on a computer",
    targetAudience: "Volwassenen",
    href: "/courses/vu-digitale-vaardigheden",
    price: "",
    learningGoals: ["Whatssapp gebruiken om elkaar berichten te sturen", "Videobellen", "Muziek luisteren of films kijken","Veiligheid online"],
    introduction: "Contact houden met je (klein)kinderen? Op de hoogte blijven van nieuws? Genieten van mooie muziek of grappige video's? Veilig online gaan? In deze cursus komt het allemaal aan bod. Neem je eigen laptop en smartphone mee en ga aan de slag! Heb je een specifieke vraag, of wil je iets leren wat nog niet in het programma zit? Laat het even weten!",
    signUp: true,
    themes: ['digitale vaardigheden', 'korte cursus']
  },
  {
    id:"amv-kleuters-een-muzikale-ontdekkingstocht",
    name: "Een muzikale ontdekkingstocht",
    imageSrc: "https://images.unsplash.com/photo-1674049406265-76479a8ad498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGNoaWxkJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    imageAlt: "young children singing",
    targetAudience: "Groep 1/2",
    href: "/courses/amv-kleuters-een-muzikale-ontdekkingstocht",
    price: "",
    learningGoals: ['Actief luisteren', 'Bewegen op de maat van de muziek', 'Uitbreiden (muzikale) woordenschat', 'Samen zingen'],
    introduction: 'In deze cursus gaan we op muzikale ontdekkingstocht! Al zingend, dansend en luisterend ontdekken we de wereld om ons heen. Ondertussen leren we luisteren, ontwikkelen we ons ritmegevoel, trainen we onze zangstem en maken we kennis met allerlei ritme-instrumenten',
    signUp: false,
    themes: ['muziek', 'korte cursus', 'amv']
  },
  {
    id:"amv-bovenbouw-talent-klas",
    name: "All about music",
    imageSrc: "https://images.unsplash.com/photo-1572870014793-c39267e4d1ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80",
    imageAlt: "teenager singing",
    targetAudience: "Groep 7/8",
    href: "/courses/amv-bovenbouw-talent-klas",
    price: "",
    learningGoals: ["De 'beat' in een muziekstuk identificeren", "Een lied of rap uitvoeren","Eenvoudige ritmes (kwart- en achtste noten, max vier tellen) kunnen herkennen, uitvoeren en opschrijven", "Een (ritmisch) stuk componeren"],
    introduction: "Deze cursus gaat over het ontdekken van jouw muzikale talenten! We gaan aan de slag met (body)percussie, ritmes, zang en rap. Aan het eind van de cursus maken we een mooie show met alles wat we geleerd hebben.",
    signUp: false,
    themes: ['muziek', 'korte cursus', 'amv'],
  },
  {
    id:"summer-singing-games",
    name: "Summer Singing Games",
    imageSrc: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "children with music parachute",
    targetAudience: "7 t/m 12 jaar",
    href: "/courses/summer-singing-games",
    price: "Gratis!",
    learningGoals: ["Heel veel liedjes en spelletjes","Samen zingen", 'Ritmegevoel'],
    introduction: "Zing en speel deze zomer mee met de Summer Singing Games! Spelenderwijs leer je alerlei liedjes en spelletjes, train je je stem en ontwikkel je ritmegevoel. Of je nou veel zangervaring hebt of helemaal geen, iedereen is van harte welkom!",
    signUp: true,
    dayAndTime: "Vrijdag, 15:00-16:00, je mag één of beide dagen langskomen!",
    startDate: [new Date('August 11, 2023'), new Date('August 18, 2023')],
    themes: ['zingen', 'games', 'korte cursus'],
    location: "Brede School West, Culemborg"
  },
]