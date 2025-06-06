import Link from "next/link";
import React from "react";

type Section = {
  title: string;
  id: string;
};

export const Footer: React.FC<{ sections: Section[] }> = ({ sections }) => (
  <footer className=" w-full bg-gray-900 py-24 px-8 flex gap-x-4 gap-y-16 flex-wrap">
    <div className="grow basis-9/12 justify-start lg:basis-auto lg:ml-16">
      <h2 className="text-xl text-gray-300 font-bold">Navigatie</h2>
      <ul className="pt-2">
        {sections.map((section) => (
          <li key={`footer-nav-${section.id}`}>
            <Link
              href={`${section.id}`}
              className="leading-8 text-gray-300 underline underline-offset-8"
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <div className="basis-40 lg:basis-64">
      <h2 className="text-xl text-gray-300 font-bold">Socials</h2>
      <ul className="pt-2">
        <li>
          <Link
            href={`#`}
            className="leading-8 text-gray-300 underline underline-offset-8"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            href={`#`}
            className="leading-8 text-gray-300 underline underline-offset-8"
          >
            YouTube
          </Link>
        </li>
      </ul>
    </div>

    <div className="basis-64">
      <h2 className="text-xl text-gray-300 font-bold pb-2">Contact</h2>
      <p className="text-gray-300">Mimi Magusin</p>
      <p className="text-gray-300 pb-4">
        <i>Muziek, onderwijs en code in Culemborg & Omgeving</i>
      </p>
      <p className="text-gray-300 ">
        email:{" "}
        <Link href="mailto:info@mimimagusin.com">info@mimimagusin.com</Link>
      </p>
      <p className="text-gray-300 ">kvk: 90499360</p>
    </div>
  </footer>
);
