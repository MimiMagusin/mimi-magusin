import { render, screen } from "@testing-library/react";
import ProeflessenKoningsdagPage from "@/app/choir-academy/proeflessen-koningsdag/page";

describe("Proeflessen Koningsdag page", () => {
  it("renders the heading, form, and navigation links", () => {
    render(<ProeflessenKoningsdagPage />);

    expect(
      screen.getByRole("heading", {
        name: "Zing mee met ons Koningsdagconcert!",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByTitle("Zing mee op Koningsdag!"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Bekijk Choir Academy" }),
    ).toHaveAttribute("href", "/choir-academy");
    expect(
      screen.getByRole("link", { name: "Bekijk Choir Academy" }),
    ).toHaveAttribute("target", "_blank");
    expect(
      screen.getByRole("link", { name: "Naar Choir Academy" }),
    ).toHaveAttribute("href", "/choir-academy");
    expect(screen.getByText("Groep 3-5")).toBeInTheDocument();
    expect(screen.getByText("Groep 6-8")).toBeInTheDocument();
    expect(screen.getByText(/Het concert zelf is op Koningsdag/i)).toBeInTheDocument();
  });
});
