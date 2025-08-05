"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { blueButton, yellowButton } from "./styling-strings";
import { choirAcademyRoute, coursesId } from "@/app/navigation-vars";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/choir-academy-startklas.jpg",
    alt: "Concert Buitengewoon Zingen",
  },
  {
    id: 2,
    image: "groepsfoto.jpg",
    alt: "Groepsfoto",
  },
  {
    id: 3,
    image: "kec-winterconcert-twee.jpeg",
    alt: "Kec Winterconcert",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-[#FFE607] -mt-8">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Donkerblauwe overlay voor leesbaarheid */}
        <div className="absolute inset-0 bg-radial from-indigo-950 to-indigo-950/40 z-10 mix-blend-multiply" />
        ;
        <div className="relative z-10 px-8 flex flex-col items-center justify-center h-full w-full text-center">
          <div className="max-width-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Zing. <span className="text-yellow-400">Speel.</span> Groei.
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              Muziekonderijs voor kinderen, jongeren en volwassenen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`${choirAcademyRoute}`} className="m-auto">
                <Button className={blueButton}>Choir Academy</Button>
              </Link>
              <Link href="/courses/zomerzangdagen" className="m-auto">
                <Button className={yellowButton}>Zomerzangdagen</Button>
              </Link>

              <Link href={`#${coursesId}`} className="m-auto">
                <Button className="text-white/90 hover:text-gray-300 underline underline-offset-4 py-3 px-6">
                  Bekijk al het aanbod →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
