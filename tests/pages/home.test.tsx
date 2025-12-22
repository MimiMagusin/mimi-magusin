import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the hero and main sections", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /Zing\.\s*Speel\.\s*Groei\./ })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Muziekonderwijs voor kinderen, jongeren en volwassenen."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Cursussen")).toBeInTheDocument();
    expect(screen.getByText("Over mij")).toBeInTheDocument();
  });
});
