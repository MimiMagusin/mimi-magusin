"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-8 text-center">
      <p className="text-6xl font-bold text-indigo-900 mb-4">!</p>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        Er is iets misgegaan
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Er is een onverwachte fout opgetreden. Probeer het opnieuw.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={reset}
          className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Opnieuw proberen
        </button>
        <a
          href="/"
          className="rounded-md border border-indigo-600 px-5 py-2.5 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Terug naar home
        </a>
      </div>
    </div>
  );
}
