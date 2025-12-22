import { render } from "@testing-library/react";
import CourseMaterialPage from "@/app/3512f1dd-1c19-4855-965a-5b4ecf658f0e/page";

describe("Course material page", () => {
  it("renders the embedded presentation", () => {
    const { container } = render(<CourseMaterialPage />);

    const iframe = container.querySelector("iframe");
    expect(iframe).toBeTruthy();
    expect(iframe?.getAttribute("src")).toContain("docs.google.com");
  });
});
