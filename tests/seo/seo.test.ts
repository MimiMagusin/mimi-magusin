import { absoluteUrl, buildMetadata, defaultOgImage, siteName, siteUrl } from "@/lib/seo";

describe("SEO utilities", () => {
  it("builds absolute URLs from the configured site URL", () => {
    expect(absoluteUrl("/courses")).toBe(`${siteUrl}/courses`);
    expect(absoluteUrl()).toBe(`${siteUrl}/`);
  });

  it("builds consistent metadata with canonical, og and twitter fields", () => {
    const metadata = buildMetadata({
      title: "Test title",
      description: "Test description",
      path: "/test-page",
      keywords: ["alpha", "beta"],
    });

    expect(metadata.title).toBe("Test title");
    expect(metadata.description).toBe("Test description");
    expect(metadata.keywords).toEqual(["alpha", "beta"]);
    expect(metadata.alternates?.canonical).toBe(`${siteUrl}/test-page`);
    expect(metadata.openGraph?.siteName).toBe(siteName);
    expect(metadata.openGraph?.url).toBe(`${siteUrl}/test-page`);
    expect((metadata.twitter as { card?: string } | undefined)?.card).toBe("summary_large_image");
  });

  it("uses the default OG image when none is provided", () => {
    const metadata = buildMetadata({
      title: "Default image title",
      description: "Default image description",
    });

    const ogImages = metadata.openGraph?.images;
    const twitterImages = metadata.twitter?.images;

    expect(ogImages).toEqual([{ url: `${siteUrl}${defaultOgImage}` }]);
    expect(twitterImages).toEqual([`${siteUrl}${defaultOgImage}`]);
  });
});
