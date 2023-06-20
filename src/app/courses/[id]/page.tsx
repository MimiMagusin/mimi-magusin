import { ArrowLeftIcon, ArrowRightIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/24/outline";
import { Course, courses } from "../courses";
import { SignUpComponent } from "@/components/signup";

export default function CoursePage({ params }: { params: { id: string}}) {
  const course: Course = courses.filter(course => course.id === params.id)[0]

  if(!course) return <p>Oeps er ging iets mis!</p>

  return (
  <>
    <a href="/courses" className="absolute top-4 left-8 flex gap-1 font-semibold underline hover:bold z-10"><ArrowLeftIcon width={16} />Terug naar overzicht</a>
    <div className="relative isolate bg-white px-6 max-w-6xl py-24 sm:py-32 lg:px-16 rounded-3xl my-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-12 lg:items-start lg:gap-y-4">
        <div className="lg:col-span-8 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-16">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">{course.targetAudience}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{course.name}</h1>
              <p className="mt-6 text-lg leading-8 text-gray-700">{course.introduction}</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl">
          <div>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Wat ga je leren?</h2>
              <ul role="list" className="mt-8 pl-8 space-y-4 text-gray-600">
                {course.learningGoals?.map((goal, index) => (
                  <li className="flex gap-x-3" key={`learningGoal-${index}`}>
                    <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
            { course.signUp? <SignUpComponent course={course} /> : 
                <>
                  <p className="pt-16  text-gray-700">Helaas kan je je voor deze cursus niet (meer) aanmelden.</p>
                  <p className="text-gray-700"> Toch interesse? Stuur een mailtje naar <a href="mailto:info@mimimagusin.com" className="font-semibold italic">info@mimimagusin.com</a>.</p>
                </>
            }
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-7 lg:row-span-2 lg:row-start-1">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={course.imageSrc}
            alt={course.imageAlt}
          />
        </div>
      </div>
    </div>
    </>
  );
}

export async function generateStaticParams() {
 
  return courses.map((course) => ({
    id: course.id,
  }))
}