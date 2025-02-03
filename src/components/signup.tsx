import { Course } from "@/app/courses/courses";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import nl from "dayjs/locale/nl";
import Link from "next/link";

export const SignUpComponent: React.FC<{ course: Course }> = ({ course }) => {
  const formatDate = (date: Date, index: number) => {
    const maxIndex = course.startDate ? course.startDate.length - 1 : 0;
    const formattedDate = dayjs(date).locale(nl).format("dddd DD MMMM YYYY");

    return index === maxIndex ? formattedDate : `${formattedDate}, `;
  };

  return (
    <>
      <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Waar en wanneer?
        </h2>
        <ul role="list" className="mt-8 pl-8 space-y-2 text-gray-600">
          <li className="flex gap-x-3">
            <b className="w-24">Cursusdag:</b> {course.dayAndTime}
          </li>
          {course.startDate && course.startDate.length > 0 && (
            <li className="flex gap-x-3">
              <b className="w-24">Startdatum:</b>
              {course.startDate?.map(formatDate) || ""}
            </li>
          )}
          <li className="flex gap-x-3">
            <b className="w-24">Locatie:</b> {course.location}
          </li>
          <li className="flex gap-x-3">
            <b className="w-24">Prijs:</b> {course.price}
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
          <span>voor meer informatie</span>
        </p>
      </div>
    </>
  );
};
