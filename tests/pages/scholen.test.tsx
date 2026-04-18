import { render, screen } from "@testing-library/react";
import SchoolsPage, { metadata } from "@/app/scholen/page";

describe("Scholen page", () => {
  it("renders the key sections and premium offering", () => {
    render(<SchoolsPage />);

    expect(
      screen.getByRole("heading", { name: "Muziekonderwijs dat wel werkt op school" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Voor scholen die muziek betekenisvol willen inzetten"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Muziek in de Klas" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Wat levert het op?" }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("€250 per dagdeel")).toHaveLength(2);
    expect(
      screen.getByRole("heading", { name: "Veelgestelde vragen" }),
    ).toBeInTheDocument();
  }, 15000);

  it("exports Dutch metadata for SEO", () => {
    expect(metadata.title).toBe("Muziekonderwijs voor basisscholen");
    expect(metadata.description).toContain("Binnenschools muziekonderwijs");
  });
});
