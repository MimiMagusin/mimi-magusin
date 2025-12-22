import { render, screen } from "@testing-library/react";
import Courses from "@/app/courses/page";

describe("Courses page", () => {
  it("renders the page headline and a course card", () => {
    render(<Courses />);

    expect(screen.getByText("Leer mee!")).toBeInTheDocument();
    expect(screen.getByText("Iedereen kan groeien.")).toBeInTheDocument();
    expect(screen.getByText("Zomerzangdagen")).toBeInTheDocument();
  });
});
