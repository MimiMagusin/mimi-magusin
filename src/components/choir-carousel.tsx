"use client";

import { useEffect, useState } from "react";
import { choirAcademyOverviewCourses } from "@/app/courses/courses";
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
        Onze koorlijn
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-8 max-w-3xl text-center text-base leading-7 text-indigo-950/85 sm:text-lg"
      >
        Binnen de KEC Choir Academy groeien kinderen van ontdekken naar
        verdiepen. Elke groep heeft een eigen plek, met optredens die passen bij
        de leeftijd en het niveau.
      </motion.p>

      <div className="mx-auto w-full px-2 pb-8 sm:px-6 sm:pb-10">
        <Slider
          {...baseSettings}
          slidesToShow={slidesToShow}
          arrows={slidesToShow > 1}
        >
          {choirAcademyOverviewCourses.map((course) => (
            <div key={course.id} className="h-full px-2 py-2 sm:px-3">
              <Card {...course} shortIntro={course.shortIntro} />{" "}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
