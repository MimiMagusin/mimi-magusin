"use client";

import { courses } from "@/app/courses/courses";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Card from "./card";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
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

interface ChoirCarouselProps {
  settings: any; // of typ de slider settings specifieker
}

export default function ChoirCarousel() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6 text-indigo-950 text-center"
      >
        Onze Koren
      </motion.h2>

      <div className="w-[90vw] mx-auto px-6 py-12">
        <Slider {...settings}>
          <div className="px-4 xl:h-[20rem]">
            <Card
              {...zomerzangdagenInfo}
              signUpLink="https://forms.gle/ujGWSyBH1zWhLoir7"
            />
          </div>

          <div className="px-4 xl:h-[20rem]">
            <Card
              {...speelklasInfo}
              price="Vanaf €6,- per les"
              signUpLink="https://forms.gle/ujGWSyBH1zWhLoir7"
            />
          </div>

          <div className="px-4 xl:h-[20rem]">
            <Card
              {...levelOneInfo}
              name="Startkoor"
              price="Vanaf €6,- per les"
              dayAndTime="woensdag of vrijdag, 15:30-16:25"
              signUpLink="https://forms.gle/ujGWSyBH1zWhLoir7"
            />
          </div>

          <div className="px-4 xl:h-[20rem]">
            <Card
              {...levelTwoInfo}
              price="Vanaf €6,- per les"
              signUpLink="https://forms.gle/ujGWSyBH1zWhLoir7"
            />
          </div>

          <div className="px-4 xl:h-[20rem]">
            <Card {...levelThreeInfo} price="Vanaf €6,- per les" />
          </div>
        </Slider>
      </div>
    </>
  );
}
