import { describe, expect, it } from "vitest";

import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { DropdownMenu } from "..";

const mockDropdownMenuItems = [
  {
    name: "item 1",
    type: "link",
    href: "/",
    action: () => {},
  },
  {
    type: "separator",
  },
  {
    name: "item 2",
    action: () => {},
    active: true,
  },
  {
    type: "separator",
  },
  {
    name: "item 3",
    action: () => {},
    additional: "more info",
    type: "withAdditional",
  },
];

describe("DropdownMenu", () => {
  it("Clicking the dropdown menu button should toggle the menu", () => {
    render(
      <DropdownMenu
        items={mockDropdownMenuItems}
        data-testid="test-dropdown-menu"
      >
        Menu text
      </DropdownMenu>
    );

    fireEvent.click(screen.getByText("Menu text"));

    expect(
      screen.getByTestId("test-dropdown-menu").classList.contains("gui-open")
    ).toBeTruthy();
    expect(
      screen
        .getByTestId("test-dropdown-menu")
        .classList.contains("gui-is-active")
    ).toBeTruthy();

    fireEvent.click(screen.getByText("Menu text"));

    expect(
      screen.getByTestId("test-dropdown-menu").classList.contains("gui-open")
    ).toBeFalsy();
    expect(
      screen
        .getByTestId("test-dropdown-menu")
        .classList.contains("gui-is-active")
    ).toBeFalsy();
  });

  it("Should render an icon depending on the prop set", () => {
    const { rerender } = render(
      <DropdownMenu
        items={mockDropdownMenuItems}
        data-testid="test-dropdown-menu"
        downIcon
      >
        Menu text
      </DropdownMenu>
    );

    expect(screen.getByTitle("Down icon"));

    rerender(
      <DropdownMenu
        items={mockDropdownMenuItems}
        data-testid="test-dropdown-menu"
        caret
      >
        Menu text
      </DropdownMenu>
    );

    expect(screen.getByTitle("Caret icon"));
  });

  it("Setting the fullWidth prop to true should add a full-width class", () => {
    const classList = ["gui-full-width", "gui-dropup"];

    const { rerender } = render(
      <DropdownMenu
        items={mockDropdownMenuItems}
        data-testid="test-dropdown-menu"
      >
        Menu text
      </DropdownMenu>
    );

    classList.map((modifierClass) => {
      expect(
        screen
          .getByTestId("test-dropdown-menu")
          .classList.contains(modifierClass)
      ).toBe(false);
    });

    rerender(
      <DropdownMenu
        items={mockDropdownMenuItems}
        data-testid="test-dropdown-menu"
        fullWidth
        direction={"up"}
      >
        Menu text
      </DropdownMenu>
    );

    classList.map((modifierClass) => {
      expect(
        screen
          .getByTestId("test-dropdown-menu")
          .classList.contains(modifierClass)
      ).toBe(true);
    });
  });

  it("Should render items with modifier classes", () => {
    render(
      <DropdownMenu
        items={mockDropdownMenuItems}
        data-testid="test-dropdown-menu"
      >
        Menu text
      </DropdownMenu>
    );

    expect(
      screen
        .getAllByRole("listitem")[1]
        .classList.contains("gui-dropdown__separator")
    ).toBeTruthy();

    expect(
      screen.getAllByRole("link")[0].classList.contains("gui-dropdown__link")
    ).toBeTruthy();
  });

  it("Should render active items with a tick icon", () => {
    render(
      <DropdownMenu
        items={mockDropdownMenuItems}
        data-testid="test-dropdown-menu"
      >
        Menu text
      </DropdownMenu>
    );

    expect(
      screen.getByRole("figure").classList.contains("gui-icon--tick")
    ).toBeTruthy();
  });

  it("Should render an item with additional information", () => {
    render(
      <DropdownMenu
        items={mockDropdownMenuItems}
        data-testid="test-dropdown-menu"
      >
        Menu text
      </DropdownMenu>
    );

    expect(screen.getByText("more info")).toBeTruthy();
  });
});
