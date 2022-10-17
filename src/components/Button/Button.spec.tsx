import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
  it("Render correctly component", () => {
    const mockButtonTitle = "Title fo button";
    const { findByTestId } = render(<Button buttonTitle={mockButtonTitle} />);

    screen.getByText(mockButtonTitle);
    expect(findByTestId("button-component")).toBeDefined();
  });
});
