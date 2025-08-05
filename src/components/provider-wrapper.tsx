"use client";

import { HeroUIProvider } from "@heroui/system";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { sections } from "@/app/navigation-vars";

export function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <Header sections={sections} />
      <main className="light flex min-h-screen flex-col items-center justify-between pt-8 px-8 w-full overflow-hidden">
        {children}
      </main>
      <Footer sections={sections} />
      <GoogleAnalytics gaMeasurementId="G-M0EQHNR8H2" />
    </HeroUIProvider>
  );
}
