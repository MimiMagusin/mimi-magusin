import type { MetadataRoute } from "next";
import { courses } from "@/app/courses/courses";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/courses",
  "/choir-academy",
  "/proefles",
  "/scholen",
  "/choir-academy/proeflessen-koningsdag",
  "/muziekles-culemborg",
  "/muziekles-kinderen-culemborg",
  "/amv-culemborg",
  "/algemene-muzikale-vorming-culemborg",
  "/muziekles-kleuters-culemborg",
  "/muziekles-jongeren-culemborg",
  "/kinderkoor-culemborg",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const courseRoutes = courses.map((course) => ({
    url: absoluteUrl(course.href),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes.map((path, index) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: index === 0 ? ("weekly" as const) : ("monthly" as const),
      priority: index === 0 ? 1 : 0.7,
    })),
    ...courseRoutes,
  ];
}
