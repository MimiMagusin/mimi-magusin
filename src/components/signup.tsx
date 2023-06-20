import { Course } from "@/app/courses/courses";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import nl from "dayjs/locale/nl"



export const SignUpComponent: React.FC<{course: Course }> = ({course}) => {
  const formatDate = (date: Date, index: number) => {
    const maxIndex = course.startDate? course.startDate.length - 1 : 0
    const formattedDate = dayjs(date).locale(nl).format('dddd DD MMMM YYYY')

    return index === maxIndex? formattedDate : `${formattedDate}, `
  }

  return (
    <>
    <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Waar en wanneer?</h2>
    <ul role="list" className="mt-8 pl-8 space-y-2 text-gray-600">
      <li className="flex gap-x-3"><b>Cursusdag:</b> {course.dayAndTime}</li>
      {
        course.startDate && course.startDate.length > 0 && 
        <li className="flex gap-x-3">
          <b>Startdatum:</b> 
          {
            course.startDate?.map(formatDate) || ""
          }
        </li>
      }
      <li className="flex gap-x-3"><b>Locatie:</b> {course.location}</li>
      <li className="flex gap-x-3"><b>Prijs:</b> {course.location}</li>
    </ul>
    </div>
    <div className="lg:col-span-8 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl pt-8 flex">
    <p className="flex gap-2">
      <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
      <span>
        <a
          type="button"
          className="text-lg font-semibold text-indigo-600 underline underline-offset-4 hover:text-indigo-900 focus:text-bold"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfI2r3zmHQcRfWNOocy949ZAfHW87E-Ozx6pnm3C-Z4MuilUw/viewform?usp=sf_link"
        >
          Meld je aan
        </a>
      </span>
      <span>of stuur een mail naar</span>
      <a href="mailto:info@mimimagusin.com" className="font-semibold italic">info@mimimagusin.com</a>
      <span>voor meer informatie</span>
    </p>
    </div>
    </>
  )
}