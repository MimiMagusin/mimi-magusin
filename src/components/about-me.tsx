import Image from "next/image"
import React from "react"

export const AboutMe: React.FC<{ id: string }> = ({id}) => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 p-8 lg:p-24 min-h-screen flex items-center bg-indigo-800">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-5 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-5 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="w-full flex flex-wrap-reverse items-center">
        <div className="basis-full lg:basis-1/2 p-4">
          <AboutMeText id={id} />
        </div>
        <div className="basis-full lg:basis-1/2 p-4 h-full">
            {/* <Image 
              src="/mimi-magusin.webp"
              alt="Mimi Magusin"
              fill
            /> */}
          <img alt="Mimi Magusin" src="https://mimimagusin.files.wordpress.com/2014/03/12273682_731783956957444_2372358248743957008_o.jpg" className="w-4/6 h-full w-full m-auto object-cover rounded-md" />
        </div>
      </div>
    </div>
  )
}

const AboutMeText: React.FC<{id: string}> =({id}) => {
  return <div id={id} className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-2xl lg:mx-0 rounded-md">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Over mij</h2>
      <p className="mt-6 text-md leading-8 text-gray-300">
        <b>Muziek</b> en <b>Onderwijs</b> zijn altijd onderdeel geweest van mijn leven. Al tijdens mijn middelbare schooltijd heb ik <b>vooropleiding compositie</b> bij de Vakklas in Eindhoven afgerond, 
        meerdere keren in de <b>nationale finale</b> van de compositiewedstrijd van het <b>NBE</b> gestaan en verschillende <b>masterclasses</b> gevolgd. Tijdens mijn studie bleef ik muzikale 
        ensembles dirigeren, gaf ik workshops op het <b>primair en secundair onderwijs</b> en gaf ik in allerlei vakken bijles aan jongeren en volwassenen.
      </p>
      <p className="mt-6 text-md leading-8 text-gray-300">
        Na het behalen van mijn <b>Bachelor of Arts</b> <i>(University College Roosevelt, 2013-2016, Cum Laude)</i> ben ik met veel plezier aan de slag gegaan als <b>Docent</b> en <b>Web Developer</b> verschillende bedrijven.
      </p>
      <p className="mt-6 text-md leading-8 text-gray-300">
        In 2023 ben ik begonnen met de opleiding <b>Docent Muziek op Maat</b> <i>(Artez, Zwolle)</i> en ondertussen ben ik werkzaam als docent bij <b>Kunsteducatie Culemborg</b> en bij de <b>Godelindeschool</b> in Hilversum.
      </p>
      <p className="mt-6 text-md leading-8 text-gray-300">
        Daarnaast ben ik <b>muzikaal leider</b> en <b>dirigent</b> van de zang-community <b>Ilico</b>, waarmee we korte concertjes organiseren op bijzondere locaties.
      </p>
      <p className="mt-6 text-md leading-8 text-gray-300">
        Ik help kinderen, jongeren en volwassenen graag om het <b>beste uit zichzelf te halen</b>. En eigenlijk geldt hetzelfde voor de groepen die ik dirigeer. Samen leggen we de lat nog net wat hoger, zo komen we nog verder dan we dachten dat we konden!
      </p>
    </div>
  </div>
}
