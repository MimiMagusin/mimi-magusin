import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-indigo-950 sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-lg leading-8 text-slate-700">{intro}</p> : null}
    </div>
  );
}

export function BulletList({
  items,
  textClassName,
  iconClassName,
}: {
  items: string[];
  textClassName?: string;
  iconClassName?: string;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-3 ${textClassName ?? "text-slate-700"}`}>
          <CheckBadgeIcon
            className={`mt-0.5 h-5 w-5 shrink-0 ${iconClassName ?? "text-indigo-700"}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
