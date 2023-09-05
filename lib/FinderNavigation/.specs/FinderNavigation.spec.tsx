import { describe, expect, it } from "vitest";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import FinderNavigation from "..";

describe("FinderNavigation", () => {
  it("adds all the modifier classes", () => {
    const itemClasses = [
      "finder-item-active",
      "finder-item-disabled",
      "finder-item-hover-settings",
      "finder-item-selected",
    ];
    const contentClasses = [
      "finder-item-content-hidden",
      "finder-item-content-folder",
    ];

    const { rerender } = render(
      <FinderNavigation>
        <FinderNavigation.Item data-testid="finder-item" hoverSettings={false}>
          <FinderNavigation.ItemContent data-testid="finder-item-content">
            hello!
          </FinderNavigation.ItemContent>
        </FinderNavigation.Item>
      </FinderNavigation>
    );
    expect(screen.getByText("hello!"));
    itemClasses.map((modifierClass) => {
      expect(
        screen.getByTestId("finder-item").classList.contains(modifierClass)
      ).toBeFalsy();
    });
    contentClasses.map((modifierClass) => {
      expect(
        screen
          .getByTestId("finder-item-content")
          .classList.contains(modifierClass)
      ).toBeFalsy();
    });

    rerender(
      <FinderNavigation>
        <FinderNavigation.Item
          data-testid="finder-item"
          active
          disabled
          hoverSettings
          selected
        >
          <FinderNavigation.ItemContent
            data-testid="finder-item-content"
            hidden
            isFolder
          >
            hello!
          </FinderNavigation.ItemContent>
        </FinderNavigation.Item>
      </FinderNavigation>
    );
    itemClasses.map((modifierClass) => {
      expect(
        screen.getByTestId("finder-item").classList.contains(modifierClass)
      ).toBeTruthy();
    });
    contentClasses.map((modifierClass) => {
      expect(
        screen
          .getByTestId("finder-item-content")
          .classList.contains(modifierClass)
      ).toBeTruthy();
    });
  });

  it("can render a group title and meta", () => {
    render(
      <FinderNavigation>
        <FinderNavigation.Group title="Howdy" meta="partner">
          <FinderNavigation.Item>
            <FinderNavigation.ItemContent>hello!</FinderNavigation.ItemContent>
          </FinderNavigation.Item>
        </FinderNavigation.Group>
      </FinderNavigation>
    );
    expect(screen.getByText("hello!"));
    expect(screen.getByText("Howdy"));
    expect(screen.getByText("partner"));
  });
});
