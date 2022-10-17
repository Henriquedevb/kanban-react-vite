import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SideBar from "./";

describe("SideBar component", () => {
  it("Render correctly component", () => {
    const sideBar = render(<SideBar />);

    expect(sideBar.findAllByTestId("title-sidebar")).toBeDefined();
    expect(sideBar.findAllByTestId("boards-button")).toBeDefined();
    expect(sideBar.findAllByTestId("dark-mode-theme")).toBeDefined();
    expect(sideBar.findByText("Hide Sidebar")).toBeDefined();
  });
});
