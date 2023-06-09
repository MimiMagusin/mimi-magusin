import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mimi Magusin',
  description: 'Mimi Magusin, Muziek en Onderwijs. Meer informatie over mij en mijn muzieklessen in de omgeving van Utrecht.',
}
export const coursesId = "courses"
export const aboutMeId = "about-me"
export const sections = [{ title: "Home", id: "/" }, { title: "Cursussen", id: '/courses' }, { title: "Over mij", id: `/#${aboutMeId}`}];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <Header sections={sections}/>
        <main className="flex min-h-screen flex-col items-center justify-between pt-8 w-full">
          {children}
        </main>
        <Footer sections={sections}/>
      </body>
    </html>
  )
}
