import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import CourseDetailPage from "@/app/courses/[id]/page";

let mockedId = "choir-academy-zangmakers";

vi.mock("next/navigation", () => ({
  useParams: () => ({ id: mockedId }),
  useRouter: () => ({ back: vi.fn() }),
}));

describe("Course detail page", () => {
  beforeEach(() => {
    mockedId = "choir-academy-zangmakers";
  });

  it("renders details for a selected course", async () => {
    render(<CourseDetailPage />);

    expect(await screen.findByText("Zangmakers")).toBeInTheDocument();
    expect(screen.getAllByText("€225 per schooljaar").length).toBeGreaterThan(0);
    expect(screen.getByText("Praktische informatie")).toBeInTheDocument();
    expect(screen.getByText("Je kiest één lesmoment:")).toBeInTheDocument();
    expect(screen.getByText("Woensdaggroep")).toBeInTheDocument();
    expect(screen.getByText("Vrijdaggroep")).toBeInTheDocument();
    expect(screen.getByText("Woensdag, 15:30-16:25")).toBeInTheDocument();
    expect(screen.getByText("Vrijdag, 15:30-16:25")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Terug naar overzicht/ }),
    ).toBeInTheDocument();
  });

  it("keeps old choir academy slugs working via aliases", async () => {
    mockedId = "choir-academy-level-2";

    render(<CourseDetailPage />);

    expect(await screen.findByText("Zangcrew")).toBeInTheDocument();
  });
});
