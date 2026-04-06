import { render, screen } from "@testing-library/react";
import ChoirAcademy from "@/app/choir-academy/page";

describe("Choir Academy page", () => {
  it("renders core sections and headings", () => {
    render(<ChoirAcademy />);

    expect(screen.getByText("Praktische informatie")).toBeInTheDocument();
    expect(screen.getByText("Lesrooster")).toBeInTheDocument();
    expect(screen.getByText("Over Mimi Magusin")).toBeInTheDocument();
    expect(screen.getByText("Onze koorlijn")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Choir Academy/i })).toBeInTheDocument();
    expect(screen.getByText("Vier koren, één lijn")).toBeInTheDocument();
  });
});
