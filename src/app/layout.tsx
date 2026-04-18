// app/layout.tsx (SERVER component)
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ProviderWrapper } from "@/components/provider-wrapper";
import { StructuredData } from "@/components/structured-data";
import {
  absoluteUrl,
  siteName,
  siteUrl,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Mimi Magusin verzorgt muziekles, zanglessen en koorlessen in Culemborg voor kinderen, jongeren en scholen.",
  applicationName: siteName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName,
    url: absoluteUrl("/"),
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MusicSchool",
  name: siteName,
  url: siteUrl,
  image: absoluteUrl("/mimi-magusin.jpg"),
  email: "info@mimimagusin.com",
  areaServed: [
    {
      "@type": "City",
      name: "Culemborg",
    },
    {
      "@type": "AdministrativeArea",
      name: "Rivierenland",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Culemborg",
    addressRegion: "Gelderland",
    addressCountry: "NL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <StructuredData data={organizationSchema} />
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
