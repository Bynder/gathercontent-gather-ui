import { describe, expect, it, vi } from "vitest";

import React from "react";

import { render, screen, fireEvent, getByText } from "@testing-library/react";

import Label from "../Label";

describe("Label", () => {
  it("adds modifier classes", () => {
    const parentClasses = ["is-disabled", "form-checkbox__label--hinted"];
    const classes = ["is-highlight", "is-active"];
    const { rerender } = render(<Label id="123" label="Its me, the label" />);

    let parent = screen.getByText("Its me, the label")
      .parentNode as HTMLElement;
    parentClasses.map((modifierClass) => {
      expect(parent.classList.contains(modifierClass)).toBe(false);
    });
    classes.map((modifierClass) => {
      expect(
        screen.getByText("Its me, the label").classList.contains(modifierClass)
      ).toBe(false);
    });

    rerender(
      <Label
        id="123"
        label="Its me, the label"
        active
        highlight
        hinted
        disabled
      />
    );

    parent = screen.getByText("Its me, the label").parentNode as HTMLElement;
    parentClasses.map((modifierClass) => {
      expect(parent.classList.contains(modifierClass)).toBe(true);
    });
    classes.map((modifierClass) => {
      expect(
        screen.getByText("Its me, the label").classList.contains(modifierClass)
      ).toBe(true);
    });
  });

  it("renders a subtitle", () => {
    render(
      <Label
        id="123"
        label="Its me, the label"
        subtitle="and its me, the subtitle"
      />
    );

    expect(screen.getByText("and its me, the subtitle"));
  });

  it("can render a button instead of a label", () => {
    const { rerender } = render(
      <Label id="123" label="I'm a label, not a button" />
    );
    expect(screen.getByText("I'm a label, not a button"));
    expect(screen.queryByRole("button")).toBeFalsy();

    rerender(
      <Label id="123" label="Teehee now im a button" overrideLabelDefault />
    );
    expect(screen.getByText("Teehee now im a button"));
    expect(screen.getByRole("button"));
  });
});
