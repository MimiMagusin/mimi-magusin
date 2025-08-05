// app/layout.tsx (SERVER component)
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ProviderWrapper } from "@/components/provider-wrapper";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mimi Magusin",
  description:
    "Mimi Magusin, Zingen en Muziekles in Culemborg, Utrecht en omgeving",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
