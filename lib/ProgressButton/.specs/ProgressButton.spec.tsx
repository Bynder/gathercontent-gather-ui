import { describe, expect, it, vi } from "vitest";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ProgressButton from "..";

describe("ProgressButton", () => {
  it("Renders a button that displays a spinner on click", () => {
    const clickHandler = vi.fn();
    render(
      <ProgressButton
        value="click me!"
        spinnerText="ive been clicked!"
        clickHandler={clickHandler}
      />
    );

    expect(screen.getByText("click me!"));
    fireEvent.click(screen.getByRole("button"));
    expect(screen.queryByText("click me!")).toEqual(null);
    expect(screen.getByText("ive been clicked!"));
    expect(clickHandler).toHaveBeenCalled();
    expect(screen.getByTitle("Loading"));
  });
});
