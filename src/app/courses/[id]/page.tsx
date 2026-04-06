"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import { Course, findCourseById, getCourseSessions } from "../courses";
import { yellowButton } from "@/components/styling-strings";
import { Divider } from "@heroui/divider";
import { ArrowRightIcon, MusicalNoteIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { CoursePricingDetails } from "@/components/course-pricing";
import { trialLessonRoute } from "@/app/navigation-vars";

export default function CourseDetailPage() {
  const params = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course>();
  const router = useRouter();

  useEffect(() => {
    const selectedCourse = findCourseById(params.id);
    setCourse(selectedCourse);
  }, [params.id]);

  if (!course) return <p>Oeps er ging iets mis!</p>;

  const primaryPrice = course.pricing?.summary.primary ?? course.price;
  const secondaryPrice = course.pricing?.summary.secondary;
  const sessions = getCourseSessions(course);

  return (
    <>
      <div className="relative w-screen -ml-[50vw] -mr-[50vw] h-72 md:h-96">
        <Image
          src={course.imageSrc}
          alt={course.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Titel + prijs + knop */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-indigo-900">
              {course.name}
            </h1>
            <p className="text-primary text-lg font-semibold">{primaryPrice}</p>
            {secondaryPrice && (
              <p className="text-sm font-medium text-indigo-700">
                {secondaryPrice}
              </p>
            )}
          </div>
          <div className="flex flex-col md:items-end gap-2">
            {course.signUp && (
              <motion.a whileHover={{ scale: 1.05 }} href={trialLessonRoute}>
                <Button size="lg" className={yellowButton}>
                  Plan een proefles
                </Button>
              </motion.a>
            )}
          </div>
        </div>

        <Divider className="my-12" />

        {/* Introductie */}
        <p className="text-lg leading-relaxed">{course.introduction}</p>

        <Divider className="my-12" />

        <div className="flex flex-wrap justify-between gap-8">
          {/* Leerdoelen */}
          {course.learningGoals && course.learningGoals.length > 0 && (
            <div className="basis-xs">
              {" "}
              <h2 className="text-2xl font-semibold mb-3 text-indigo-950">
                Wat ga je leren?
              </h2>
              <ul className="space-y-2">
                {course.learningGoals.map((goal, index) => (
                  <li key={index} className="flex items-center gap-2 ml-4">
                    <MusicalNoteIcon
                      height="20px"
                      className="text-indigo-950"
                    />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Praktische informatie */}
          <div className="basis-lg">
            <div className="bg-yellow-200 p-4 rounded-lg max-w-[80vw]">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Praktische informatie
                </h3>
                <p>
                  <strong>Leeftijd:</strong> {course.targetAudience}
                </p>
                <p>
                  <strong>Thema’s:</strong> {course.themes.join(", ")}
                </p>
                {sessions.length > 0 && (
                  <div className="mt-4">
                    <strong>Je kiest één lesmoment:</strong>
                    <ul className="mt-2 space-y-3">
                      {sessions.map((session) => {
                        return (
                          <li key={session.id}>
                            <div>
                              {session.label ? `${session.label}groep` : session.dayAndTime}
                            </div>
                            <div className="text-sm text-indigo-950/80">
                              {session.dayAndTime}
                            </div>
                            <div className="text-sm text-indigo-950/80">{session.location}</div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
              {course.pricing && (
                <div className="mt-6 border-t border-yellow-500/40 pt-6">
                  <CoursePricingDetails pricing={course.pricing} />
                </div>
              )}
            </div>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 place-center mt-4">
              <motion.a whileHover={{ scale: 1.05 }} href={trialLessonRoute}>
                <Button className={yellowButton}>Plan een proefles</Button>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                className="hover:text-gray-300 underline underline-offset-4 flex items-center gap-1"
                href="mailto:info@mimimagusin.com"
              >
                mail: info@mimimagusin.com
                <ArrowRightIcon height="16" />
              </motion.a>
            </div>
          </div>
        </div>
        {/* Terugknop */}
        <Button onPress={() => router.back()} className="my-12">
          ← Terug naar overzicht
        </Button>
      </div>
    </>
  );
}
