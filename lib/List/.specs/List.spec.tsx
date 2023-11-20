import { describe, expect, it, vi } from "vitest";

import React from "react";

import {
  fireEvent,
  getByRole,
  getByText,
  getByTitle,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import List from "..";
import ListItem from "../ListItem";

describe("List", () => {
  const classList = [
    "gui-list--bordered-right",
    "gui-list--bordered-left",
    "gui-list--bordered",
  ];

  it("adds modifier classes", () => {
    const { rerender } = render(
      <List>
        <ListItem>I'm an item!</ListItem>
      </List>
    );

    classList.map((modifierClass) => {
      expect(screen.getByRole("list").classList.contains(modifierClass)).toBe(
        false
      );
    });

    rerender(
      <List bordered borderedLeft borderedRight>
        <ListItem>I'm an item!</ListItem>
      </List>
    );

    classList.map((modifierClass) => {
      expect(screen.getByRole("list").classList.contains(modifierClass)).toBe(
        true
      );
    });
  });

  it("displays sublists", () => {
    render(
      <List>
        <ListItem>
          I'm an item!
          <List>
            <ListItem>I'm a sub list</ListItem>
          </List>
        </ListItem>
      </List>
    );

    expect(screen.getByText("I'm an item!"));
    fireEvent.click(screen.getByTitle("Show sublist"));
    expect(screen.getByText("I'm a sub list"));
  });
});
