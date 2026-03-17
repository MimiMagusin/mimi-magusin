"use client";

import { useEffect, useState } from "react";
import { courses } from "@/app/courses/courses";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Card from "./card";

const baseSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  swipeToSlide: true,
};

const zomerzangdagenInfo = courses.filter((c) => c.id === "zomerzangdagen")[0];

const speelklasInfo = courses.filter(
  (c) => c.id === "choir-academy-speelklas"
)[0];

const levelOneInfo = courses.filter(
  (c) => c.id === "choir-academy-level-1-woensdag"
)[0];

const levelTwoInfo = courses.filter((c) => c.id === "choir-academy-level-2")[0];

const levelThreeInfo = courses.filter(
  (c) => c.id === "choir-academy-level-3"
)[0];

export default function ChoirCarousel() {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
        return;
      }

      if (window.innerWidth >= 640) {
        setSlidesToShow(2);
        return;
      }

      setSlidesToShow(1);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl py-6 sm:py-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-center text-3xl font-bold text-indigo-950 sm:mb-6"
      >
        Onze Koren
      </motion.h2>

      <div className="mx-auto w-full px-2 pb-8 sm:px-6 sm:pb-10">
        <Slider
          {...baseSettings}
          slidesToShow={slidesToShow}
          arrows={slidesToShow > 1}
        >
          <div className="h-full px-2 py-2 sm:px-3">
            <Card
              {...zomerzangdagenInfo}
              signUpLink="https://forms.gle/ujGWSyBH1zWhLoir7"
            />
          </div>

          <div className="h-full px-2 py-2 sm:px-3">
            <Card {...speelklasInfo} />
          </div>

          <div className="h-full px-2 py-2 sm:px-3">
            <Card
              {...levelOneInfo}
              name="Startkoor"
              dayAndTime="woensdag of vrijdag, 15:30-16:25"
            />
          </div>

          <div className="h-full px-2 py-2 sm:px-3">
            <Card {...levelTwoInfo} />
          </div>

          <div className="h-full px-2 py-2 sm:px-3">
            <Card {...levelThreeInfo} />
          </div>
        </Slider>
      </div>
    </div>
  );
}
