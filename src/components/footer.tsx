import Link from "next/link";
import React from "react";

type Section = {
  title: string;
  id: string;
}

export const Footer: React.FC<{sections: Section[]}> = ({ sections }) => (
  <footer className="bg-gray-900 py-24 p-8 flex gap-4 lg:p-24">
    <div className="grow basis-9/12 justify-start lg:basis-auto">
      <h2 className="text-xl text-gray-300 font-bold">Navigatie</h2>
      <ul className="pt-2">
        {sections.map(section => <li key={`footer-nav-${section.id}`}><Link href={`${section.id}`} className='leading-8 text-gray-300 underline underline-offset-8'>{section.title}</Link></li>)}
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
      <p className='text-gray-300 '>email: <a href="mailto:info@mimimagusin.com">info@mimimagusin.com</a></p>
      <p className='text-gray-300 '>kvk: 90499360</p>

    </div>
  </footer>
)
