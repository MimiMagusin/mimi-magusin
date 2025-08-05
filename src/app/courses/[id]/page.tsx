"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import { Course, courses } from "../courses";
import { blueButton, yellowButton } from "@/components/styling-strings";
import { Divider } from "@heroui/divider";
import { MusicalNoteIcon } from "@heroicons/react/24/solid";
export default function CourseDetailPage() {
  const params = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course>();
  const router = useRouter();

  useEffect(() => {
    const selectedCourse = courses.find((c) => c.id === params.id);
    setCourse(selectedCourse);
  }, [params.id]);

  if (!course) return <p>Oeps er ging iets mis!</p>;

  return (
    <>
      <div className="relative w-screen -ml-[50vw] -mr-[50vw] -mt-8">
        <img
          src={course.imageSrc}
          alt={course.imageAlt}
          className="w-full h-72 md:h-96 object-cover"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Titel + prijs + knop */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-indigo-900">
              {course.name}
            </h1>
            <p className="text-primary text-lg font-semibold">{course.price}</p>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            {course.signUp && (
              <Button size="lg" className={`${yellowButton}`}>
                Aanmelden
              </Button>
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
              <h2 className="text-2xl font-semibold mb-3 text-indigo-900">
                Wat ga je leren?
              </h2>
              <ul className="space-y-2">
                {course.learningGoals.map((goal, index) => (
                  <li key={index} className="flex items-center gap-2 ml-4">
                    <MusicalNoteIcon
                      height="16px"
                      className="text-indigo-800"
                    />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Praktische informatie */}
          <div className="basis-lg">
            <div className="bg-yellow-200 p-4 rounded-lg">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Praktische informatie
                </h3>
                <p>
                  <strong>Leeftijd:</strong> {course.targetAudience}
                </p>
                <p>
                  <strong>Locatie:</strong> {course.location}
                </p>
                <p>
                  <strong>Dag & tijd:</strong> {course.dayAndTime}
                </p>
                <p>
                  <strong>Thema’s:</strong> {course.themes.join(", ")}
                </p>
              </div>
            </div>
            {course.signUp && (
              <Button className={`${blueButton} mt-6`}>Aanmelden</Button>
            )}
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
