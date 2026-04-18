import { render, screen } from "@testing-library/react";
import LandingPage, {
  generateMetadata,
  generateStaticParams,
} from "@/app/(seo)/[landing]/page";
import { siteUrl } from "@/lib/seo";

describe("Intent landing pages", () => {
  it("exports all configured landing slugs as static params", async () => {
    const params = await generateStaticParams();
    const slugs = params.map((entry) => entry.landing);

    expect(slugs).toContain("muziekles-culemborg");
    expect(slugs).toContain("muziekles-kinderen-culemborg");
    expect(slugs).toContain("amv-culemborg");
    expect(slugs).toContain("algemene-muzikale-vorming-culemborg");
    expect(slugs).toContain("muziekles-kleuters-culemborg");
    expect(slugs).toContain("muziekles-jongeren-culemborg");
    expect(slugs).toContain("kinderkoor-culemborg");
    expect(slugs).toHaveLength(7);
  });

  it("generates metadata for a configured landing page", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ landing: "muziekles-culemborg" }),
    });

    expect(metadata.title).toBe("Muziekles Culemborg");
    expect(metadata.alternates?.canonical).toBe(`${siteUrl}/muziekles-culemborg`);
    expect(metadata.description).toContain("Muziekles in Culemborg");
  });

  it("renders page content and core CTAs", async () => {
    render(
      await LandingPage({
        params: Promise.resolve({ landing: "kinderkoor-culemborg" }),
      }),
    );

    expect(
      screen.getByRole("heading", { name: "Kinderkoor in Culemborg" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Plan een proefles" }),
    ).toHaveAttribute("href", "/proefles");
    expect(
      screen.getByRole("heading", { name: "Veelgestelde vragen" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Zangmakers")).toBeInTheDocument();
  });
});
