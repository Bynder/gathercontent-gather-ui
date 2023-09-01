import React from "react";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "..";

describe("Search", () => {
  it("does a search", () => {
    const onChange = vi.fn();
    render(
      <Search>
        <Search.Input onChange={onChange} />
        <Search.Body>
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

    fireEvent.click(screen.getByTitle("Open search"));

    fireEvent.change(screen.getByLabelText("Search"), {
      target: {
        value: "PLOP",
      },
    });
    expect(screen.getByText("I'm some options"));
    expect(screen.getByText("Waffles"));
    expect(screen.getByText("Pancakes"));

    fireEvent.click(screen.getByTitle("Clear search"));
    fireEvent.click(screen.getByTitle("Close search"));
  });
});
