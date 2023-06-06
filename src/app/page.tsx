import Image from 'next/image'
import { Hero } from '../components/hero';
import { ProductPreview } from '../components/product';
import { Products } from '../components/products';
import { AboutMe } from '../components/about-me';
import { Header } from '../components/header';


const products: ProductPreview[] = [
  {
    id:"amv-kleuters",
    name: "Singing and Swinging",
    imageSrc: "https://images.unsplash.com/photo-1528567656495-d439e32f6be1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    imageAlt: "young children singing",
    targetAudience: "Groep 1/2",
    href: "#",
    price: ""
  },
    {
    id:"amv-bovenbouw",
    name: "All about music",
    imageSrc: "https://images.unsplash.com/photo-1572870014793-c39267e4d1ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80",
    imageAlt: "teenager singing",
    targetAudience: "Groep 7/8",
    href: "",
    price: ""
  },
  {
    id:"luisteren-naar-klassieke-muziek",
    name: "Klassieke Muziek: van luisteren naar begrijpen",
    imageSrc: "https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Violin and sheet music",
    targetAudience: "Volwassenen",
    href: "",
    price: ""
  },
    {
    id:"digitale-vaardigheden",
    name: "Digitale Vaardigheden 101",
    imageSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Working on a computer",
    targetAudience: "Volwassenen",
    href: "",
    price: ""
  }
]

export default function Home() {
  const coursesId = "courses"
  const aboutMeId = "about-me"

  const ActionsHeroHome = () => ( 
    <section className="mt-10 flex items-center justify-center gap-x-6">
      <a
        href={`#${coursesId}`}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Kies een cursus
      </a>
      <a href={`#${aboutMeId}`} className="text-sm font-semibold leading-6 text-gray-900">
        Over mij <span aria-hidden="true">→</span>
      </a>
    </section>
  )

  const sections = [{ title: "Home", id: "" }, { title: "Cursussen", id: coursesId }, { title: "Over mij", id: aboutMeId }];
  return (
    <>
      <Header sections={sections}/>
      <main className="flex min-h-screen flex-col items-center justify-between pt-8 w-full">
        <Hero title="Mimi Magusin" subtitle="Muziek, Onderwijs & Code" ActionComponent={ActionsHeroHome}/>
        <section id={coursesId} className="min-h-screen">
          <Products products={products}/>
        </section>
        <section className="min-h-screen w-full">
          <AboutMe id={aboutMeId}/>
        </section>
      </main>
      <footer className="bg-gray-900 py-24 p-8 flex gap-4 lg:p-24">
        <div className="grow basis-9/12 justify-start lg:basis-auto">
          <h2 className="text-xl text-gray-300 font-bold">Navigatie</h2>
          <ul className="pt-2">
          {sections.map(section => <li key={`footer-nav-${section.id}`}><a href={`#${section.id}`} className='leading-8 text-gray-300 underline underline-offset-8'>{section.title}</a></li>)}
          </ul>
        </div>
       
        <div className="basis-40 lg:basis-64">
          <h2 className="text-xl text-gray-300 font-bold">Socials</h2>
          <ul className="pt-2">
            <li>
              <a href={`#`} className='leading-8 text-gray-300 underline underline-offset-8'>LinkedIn</a>
            </li>
            <li>
              <a href={`#`} className='leading-8 text-gray-300 underline underline-offset-8'>YouTube</a>
            </li>
          </ul>
        </div>

        <div className="basis-64">
          <h2 className="text-xl text-gray-300 font-bold pb-2">Contact</h2>
          <p className='text-gray-300'>Mimi Magusin</p>
          <p className='text-gray-300 pb-4'><i>Muziek, onderwijs en code in Culemborg & Omgeving</i></p>
          <p className='text-gray-300 '>email: </p>
          <p className='text-gray-300 '>kvk: </p>

        </div>
      </footer>
    </>
  )
}
