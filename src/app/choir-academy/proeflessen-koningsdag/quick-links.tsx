import Link from "next/link";

type QuickLink = {
  label: string;
  href: string;
};

export function QuickLinks({ links }: { links: QuickLink[] }) {
  return (
    <nav
      aria-label="Snelle navigatie"
      className="flex flex-wrap gap-3 rounded-full border border-indigo-200 bg-white/80 p-2 shadow-sm backdrop-blur"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-full px-5 py-2 text-sm font-semibold text-indigo-900 transition hover:bg-indigo-50"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
