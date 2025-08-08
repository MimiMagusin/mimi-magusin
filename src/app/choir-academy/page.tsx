"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Hero, Slide } from "@/components/hero";

import { courses } from "../courses/courses";
import Card from "@/components/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MapPinIcon } from "@heroicons/react/24/outline";
import {
  CalendarDaysIcon,
  MusicalNoteIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import LearningGoalsSection from "@/components/choir-academy-learning-goals";
import { yellowButton } from "@/components/styling-strings";
import { Input, Textarea } from "@headlessui/react";
import ChoirCarousel from "@/components/choir-carousel";

interface Program {
  title: string;
  ageRange: string;
  day: string;
  time: string;
  price: string;
  description: string;
}

export default function ChoirAcademy() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("success");
  };

  const slides: Slide[] = [
    {
      id: 1,
      image: "25kca-bb-2.jpeg",
      alt: "Concert Bolderburen",
    },
    {
      id: 2,
      image: "25kk-bb-1.jpeg",
      alt: "Tienerkoor zingt Matilda bij de Bolderburen",
    },
    {
      id: 3,
      image: "kca-appelboom.jpg",
      alt: "Singing Games bij de Naitonale Opera",
    },
    {
      id: 4,
      image: "25kk-bb-2.jpeg",
      alt: "Tienerkoor zingt Het lied van Djamaloka bij de Bolderburen",
    },
    {
      id: 5,
      image: "kca-groepsfoto-2.jpg",
      alt: "Groepsfoto van de koren",
    },
  ];

  const heroProps = {
    firstWord: "Zing.",
    secondWord: "Straal.",
    thirdWord: "Groei.",
    subtitle:
      "De plek waar kinderen en jongeren samen zingen, groeien en plezier maken. Leer je stem kennen, zing in meerdere talen en schitteren op het podium.",
    secondCTA: {
      label: "Meld je aan voor een proefles",
      href: "#contact",
    },
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Hero slides={slides} {...heroProps} />
      </section>

      {/* PROGRAMMA */}
      <section className="p-16 bg-linear-to-t from-yellow-300/80 to-transparent mt-32">
        <ChoirCarousel />
      </section>

      <section className="max-w-6xl py-16 px-6 grid smgrid-cols-1 lg:grid-cols-2 gap-4 m-auto place-items-center">
        <div className="p-16">
          <LearningGoalsSection />
        </div>

        <div className="container mx-auto p-8 bg-indigo-800/10 rounded-lg h-fit">
          <h2 className="text-3xl font-bold mb-6">Praktische informatie</h2>
          <ul className="text-lg text-gray-800 space-y-4">
            <li className="flex items-center gap-3">
              <MapPinIcon className="h-5 w-5 text-gray-600" />
              Locatie: Open Hof of Brede School West Culemborg.
            </li>
            <li className="flex items-center gap-3">
              <CalendarDaysIcon className="h-5 w-5 text-gray-600" />
              Lesdagen: Elke woensdag en vrijdag (tijdens schoolweken).
            </li>
            <li className="flex items-center gap-3">
              <MusicalNoteIcon className="h-5 w-5 text-gray-600" />
              Optredens: Minimaal 2 per jaar
            </li>
            <li className="flex items-center gap-3">
              <PencilSquareIcon className="h-5 w-5 text-gray-600" />
              Inschrijven kan het hele jaar door. Altijd twee gratis
              proeflessen!
            </li>
          </ul>
        </div>
      </section>

      {/* OVER MIMI */}
      <section className="bg-linear-to-b from-yellow-300/80 to-transparent">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Image
              src="/mimi-magusin.jpg"
              alt="Mimi Magusin"
              width={400}
              height={400}
              className="rounded-2xl object-cover shadow-lg mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold mb-4">Over Mimi Magusin</h2>
            <p className="text-lg text-gray-700 mb-4">
              Mimi Magusin is een ervaren koordirigent en muziekdocent. Met haar
              energieke en toegankelijke stijl weet ze kinderen en jongeren te
              inspireren om het beste uit zichzelf te halen, zowel muzikaal als
              persoonlijk.
            </p>
            <p className="text-lg text-gray-700">
              Ze helpt haar leerlingen hun talenten te ontdekken en ontwikkelen,
              met veel aandacht voor zelfstandigheid, samenwerking en
              muzikaliteit.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
