import { ProductPreview } from "@/components/product";

export type Course = ProductPreview & {
  introduction?: string;
  learningGoals?: string[];
  location?: string;
  dayAndTime?: string;
  startDate?: string;
  signUp?: boolean
}

export const courses: Course[] = [
  {
    id:"amv-kleuters-een-muzikale-ontdekkingstocht",
    name: "Een muzikale ontdekkingstocht",
    imageSrc: "https://images.unsplash.com/photo-1674049406265-76479a8ad498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGNoaWxkJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    imageAlt: "young children singing",
    targetAudience: "Groep 1/2",
    href: "/courses/amv-kleuters-een-muzikale-ontdekkingstocht",
    price: "",
    learningGoals: ['Actief luisteren', 'Bewegen op de maat van de muziek', 'Uitbreiden (muzikale) woordenschat', 'Samen zingen'],
    introduction: 'In deze cursus gaan we op muzikale ontdekkingstocht! Al zingend, dansend en luisterend ontdekken we de wereld om ons heen. Ondertussen leren we luisteren, ontwikkelen we ons ritmegevoel, trainen we onze zangstem en maken we kennis met allerlei ritme-instrumenten'
  },
    {
    id:"amv-bovenbouw-talent-klas",
    name: "Talentklas",
    imageSrc: "https://images.unsplash.com/photo-1572870014793-c39267e4d1ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80",
    imageAlt: "teenager singing",
    targetAudience: "Groep 7/8",
    href: "/courses/amv-bovenbouw-talent-klas",
    price: "",
    learningGoals: ["De 'beat' in een muziekstuk identificeren", "Een lied of rap uitvoeren","Eenvoudige ritmes (kwart- en achtste noten, max vier tellen) kunnen herkennen, uitvoeren en opschrijven", "Een (ritmisch) stuk componeren"],
    introduction: "Deze cursus gaat over het ontdekken van jouw muzikale talenten! We gaan aan de slag met (body)percussie, ritmes, zang en rap. Aan het eind van de cursus maken we een mooie show met alles wat we geleerd hebben."
  },
  {
    id:"vu-luisteren-naar-klassieke-muziek",
    name: "Klassieke Muziek: van luisteren naar begrijpen",
    imageSrc: "https://images.unsplash.com/photo-1607998803461-4e9aef3be418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    imageAlt: "Violin and sheet music",
    targetAudience: "Volwassenen",
    href: "/courses/vu-luisteren-naar-klassieke-muziek",
    price: "",
    learningGoals: ["Kennismaken met verschillende soorten klassieke muziek", "De verhalen achter de muziek leren kennen", "Kenmerken en patronen leren herkennen in muziek"],
    introduction: "Iedereen kan genieten van klassieke muziek! In deze cursus leer je hoe je (nog) meer van klassieke muziek kan genieten. Ook duiken we in de spannende, verrassende en ontroerende verhalen en componisten achter de muziekstukken."
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
    introduction: "Contact houden met je (klein)kinderen? Op de hoogte blijven van nieuws? Genieten van mooie muziek of grappige video's? Veilig online gaan? In deze cursus komt het allemaal aan bod. Neem je eigen laptop en smartphone mee en ga aan de slag! Heb je een specifieke vraag, of wil je iets leren wat nog niet in het programma zit? Laat het even weten!"
  }
]