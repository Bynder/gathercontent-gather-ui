import React from "react";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import Search from "..";

describe("Search", () => {
  it("does a search", () => {
    const onChange = vi.fn();
    render(
      <Search>
        <Search.Input onChange={onChange} />
        <Search.Body data-testid="search-body">
          <Search.Options>I'm some options</Search.Options>
          <Search.List>
            <Search.ListItem title="bloop" subText="123 435">
              Waffles
            </Search.ListItem>
            <Search.ListItem title="blorp" subText="123 435">
              Pancakes
            </Search.ListItem>
          </Search.List>
        </Search.Body>
      </Search>
    );

    expect(
      screen
        .getByTestId("search-body")
        .classList.contains("gui-display-results")
    ).toEqual(false);
    fireEvent.click(screen.getByTitle("Open search"));

    fireEvent.change(screen.getByLabelText("Search"), {
      target: {
        value: "PLOP",
      },
    });
    expect(
      screen
        .getByTestId("search-body")
        .classList.contains("gui-display-results")
    ).toEqual(true);
    expect(screen.getByText("I'm some options"));
    expect(screen.getByText("Waffles"));
    expect(screen.getByText("Pancakes"));

    expect(screen.getByLabelText("Search").getAttribute("value")).toEqual(
      "PLOP"
    );
    fireEvent.click(screen.getByTitle("Clear search"));
    expect(screen.getByLabelText("Search").getAttribute("value")).toEqual("");

    fireEvent.click(screen.getByTitle("Close search"));
    expect(
      screen
        .getByTestId("search-body")
        .classList.contains("gui-display-results")
    ).toEqual(false);
  });
});
