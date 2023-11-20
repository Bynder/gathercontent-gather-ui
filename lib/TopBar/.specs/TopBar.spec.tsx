import { describe, expect, it, vi } from "vitest";

import React from "react";

import { render, screen } from "@testing-library/react";

import TopBar from "..";
import TopBarContent from "../TopBarContent";
import TopBarCell from "../TopBarCell";

describe("TopBar", () => {
  it("Renders children and adds the right classes to the right bits", () => {
    const { rerender } = render(
      <TopBar>
        <TopBarContent left>
          <TopBarCell>top bar left</TopBarCell>
        </TopBarContent>
        <TopBarContent right collapse>
          <TopBarCell bordered>top bar right</TopBarCell>
        </TopBarContent>
      </TopBar>
    );

    expect(screen.getByText("top bar left"));
    expect(screen.getByText("top bar right"));

    let topbar = screen.getByRole("banner");

    expect(topbar.querySelector(".gui-top-bar__content--right")).toBeTruthy();
    expect(topbar.querySelector(".gui-top-bar__content--left")).toBeTruthy();
    expect(
      topbar.querySelector(".gui-top-bar__content--collapse")
    ).toBeTruthy();
    expect(topbar.querySelector(".gui-top-bar__cell--bordered")).toBeTruthy();

    rerender(
      <TopBar fixed useDarkTheme>
        hi
      </TopBar>
    );
    topbar = screen.getByRole("banner");

    expect(topbar.classList.contains("gui-top-bar--dark")).toBeTruthy();
    expect(topbar.querySelector(".gui-top-bar__wrapper--fixed")).toBeTruthy();

    rerender(<TopBar useLightGreyTheme>hi</TopBar>);
    topbar = screen.getByRole("banner");
    expect(topbar.classList.contains("gui-top-bar-light-grey")).toBeTruthy();
  });
});
