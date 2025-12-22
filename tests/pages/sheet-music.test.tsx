import { render, screen } from "@testing-library/react";
import SheetMusicOverview from "@/app/sheet-music/page";

describe("Sheet music page", () => {
  it("renders the overview heading", () => {
    render(<SheetMusicOverview />);

    expect(screen.getByText("Bladmuziek")).toBeInTheDocument();
  });
});
