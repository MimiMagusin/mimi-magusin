import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { courses } from "@/app/courses/courses";
import { siteUrl } from "@/lib/seo";

describe("SEO routes", () => {
  it("exports robots config with sitemap and host", () => {
    const result = robots();

    expect(result.rules).toEqual({
      userAgent: "*",
      allow: "/",
    });
    expect(result.sitemap).toBe(`${siteUrl}/sitemap.xml`);
    expect(result.host).toBe(siteUrl);
  });

  it("includes static routes and all course routes in sitemap", () => {
    const result = sitemap();
    const urls = result.map((entry) => entry.url);

    expect(urls).toContain(`${siteUrl}/`);
    expect(urls).toContain(`${siteUrl}/courses`);
    expect(urls).toContain(`${siteUrl}/choir-academy`);
    expect(urls).toContain(`${siteUrl}/proefles`);
    expect(urls).toContain(`${siteUrl}/scholen`);
    expect(urls).toContain(`${siteUrl}/muziekles-culemborg`);
    expect(urls).toContain(`${siteUrl}/muziekles-kinderen-culemborg`);
    expect(urls).toContain(`${siteUrl}/amv-culemborg`);
    expect(urls).toContain(`${siteUrl}/algemene-muzikale-vorming-culemborg`);
    expect(urls).toContain(`${siteUrl}/muziekles-kleuters-culemborg`);
    expect(urls).toContain(`${siteUrl}/muziekles-jongeren-culemborg`);
    expect(urls).toContain(`${siteUrl}/kinderkoor-culemborg`);

    for (const course of courses) {
      expect(urls).toContain(`${siteUrl}${course.href}`);
    }

    expect(result).toHaveLength(13 + courses.length);
  });
});
