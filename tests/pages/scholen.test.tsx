import { render, screen } from "@testing-library/react";
import SchoolsPage, { metadata } from "@/app/scholen/page";

describe("Scholen page", () => {
  it("renders the key sections and premium offering", () => {
    render(<SchoolsPage />);

    expect(
      screen.getByRole("heading", { name: "Muziek op School" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Korte projecten op school" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Muziek in de Klas" }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("€250 per dagdeel")).toHaveLength(1);
    expect(
      screen.getByRole("heading", { name: "Veelgestelde vragen" }),
    ).toBeInTheDocument();
  }, 15000);

  it("exports Dutch metadata for SEO", () => {
    expect(metadata.title).toBe("Muziekonderwijs voor basisscholen");
    expect(metadata.description).toContain("Binnenschools muziekonderwijs");
  });
});
