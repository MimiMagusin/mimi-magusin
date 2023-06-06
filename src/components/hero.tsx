import { CodeBracketIcon, HeartIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import React, { ReactElement } from 'react'

type HeroProps = {
  title: string;
  subtitle: string;
  ActionComponent: React.FC;
}

export const Hero: React.FC<HeroProps> = ({title, subtitle, ActionComponent}) => (
  <div className="mx-auto max-w-2xl h-screen flex flex-col justify-center pt-24">
    <div className="flex py-8 justify-center">
      <MusicalNoteIcon className="w-16 text-gray-900"/>
      <HeartIcon className="w-20 text-gray-900"/>
      <CodeBracketIcon className="w-16 text-gray-900"/>
    </div>
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        {title}
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        {subtitle}
      </p>
      <ActionComponent />
    </div>
  </div>
)


