import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-8 text-center">
      <p className="text-6xl font-bold text-indigo-900 mb-4">404</p>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        Pagina niet gevonden
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        De pagina die je zoekt bestaat niet of is verplaatst.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/"
          className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Terug naar home
        </Link>
        <Link
          href="/courses"
          className="rounded-md border border-indigo-600 px-5 py-2.5 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Bekijk alle cursussen
        </Link>
      </div>
    </div>
  );
}
