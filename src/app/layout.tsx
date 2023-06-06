import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mimi Magusin',
  description: 'Mimi Magusin, Muziek en Onderwijs. Meer informatie over mij en mijn muzieklessen in de omgeving van Utrecht.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
