import { render, screen } from "@testing-library/react";
import ProeflesPage from "@/app/proefles/page";

describe("Proefles page", () => {
  it("renders the shared trial lesson form page", () => {
    render(<ProeflesPage />);

    expect(
      screen.getByRole("heading", {
        name: "Plan een proefles",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByTitle("Plan een proefles!")
    ).toBeInTheDocument();
    expect(screen.getByText("Goed om te weten")).toBeInTheDocument();
  });
});
