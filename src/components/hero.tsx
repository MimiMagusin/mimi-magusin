"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { blueButton, yellowButton } from "./styling-strings";
import { motion } from "framer-motion";

export type CTA = {
  label: string;
  href: string;
};

export type Slide = {
  id: number;
  image: string;
  alt: string;
};

type HeroProps = {
  slides: Slide[];
  firstWord: string;
  secondWord: string;
  thirdWord: string;
  subtitle: string;
  firstCTA?: CTA;
  secondCTA?: CTA;
  thirdCTA?: CTA;
};

export function Hero({
  slides,
  firstWord,
  secondWord,
  thirdWord,
  subtitle,
  firstCTA,
  secondCTA,
  thirdCTA,
}: HeroProps): React.JSX.Element {
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
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
            >
              {firstWord} <span className="text-yellow-400">{secondWord}</span>{" "}
              {thirdWord}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {firstCTA && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={firstCTA.href}
                  className="m-auto"
                >
                  <Button className={blueButton}>{firstCTA.label}</Button>
                </motion.a>
              )}
              {secondCTA && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={secondCTA.href}
                  className="m-auto"
                >
                  <Button className={yellowButton}>{secondCTA.label}</Button>
                </motion.a>
              )}

              {thirdCTA && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={thirdCTA.href}
                  className="m-auto"
                >
                  <Button className="text-white/90 hover:text-gray-300 underline underline-offset-4 py-3 px-6">
                    {thirdCTA.label}
                  </Button>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
