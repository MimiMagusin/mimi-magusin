import { Course, getCourseSessions } from "@/app/courses/courses";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const SignUpComponent: React.FC<{ course: Course }> = ({ course }) => {
  const primaryPrice = course.pricing?.summary.primary ?? course.price;
  const secondaryPrice = course.pricing?.summary.secondary;
  const sessions = getCourseSessions(course);

  return (
    <>
      <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Waar en wanneer?
        </h2>
        <ul role="list" className="mt-8 pl-8 space-y-2 text-gray-600">
          <li className="flex gap-x-3">
            <b className="w-24">Frequentie:</b> 1 repetitie per week, kies één
            lesmoment
          </li>
          {sessions.map((session) => {
            return (
              <li key={session.id} className="space-y-1">
                <div className="flex gap-x-3">
                  <b className="w-24">Groep:</b>{" "}
                  {session.label ? `${session.label}groep` : session.dayAndTime}
                </div>
                <div className="flex gap-x-3">
                  <b className="w-24">Tijd:</b> {session.dayAndTime}
                </div>
                <div className="flex gap-x-3">
                  <b className="w-24">Locatie:</b> {session.location}
                </div>
              </li>
            );
          })}
          <li className="flex gap-x-3">
            <b className="w-24">Prijs:</b>
            <span>
              {primaryPrice}
              {secondaryPrice ? ` ${secondaryPrice}` : ""}
            </span>
          </li>
        </ul>
        <p className="mt-16">
          Het zou zonde zijn als geld een belemmering is je muzikaliteit te
          ontwikkelen. Is geld een probleem? Stuur even een mail!
        </p>
      </div>
      <div className="lg:col-span-8 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl pt-8 flex">
        <p>
          <span>
            <ArrowRightIcon
              className="my-1 mr-1 h-5 w-5 flex-none text-indigo-600 inline"
              aria-hidden="true"
            />
          </span>
          <span>Aanmelden? Stuur een mail naar</span>
          <Link
            href="mailto:info@mimimagusin.com"
            className="font-semibold italic px-1"
          >
            info@mimimagusin.com
          </Link>
          <span>voor meer informatie</span>{" "}
          {(course.signUpLink || sessions[0]?.signUpLink) && (
            <span>
              of ga direct naar{" "}
              <Link
                href={course.signUpLink ?? sessions[0].signUpLink!}
                className="font-semibold leading-6 text-indigo-600 underline"
              >
                aanmelden
              </Link>
              .
            </span>
          )}
        </p>
      </div>
    </>
  );
};
