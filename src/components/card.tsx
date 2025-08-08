"use client";
import React from "react";
import { Course } from "../app/courses/courses";
import { blueButton, yellowButton } from "./styling-strings";
import { motion } from "framer-motion";
import { MapPinIcon } from "@heroicons/react/24/outline";

const CourseCard: React.FC<Course> = ({
  name,
  targetAudience,
  price,
  shortIntro,
  signUp,
  signUpLink,
  href,
}) => {
  return (
    <div className="w-full h-full bg-white shadow-md rounded-xl p-6 flex flex-col justify-between gap-4 hover:shadow-lg transition">
      <div>
        <h3 className="text-2xl font-bold text-indigo-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-1">{targetAudience}</p>

        <p className="text-lg font-bold text-yellow-500 mt-2">{price}</p>

        <p className="text-gray-700 mt-4">{shortIntro}</p>
      </div>

      <div className="flex gap-4 mt-6 flex-wrap justify-center xl:flex-nowrap">
        {signUp && signUpLink && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={signUpLink}
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
