import { metadata as homeMetadata } from "@/app/page";
import { metadata as coursesMetadata } from "@/app/courses/page";
import { metadata as choirMetadata } from "@/app/choir-academy/page";
import { metadata as proeflesMetadata } from "@/app/proefles/page";
import { metadata as rootMetadata } from "@/app/layout";
import { siteUrl } from "@/lib/seo";

describe("Page metadata", () => {
  it("exports homepage metadata with canonical URL", () => {
    expect(homeMetadata.title).toBe("Muziekles Culemborg");
    expect(homeMetadata.alternates?.canonical).toBe(`${siteUrl}/`);
  });

  it("exports courses metadata with canonical URL", () => {
    expect(coursesMetadata.title).toBe("Cursussen Muziekles in Culemborg");
    expect(coursesMetadata.alternates?.canonical).toBe(`${siteUrl}/courses`);
  });

  it("exports choir academy metadata with canonical URL", () => {
    expect(choirMetadata.title).toBe("Kinderkoor en Jongerenkoor in Culemborg");
    expect(choirMetadata.alternates?.canonical).toBe(`${siteUrl}/choir-academy`);
  });

  it("exports proefles metadata with canonical URL", () => {
    expect(proeflesMetadata.title).toBe("Plan een proefles");
    expect(proeflesMetadata.alternates?.canonical).toBe(`${siteUrl}/proefles`);
  });

  it("exports root robots and metadata base settings", () => {
    expect(rootMetadata.robots).toEqual({
      index: true,
      follow: true,
    });
    expect(rootMetadata.metadataBase?.toString()).toBe(`${siteUrl}/`);
  });
});
