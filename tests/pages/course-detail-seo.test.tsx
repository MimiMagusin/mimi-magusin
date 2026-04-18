import { vi } from "vitest";

const { notFoundMock } = vi.hoisted(() => ({
  notFoundMock: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

vi.mock("next/navigation", () => ({
  notFound: notFoundMock,
  useRouter: () => ({ back: vi.fn() }),
}));

import CourseDetailPage, {
  generateMetadata,
  generateStaticParams,
} from "@/app/courses/[id]/page";
import { courses } from "@/app/courses/courses";
import { siteUrl } from "@/lib/seo";

describe("Course detail SEO", () => {
  beforeEach(() => {
    notFoundMock.mockClear();
  });

  it("generates metadata for a valid course slug", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ id: "choir-academy-zangmakers" }),
    });

    expect(metadata.title).toBe("Zangmakers in Culemborg");
    expect(metadata.alternates?.canonical).toBe(
      `${siteUrl}/courses/choir-academy-zangmakers`,
    );
    expect(metadata.description).toContain("muziekles in Culemborg");
    expect(metadata.description).toContain("Zangmakers");
  });

  it("generates fallback metadata for unknown slug", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ id: "unknown-course-slug" }),
    });

    expect(metadata.title).toBe("Cursus niet gevonden");
    expect(metadata.alternates?.canonical).toBe(
      `${siteUrl}/courses/unknown-course-slug`,
    );
  });

  it("exports static params for every configured course id", async () => {
    const params = await generateStaticParams();

    expect(params).toEqual(courses.map((course) => ({ id: course.id })));
  });

  it("calls notFound for unknown course page requests", async () => {
    await expect(
      CourseDetailPage({
        params: Promise.resolve({ id: "not-a-real-course" }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND");

    expect(notFoundMock).toHaveBeenCalledTimes(1);
  });
});
