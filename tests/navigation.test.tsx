import type { ReactNode } from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { schoolsRoute, sections } from "@/app/navigation-vars";

vi.mock("@headlessui/react", () => ({
  Dialog: Object.assign(
    ({
      open,
      children,
    }: {
      open: boolean;
      children: ReactNode;
    }) => (open ? <div role="dialog">{children}</div> : null),
    {
      Panel: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    },
  ),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Shared navigation", () => {
  it("includes the scholen page in the shared sections config", () => {
    expect(sections).toEqual(
      expect.arrayContaining([{ title: "Scholen", id: schoolsRoute }]),
    );
  });

  it("renders the scholen link in the nav menu and footer", () => {
    render(
      <>
        <Header sections={sections} />
        <Footer sections={sections} />
      </>,
    );

    expect(screen.getAllByRole("link", { name: "Scholen" })).toHaveLength(1);

    fireEvent.click(screen.getByRole("button", { name: "Open main menu" }));

    expect(screen.getAllByRole("link", { name: "Scholen" })).toHaveLength(2);

    expect(
      screen.getAllByRole("link", { name: "Scholen" })[0],
    ).toHaveAttribute("href", schoolsRoute);

    const footerHeading = screen.getByRole("heading", { name: "Navigatie" });
    const footerNav = footerHeading.parentElement;
    expect(footerNav).not.toBeNull();

    if (!footerNav) {
      throw new Error("Expected footer navigation section to render");
    }

    expect(
      within(footerNav).getByRole("link", { name: "Scholen" }),
    ).toHaveAttribute("href", schoolsRoute);
  });
});
