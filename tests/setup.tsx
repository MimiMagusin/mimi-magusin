import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

if (!("matchMedia" in window)) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  });
}

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (!("ResizeObserver" in window)) {
  // @ts-expect-error - mock ResizeObserver for jsdom
  window.ResizeObserver = ResizeObserverMock;
}

vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt, ...rest } = props;
    const resolvedSrc = typeof src === "string" ? src : "";
    return <img src={resolvedSrc} alt={alt} {...rest} />;
  },
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

vi.mock("next/font/google", () => ({
  Inter: () => ({ className: "inter" }),
}));

vi.mock("framer-motion", () => {
  const motionProxy = new Proxy(
    {},
    {
      get: (_, tag: string) =>
        React.forwardRef(({ children, ...props }: any, ref) =>
          React.createElement(tag, { ref, ...props }, children)
        ),
    }
  );

  return { motion: motionProxy };
});

vi.mock("@heroui/button", () => ({
  Button: ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button {...props}>{children}</button>
  ),
}));

vi.mock("@heroui/divider", () => ({
  Divider: (props: React.HTMLAttributes<HTMLDivElement>) => (
    <div role="separator" {...props} />
  ),
}));

vi.mock("react-slick", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-slick">{children}</div>
  ),
}));

vi.mock("slick-carousel/slick/slick.css", () => ({}));
vi.mock("slick-carousel/slick/slick-theme.css", () => ({}));
