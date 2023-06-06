'use client';
import React, { Fragment, useState } from "react"
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

type Section = {
  title: string;
  id: string;
}

type HeaderProps = {
  sections: Section[];
}

export const Header: React.FC<HeaderProps> = ({sections}) => {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="flex items-center justify-end p-6 lg:px-8 position fixed w-full z-10" aria-label="Global">
      <nav>
         <div className="flex">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
           <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
           {sections.map(section => (
              <div  key={section.id} className="lg:flex lg:flex-1 lg:justify-end">
                <a
                  href={`#${section.id}`}
                  className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                  {section.title}
                </a>
              </div>
            ))}
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}