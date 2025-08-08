import Image from "next/image";
import React from "react";

export const AboutMe: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div className="w-full flex flex-wrap-reverse lg:flex-nowrap items-center max-w-6xl m-auto gap-8">
      <div className="w-full lg:w-1/2">
        <AboutMeText id={id} />
      </div>
      <div className="w-full lg:w-1/2 h-full">
        <img
          alt="Mimi Magusin"
          src="/mimi-magusin.jpg"
          className="w-full h-auto max-h-[750px] object-cover rounded-md"
        />
      </div>
    </div>
  );
};

const AboutMeText: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div id={id} className="mx-auto max-w-6xl">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-indigo-900 sm:text-5xl">
          Over mij
        </h2>
        <p className="mt-6 text-md leading-8 text-gray-300">
          <b>Muziek</b> en <b>Onderwijs</b> zijn altijd onderdeel geweest van
          mijn leven. Al tijdens mijn middelbare schooltijd heb ik{" "}
          <b>vooropleiding compositie</b> bij de Vakklas in Eindhoven afgerond,
          meerdere keren in de <b>nationale finale</b> van de
          compositiewedstrijd van het <b>NBE</b> gestaan en verschillende{" "}
          <b>masterclasses</b> gevolgd. Tijdens mijn studie bleef ik muzikale
          ensembles dirigeren, gaf ik workshops op het{" "}
          <b>primair en secundair onderwijs</b> en gaf ik in allerlei vakken
          bijles aan jongeren en volwassenen.
        </p>
        <p className="mt-6 text-md leading-8 text-gray-300">
          Na het behalen van mijn <b>Bachelor of Arts</b>{" "}
          <i>(University College Roosevelt, 2013-2016, Cum Laude)</i> ben ik met
          veel plezier aan de slag gegaan als <b>Docent</b> en{" "}
          <b>Web Developer</b> bij verschillende bedrijven.
        </p>
        <p className="mt-6 text-md leading-8 text-gray-300">
          In 2023 ben ik begonnen met de opleiding <b>Docent Muziek op Maat</b>{" "}
          <i>(Artez, Zwolle)</i> en ondertussen ben ik werkzaam als docent bij{" "}
          <b>Kunsteducatie Culemborg</b>, <b>Vrije School Utrecht</b> en op
          projectbasis bij verschillende basisscholen in de regio Rivierenland.
        </p>
        <p className="mt-6 text-md leading-8 text-gray-300">
          Daarnaast ben ik <b>muzikaal leider</b> en <b>dirigent</b> van de
          zang-community <b>Ilico</b>, waarmee we korte concertjes organiseren
          op bijzondere locaties en dirigeer ik de kinder- en jongerenkoren van
          de <b>KEC Choir Academy</b> in Culemborg
        </p>
        <p className="mt-6 text-md leading-8 text-gray-300">
          Ik help kinderen, jongeren en volwassenen graag om het{" "}
          <b>beste uit zichzelf te halen</b>. En eigenlijk geldt hetzelfde voor
          de groepen die ik dirigeer. Samen leggen we de lat nog net wat hoger,
          zo komen we nog verder dan we dachten dat we konden!
        </p>
      </div>
    </div>
  );
};
