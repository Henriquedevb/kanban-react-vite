import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./Home";

describe("Home page", () => {
  it("Render correctly home page", () => {
    const home = render(<Home />);

    expect(home).toBeDefined();
    expect(home.getByTestId("side-bar-component")).toBeDefined();
    expect(home.getByTestId("navbar-component")).toBeDefined();
  });
});
