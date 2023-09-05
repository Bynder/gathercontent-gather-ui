import { describe, expect, it } from "vitest";

import React from "react";

import { render, screen } from "@testing-library/react";

import Icon from "..";

describe("Icon", () => {
  it("appends the icon name to the class", () => {
    const { rerender } = render(<Icon name="comment" />);
    expect(
      screen.getByRole("figure").classList.contains("icon--comment")
    ).toBeTruthy();
    rerender(<Icon name="pencil" />);
    expect(
      screen.getByRole("figure").classList.contains("icon--pencil")
    ).toBeTruthy();
  });

  it("renders icon text", () => {
    render(<Icon name="comment" text="Howdy there" />);
    expect(screen.getByText("Howdy there"));
  });

  it("adds a notification", () => {
    render(<Icon name="comment" notification={2} />);
    expect(screen.getByText(2));
  });
});
