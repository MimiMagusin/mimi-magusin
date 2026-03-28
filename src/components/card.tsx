"use client";
import React from "react";
import { Course } from "../app/courses/courses";
import { blueButton, yellowButton } from "./styling-strings";
import { motion } from "framer-motion";
import { trialLessonRoute } from "@/app/navigation-vars";

const CourseCard: React.FC<Course> = ({
  name,
  targetAudience,
  price,
  pricing,
  shortIntro,
  signUp,
  href,
}) => {
  const primaryPrice = pricing?.summary.primary ?? price;
  const secondaryPrice = pricing?.summary.secondary;

  return (
    <div className="w-full h-full bg-white shadow-md rounded-xl p-6 flex flex-col justify-between gap-4 hover:shadow-lg transition">
      <div>
        <h3 className="text-2xl font-bold text-indigo-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-1">{targetAudience}</p>

        <div className="mt-2">
          <p className="text-lg font-bold text-yellow-500">{primaryPrice}</p>
          {secondaryPrice && (
            <p className="text-sm font-medium text-yellow-700">
              {secondaryPrice}
            </p>
          )}
        </div>

        <p className="text-gray-700 mt-4">{shortIntro}</p>
      </div>

      <div className="flex gap-4 mt-6 flex-wrap justify-center xl:flex-nowrap">
        {signUp && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={trialLessonRoute}
            className={yellowButton}
          >
            Plan een proefles
          </motion.a>
        )}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={href}
          className={blueButton}
        >
          Meer info
        </motion.a>
      </div>
    </div>
  );
};

export default CourseCard;
