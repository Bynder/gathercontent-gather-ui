import { describe, expect, it, vi } from "vitest";

import React from "react";

import { fireEvent, getByText, render, screen } from "@testing-library/react";
import Navigation from "..";
import { MenuItem } from "../../src/modules/menuItem/MenuItem";

describe("Navigation", () => {
  it("applies modifier classes", () => {
    const { rerender } = render(
      <Navigation>
        <MenuItem>Hello there</MenuItem>
      </Navigation>
    );

    expect(
      screen.getByRole("navigation").classList.contains("navigation--tabs")
    ).toEqual(false);
    expect(
      screen.getByRole("presentation").classList.contains("active")
    ).toEqual(false);
    expect(screen.getByRole("menuitem"));

    rerender(
      <Navigation tabs>
        <MenuItem active>Hello there</MenuItem>
      </Navigation>
    );

    expect(
      screen.getByRole("navigation").classList.contains("navigation--tabs")
    ).toEqual(true);
    expect(
      screen.getByRole("presentation").classList.contains("active")
    ).toEqual(true);
  });
});
