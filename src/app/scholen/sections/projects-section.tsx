import Image from "next/image";
import { projectsId, shortProjects } from "@/app/scholen/content";
import { SectionHeading } from "@/app/scholen/shared";

export function ProjectsSection() {
  return (
    <section id={projectsId} className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Schooljaar 2026-2027"
          title="Korte projecten op school"
          intro="Vier themagerichte projecten, gekoppeld aan het jaar. Via Doe mee in Culemborg in principe volledig gesubsidieerd."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shortProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-indigo-100 bg-white shadow-sm transition hover:border-indigo-300 hover:shadow-md"
            >
            <article>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute right-3 top-3">
                  <span className="inline-flex rounded-full bg-yellow-300 px-3 py-1 text-xs font-bold text-indigo-950">
                    {project.when}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                  {project.targetGroup}
                </p>
                <h3 className="mt-2 text-xl font-bold text-indigo-950 group-hover:text-indigo-700 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>
                <p className="mt-4 text-xs font-semibold text-indigo-700">
                  {project.lessonsLabel}
                </p>
              </div>
            </article>
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Beperkt aantal plekken. Les op woensdag en/of donderdag, data in overleg.
        </p>
      </div>
    </section>
  );
}
