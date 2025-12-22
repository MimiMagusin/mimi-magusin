import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import CourseDetailPage from "@/app/courses/[id]/page";

vi.mock("next/navigation", () => ({
  useParams: () => ({ id: "zomerzangdagen" }),
  useRouter: () => ({ back: vi.fn() }),
}));

describe("Course detail page", () => {
  it("renders details for a selected course", async () => {
    render(<CourseDetailPage />);

    expect(
      await screen.findByText("Zomerzangdagen")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Gratis, vrijwillige bijdrage")
    ).toBeInTheDocument();
    expect(screen.getByText("Praktische informatie")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Terug naar overzicht/ })
    ).toBeInTheDocument();
  });
});
