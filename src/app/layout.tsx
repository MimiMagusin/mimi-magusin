import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mimi Magusin',
  description: 'Mimi Magusin, Muziek,  Onderwijs en Code. Meer informatie over mij en mijn muzieklessen in de omgeving van Culemborg en Utrecht, voor alle leeftijden. Bekijk de cursussen algemene muzikale vorming, Choir Academy, Luisteren naar klassieke muziek of digitale vaardigheden!'
}
export const coursesId = "courses"
export const aboutMeId = "about-me"
export const sections = [{ title: "Home", id: "/" }, { title: "Cursussen", id: '/courses' }, {title: "Choir Academy", id: '/choir-academy'}, { title: "Over mij", id: `/#${aboutMeId}`}];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}> 
        <Header sections={sections}/>
        <main className="flex min-h-screen flex-col items-center justify-between pt-8 px-8 w-full overflow-hidden">
          {children}
        </main>
        <Footer sections={sections}/>
      </body>
    </html>
  )
}
