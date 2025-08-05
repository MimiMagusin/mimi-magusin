"use client";

import { aboutMeId, coursesId, introId } from "@/app/navigation-vars";
import {
  AcademicCapIcon,
  GlobeEuropeAfricaIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/solid";
import { blueButton, yellowButton } from "./styling-strings";

export default function IntroBlok() {
  return (
    <section
      id={introId}
      className="max-w-6xl mx-auto px-6 py-12 md:grid md:grid-cols-2 gap-10 items-center min-h-screen"
    >
      {/* Foto */}
      <div className="relative">
        <img
          src="/mimi-magusin.jpg"
          alt="Mimi Magusin"
          className="max-h-[80vh] rounded-[2rem] shadow-lg transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Tekst */}
      <div>
        <h2 className="text-3xl font-bold text-indigo-950 mb-4">
          <span className="text-yellow-400">Muziekles</span> met aandacht
        </h2>
        <p className="text-gray-700 mb-6">
          Ik ben Mimi Magusin. Met mijn muzieklessen in op en buiten scholen in
          Culemborg en omgeving help ik kinderen, jongeren en volwassenen
          groeien in muzikaliteit, plezier en zelfvertrouwen.
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-3">
            <div className="bg-yellow-400 text-indigo-950 p-2 rounded-full">
              <MusicalNoteIcon className="h-6 w-6" />
            </div>
            Voor kinderen, jongeren en volwassenen vanaf 4 jaar
          </li>
          <li className="flex items-center gap-3">
            <div className="bg-yellow-400 text-indigo-950 p-2 rounded-full">
              <AcademicCapIcon className="h-6 w-6" />
            </div>
            Gericht op muzikaliteit en zelfvertrouwen
          </li>
          <li className="flex items-center gap-3">
            <div className="bg-yellow-400 text-indigo-950 p-2 rounded-full">
              <GlobeEuropeAfricaIcon className="h-6 w-6" />
            </div>
            Actief in Culemborg en omgeving
          </li>
        </ul>
        <div className="flex gap-4 flex-wrap">
          <a href={`#${coursesId}`} className={blueButton}>
            Naar het aanbod →
          </a>
          <a href={`#${aboutMeId}`} className={yellowButton}>
            Meer over mij →
          </a>
        </div>
      </div>
    </section>
  );
}
